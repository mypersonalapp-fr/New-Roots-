// The Roots — B0 « Passerelle » : revoir les fondamentaux A1 + A2 avant le B1.
// 7 étapes de 10 questions (cours, temps, exercices, CO, CE, expression écrite, expression orale) puis un bilan de 10 questions (70 % pour ouvrir B1).
import { UNLOCK_ALL_PREVIEW } from "../data/dev-config.js?v=20261028a";
import { B0_STEPS, B0_NAMES, B0_ICONS, B0_BILAN_REFS, B0_PASS, b0Load, b0Save } from "../data/b0-data.js?v=20261028a";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
function say(text) {
  if (!window.speechSynthesis || !text) return false;
  try { const u = new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g, "")); u.lang = "en-GB"; u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); return true; } catch (e) { return false; }
}
const BG = `<img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>`;

// Liste des 10 questions d'une étape (ou du bilan = étape 8), avec la bonne réponse repérée.
function items(step) {
  const mk = (q, intro, ctx) => {
    const type = q[3] || "qcm";
    const opts = type === "qcm" ? shuffle(q[1].map((label, i) => ({ label, ok: i === 0 }))) : q[1].map((label) => ({ label, ok: true }));
    return { q: q[0], opts, expl: q[2], type, intro, ctx, model: q[1][0] };
  };
  if (step === 8) return B0_BILAN_REFS.map(([s, n]) => { const P = B0_STEPS[s]; return mk(P.qs[n], "Bilan : questions mélangées des 7 étapes.", P.ctx ? P.ctx(n) : null); });
  const P = B0_STEPS[step];
  return P.qs.map((q, i) => mk(q, P.intro, P.ctx ? P.ctx(i) : null));
}

export function renderB0(root, { onExit } = {}) {
  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  const frame = (title, counter, inner, foot) => {
    const pct = counter ? Math.round((counter.cur / counter.total) * 100) : 0;
    el.innerHTML = `${BG}<div class="lc-wrap">
      <header class="lc-head"><button type="button" class="lc-back" id="b0Back">← Retour</button><div class="lc-head-title">${esc(title)}</div>${counter ? `<div class="lc-count">${counter.cur}/${counter.total}</div>` : `<div class="lc-count lc-count-ghost"></div>`}</header>
      ${counter ? `<div class="lc-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>` : ""}
      <main class="lc-main">${inner}</main>${foot || ""}</div>`;
  };
  const opened = (k) => UNLOCK_ALL_PREVIEW || k === 1 || (k === 8 ? [1,2,3,4,5,6,7].every((i) => (b0Load().scores || {})[i] != null) : (b0Load().scores || {})[k - 1] != null);

  // Présentation (comme A2.0) : personnage + objectifs, puis menu mosaïque des rubriques.
  const TILES = [null,
    { t: "Questions de cours", s: "Les Règles", c: "#22A06B", img: "grammar", em: "📘" },
    { t: "Les Temps", s: "Quand Les Utiliser", c: "#EF476F", em: "⏱️" },
    { t: "Exercices", s: "Sur Les Temps", c: "#16A34A", img: "exercises", em: "✏️" },
    { t: "Compréhension Orale", s: "Écouter", c: "#2F80ED", img: "listening", em: "🎧" },
    { t: "Compréhension Écrite", s: "Lire", c: "#0FA3A3", img: "reading", em: "📖" },
    { t: "Expression Écrite", s: "Écrire", c: "#5B5BD6", em: "✍️" },
    { t: "Expression Orale", s: "Prononcer Et Parler", c: "#D946EF", img: "speaking", em: "🎤" },
    { t: "Bilan", s: "70 % Pour Ouvrir B1", c: "#0EA5E9", em: "🧭" }];
  const tIcon = (m) => (m.img ? `<img class="lc-ic-img" src="assets/img/lesson/ic-${m.img}.webp" alt="" width="28" height="28" onerror="this.replaceWith(document.createTextNode('${m.em}'))"/>` : `<span class="lc-ph-ic">${m.em}</span>`);
  function intro() {
    frame("B0 · Passerelle", null, `
      <section class="lc-hero"><div class="lc-bubble">Let’s review!</div><img class="lc-hero-full" src="assets/img/characters/boy-3-intro.webp" alt="Personnage"/></section>
      <section class="lc-card lc-intro"><div class="lc-level">B0</div><h1>Passerelle A1 → A2 → B1</h1>
        <p class="lc-lead">Dans ce niveau, tu vas revoir :</p>
        <ul class="lc-goals"><li><span class="lc-check">✓</span>Les règles de grammaire de A1 et A2</li><li><span class="lc-check">✓</span>Les temps : quand les utiliser et les conjuguer</li><li><span class="lc-check">✓</span>Écouter, lire, écrire et parler</li></ul>
        <button type="button" class="lc-cta" id="b0Start">Commencer →</button></section>`);
    el.querySelector("#b0Back").onclick = () => onExit && onExit();
    el.querySelector("#b0Start").onclick = menu;
  }
  function menu() {
    const p = b0Load(), sc = p.scores || {};
    const tiles = [1,2,3,4,5,6,7,8].map((k) => {
      const m = TILES[k], open = opened(k), has = k === 8 ? p.bilan != null : sc[k] != null;
      return `<button type="button" class="lc-tile ${open ? "" : "lc-tile-off"}" data-k="${k}" style="--c:${m.c}" ${open ? "" : "disabled"}>
        <span class="lc-tn">${k}</span><span class="lc-tic">${tIcon(m)}</span><b>${esc(m.t)}</b><small>${esc(has ? "Meilleur score : " + (k === 8 ? p.bilan + " %" : sc[k] + "/10") : m.s)}</small>${has ? `<span class="lc-tdone">✓</span>` : ""}</button>`;
    }).join("");
    frame("B0 · Passerelle", { cur: 1, total: 8 }, `<section class="lc-mosaic">${tiles}</section>${p.passed ? `<p class="lc-fb lc-fb-ok" style="text-align:center">✔ B0 validé (${p.bilan} %). Le B1 est ouvert.</p>` : ""}`);
    el.querySelector("#b0Back").onclick = intro;
    el.querySelectorAll("[data-k]").forEach((b) => b.onclick = () => quiz(Number(b.dataset.k)));
  }

  function quiz(step) {
    const list = items(step), got = [];
    let i = 0;
    const draw = () => {
      const it = list[i];
      const ctx = it.ctx;
      const isAudio = ctx && ctx.k === "audio", isText = ctx && ctx.k === "text";
      const ctxHtml = isAudio
        ? `<div class="lc-player"><button type="button" class="lc-play" id="b0Play" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span></div><p class="q6-help" style="margin:4px 0 8px">${esc(ctx.t)} · touche ▶ pour écouter</p><p class="q6-hint" id="b0Tr" hidden>${esc(ctx.x)}</p>`
        : isText ? `<div class="lc-card" style="margin:0 0 10px"><b>${esc(ctx.t)}</b><p style="margin:6px 0 0;line-height:1.55">${esc(ctx.x)}</p></div>` : "";
      let body = "";
      if (it.type === "qcm") body = `<div class="lc-choices">${it.opts.map((o, k) => `<button type="button" class="lc-choice" data-k="${k}">${esc(o.label)}</button>`).join("")}</div>`;
      else if (it.type === "free") body = `<textarea class="lc-ta" id="b0Ta" rows="3" placeholder="Écris tes 3 phrases en anglais…"></textarea><button type="button" class="lc-sec-btn" id="b0Val" style="margin-top:8px" disabled>Valider ma réponse</button>`;
      else body = `<div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" class="lc-sec-btn" id="b0Model">🔊 Écouter le modèle</button><button type="button" class="lc-sec-btn" id="b0Val">🎤 J’ai dit la phrase à voix haute</button></div>`;
      frame(`${B0_ICONS[step]} ${step === 8 ? "Bilan B0" : "Étape " + step}`, { cur: i + 1, total: 10 },
        `<section class="lc-card"><p class="q6-help" style="margin:0 0 8px">${esc(it.intro)}</p>${ctxHtml}<p class="lc-lead" style="font-weight:700">${esc(it.q)}</p>${body}<p class="lc-fb" id="b0Fb" aria-live="polite"></p></section>`,
        `<footer class="lc-foot"><button type="button" class="lc-cta lc-next" id="b0Next" disabled>${i === 9 ? "Voir mon score" : "Question suivante →"}</button></footer>`);
      el.querySelector("#b0Back").onclick = () => menu();
      const next = el.querySelector("#b0Next"), fb = el.querySelector("#b0Fb");
      const finish = (ok, msg) => {
        got.push(!!ok); next.disabled = false;
        fb.className = "lc-fb " + (ok ? "lc-fb-ok" : "lc-fb-ko"); fb.textContent = msg;
        const tr = el.querySelector("#b0Tr"); if (tr) tr.hidden = false;
      };
      if (isAudio) el.querySelector("#b0Play").onclick = () => { if (!say(ctx.x)) fb.textContent = "Audio indisponible sur cet appareil."; };
      if (it.type === "qcm") el.querySelectorAll(".lc-choice").forEach((b) => b.onclick = () => {
        if (!next.disabled) return;
        const k = Number(b.dataset.k), ok = it.opts[k].ok;
        el.querySelectorAll(".lc-choice").forEach((c, j) => { c.disabled = true; if (it.opts[j].ok) c.classList.add("lc-right"); else if (j === k) c.classList.add("lc-wrong"); });
        finish(ok, (ok ? "✔ Juste. " : "✘ Pas tout à fait. ") + it.expl);
      });
      else if (it.type === "free") {
        const ta = el.querySelector("#b0Ta"), v = el.querySelector("#b0Val");
        ta.oninput = () => { v.disabled = ta.value.trim().split(/\s+/).filter(Boolean).length < 6; };
        v.onclick = () => { ta.disabled = true; v.disabled = true; finish(true, "Réponse enregistrée. Exemple : « " + it.model + " » " + it.expl); };
      } else {
        el.querySelector("#b0Model").onclick = () => say(it.model);
        el.querySelector("#b0Val").onclick = (e) => { e.target.disabled = true; finish(true, "Bien. Modèle : « " + it.model + " » " + it.expl); };
      }
      next.onclick = () => { if (i < 9) { i++; draw(); } else done(); };
    };
    const done = () => {
      const n = got.filter(Boolean).length, p = b0Load();
      p.scores = p.scores || {};
      if (step === 8) { const pct = n * 10; p.bilan = Math.max(p.bilan || 0, pct); p.last = pct; if (pct >= B0_PASS) p.passed = true; }
      else p.scores[step] = Math.max(p.scores[step] || 0, n);
      b0Save(p);
      if (step === 8) return result(n * 10);
      const ok = n * 10 >= B0_PASS;
      frame(`${B0_ICONS[step]} Étape ${step}`, null,
        `<section class="lc-card"><p class="lc-lead" style="font-weight:800;font-size:24px">${n} / 10</p><p class="lc-fb ${ok ? "lc-fb-ok" : "lc-fb-ko"}">${ok ? "✔ Étape réussie. Tu peux continuer." : "Sous " + B0_PASS + " %. Tu peux continuer, mais cette étape te sera proposée en rattrapage. Tu peux aussi la refaire maintenant."}</p></section>`,
        `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="b0Redo">↻ Refaire</button><button type="button" class="lc-cta lc-next" id="b0Go">${step === 7 ? "Aller au bilan →" : "Étape suivante →"}</button></footer>`);
      el.querySelector("#b0Back").onclick = () => menu();
      el.querySelector("#b0Redo").onclick = () => quiz(step);
      el.querySelector("#b0Go").onclick = () => (step === 7 ? quiz(8) : quiz(step + 1));
    };
    draw();
  }

  function result(pct) {
    const p = b0Load(), sc = p.scores || {}, ok = pct >= B0_PASS;
    const weak = [1,2,3,4,5,6,7].filter((k) => sc[k] != null && sc[k] * 10 < B0_PASS);
    frame("🏁 Bilan B0", null,
      `<section class="lc-card"><p class="lc-lead" style="font-weight:800;font-size:24px">${pct} %</p>
        <p class="lc-fb ${ok ? "lc-fb-ok" : "lc-fb-ko"}">${ok ? "✔ B0 validé. Le B1 est ouvert." : "Pas encore. Il faut " + B0_PASS + " % pour ouvrir le B1."}</p>
        ${ok || !weak.length ? "" : `<p class="q6-help" style="margin:10px 0 6px">Points à revoir :</p><div class="lc-choices">${weak.map((k) => `<button type="button" class="lc-choice" data-k="${k}">↻ Refaire l’étape ${k} · ${esc(B0_NAMES[k])} (${sc[k]}/10)</button>`).join("")}</div>`}</section>`,
      `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="b0Menu">Menu B0</button>${ok ? "" : `<button type="button" class="lc-cta lc-next" id="b0Again">Repasser le bilan</button>`}</footer>`);
    el.querySelector("#b0Back").onclick = () => menu();
    el.querySelector("#b0Menu").onclick = () => menu();
    const ag = el.querySelector("#b0Again"); if (ag) ag.onclick = () => quiz(8);
    el.querySelectorAll("[data-k]").forEach((b) => b.onclick = () => quiz(Number(b.dataset.k)));
  }

  intro();
}
