// The Roots — B (B1.0 / B1.1) : accès aux ateliers de Grammaire en dialogue (G1, G2…).
// Les ateliers sont des pages autonomes (b1-0/g1.html, b1-0/g2.html) ouvertes en plein écran.
import "../data/roots-ai-url.js?v=20261031d";

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
  { k: "g1", n: "G1", t: "The Foundations of Real English", s: "Les fondamentaux pour parler un anglais naturel", url: "b1-0/g1.html?v=20261031d" },
  { k: "g2", n: "G2", t: "Du choix de la forme à une communication précise", s: "Present Simple vs Present Continuous", url: "b1-0/g2.html?v=20261031d" },
];

export function renderB1(root, { onExit } = {}) {
  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  const STY = `<style>
  .b1x{position:absolute;inset:0;overflow:hidden;background:#101a33;color:#fff;font-family:inherit}
  .b1x .bk{position:absolute;inset:-20px;background-size:cover;background-position:center;filter:blur(18px) brightness(.6)}
  .b1x .back{position:absolute;top:max(10px,env(safe-area-inset-top));left:12px;z-index:5;border:0;border-radius:99px;padding:8px 14px;font:800 13px inherit;background:rgba(10,12,30,.6);color:#fff;backdrop-filter:blur(6px);cursor:pointer}
  .b1x .tt{position:absolute;top:max(14px,env(safe-area-inset-top));left:0;right:0;text-align:center;font-weight:800;font-size:15px;z-index:4;text-shadow:0 1px 6px #000}
  .b1x .bk{filter:blur(14px) brightness(.75)}
  .b1x.in{animation:b1in .8s ease-out both}
  @keyframes b1in{from{opacity:0}to{opacity:1}}
  .b1t{position:absolute;left:50%;top:0;width:112vw;height:168vw;transform:translateX(-50%);container-type:inline-size;transform-origin:50% 60%}
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
  .b1g{position:absolute;left:12px;right:12px;bottom:max(14px,env(safe-area-inset-bottom));z-index:3;border-radius:22px;padding:14px;background:rgba(18,26,58,.55);border:1px solid #ffffff33;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 10px 30px #0008}
  .b1g h2{margin:0 0 2px;font-size:18px}.b1g p{margin:0 0 10px;font-size:12.5px;opacity:.85}
  .b1g .ws{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:1px solid #ffd36b66;border-radius:14px;padding:10px;margin-top:8px;background:rgba(10,14,36,.55);color:#fff;font:inherit;cursor:pointer}
  .b1g .n{flex:none;width:40px;height:40px;border-radius:12px;background:#ffd36b;color:#241606;font-weight:800;display:flex;align-items:center;justify-content:center}.b1g .tx{flex:1;min-width:0;display:flex;flex-direction:column;font-size:13px}.b1g .tx small{opacity:.8}.b1g .st{flex:none;font-weight:800;font-size:12px;color:#ffd36b}
  .b1g .nx{font-size:11px;opacity:.7;margin-top:10px}
  .b1-frame{position:fixed;inset:0;z-index:9999;width:100%;height:100%;border:0;background:#0d1226}
  </style>`;
  const transition = () => {
    el.innerHTML = `${STY}<div class="b1x in"><div class="bk" style="background-image:url(assets/img/b/transition.jpg)"></div>
      <button type="button" class="back" id="b1Back">← Retour</button><div class="tt">Mon parcours · B</div>
      <div class="b1t"><div class="cam"><div class="im"></div><div class="gl"></div>
        <div class="bd off l" style="left:1%;top:48.3%;width:22%;height:6.5%">A2<small>terminé</small></div>
        <button type="button" class="bd go" id="b1Go" style="left:37%;top:37.5%;width:25%;height:8%">B1.0<small>Commencer</small></button>
        <div class="bd off r" style="left:74.5%;top:51.6%;width:19%;height:5.4%">B1.1<small>bientôt</small></div>
        </div></div>
      <div class="b1g"><h2>Tu as terminé A2</h2><p>Prochaine étape : <b>B1.0</b>. B1.1 t'attend ensuite, de l'autre côté du chemin.</p><button type="button" class="ws" id="b1Go2"><span class="n">B1.0</span><span class="tx"><b>Entrer dans B1.0</b><small>Grammaire : G1 et G2</small></span><span class="st">→</span></button></div></div>`;
    const x = el.querySelector(".b1x");
    const enter = () => { if (x.classList.contains("leave")) return; x.classList.add("leave"); setTimeout(() => forest(true), 1150); };
    el.querySelector("#b1Back").onclick = () => onExit && onExit();
    el.querySelector("#b1Go").onclick = enter;
    el.querySelector("#b1Go2").onclick = enter;
  };
  const forest = (fin) => {
    const S = b1Status();
    const rows = WORKSHOPS.map((w) => { const st = S[w.k]; return `<button type="button" class="ws" data-w="${w.k}"><span class="n">${w.n}</span><span class="tx"><b>${esc(w.t)}</b><small>${esc(w.s)}</small></span><span class="st">${st.ok ? "✓ validé" : st.parts ? `${st.parts}/${st.total}` : "Commencer"}</span></button>`; }).join("");
    el.innerHTML = `${STY}<div class="b1x${fin === true ? " fin" : " in"}"><div class="b1f"></div>
      <button type="button" class="back" id="b1Back">← B</button>
      <div class="b1g"><h2>B1.0 · Grammaire</h2><p>🏫 En classe avec ton professeur : tu observes, tu réponds, tu es corrigé sur tes vraies phrases.</p>${rows}<div class="nx">Les autres ateliers du B1.0 arrivent. B1.1 s'ouvrira quand tous seront validés.</div></div></div>`;
    el.querySelector("#b1Back").onclick = transition;
    el.querySelectorAll("[data-w]").forEach((b) => (b.onclick = () => open(WORKSHOPS.find((w) => w.k === b.dataset.w))));
  };
  const open = (w) => {
    const f = document.createElement("iframe");
    f.className = "b1-frame"; f.src = w.url; f.title = w.t;
    const close = (e) => { if (e && e.data && e.data.roots === "exit") { window.removeEventListener("message", close); f.remove(); forest(); } };
    window.addEventListener("message", close);
    document.body.appendChild(f);
  };
  transition();
}
