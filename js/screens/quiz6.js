import { SYN } from "../data/syn-fr.js?v=20261025b";
// The Roots — page de test : 6 questions sur une page, 4 bonnes réponses minimum pour passer. Les erreurs reviennent.
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
export const PASS = 4, N = 6;
const done = new Set();
export const quizPassed = (key) => done.has(key);

// Vocabulaire : 6 mots de la page (complétés par la page entière, puis le reste du cours) ; sens EN→FR et FR→EN en alternance.
export function vocabItems(words, pageWords, allWords, redo = []) {
  const ok = (w) => w && w[0] && w[1] && String(w[0]).length <= 22 && String(w[1]).length <= 26;
  const seen = new Set(), pick = [];
  for (const w of [...redo, ...shuffle(words), ...shuffle(pageWords), ...shuffle(allWords)]) {
    if (!ok(w) || seen.has(w[0]) || seen.has(w[1])) continue;
    seen.add(w[0]); seen.add(w[1]); pick.push(w);
    if (pick.length >= N) break;
  }
  const pool = allWords.filter(ok);
  return shuffle(pick).map((w, i) => {
    const en2fr = i % 2 === 0, ix = en2fr ? 1 : 0, ans = w[ix];
    const bad = (x) => x === ans || x === w[1 - ix], near = (x) => Math.abs(String(x).length - String(ans).length) <= 5;
    const ds = [...new Set([...shuffle(pageWords.map((x) => x[ix])), ...shuffle(pool.map((x) => x[ix]).filter(near)), ...shuffle(pool.map((x) => x[ix]))].filter((x) => x && !bad(x)))].slice(0, 2);
    const opts = shuffle([ans, ...ds]);
    return { q: en2fr ? `« ${w[0]} » veut dire ?` : `« ${w[1]} » en anglais ?`, opts, a: opts.indexOf(ans), say: en2fr ? w[0] : null, key: w[0], w };
  });
}
// Grammaire : questions [énoncé, choix, bonne réponse, explication] déjà écrites.
export function gramItems(pool, redo = []) {
  const keep = pool.filter((q) => q && q[1] && q[1].length >= 2);
  const first = keep.filter((q) => redo.includes(q[0]));
  const rest = shuffle(keep.filter((q) => !redo.includes(q[0])));
  return [...first, ...rest].slice(0, N).map((q) => ({ q: q[0], opts: q[1], a: q[2], key: q[0], expl: Array.isArray(q[3]) ? q[3][q[2]] : q[3] }));
}

export function quizHtml() { return `<section class="lc-card q6"><div class="q6-top"><b>📝 Test</b><span id="q6s">Il faut ${PASS}/${N}</span></div><p class="q6-help">👆 Touche 1 réponse par question, puis « Vérifier ».</p><div class="q6-list" id="q6l"></div><p class="lc-fb q6-fb" id="q6f" aria-live="polite"></p><button type="button" class="lc-cta q6-go" id="q6c" disabled>Vérifier</button></section>`; }

// build(redoKeys) -> items. onPass() débloque « Suivant ». Retourne rien ; tout est dans host.
const nrm = (x) => String(x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\([^)]*\)/g, "").replace(/[’'`.,!?;:«»]/g, "").replace(/\s+/g, " ").trim();
const art = (x) => nrm(x).replace(/^(le|la|les|l|un|une|des|du|the|a|an|to) /, "");
const lev1 = (a, b) => { if (a === b) return true; if (Math.abs(a.length - b.length) > 1 || Math.min(a.length, b.length) < 5) return false; let i = 0; while (i < a.length && a[i] === b[i]) i++; if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1); return a.length > b.length ? a.slice(i + 1) === b.slice(i) : b.slice(i + 1) === a.slice(i); };
let strict = false; // A2 : zéro tolérance (orthographe, accents) ; A1 : seule une faute de frappe d’une lettre est tolérée, et seulement en vocabulaire
export const setStrict = (v) => { strict = !!v; };
const nrmS = (x) => String(x || "").toLowerCase().normalize("NFC").replace(/\([^)]*\)/g, "").replace(/[’'`.,!?;:«»]/g, "").replace(/\s+/g, " ").trim();
const oe = (x) => String(x).replace(/œ/g, "oe").replace(/Œ/g, "oe");
const ck = (x) => (strict ? nrmS(oe(x)) : nrm(oe(x))).replace(/[\s-]+/g, ""); // clé de comparaison : tirets, espaces et apostrophes ne comptent pas
let synIdx = null, synMode = null;
const synOf = (k) => { if (!synIdx || synMode !== strict) { synMode = strict; synIdx = new Map(); SYN.forEach((g) => g.forEach((w) => { const c = ck(w); if (!synIdx.has(c)) synIdx.set(c, []); synIdx.get(c).push(g); })); } return synIdx.get(k) || []; };
// Réponses acceptées : la bonne réponse, ses variantes (« grand / nombreux »), ses synonymes (syn-fr.js) sauf si c'est l'une des autres propositions.
const same = (t, o, voc, opts) => {
  const T = ck(t), cand = new Set();
  String(o).split(/\s*\/\s*/).forEach((p) => { cand.add(ck(p)); if (!strict) cand.add(ck(art(p))); if (voc) synOf(ck(p)).forEach((g) => g.forEach((w) => cand.add(ck(w)))); });
  if (voc && opts) opts.forEach((x) => { if (x !== o && ck(x) !== ck(o)) cand.delete(ck(x)); });
  if (cand.has(T) || (!strict && cand.has(ck(art(t))))) return true;
  return !strict && voc && lev1(art(t), art(o)); // faute de frappe tolérée seulement en vocabulaire (jamais en grammaire : -s, -ing comptent)
};
export const isVoc = (q) => /veut dire|en anglais|means/i.test(q);
export { same, maskHint };
const typable = (it) => !/^Écoute/.test(it.q) && (/___/.test(it.q) || /veut dire|en anglais/.test(it.q));
const maskHint = (it) => { const e = String(it.expl || "").trim(), a = String(it.opts[it.a] || "").replace(/[.?!]+$/, "").trim(); if (!e) return "Relis la règle."; if (!a) return e; const re = new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"), "gi"); return e.replace(re, "…").replace(/\s+/g, " "); };
// think = true : l’élève écrit d’abord sa réponse (les choix sont derrière « Indice »), puis, s’il se trompe, il reçoit un indice et un 2ᵉ essai avant la correction.
export function mountQuiz(host, key, build, { speak, onPass, btn, onCheck, think }) {
  let items = build([]), picked = [], checked = false, txt = [], shown = [], locked = [], hints = [], attempt = 0;
  const val = (i) => { const it = items[i]; if (think && typable(it) && (txt[i] || "").trim()) return same(txt[i], it.opts[it.a], /veut dire|en anglais/.test(it.q), it.opts) ? it.a : -2; return picked[i]; };
  const paint = () => {
    host.querySelector("#q6l").innerHTML = items.map((it, i) => { const ty = think && typable(it);
      return `<div class="q6-q" data-i="${i}"><p class="q6-p"><span>${i + 1}</span>${esc(it.q)}${it.say ? ` <button type="button" class="q6-spk" data-say="${esc(it.say)}" aria-label="Écouter">🔊</button>` : ""}</p>
      ${ty ? `<div class="q6-w"><input class="lc-ta q6-in" data-i="${i}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Écris ta réponse…" value="${esc(txt[i] || "")}"${locked[i] ? " disabled" : ""}>${shown[i] || locked[i] ? "" : `<button type="button" class="q6-hintb" data-i="${i}">💡 Indice</button>`}</div>` : ""}
      <div class="q6-o"${ty && !shown[i] ? " hidden" : ""}>${it.opts.map((o, k) => `<button type="button" class="lc-choice q6-c${picked[i] === k && !(txt[i] || "").trim() ? " lc-sel" : ""}" data-i="${i}" data-k="${k}"${locked[i] ? " disabled" : ""}>${esc(o)}</button>`).join("")}</div>
      ${hints[i] ? `<p class="q6-hint">💡 ${esc(hints[i])}</p>` : ""}</div>`; }).join("");
    host.querySelectorAll(".q6-c").forEach((b) => b.onclick = () => { if (checked) return; const i = +b.dataset.i; picked[i] = +b.dataset.k; txt[i] = ""; paint(); upd(); });
    host.querySelectorAll(".q6-in").forEach((x) => x.oninput = () => { txt[+x.dataset.i] = x.value; upd(); });
    host.querySelectorAll(".q6-hintb").forEach((b) => b.onclick = () => { shown[+b.dataset.i] = true; paint(); });
    const hp = host.querySelector(".q6-help"); if (think && hp) hp.textContent = "✍️ Écris ta réponse. Bloqué ? Touche « 💡 Indice » pour voir les choix.";
    host.querySelectorAll(".q6-spk").forEach((b) => b.onclick = (e) => { e.stopPropagation(); speak && speak(b.dataset.say); });
    fit();
  };
  const fit = () => { // remplit la page ; si ça dépasse, on resserre (2 niveaux)
    const l = host.querySelector("#q6l"), f = document.querySelector(".lc-foot"); if (!l || !f) return;
    const c = host.closest(".lc-card") || host, room = () => f.getBoundingClientRect().top - 45 - c.getBoundingClientRect().bottom;
    l.style.gap = ""; host.classList.remove("q6-t1", "q6-t2");
    if (room() < -4) host.classList.add("q6-t1");
    if (room() < -4) host.classList.add("q6-t2");
    const r = room(); if (r > 6) l.style.gap = Math.min(5 + r / (N + 1), 16) + "px";
  };
  const go = () => document.querySelector("#lcNext");
  const upd = () => { const b = host.querySelector("#q6c"), n = items.filter((_, i) => val(i) !== undefined).length; if (b && !checked) { b.disabled = n < items.length; b.textContent = n < items.length ? `Vérifier (${n}/${items.length} répondues)` : "Vérifier ✓"; } };
  const bar = () => host.querySelector("#q6c");
  const start = () => {
    attempt = 0; paint(); const b = bar(); b.style.display = ""; b.textContent = "Vérifier"; b.disabled = true; checked = false; upd();
    b.onclick = () => {
      if (checked) { // échec : on repart avec les questions ratées + de nouvelles
        const miss = items.filter((it, i) => val(i) !== it.a).map((it) => it.key);
        items = build(miss); picked = []; txt = []; shown = []; locked = []; hints = []; attempt = 0; host.querySelector("#q6f").textContent = ""; start(); return;
      }
      if (think && attempt === 0) { // 1ʳᵉ vérification : les erreurs reçoivent un indice (sans la réponse) et un 2ᵉ essai
        const wrong = items.map((it, i) => (val(i) !== it.a ? i : -1)).filter((i) => i >= 0);
        if (wrong.length) {
          attempt = 1; locked = items.map((_, i) => !wrong.includes(i));
          wrong.forEach((i) => { hints[i] = maskHint(items[i]); txt[i] = ""; picked[i] = undefined; shown[i] = false; });
          paint(); const f = host.querySelector("#q6f"); f.className = "lc-fb q6-fb lc-fb-ko"; f.textContent = `${wrong.length} à corriger — lis l’indice et réessaie une fois.`;
          const b2 = bar(); b2.disabled = true; upd(); return;
        }
      }
      checked = true;
      const good = items.filter((it, i) => val(i) === it.a).length;
      host.querySelectorAll(".q6-q").forEach((bx, i) => { const o = bx.querySelector(".q6-o"); if (o) o.hidden = false; const hb = bx.querySelector(".q6-hintb"); if (hb) hb.remove(); const inp = bx.querySelector(".q6-in"); if (inp) inp.disabled = true; bx.querySelectorAll(".q6-c").forEach((c) => { c.disabled = true; c.classList.remove("lc-sel"); if (+c.dataset.k === items[i].a) c.classList.add("lc-right"); else if (+c.dataset.k === picked[i] && !(txt[i] || "").trim()) c.classList.add("lc-wrong"); }); });
      const fb = host.querySelector("#q6f"), ok = good >= PASS;
      onCheck && onCheck(good, N);
      host.querySelector("#q6s").textContent = `${good}/${N}`;
      fb.className = "lc-fb q6-fb " + (ok ? "lc-fb-ok" : "lc-fb-ko");
      fb.textContent = ok ? `✔ ${good}/${N} — bravo, tu passes !` : `${good}/${N} — il faut ${PASS}. Les erreurs reviennent.`;
      if (ok) { done.add(key); b.style.display = "none"; go().disabled = false; onPass && onPass(); }
      else b.textContent = "Réessayer ↻", b.disabled = false;
      fit();
    };
  };
  if (done.has(key)) { host.querySelector("#q6l").innerHTML = ""; host.querySelector("#q6f").className = "lc-fb lc-fb-ok q6-fb"; host.querySelector("#q6f").textContent = "✔ Test réussi"; host.querySelector("#q6c").style.display = "none"; go().disabled = false; return; }
  go().disabled = true; start();
}
