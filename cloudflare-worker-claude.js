// THE ROOTS — Relais "Correction des productions" vers Claude (Cloudflare Worker)
//
// Ce programme tourne sur Cloudflare, PAS dans l'appli. La clé Anthropic reste ici
// (jamais dans le code de l'appli, jamais sur GitHub).
//
// À faire (par la personne qui installe) :
//  1. Créer la clé sur console.anthropic.com (Settings → API keys) et fixer une limite de dépense mensuelle (Billing → Limits).
//  2. Cloudflare → Workers → Create → coller ce fichier.
//  3. Settings → Variables and Secrets :
//       ANTHROPIC_API_KEY  (type "Secret")   : la clé
//       CLAUDE_MODEL       (facultatif)      : par défaut "claude-sonnet-5-5"
//       ALLOWED_ORIGIN     (facultatif)      : par défaut https://mypersonalapp-fr.github.io
//  4. Donner l'adresse du Worker (https://xxx.workers.dev) à Ashley/Claude. Jamais la clé.
//
// Contrat : POST { "prompt": "..." }  →  200 { "items": [ ... ] }  (le JSON de correction renvoyé par le modèle)

const DEFAULT_MODEL = "claude-sonnet-5-5";
const DEFAULT_ORIGIN = "https://mypersonalapp-fr.github.io";
const MAX_PROMPT = 14000;     // caractères
const MAX_OUTPUT_TOKENS = 2500;
const MUST_START = ["Tu es le professeur d’anglais de l’application The Roots", "Tu es professeur d’anglais (niveau B1.0"]; // empêche l'usage du relais pour autre chose

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || DEFAULT_ORIGIN;
    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ error: "method" }, 405);
    const reqOrigin = request.headers.get("Origin");
    if (reqOrigin && reqOrigin !== origin && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(reqOrigin)) return json({ error: "origin" }, 403);
    if (!env.ANTHROPIC_API_KEY) return json({ error: "no_key" }, 500);

    let body;
    try { body = await request.json(); } catch { return json({ error: "bad_json" }, 400); }
    const prompt = String(body && body.prompt || "");
    if (!MUST_START.some((m) => prompt.startsWith(m)) || prompt.length > MAX_PROMPT) return json({ error: "bad_prompt" }, 400);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: env.CLAUDE_MODEL || DEFAULT_MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!r.ok) return json({ error: "upstream", status: r.status }, 502);
    const data = await r.json();
    const text = (data.content || []).map((c) => c.text || "").join("");
    const a = text.indexOf("{"), b = text.lastIndexOf("}");
    if (a < 0 || b < a) return json({ error: "no_json" }, 502);
    try { return json(JSON.parse(text.slice(a, b + 1))); } catch { return json({ error: "bad_model_json" }, 502); }
  },
};
