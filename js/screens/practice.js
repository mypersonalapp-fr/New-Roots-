// The Roots — pratique du vocabulaire : 5 séries par page de mots (associer, compléter, remettre en ordre, produire, mini-défi).
// Tout est généré à partir des mots et des exemples de la page ; l'élève tape, touche et dit — il ne se contente pas de choisir.
import { createVoice } from "./voice.js?v=20261023ad";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = (t) => String(t || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"“”]/g, "").replace(/\s+/g, " ").trim();
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const simple = (w) => !/[\/?…(),.!]/.test(w) && w.trim().split(/\s+/).length <= 2;
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// ---------- construction des séries ----------
import { flagOf } from "../data/flags.js?v=20261023ad";
export function buildPractice(p, sub = (s) => s) {
  const words = p.words.filter((w) => w[0] && w[1]);
  const exs = (p.examples || []).map(([en, fr]) => [sub(en), sub(fr)]);
  const stages = [];

  // 1 · Associer (jusqu'à 7 paires : la page se remplit avec les mots de la leçon)
  const pairs = shuffle(words).slice(0, 6);
  stages.push({ type: "match", title: "Relie chaque mot à son sens", hint: "Touche un mot anglais, puis sa traduction.", pairs });

  // 2 · Compléter (3 items) : trou dans une phrase d'exemple si possible, sinon indice français → l'élève tape le mot
  const cands = [];
  for (const [en, fr] of exs) for (const [w] of words) {
    if (!simple(w)) continue;
    const m = new RegExp(`\\b(${reEsc(w)}(?:s|es)?)\\b`, "i").exec(en);
    if (m) { cands.push({ kind: "sentence", en, fr, answer: m[1], base: w }); break; }
  }
  const used = new Set(cands.map((c) => c.base));
  for (const [w, fr] of shuffle(words)) {
    if (cands.length >= 3) break;
    if (!simple(w) || used.has(w)) continue;
    cands.push({ kind: "cue", fr, answer: w, base: w }); used.add(w);
  }
  stages.push({ type: "fill", title: "Écris le mot qui manque", items: cands.slice(0, 3) });

  // 3 · Remettre en ordre (les exemples de la page)
  stages.push({ type: "order", title: "Remets les mots dans l'ordre", items: exs.slice(0, 2).map(([en, fr]) => ({ en, fr })) });

  // 4 · Produire (écrire puis dire)
  const two = shuffle(words.filter((w) => simple(w[0]))).slice(0, 2).map((w) => w[0]);
  stages.push({ type: "produce", title: "À toi ! Écris ta phrase", need: two, model: exs[0] ? exs[0][0] : "", modelFr: exs[0] ? exs[0][1] : "" });

  // 5 · Mini-défi : QCM mixtes ; les mots ratés avant reviennent en priorité
  const flagged = words.filter((w) => flagOf(w[0]));
  if (/^Les (pays|nationalités)$/.test(p.title) && flagged.length >= 4) stages.push({ type: "flag", title: "Trouve le drapeau", words: flagged });
  stages.push({ type: "challenge", title: "Mini-défi", words });
  return stages;
}

// ---------- affichage ----------
export function mountPractice(host, stages, { speak, onDone, startAt = 0, scene = "", icon = "✏️" } = {}) {
  const missed = new Set();
  let si = startAt, score = 0, total = 0;

  const sceneBox = (st) => !(st.type === "fill" || st.type === "produce") ? "" : `<div class="pr-scene"><span>${esc(icon)}</span>${scene ? `<img src="assets/img/lesson/${esc(scene)}.webp?v=20261023ad" alt="" loading="lazy" onerror="this.remove()"/>` : ""}</div>`;
  const shell = (st, inner, cnt = "") => {
    host.innerHTML = `<div class="pr-top"><span>Pratique ${si + 1}/${stages.length}</span><span>${esc(cnt)}</span></div>
      <div class="pr-bar"><i style="width:${Math.round(((si + 0.5) / stages.length) * 100)}%"></i></div>
      <h2 class="pr-h">${esc(st.title)}</h2>${sceneBox(st)}${inner}`;
  };
  const next = () => { si++; if (si >= stages.length) finish(); else run(); };
  function finish() {
    host.innerHTML = `<div class="pr-done"><div class="pr-big">🎉</div><b>Pratique terminée !</b><p>${score}/${total} réponses justes${missed.size ? ` · à revoir : ${[...missed].slice(0, 4).map(esc).join(", ")}` : ""}</p>
      <button type="button" class="lc-sec-btn" id="prAgain">Recommencer</button></div>`;
    host.querySelector("#prAgain").onclick = () => { si = 0; score = 0; total = 0; missed.clear(); run(); };
    onDone && onDone({ score, total });
  }
  const goBtn = (label = "Continuer") => `<button type="button" class="lc-cta pr-go" id="prGo" disabled>${label}</button>`;
  const fbEl = () => host.querySelector("#prFb");
  const say = (m, ok) => { const f = fbEl(); f.textContent = m; f.className = "lc-fb " + (ok ? "lc-fb-ok" : "lc-fb-ko"); };

  function run() {
    const st = stages[si];
    ({ match: runMatch, fill: runFill, order: runOrder, produce: runProduce, challenge: runChallenge, flag: runFlag }[st.type])(st);
  }

  // 1 — associer
  function runMatch(st) {
    const L = shuffle(st.pairs.map((p, i) => ({ t: p[0], i, side: "en" }))), R = shuffle(st.pairs.map((p, i) => ({ t: p[1], i, side: "fr" })));
    const cell = (c) => `<button type="button" class="lc-choice pr-cell" data-i="${c.i}" data-s="${c.side}">${esc(c.t)}</button>`;
    shell(st, `<p class="hint pr-hint">${esc(st.hint)}</p><div class="pr-pairs"><div>${L.map(cell).join("")}</div><div>${R.map(cell).join("")}</div></div><p class="lc-fb" id="prFb" aria-live="polite"></p>${goBtn()}`, `0/${st.pairs.length}`);
    const prFit = () => { const m = document.querySelector(".lc-main"), pp = document.querySelector(".pr-pairs"); if (!m || !pp) return; pp.querySelectorAll(".pr-cell").forEach((b) => { b.style.minHeight = ""; }); const ft0 = document.querySelector(".lc-foot"); if (ft0 && m.lastElementChild.getBoundingClientRect().bottom > ft0.getBoundingClientRect().top - 6) { pp.querySelectorAll(".pr-cell").forEach((b) => { b.style.minHeight = "34px"; b.style.padding = "3px 9px"; b.style.fontSize = "13px"; b.style.lineHeight = "1.18"; }); pp.querySelectorAll(":scope > div").forEach((d) => { d.style.gap = "5px"; }); } else { const ft = document.querySelector(".lc-foot"), cs = pp.querySelectorAll(".pr-cell"), rows = Math.max(1, Math.ceil(cs.length / 2)); if (ft) { const spare = Math.floor(ft.getBoundingClientRect().top - m.lastElementChild.getBoundingClientRect().bottom - 14), ex = Math.min(22, Math.floor(spare / rows)); if (ex > 2) { const h0 = [...cs].map((b) => b.offsetHeight); cs.forEach((b, i) => { b.style.minHeight = (h0[i] + ex) + "px"; }); if (m.lastElementChild.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 8) cs.forEach((b) => { b.style.minHeight = ""; }); } } } }; setTimeout(prFit, 120); setTimeout(prFit, 420);
    let sel = null, found = 0;
    host.querySelectorAll(".pr-cell").forEach((b) => b.addEventListener("click", () => {
      if (b.disabled) return;
      if (b.dataset.s === "en" && speak) speak(st.pairs[+b.dataset.i][0]);
      if (!sel || sel.dataset.s === b.dataset.s) { host.querySelectorAll(".pr-cell.lc-sel").forEach((x) => x.classList.remove("lc-sel")); sel = b; b.classList.add("lc-sel"); return; }
      total++;
      if (sel.dataset.i === b.dataset.i) {
        score++; found++; host.querySelector('.pr-top span:last-child').textContent = `${found}/${st.pairs.length}`;
        [sel, b].forEach((x) => { x.disabled = true; x.classList.remove("lc-sel"); x.classList.add("lc-right"); });
        say(found === st.pairs.length ? "✔ Toutes les paires sont trouvées !" : `✔ ${found} paire${found > 1 ? "s" : ""} trouvée${found > 1 ? "s" : ""}`, true);
        if (found === st.pairs.length) host.querySelector("#prGo").disabled = false;
      } else {
        missed.add(st.pairs[+(sel.dataset.s === "en" ? sel : b).dataset.i][0]);
        const bad = [sel, b]; bad.forEach((x) => x.classList.add("lc-wrong")); setTimeout(() => bad.forEach((x) => x.classList.remove("lc-wrong", "lc-sel")), 500);
        say("Pas cette paire, réessaie.", false);
      }
      sel = null;
    }));
    host.querySelector("#prGo").onclick = next;
  }

  // Trouve le drapeau : le drapeau s'affiche, l'apprenti choisit le mot ANGLAIS.
  function runFlag(st) {
    const picks = shuffle(st.words).slice(0, 5); let k = 0;
    const draw = () => {
      const [en] = picks[k], opts = shuffle([en, ...shuffle(st.words.map((w) => w[0]).filter((x) => x !== en)).slice(0, 3)]); let wrong = false;
      shell(st, `<p class="hint pr-hint">${k + 1} / ${picks.length} · Choisis le mot en anglais.</p>
        <div class="pr-card"><b class="pr-fr" style="font-size:64px;line-height:1.1">${flagOf(en)}</b></div>
        <div class="lc-choices">${opts.map((o) => `<button type="button" class="lc-choice" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" id="prFb" aria-live="polite"></p>${goBtn(k + 1 >= picks.length ? "Terminer" : "Suivant")}`, `${k + 1}/${picks.length}`);
      host.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
        if (b.dataset.o === en) {
          total++; if (!wrong) score++; else missed.add(en);
          host.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", x.dataset.o === en); });
          if (speak) speak(en); say("✔ Bonne réponse !", true); host.querySelector("#prGo").disabled = false;
        } else { wrong = true; b.classList.add("lc-wrong"); b.disabled = true; say("Pas tout à fait, réessaie.", false); }
      }));
      host.querySelector("#prGo").onclick = () => { if (++k >= picks.length) next(); else draw(); };
    };
    draw();
  }

  // 2 — compléter (l'élève tape) : trois phrases par écran
  function runFill(st) {
    let k = 0;
    const draw = () => {
      const grp = st.items.slice(k, k + 3).map((it, g) => ({ it, g, tries: 0, done: false }));
      const card = (it) => it.kind === "sentence"
        ? `<div class="pr-card">${esc(it.en).replace(new RegExp(esc(reEsc(it.answer)), "i"), '<span class="pr-gap">＿＿＿＿</span>')}<small>${esc(it.fr)}</small></div>`
        : `<div class="pr-card"><small>Comment dit-on en anglais ?</small><b class="pr-fr">${esc(it.fr)}</b></div>`;
      const blocks = grp.map((x) => `${card(x.it)}<input class="pr-in" data-g="${x.g}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Écris ici…"/>`).join("");
      shell(st, `<p class="hint pr-hint">Tape le mot en anglais.</p>${blocks}
        <p class="lc-fb" id="prFb" aria-live="polite"></p><div class="pr-row"><button type="button" class="lc-sec-btn" id="prHint">Indice</button><button type="button" class="lc-cta pr-go" id="prGo">Valider</button></div>`, `${Math.min(k + grp.length, st.items.length)}/${st.items.length}`);
      const ins = [...host.querySelectorAll(".pr-in")], go = host.querySelector("#prGo");
      const mainEl = host.closest(".lc-main") || document.querySelector(".lc-main");
      const vp = document.querySelector('meta[name="viewport"]'), vp0 = vp ? vp.content : "";
      const zoomLock = (on) => { if (vp) vp.content = on ? vp0.replace(/,?\s*maximum-scale=[^,]*/, "") + ", maximum-scale=1" : vp0; };
      const kbOn = () => { zoomLock(true); if (mainEl) { mainEl.classList.add("lc-kb", "lc-kbp"); setTimeout(() => { window.scrollTo(0, 0); mainEl.scrollTop = 0; }, 60); } };
      ins.forEach((i) => { i.addEventListener("focus", kbOn); i.addEventListener("blur", () => setTimeout(() => { if (!ins.includes(document.activeElement)) { zoomLock(false); if (mainEl) mainEl.classList.remove("lc-kb", "lc-kbp"); } }, 80)); });
      ins[0].focus(); kbOn();
      const allDone = () => grp.every((x) => x.done);
      const label = () => (k + grp.length >= st.items.length ? "Continuer" : "Suivant");
      host.querySelector("#prHint").onclick = () => { const x = grp.find((y) => !y.done) || grp[0]; say(`Commence par « ${x.it.answer[0]} » · ${x.it.answer.length} lettres`, false); };
      go.onclick = () => {
        if (allDone()) { k += grp.length; if (k >= st.items.length) next(); else draw(); return; }
        let wrongN = 0, rightN = 0, any = false;
        grp.forEach((x) => {
          if (x.done) return; const inp = ins[x.g]; if (!inp.value.trim()) return; any = true; x.tries++;
          if (norm(inp.value) === norm(x.it.answer)) {
            x.done = true; total++; if (x.tries === 1) score++; else missed.add(x.it.base);
            inp.disabled = true; inp.classList.add("pr-ok"); rightN++; if (speak) speak(x.it.kind === "sentence" ? x.it.en : x.it.answer);
          } else if (x.tries >= 3) {
            x.done = true; total++; missed.add(x.it.base); inp.disabled = true; inp.value = x.it.answer; inp.classList.add("pr-ko"); wrongN++;
          } else { inp.classList.add("pr-ko"); setTimeout(() => inp.classList.remove("pr-ko"), 400); wrongN++; }
        });
        if (!any) return;
        if (allDone()) { say(rightN && !wrongN ? "✔ Bien !" : "Voilà les réponses. Tu les reverras au mini-défi.", rightN && !wrongN); go.textContent = label(); }
        else say(wrongN ? "Pas tout à fait, réessaie." : "✔ Bien ! Complète l'autre phrase.", !wrongN);
        const nx = ins.find((i, n) => !grp[n].done); if (nx) nx.focus();
      };
      ins.forEach((inp, n) => { inp.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); const nx = ins[n + 1]; if (nx && !nx.disabled && !nx.value.trim()) nx.focus(); else go.click(); } }; });
    };
    if (!st.items.length) return next(); draw();
  }

  // 3 — remettre en ordre
  function runOrder(st) {
    if (!st.items.length) return next();
    let k = 0;
    const draw = () => {
      const it = st.items[k], toks = it.en.split(/\s+/);
      let pool = shuffle(toks.map((t, i) => ({ t, i }))); if (toks.length > 2) for (let g = 0; g < 5 && pool.every((x, i) => x.i === i); g++) pool = shuffle(pool);
      const placed = []; let tries = 0, done = false;
      shell(st, `<p class="hint pr-hint">« ${esc(it.fr)} »</p><div class="pr-line" id="prLine"></div><div class="pr-chips" id="prPool"></div>
        <p class="lc-fb" id="prFb" aria-live="polite"></p><div class="pr-row"><button type="button" class="lc-sec-btn" id="prClr">Effacer</button><button type="button" class="lc-cta pr-go" id="prGo">Valider</button></div>`, `${k + 1}/${st.items.length}`);
      const line = host.querySelector("#prLine"), poolEl = host.querySelector("#prPool");
      const paint = () => {
        line.innerHTML = placed.map((x, j) => `<button type="button" class="pr-chip on" data-j="${j}">${esc(x.t)}</button>`).join("") || '<span class="pr-ph">Touche les mots dans l\'ordre</span>';
        poolEl.innerHTML = pool.map((x) => `<button type="button" class="pr-chip" data-i="${x.i}" ${placed.includes(x) ? "disabled" : ""}>${esc(x.t)}</button>`).join("");
        line.querySelectorAll("[data-j]").forEach((b) => b.onclick = () => { if (!done) { placed.splice(+b.dataset.j, 1); paint(); } });
        poolEl.querySelectorAll("[data-i]").forEach((b) => b.onclick = () => { if (done) return; placed.push(pool.find((x) => x.i === +b.dataset.i && !placed.includes(x))); paint(); });
      };
      paint();
      host.querySelector("#prClr").onclick = () => { if (!done) { placed.length = 0; paint(); } };
      host.querySelector("#prGo").onclick = () => {
        if (done) { if (++k >= st.items.length) next(); else draw(); return; }
        if (placed.length < toks.length) { say(`Il manque encore ${toks.length - placed.length} mot${toks.length - placed.length > 1 ? "s" : ""}.`, false); return; }
        tries++;
        if (norm(placed.map((x) => x.t).join(" ")) === norm(it.en)) {
          done = true; total++; if (tries === 1) score++; say("✔ Phrase correcte !", true); if (speak) speak(it.en);
          host.querySelector("#prGo").textContent = k + 1 >= st.items.length ? "Continuer" : "Suivant";
        } else { say("Pas encore, essaie un autre ordre.", false); line.classList.add("pr-ko"); setTimeout(() => line.classList.remove("pr-ko"), 400); if (tries >= 3) { placed.length = 0; toks.forEach((t, i) => placed.push(pool.find((x) => x.i === i))); paint(); done = true; total++; say("Voici la bonne phrase.", false); host.querySelector("#prGo").textContent = k + 1 >= st.items.length ? "Continuer" : "Suivant"; } }
      };
    };
    draw();
  }

  // 4 — produire (écrire, puis dire)
  function runProduce(st) {
    const need = st.need.length ? st.need : [];
    shell(st, `<p class="hint pr-hint">Écris une phrase en anglais${need.length ? ` avec : ${need.map((w) => `<b>${esc(w)}</b>`).join(" + ")}` : ""}.</p>
      <textarea class="pr-in pr-ta" id="prTa" rows="3" placeholder="Ta phrase…" autocapitalize="off" spellcheck="false"></textarea>
      <p class="lc-fb" id="prFb" aria-live="polite"></p><div id="prModel"></div>
      <div class="pr-mic" id="prMic" hidden><button type="button" class="lc-play" id="prRec" aria-label="Enregistrer">🎙️</button><span class="hint" id="prRecTx">Dis ta phrase à voix haute, puis réécoute-toi.</span><button type="button" class="lc-sec-btn" id="prPlay" hidden>▶ Réécouter</button></div>
      <div class="pr-row"><button type="button" class="lc-cta pr-go" id="prGo">Valider</button></div>`);
    const ta = host.querySelector("#prTa"); let ok = false;
    host.querySelector("#prGo").onclick = () => {
      if (ok) return next();
      const t = ta.value.trim(), n = norm(t);
      if (n.split(" ").length < 3) { say("Écris une vraie phrase (au moins 3 mots).", false); return; }
      const miss = need.filter((w) => !new RegExp(`\\b${reEsc(norm(w))}(s|es)?\\b`).test(n));
      if (miss.length) { say(`Utilise aussi : ${miss.join(", ")}.`, false); return; }
      ok = true; total++; score++; ta.disabled = true;
      say("✔ Phrase acceptée. Compare avec le modèle :", true);
      host.querySelector("#prModel").innerHTML = st.model ? `<div class="pr-card pr-model">${esc(st.model)}<small>${esc(st.modelFr)}</small></div>` : "";
      const mic = host.querySelector("#prMic"); mic.hidden = false;
      const V = createVoice({ lang: "en-GB", onState: (s) => { host.querySelector("#prRecTx").textContent = s === "listening" ? "🔴 J'écoute… (touche pour arrêter)" : "Enregistré ✔"; }, onDone: () => { host.querySelector("#prPlay").hidden = !V.hasAudio(); } });
      let on = false;
      host.querySelector("#prRec").onclick = () => { if (!V.supported) { host.querySelector("#prRecTx").textContent = "Micro indisponible ici."; return; } on ? V.stop() : V.start(); on = !on; };
      host.querySelector("#prPlay").onclick = () => V.play && V.play();
      host.querySelector("#prGo").textContent = "Continuer";
    };
  }

  // 5 — mini-défi
  function runChallenge(st) {
    const ws = st.words, pri = ws.filter((w) => missed.has(w[0])), rest = shuffle(ws.filter((w) => !missed.has(w[0])));
    const picks = [...shuffle(pri), ...rest].slice(0, Math.min(4, ws.length));
    let k = 0;
    const draw = () => {
      const [en, fr] = picks[k], toFr = k % 2 === 0, ans = toFr ? fr : en;
      const pool = ws.map((w) => (toFr ? w[1] : w[0])).filter((x) => x !== ans);
      const opts = shuffle([ans, ...shuffle(pool).slice(0, 3)]); let wrong = false;
      shell(st, `<p class="hint pr-hint">${k + 1} / ${picks.length}${missed.has(en) ? " · <span class='pr-tag'>à revoir</span>" : ""}</p>
        <div class="pr-card"><small>${toFr ? "Que veut dire…" : "Comment dit-on en anglais…"}</small><b class="pr-fr">${esc(toFr ? en : fr)}</b>${toFr && speak ? `<button type="button" class="lc-spk" data-say="${esc(en)}" aria-label="Écouter">🔊</button>` : ""}</div>
        <div class="lc-choices">${opts.map((o) => `<button type="button" class="lc-choice" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" id="prFb" aria-live="polite"></p>${goBtn(k + 1 >= picks.length ? "Terminer" : "Suivant")}`, `${k + 1}/${picks.length}`);
      host.querySelectorAll(".lc-spk").forEach((b) => b.onclick = () => speak(b.dataset.say));
      host.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
        if (b.dataset.o === ans) {
          total++; if (!wrong) score++; else missed.add(en);
          host.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", x.dataset.o === ans); });
          say("✔ Bonne réponse !", true); host.querySelector("#prGo").disabled = false;
        } else { wrong = true; b.classList.add("lc-wrong"); b.disabled = true; say("Pas tout à fait, réessaie.", false); }
      }));
      host.querySelector("#prGo").onclick = () => { if (++k >= picks.length) next(); else draw(); };
    };
    if (!picks.length) return next(); draw();
  }

  if (si >= stages.length) finish(); else run();
}
