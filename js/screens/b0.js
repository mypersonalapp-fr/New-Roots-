// The Roots — B0 « Passerelle » : revoir les fondamentaux A1 + A2 avant le B1.
// 7 étapes de 12 questions (cours, temps, exercices, CO, CE, expression écrite, expression orale) puis un bilan de 12 questions (70 % pour ouvrir B1).
import { UNLOCK_ALL_PREVIEW } from "../data/dev-config.js?v=20261031w";
import { B0_STEPS, B0_NAMES, B0_ICONS, B0_BILAN_REFS, B0_PASS, b0Load, b0Save } from "../data/b0-data.js?v=20261031w";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
function say(text) {
  if (!window.speechSynthesis || !text) return false;
  try { const u = new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g, "")); u.lang = "en-GB"; u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); return true; } catch (e) { return false; }
}
const BG = `<img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>`;

// Liste des 12 questions d'une étape (ou du bilan = étape 8), avec la bonne réponse repérée.
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
        <span class="lc-tn">${k}</span><span class="lc-tic">${tIcon(m)}</span><b>${esc(m.t)}</b><small>${esc(has ? "Meilleur score : " + (k === 8 ? p.bilan : sc[k]) + " %" : m.s)}</small>${has ? `<span class="lc-tdone">✓</span>` : ""}</button>`;
    }).join("");
    frame("B0 · Passerelle", { cur: 1, total: 8 }, `<section class="lc-mosaic">${tiles}</section>${p.passed ? `<p class="lc-fb lc-fb-ok" style="text-align:center">✔ B0 validé (${p.bilan} %). Le B1 est ouvert.</p>` : ""}`);
    el.querySelector("#b0Back").onclick = intro;
    el.querySelectorAll("[data-k]").forEach((b) => b.onclick = () => quiz(Number(b.dataset.k)));
  }

  const AVA = "assets/img/characters/boy-3.webp", HERO = "assets/img/characters/boy-3-intro.webp";
  const chip = (k, pct, sub) => { const m = TILES[k]; return `<div class="lc-mchip" style="--c:${m.c}"><span class="lc-mchip-ic">${tIcon(m)}</span><div class="lc-mchip-tx"><b>${esc(m.t)}</b><small>${esc(sub || m.s)}</small></div><div class="lc-mchip-pg"><i><s style="width:${pct}%"></s></i></div></div>`; };
  const guide = (t) => `<div class="lc-guide"><img class="lc-ava lc-ava-md" src="${AVA}" alt=""/><div class="lc-gbub">${esc(t)}</div><div class="lc-path" aria-hidden="true"><i class="d"></i><u></u><i class="c"></i></div></div>`;
  const scene = (img) => `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/${img}.webp" style="display:block;margin:0 auto;width:auto;max-width:100%;max-height:185px;object-fit:contain" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>`;

  // Une étape = 2 pages de 5 questions (comme les pages de test A1/A2) : rubrique, personnage, image, questions.
  function quiz(step) {
    const list = items(step), N = list.length, got = new Array(N).fill(false);
    const POOL = [null, ["scene-a20-bridge", "scene-a20-basic-verbs", "scene-a20-city-verbs", "scene-a21-day"], ["scene-a20-time", "scene-a21-now", "scene-a23-moment", "scene-a24-plan"], ["scene-a20-daily-verbs", "scene-a21-morning", "scene-a21-work", "scene-a21-evening"], ["exam-a1-listening", "scene-a21-commute", "scene-a212-airport", "scene-a29-message"], ["exam-a1-reading", "scene-a22-journey", "scene-a212-hotel", "scene-a29-office"], ["exam-a1-writing", "scene-a29-phrases", "scene-a211-expressions", "scene-a24-weekend"], ["exam-a1-speaking", "scene-a210-invite", "scene-a211-agree", "scene-a210-reactions"], ["scene-a20-basic-verbs", "scene-a20-bridge", "scene-a24-decision", "scene-a211-plans"]];
    const BUB = ["", "Révisons les règles !", "Quel temps choisir ?", "Conjugue avec moi !", "Écoute bien !", "Lis bien !", "Écris avec moi !", "Parle avec moi !", "Dernier test !"];
    const hist = [];
    const draw = (from, size = (step === 4 || step === 5 ? 3 : 4), back) => {
      if (!back) hist.push(from);
      while (size > 2 && list.length - (from + size) === 1) size--; // pas de page orpheline à 1 question
      let part = list.slice(from, from + size);
      const c0 = part[0].ctx ? part[0].ctx.t : ""; part = part.filter((it) => (it.ctx ? it.ctx.t : "") === c0); // une page = un seul audio / texte
      const last = from + part.length >= N, sel = {}, txt = {};
      const ctx = part[0].ctx;
      const ctxHtml = ctx && ctx.k === "audio"
        ? `<div class="lc-player"><button type="button" class="lc-play" id="b0Play" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span></div><p class="q6-help" style="margin:4px 0 8px">${esc(ctx.t)} · touche ▶ pour écouter</p><p class="q6-hint" id="b0Tr" hidden>${esc(ctx.x)}</p>`
        : ctx && ctx.k === "text" ? `<div class="lc-card" style="margin:0 0 10px"><b>${esc(ctx.t)}</b><p style="margin:6px 0 0;line-height:1.55">${esc(ctx.x)}</p></div>` : "";
      const qh = part.map((it, j) => {
        const n = from + j + 1, long = it.opts.some((o) => o.label.length > 22);
        let body;
        if (it.type === "qcm") body = `<div class="q6-o" style="${long ? "flex-direction:column" : ""}">${it.opts.map((o, k) => `<button type="button" class="lc-choice q6-c" data-j="${j}" data-k="${k}">${esc(o.label)}</button>`).join("")}</div>`;
        else if (it.type === "free") body = `<textarea class="lc-ta" data-j="${j}" rows="2" placeholder="Écris tes 3 phrases en anglais…"></textarea>`;
        else body = `<div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" class="lc-sec-btn" data-model="${j}">🔊 Écouter le modèle</button><button type="button" class="lc-sec-btn" data-said="${j}">🎤 J’ai dit la phrase</button></div>`;
        return `<div class="q6-q" data-j="${j}"><p class="q6-p"><span>${n}</span>${esc(it.q)}</p>${body}<p class="q6-hint" data-fb="${j}" hidden></p></div>`;
      }).join("");
      frame(`${step === 8 ? "Bilan B0" : "B0 · Étape " + step}`, { cur: from + part.length, total: N },
        chip(step, Math.round((from / N) * 100), `Questions ${from + 1} à ${from + part.length} sur ${N}`) + guide(BUB[step]) +
        `<section class="lc-card q6" style="display:flex;flex-direction:column;gap:12px">${ctx && ctx.k === "text" ? "" : scene(POOL[step][(hist.length - 1) % 4])}${ctxHtml}<div class="q6-list" style="display:flex;flex-direction:column;gap:12px">${qh}</div><p class="lc-fb q6-fb" id="b0Fb" aria-live="polite"></p><button type="button" class="lc-cta q6-go" id="b0Check" disabled>Vérifier</button></section>`,
        `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="b0Prev">← Précédent</button><button type="button" class="lc-cta lc-next" id="b0Next" disabled>${last ? "Voir mon score" : "Suite →"}</button></footer>`);
      const main = el.querySelector(".lc-main"); if (main) main.scrollTop = 0;
      // Si ça déborde, on enlève une question de la page (elle passe à la page suivante).
      const imgs = [...el.querySelectorAll(".lc-exhero img")];
      const settle = () => { const m = el.querySelector(".lc-main"); if (m && m.scrollHeight - m.clientHeight > 2 && part.length > 2 && !Object.keys(sel).length && !Object.keys(txt).length) { hist.pop(); draw(from, part.length - 1); } };
      Promise.all(imgs.map((im) => (im.complete ? 1 : new Promise((r) => { im.onload = im.onerror = r; })))).then(() => requestAnimationFrame(settle));
      el.querySelector("#b0Back").onclick = () => menu();
      el.querySelector("#b0Prev").onclick = () => { hist.pop(); if (!hist.length) menu(); else draw(hist[hist.length - 1], undefined, true); };
      const check = el.querySelector("#b0Check"), next = el.querySelector("#b0Next");
      let locked = false;
      const ready = () => part.every((it, j) => it.type === "qcm" ? sel[j] !== undefined : it.type === "free" ? (txt[j] || "").trim().split(/\s+/).filter(Boolean).length >= 6 : sel[j] === true);
      const upd = () => { const n = part.filter((it, j) => it.type === "qcm" ? sel[j] !== undefined : it.type === "free" ? (txt[j] || "").trim().split(/\s+/).filter(Boolean).length >= 6 : sel[j] === true).length; check.disabled = locked || n < part.length; check.textContent = n < part.length ? `Vérifier (${n}/${part.length} répondues)` : "Vérifier ✓"; };
      const pl = el.querySelector("#b0Play"); if (pl) pl.onclick = () => { if (!say(ctx.x)) el.querySelector("#b0Fb").textContent = "Audio indisponible sur cet appareil."; };
      el.querySelectorAll(".q6-c").forEach((bt) => bt.onclick = () => { if (locked) return; const j = +bt.dataset.j; sel[j] = +bt.dataset.k; el.querySelectorAll(`.q6-c[data-j="${j}"]`).forEach((c) => c.classList.toggle("lc-sel", c === bt)); upd(); });
      el.querySelectorAll("textarea[data-j]").forEach((ta) => ta.oninput = () => { txt[+ta.dataset.j] = ta.value; upd(); });
      el.querySelectorAll("[data-model]").forEach((bt) => bt.onclick = () => say(part[+bt.dataset.model].model));
      el.querySelectorAll("[data-said]").forEach((bt) => bt.onclick = () => { if (locked) return; sel[+bt.dataset.said] = true; bt.classList.add("lc-sel"); upd(); });
      upd();
      check.onclick = () => {
        locked = true; check.style.display = "none"; next.disabled = false;
        let good = 0;
        part.forEach((it, j) => {
          let ok = true, msg = "";
          if (it.type === "qcm") {
            ok = it.opts[sel[j]].ok;
            el.querySelectorAll(`.q6-c[data-j="${j}"]`).forEach((c, k) => { c.disabled = true; c.classList.remove("lc-sel"); if (it.opts[k].ok) c.classList.add("lc-right"); else if (k === sel[j]) c.classList.add("lc-wrong"); });
            msg = (ok ? "✔ " : "✘ ") + it.expl;
          } else {
            const ta = el.querySelector(`textarea[data-j="${j}"]`); if (ta) ta.disabled = true;
            msg = "Exemple : « " + it.model + " » " + it.expl;
          }
          if (ok) good++;
          got[from + j] = !!ok;
          const f = el.querySelector(`[data-fb="${j}"]`); f.hidden = false; f.textContent = msg;
        });
        const tr = el.querySelector("#b0Tr"); if (tr) tr.hidden = false;
        const fb = el.querySelector("#b0Fb"); fb.className = "lc-fb q6-fb " + (good >= 4 ? "lc-fb-ok" : "lc-fb-ko"); fb.textContent = `${good}/5 sur cette page.`;
      };
      next.onclick = () => (last ? done() : draw(from + part.length));
    };
    const done = () => {
      const n = got.filter(Boolean).length, p = b0Load();
      p.scores = p.scores || {};
      if (step === 8) { const pct = Math.round((n / N) * 100); p.bilan = Math.max(p.bilan || 0, pct); p.last = pct; if (pct >= B0_PASS) p.passed = true; }
      else p.scores[step] = Math.max(p.scores[step] || 0, Math.round((n / N) * 100));
      b0Save(p);
      if (step === 8) return result(Math.round((n / N) * 100));
      const ok = Math.round((n / N) * 100) >= B0_PASS;
      frame(`B0 · Étape ${step}`, null,
        `<section class="lc-hero"><div class="lc-bubble">${ok ? "Well done!" : "Keep going!"}</div><img class="lc-hero-full" src="${HERO}" alt="Personnage"/></section>
         <section class="lc-card lc-intro"><div class="lc-level">${n} / ${N}</div><h1>${esc(TILES[step].t)}</h1>
         <p class="lc-fb ${ok ? "lc-fb-ok" : "lc-fb-ko"}" style="text-align:center">${ok ? "✔ Étape réussie. Tu peux continuer." : "Sous " + B0_PASS + " %. Tu peux continuer : cette étape te sera proposée en rattrapage. Tu peux aussi la refaire."}</p>
         <button type="button" class="lc-cta" id="b0Go">${step === 7 ? "Aller au bilan →" : "Étape suivante →"}</button>
         <button type="button" class="lc-sec-btn" id="b0Redo" style="width:100%;margin-top:8px">↻ Refaire cette étape</button></section>`);
      el.querySelector("#b0Back").onclick = () => menu();
      el.querySelector("#b0Redo").onclick = () => quiz(step);
      el.querySelector("#b0Go").onclick = () => (step === 7 ? quiz(8) : quiz(step + 1));
    };
    draw(0);
  }

  function result(pct) {
    const p = b0Load(), sc = p.scores || {}, ok = pct >= B0_PASS;
    const weak = [1,2,3,4,5,6,7].filter((k) => sc[k] != null && sc[k] < B0_PASS);
    frame("Bilan B0", null,
      `<section class="lc-hero"><div class="lc-bubble">${ok ? "Congratulations!" : "Almost there!"}</div><img class="lc-hero-full" src="${HERO}" alt="Personnage"/></section>
       <section class="lc-card lc-intro"><div class="lc-level">${pct} %</div><h1>${ok ? "B0 validé" : "Pas encore"}</h1>
       <p class="lc-fb ${ok ? "lc-fb-ok" : "lc-fb-ko"}" style="text-align:center">${ok ? "✔ Le B1 est ouvert." : "Il faut " + B0_PASS + " % pour ouvrir le B1."}</p>
       ${ok || !weak.length ? "" : `<p class="lc-lead">Points à revoir :</p><div class="lc-choices">${weak.map((k) => `<button type="button" class="lc-choice" data-k="${k}">↻ ${esc(TILES[k].t)} (${sc[k]} %)</button>`).join("")}</div>`}
       ${ok ? "" : `<button type="button" class="lc-cta" id="b0Again" style="margin-top:10px">Repasser le bilan</button>`}
       <button type="button" class="lc-sec-btn" id="b0Menu" style="width:100%;margin-top:8px">Menu B0</button></section>`);
    el.querySelector("#b0Back").onclick = () => menu();
    el.querySelector("#b0Menu").onclick = () => menu();
    const ag = el.querySelector("#b0Again"); if (ag) ag.onclick = () => quiz(8);
    el.querySelectorAll("[data-k]").forEach((b) => b.onclick = () => quiz(Number(b.dataset.k)));
  }

  intro();
}
