// The Roots — B (B1.0 / B1.1) : accès aux ateliers de Grammaire en dialogue (G1, G2…).
// Les ateliers sont des pages autonomes (b1-0/g1.html, b1-0/g2.html) ouvertes en plein écran.
import "../data/roots-ai-url.js?v=20261031y";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const BG = `<img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/><img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>`;
const prog = (k) => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } };

// Statut de chaque atelier, lu dans la progression enregistrée par les pages.
export function b1Status() {
  const g1 = prog("g1-chat-progress-v1"), g2 = prog("g2-chat-progress-v1"), g4 = prog("g4-chat-progress-v1"), g5 = prog("g5-chat-progress-v1"), g3 = prog("g3-chat-progress-v1"), g6 = prog("g6-chat-progress-v1"), tf = prog("test-final-v1");
  const g1ok = (g1.hist || []).some((h) => h && h.score != null && h.score >= 12);
  const g2ok = !!(g2.ctl && g2.ctl.valid);
  return { tf: { parts: (tf.a || []).length, total: 36, ok: !!(tf.done && (tf.score || 0) >= 30) }, g6: { parts: (g6.done || []).length, total: 9, ok: !!(g6.ctl && g6.ctl.valid) }, g3: { parts: (g3.done || []).length, total: 10, ok: !!(g3.ctl && g3.ctl.valid) }, g5: { parts: (g5.done || []).length, total: 9, ok: !!(g5.ctl && g5.ctl.valid) }, g4: { parts: (g4.done || []).length, total: 11, ok: !!(g4.ctl && g4.ctl.valid) }, g1: { parts: (g1.done || []).length, total: 8, ok: g1ok }, g2: { parts: (g2.done || []).length, total: 9, ok: g2ok }, done: (g1ok ? 1 : 0) + (g2ok ? 1 : 0), total: 2 };
}

const LIEUX = [
  { k: "gram", t: "Grammaire", p: "La salle de classe", img: "lieu-gram.jpg" },
  { k: "conj", t: "Conjugaison", p: "L'atelier de l'horloger", img: "lieu-conj.jpg", url: "b1-0/c1.html?v=20261031y", preview: true },
  { k: "voc", t: "Vocabulaire", p: "La bibliothèque", img: "lieu-voc.jpg" },
  { k: "comp", t: "Compréhension", p: "L'observatoire", img: "lieu-comp.jpg" },
  { k: "expr", t: "Expression", p: "Le petit théâtre", img: "lieu-expr.jpg" },
];
const WORKSHOPS = [
  { k: "g1", n: "G1", t: "The Foundations of Real English", s: "Les fondamentaux pour parler un anglais naturel", url: "b1-0/g1.html?v=20261031y" },
  { k: "g2", n: "G2", t: "Du choix de la forme à une communication précise", s: "Present Simple vs Present Continuous", url: "b1-0/g2.html?v=20261031y" },
  { k: "g3", n: "G3", t: "Parler d’une possibilité future et de sa conséquence", s: "First conditional", url: "b1-0/g3.html?v=20261031y" },
  { k: "g4", n: "G4", t: "Past Simple and Present Perfect", s: "Raconter un film, parler de ses expériences", url: "b1-0/g4.html?v=20261031y" },
  { k: "g5", n: "G5", t: "Parler du futur en contexte", s: "Will, be going to, Present Continuous, Present Simple", url: "b1-0/g5.html?v=20261031y" },
  { k: "g6", n: "G6", t: "Raconter une action passée", s: "Past Simple, Past Continuous et used to", url: "b1-0/g6.html?v=20261031y" },
  { k: "tf", n: "Test", t: "Test final de grammaire", s: "Bilan cumulatif G1 à G6 · 36 questions", url: "b1-0/test.html?v=20261031y" },
];

export function renderB1(root, { onExit } = {}) {
  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  const STY = `<style>
  .b1x{position:absolute;inset:0;container-type:size;overflow:hidden;background:#101a33;color:#fff;font-family:inherit}
  .b1x .bk{position:absolute;inset:-20px;background-size:cover;background-position:center;filter:blur(18px) brightness(.6)}
  .b1x .back{position:absolute;top:max(10px,env(safe-area-inset-top));left:12px;z-index:5;border:0;border-radius:99px;padding:8px 14px;font:800 13px inherit;background:rgba(10,12,30,.6);color:#fff;backdrop-filter:blur(6px);cursor:pointer}
  .b1x .tt{position:absolute;top:max(14px,env(safe-area-inset-top));left:0;right:0;text-align:center;font-weight:800;font-size:15px;z-index:4;text-shadow:0 1px 6px #000}
  .b1x .bk{filter:blur(14px) brightness(.75)}
  .b1x.in{animation:b1in .8s ease-out both}
  @keyframes b1in{from{opacity:0}to{opacity:1}}
  .b1t{position:absolute;left:50%;top:0;width:min(112cqw,calc(100cqh*2/3));aspect-ratio:2/3;transform:translateX(-50%);container-type:inline-size;transform-origin:50% 60%}
  .b1t .cam{position:absolute;inset:0;transform-origin:50% 56%;animation:b1cam 1.9s cubic-bezier(.2,.7,.2,1) both;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 88%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 88%,transparent 100%)}
  @keyframes b1cam{from{transform:scale(1.28) translateY(3%)}to{transform:scale(1) translateY(0)}}
  .b1t .im,.b1t .gl{position:absolute;inset:0;background-size:100% 100%}
  .b1t .im{background-image:url(assets/img/b/transition.jpg)}
  .b1t .gl{background-image:url(assets/img/b/transition-glow.jpg);opacity:0;animation:b1gl 3.2s ease-in-out 1.6s infinite}
  @keyframes b1gl{0%,100%{opacity:0}50%{opacity:.85}}
  .b1t .bd{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:0;background:none;color:#3a2108;font-family:inherit;font-weight:800;font-size:4.4cqw;line-height:1.1;text-shadow:0 1px 0 #ffe6b0aa;padding:0;cursor:default;opacity:0;animation:b1pop .6s ease-out both}
  .b1t .bd small{font-weight:700;font-size:2.8cqw;opacity:.9}
  .b1t .bd.off{opacity:.8}
  .b1t .bd.l{animation-delay:.9s}.b1t .bd.go{animation-delay:1.2s,1.9s;font-size:6cqw;cursor:pointer;animation-name:b1pop,b1p;animation-duration:.6s,2.2s;animation-iteration-count:1,infinite}.b1t .bd.go small{font-size:3.4cqw}.b1t .bd.r{animation-delay:1.5s}
  @keyframes b1pop{from{opacity:0;transform:translateY(-14px) scale(.9)}to{opacity:1;transform:none}}
  @keyframes b1p{50%{transform:scale(1.06);filter:drop-shadow(0 0 10px #ffd36b)}}
  .b1t.ls{top:50%;width:max(100cqw,calc(100cqh*1.5));aspect-ratio:3/2;transform:translate(-50%,-50%)}
  .b1t.ls .cam{-webkit-mask-image:none;mask-image:none}
  .b1t.ls .im{background-image:url(assets/img/b/transition-land.jpg)}.b1t.ls .gl{display:none}
  .b1t.ls .bd{font-size:2.3cqw}.b1t.ls .bd small{font-size:1.4cqw}.b1t.ls .bd.go{font-size:3.2cqw}.b1t.ls .bd.go small{font-size:1.8cqw}
  .b1x.leave .b1t.ls{animation:b1zoomL 1.25s cubic-bezier(.55,0,.8,.4) forwards}
  @keyframes b1zoomL{to{transform:translate(-50%,-50%) scale(3.2)}}
  .b1x.leave .b1t{animation:b1zoom 1.25s cubic-bezier(.55,0,.8,.4) forwards}
  @keyframes b1zoom{to{transform:translateX(-50%) scale(3.4)}}
  .b1x.leave .b1t .gl{animation:none;opacity:.95;transition:opacity .5s}
  .b1x.leave .b1g,.b1x.leave .back,.b1x.leave .tt{opacity:0;transition:opacity .4s}
  .b1x.leave::after{content:"";position:absolute;inset:0;z-index:9;background:#fff3d6;opacity:0;animation:b1fl 1.25s ease-in forwards}
  @keyframes b1fl{0%,55%{opacity:0}100%{opacity:1}}
  .b1x.fin .b1f{animation:b1fin 1.1s ease-out both}
  .b1x.fin::before{content:"";position:absolute;inset:0;z-index:9;background:#fff3d6;pointer-events:none;animation:b1fo .9s ease-out forwards}
  @keyframes b1fin{from{transform:scale(1.18)}to{transform:none}}
  @keyframes b1fo{to{opacity:0}}
  .b1x .b1g{animation:b1up .7s ease-out 1.1s both}.b1x.fin .b1g{animation-delay:.5s}
  @keyframes b1up{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
  .b1f{position:absolute;inset:0;background:url(assets/img/b/foret.jpg) center/cover}
  .b1f::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#0a0f2255 0,#0a0f2200 25%,#0a0f2200 45%,#0a0f22d9 100%)}
  .b1g{position:absolute;left:12px;right:12px;margin:0 auto;max-width:520px;bottom:max(14px,env(safe-area-inset-bottom));z-index:3;border-radius:22px;padding:14px;background:rgba(18,26,58,.55);border:1px solid #ffffff33;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 10px 30px #0008}
  .b1g h2{margin:0 0 2px;font-size:18px}.b1g p{margin:0 0 10px;font-size:12.5px;opacity:.85}
  .b1g .ws{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:1px solid #ffd36b66;border-radius:14px;padding:10px;margin-top:8px;background:rgba(10,14,36,.55);color:#fff;font:inherit;cursor:pointer}
  .b1g .n{flex:none;width:40px;height:40px;border-radius:12px;background:#ffd36b;color:#241606;font-weight:800;display:flex;align-items:center;justify-content:center}.b1g .tx{flex:1;min-width:0;display:flex;flex-direction:column;font-size:13px}.b1g .tx small{opacity:.8}.b1g .st{flex:none;font-weight:800;font-size:12px;color:#ffd36b}
  .b1g .nx{font-size:11px;opacity:.7;margin-top:10px}
  .b1h{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .b1h .lx{position:relative;height:112px;border:1px solid #ffd36b66;border-radius:14px;overflow:hidden;background:#101a33 center/cover;color:#fff;font:inherit;text-align:left;padding:0;cursor:pointer}
  .b1h .lx::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#0a0f2200 30%,#0a0f22ee 100%)}
  .b1h .lx span{position:absolute;left:10px;right:8px;bottom:8px;z-index:1;display:flex;flex-direction:column;font-size:14px;font-weight:800}
  .b1h .lx small{font-weight:600;font-size:10.5px;opacity:.85}
  .b1h .lx.off{opacity:.55;cursor:default;filter:saturate(.6)}
  .b1h .lx em{position:absolute;top:8px;right:8px;z-index:1;font-style:normal;font-size:10px;font-weight:800;background:#ffd36b;color:#241606;border-radius:99px;padding:2px 8px}
  .b1fb{position:absolute;left:50%;top:50%;width:calc(100cqh*2/3);aspect-ratio:2/3;transform:translate(-50%,-50%);background:url(assets/img/b/foret.jpg) center/100% 100%;container-type:inline-size}
  .b1fb.ls{width:max(100cqw,calc(100cqh*1.5));aspect-ratio:3/2;background-image:url(assets/img/b/foret-land.jpg)}
  .b1fb.ls .sg{font-size:.95cqw}.b1fb.ls .pl{left:29%;width:16.4%;height:4.9%;font-size:1.3cqw}
  .b1x.fin .b1fb{animation:b1fbin 1.1s ease-out both}
  @keyframes b1fbin{from{transform:translate(-50%,-50%) scale(1.18)}to{transform:translate(-50%,-50%)}}
    .b1fb .sg{position:absolute;display:flex;align-items:center;justify-content:center;border:0;background:#0a0f2200;color:#3b2208;font:700 2.1cqw/1 Georgia,'Times New Roman',serif;text-shadow:0 1px 0 #f3d9a0aa;letter-spacing:.01em;padding:0;cursor:pointer;border-radius:6px;white-space:nowrap}
  .b1fb .pl{position:absolute;left:40.8%;width:16%;height:3.3%;display:flex;align-items:center;justify-content:center;color:#3b2208;font:700 1.9cqw/1 Georgia,'Times New Roman',serif;text-shadow:0 1px 0 #f3d9a0aa;pointer-events:none;white-space:nowrap}
  .b1fb .sg::before{content:"";position:absolute;inset:-14px -12px}
  .b1fb .sg.off{color:#3b2208aa;background:#0a0f2244;cursor:pointer}
  .b1fb .sg.on{background:radial-gradient(ellipse,#ffe9a8cc,#ffc84a66 70%,#ffc84a00);box-shadow:0 0 18px 6px #ffd36baa;animation:b1sg 1.8s ease-in-out infinite;color:#3a1f04}
  @keyframes b1sg{50%{box-shadow:0 0 30px 12px #ffe08acc;transform:scale(1.07)}}
  .b1fb .tg{position:absolute;transform:translate(-50%,-100%);margin-top:-6px;z-index:2;background:#241606e6;color:#ffd36b;font:800 3.2cqw inherit;padding:3px 9px;border-radius:99px;white-space:nowrap;pointer-events:none;animation:b1up .6s ease-out 1.4s both}
  .b1pop{position:absolute;left:12px;right:12px;margin:0 auto;max-width:520px;bottom:max(14px,env(safe-area-inset-bottom));z-index:6;border-radius:22px;padding:16px;background:rgba(18,26,58,.5);border:1px solid #ffffff44;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 10px 30px #0008;animation:b1up .35s ease-out both}
  .b1pop h2{margin:0 0 2px;font-size:18px}.b1pop p{margin:0 0 12px;font-size:13px;opacity:.88}
  .b1pop .go{width:100%;border:0;border-radius:14px;padding:12px;font:800 15px inherit;background:#ffd36b;color:#241606;cursor:pointer}
  .b1pop .x{position:absolute;top:8px;right:12px;border:0;background:none;color:#fff;font-size:20px;opacity:.7;cursor:pointer}
  .b1-frame{position:fixed;inset:0;z-index:9999;width:100%;height:100%;border:0;background:#0d1226}
  </style>`;
  const transition = () => {
    const wide = root.clientWidth / Math.max(1, root.clientHeight) > 1.2;
    el.innerHTML = `${STY}<div class="b1x in"><div class="bk" style="background-image:url(assets/img/b/${wide ? "transition-land" : "transition"}.jpg)"></div>
      <button type="button" class="back" id="b1Back">← Retour</button><div class="tt">Mon parcours · B</div>
      <div class="b1t${wide ? " ls" : ""}"><div class="cam"><div class="im"></div><div class="gl"></div>
        <div class="bd off l" style="${wide ? "left:3.5%;top:38.5%;width:16.5%;height:9.5%" : "left:1%;top:48.3%;width:22%;height:6.5%"}">A2<small>terminé</small></div>
        <button type="button" class="bd go" id="b1Go" style="${wide ? "left:38.8%;top:22.5%;width:20%;height:15.5%" : "left:37%;top:37.5%;width:25%;height:8%"}">B1.0<small>Commencer</small></button>
        <div class="bd off r" style="${wide ? "left:72.5%;top:46%;width:14.5%;height:8%" : "left:74.5%;top:51.6%;width:19%;height:5.4%"}">B1.1<small>bientôt</small></div>
        </div></div>
      <div class="b1g"><h2>Tu as terminé A2</h2><p>Prochaine étape : <b>B1.0</b>. B1.1 t'attend ensuite, de l'autre côté du chemin.</p><button type="button" class="ws" id="b1Go2"><span class="n">B1.0</span><span class="tx"><b>Entrer dans B1.0</b><small>Grammaire, Conjugaison…</small></span><span class="st">→</span></button></div></div>`;
    const x = el.querySelector(".b1x");
    const enter = () => { if (x.classList.contains("leave")) return; x.classList.add("leave"); setTimeout(() => forest(true), 1150); };
    el.querySelector("#b1Back").onclick = () => onExit && onExit();
    el.querySelector("#b1Go").onclick = enter;
    el.querySelector("#b1Go2").onclick = enter;
  };
  const PREVIEW = true; // mode construction : Conjugaison déjà allumée en aperçu
  const SIGNS = [ // chemin en zigzag : Grammaire (droite), Conjugaison (en face, gauche), puis on monte vers la porte
    { k: "gram", x: 62.7, y: 45.6, w: 13, h: 4.9 },
    { k: "conj", x: 23, y: 38.4, w: 12.7, h: 5.9 },
    { k: "voc", x: 61, y: 30.7, w: 9.5, h: 4.4 },
    { k: "comp", x: 36.9, y: 27.2, w: 9, h: 4.2 },
    { k: "expr", x: 45.7, y: 18.1, w: 7.5, h: 4 },
  ];
  const SIGNS_L = [ // version paysage (ordinateur)
    { k: "gram", x: 70.5, y: 70, w: 8.9, h: 8.5 },
    { k: "conj", x: 45.1, y: 36.3, w: 5.8, h: 4.5 },
    { k: "voc", x: 67.9, y: 32.2, w: 5.7, h: 4.4 },
    { k: "comp", x: 47.5, y: 25.2, w: 5.2, h: 4.1 },
    { k: "expr", x: 63.2, y: 20.7, w: 4.8, h: 3.4 },
  ];
  const PLANKS_L = [58.1, 63.5, 68.8, 73.9, 79.3];
  const PLANKS = [62.4, 66.4, 70.3, 74.1, 78.0]; // planches du panneau de l'entrée (arche)
  const lit = (l, S) => { const i = LIEUX.indexOf(l); return i === 0 || (PREVIEW && l.k === "conj") || (S.done >= 2 && i === 1); };
  const forest = (fin) => {
    const S = b1Status();
    const wide = root.clientWidth / Math.max(1, root.clientHeight) > 1.2;
    const sg = (wide ? SIGNS_L : SIGNS).map((g) => { const l = LIEUX.find((x) => x.k === g.k); return `<button type="button" class="sg ${lit(l, S) ? "on" : "off"}" data-l="${g.k}" aria-label="${esc(l.t)}" style="left:${g.x}%;top:${g.y}%;width:${g.w}%;height:${g.h}%">${esc(l.t)}</button>`; }).join("");
    const pl = LIEUX.map((l, i) => `<div class="pl" style="top:${(wide ? PLANKS_L : PLANKS)[i]}%">${esc(l.t)}</div>`).join("");
    el.innerHTML = `${STY}<div class="b1x fo${fin === true ? " fin" : " in"}"><div class="bk" style="background-image:url(assets/img/b/${wide ? "foret-land" : "foret"}.jpg)"></div><div class="b1fb${wide ? " ls" : ""}">${pl}${sg}</div>
      <button type="button" class="back" id="b1Back">← B</button><div id="b1Pop"></div></div>`;
    el.querySelector("#b1Back").onclick = transition;
    const pop = el.querySelector("#b1Pop");
    el.querySelectorAll("[data-l]").forEach((b) => (b.onclick = () => {
      const l = LIEUX.find((x) => x.k === b.dataset.l), on = lit(l, S);
      pop.innerHTML = `<div class="b1pop"><button type="button" class="x" id="b1X">×</button><h2>${esc(l.t)} · ${esc(l.p)}</h2><p>${on ? (l.k === "gram" ? "Entre en classe avec ton professeur : tu observes, tu réponds, tu es corrigé." : "Aperçu : l'atelier de l'horloger (contenu d'exemple).") : "Bientôt : ce lieu s'ouvrira avec son cours."}</p>${on ? '<button type="button" class="go" id="b1In">Entrer ' + (l.k === "gram" ? "en classe" : "dans l'atelier") + " →</button>" : ""}</div>`;
      pop.querySelector("#b1X").onclick = () => (pop.innerHTML = "");
      const inn = pop.querySelector("#b1In");
      if (inn) inn.onclick = () => { if (l.k === "gram") gram(); else open({ url: l.url, t: l.t }, forest); };
    }));
  };
  const gram = () => {
    const S = b1Status();
    const rowOf = (w) => { const st = S[w.k] || {}; return `<button type="button" class="ws" data-w="${w.k}"><span class="n">${w.n}</span><span class="tx"><b>${esc(w.t)}</b><small>${esc(w.s)}</small></span><span class="st">${st.ok ? "✓ validé" : st.parts ? `${st.parts}/${st.total}` : "Commencer"}</span></button>`; };
    const soon = (n) => `<div class="ws" style="opacity:.45;cursor:default"><span class="n">G${n}</span><span class="tx"><b>Bientôt</b><small>En attente du cours</small></span></div>`;
    const rows = [1, 2, 3, 4, 5, 6].map((n) => { const w = WORKSHOPS.find((x) => x.n === "G" + n); return w ? rowOf(w) : soon(n); }).join("") + rowOf(WORKSHOPS.find((x) => x.k === "tf"));
    const later = "";
    el.innerHTML = `${STY}<div class="b1x in"><div class="b1f" style="background-image:url(assets/img/b/lieu-gram${root.clientWidth / Math.max(1, root.clientHeight) > 1.2 ? '-land' : ''}.jpg)"></div>
      <button type="button" class="back" id="b1Back">← B1.0</button>
      <div class="b1g"><h2>Grammaire · La salle de classe</h2><p>En classe avec ton professeur : tu observes, tu réponds, tu es corrigé sur tes vraies phrases.</p>${rows}${later}</div></div>`;
    el.querySelector("#b1Back").onclick = () => forest();
    el.querySelectorAll("[data-w]").forEach((b) => (b.onclick = () => open(WORKSHOPS.find((w) => w.k === b.dataset.w), gram)));
  };
  const open = (w, back) => {
    const f = document.createElement("iframe");
    f.className = "b1-frame"; f.src = w.url; f.title = w.t; f.setAttribute("allow", "microphone; autoplay");
    const close = (e) => { if (e && e.data && e.data.roots === "exit") { window.removeEventListener("message", close); f.remove(); (back || forest)(); } };
    window.addEventListener("message", close);
    document.body.appendChild(f);
  };
  transition();
}
