// The Roots — B (B1.0 / B1.1) : accès aux ateliers de Grammaire en dialogue (G1, G2…).
// Les ateliers sont des pages autonomes (b1-0/g1.html, b1-0/g2.html) ouvertes en plein écran.
import "../data/roots-ai-url.js?v=20261031a";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const BG = `<img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>`;
const prog = (k) => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } };

// Statut de chaque atelier, lu dans la progression enregistrée par les pages.
export function b1Status() {
  const g1 = prog("g1-chat-progress-v1"), g2 = prog("g2-chat-progress-v1");
  const g1ok = (g1.hist || []).some((h) => h && h.score != null && h.score >= 12);
  const g2ok = !!(g2.ctl && g2.ctl.valid);
  return { g1: { parts: (g1.done || []).length, total: 8, ok: g1ok }, g2: { parts: (g2.done || []).length, total: 9, ok: g2ok }, done: (g1ok ? 1 : 0) + (g2ok ? 1 : 0), total: 2 };
}

const WORKSHOPS = [
  { k: "g1", n: "G1", t: "The Foundations of Real English", s: "Les fondamentaux pour parler un anglais naturel", url: "b1-0/g1.html?v=20261031a" },
  { k: "g2", n: "G2", t: "Du choix de la forme à une communication précise", s: "Present Simple vs Present Continuous", url: "b1-0/g2.html?v=20261031a" },
];

export function renderB1(root, { onExit } = {}) {
  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  const paint = () => {
    const S = b1Status();
    const rows = WORKSHOPS.map((w) => { const st = S[w.k]; return `<button type="button" class="b1-ws" data-w="${w.k}"><span class="b1-n">${w.n}</span><span class="b1-tx"><b>${esc(w.t)}</b><small>${esc(w.s)}</small></span><span class="b1-st">${st.ok ? "✓ validé" : st.parts ? `${st.parts}/${st.total}` : "Commencer"}</span></button>`; }).join("");
    el.innerHTML = `${BG}<div class="lc-wrap">
      <header class="lc-head"><button type="button" class="lc-back" id="b1Back">← Retour</button><div class="lc-head-title">B · Intermédiaire</div></header>
      <main class="lc-main">
        <section class="lc-card"><div class="b1-path"><span class="b1-p on">B1.0</span><span class="b1-ar">→</span><span class="b1-p off">B1.1 · bientôt</span></div>
          <h1 style="margin:10px 0 2px">B1.0 · Grammaire</h1><p class="lc-lead">🏫 En classe, avec ton professeur : tu observes, tu réponds, tu es corrigé sur tes vraies phrases.</p>
          <div class="b1-list">${rows}</div>
          <p style="font-size:12px;opacity:.75;margin:10px 0 0">Les autres ateliers du B1.0 arrivent. Le passage en B1.1 s'ouvrira quand tous seront validés.</p>
        </section></main></div>
      <style>.b1-path{display:flex;align-items:center;gap:8px;font-weight:800;font-size:13px}.b1-p{padding:4px 12px;border-radius:99px;background:#8B5CF6;color:#fff}.b1-p.off{background:rgba(120,120,140,.25);color:inherit;opacity:.7}
      .b1-list{display:flex;flex-direction:column;gap:10px;margin-top:12px}.b1-ws{display:flex;align-items:center;gap:12px;text-align:left;border:0;border-radius:14px;padding:12px;background:rgba(139,92,246,.12);color:inherit;font:inherit;cursor:pointer}
      .b1-n{flex:none;width:42px;height:42px;border-radius:12px;background:#8B5CF6;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}.b1-tx{flex:1;min-width:0;display:flex;flex-direction:column}.b1-tx small{opacity:.75}.b1-st{flex:none;font-weight:800;font-size:12px}
      .b1-frame{position:fixed;inset:0;z-index:9999;width:100%;height:100%;border:0;background:#0d1226}</style>`;
    el.querySelector("#b1Back").onclick = () => onExit && onExit();
    el.querySelectorAll("[data-w]").forEach((b) => (b.onclick = () => open(WORKSHOPS.find((w) => w.k === b.dataset.w))));
  };
  const open = (w) => {
    const f = document.createElement("iframe");
    f.className = "b1-frame"; f.src = w.url; f.title = w.t;
    const close = (e) => { if (e && e.data && e.data.roots === "exit") { window.removeEventListener("message", close); f.remove(); paint(); } };
    window.addEventListener("message", close);
    document.body.appendChild(f);
  };
  paint();
}
