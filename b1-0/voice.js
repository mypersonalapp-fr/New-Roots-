/* The Roots · B1 · voix du professeur + micro (partagé par G1, G2, G4 et l'atelier de l'horloger).
   Voix : lit à voix haute les phrases ANGLAISES des bulles (le français n'est pas lu).
   Micro : dictée de la réponse dans la zone d'écriture (reconnaissance vocale du navigateur). */
(function () {
  const LS = "roots-b1-voice";
  let on = true;
  try { on = localStorage.getItem(LS) !== "off"; } catch (e) {}
  const TTS = "speechSynthesis" in window;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const FR = /\b(le|la|les|des|du|un|une|est|sont|que|qui|pour|dans|avec|ton|ta|tes|tu|je|il|elle|on|vous|nous|ce|cette|ces|se|ne|pas|plus|ou|et|au|aux|sur|par|où|quand|comment|pourquoi|choisis|écris|complète|réponds|exercice|question|phrase|mot|temps|réponse|indice|correct|erreur|repère)\b|[éèêàçùôîâû]/gi;
  const EN = /\b(the|and|is|are|was|were|have|has|had|did|do|does|you|i|we|they|she|he|it|my|your|of|to|in|on|at|for|since|yet|just|already|never|ever|a|an|this|that|with|but|not|his|her|their|from|last|when|what|where|who|how|been|seen|film|series|episode|director)\b/gi;
  function voiceEn() {
    if (!TTS) return null;
    const v = speechSynthesis.getVoices();
    return v.find((x) => /en-GB/i.test(x.lang) && /(Daniel|Serena|Kate|Google UK)/i.test(x.name)) || v.find((x) => /^en-GB/i.test(x.lang)) || v.find((x) => /^en/i.test(x.lang)) || null;
  }
  function rate() { let s = 1; try { s = parseFloat(localStorage.getItem("g1-speed")) || 1; } catch (e) {} return s < 1 ? 0.8 : s > 1 ? 1.1 : 0.95; }
  function enParts(text) {
    return String(text || "").replace(/_{2,}/g, " blank ").split(/\n+|(?<=[.!?…])\s+/).map((x) => x.trim()).filter((x) => {
      if (x.length < 4) return false;
      const e = (x.match(EN) || []).length, f = (x.match(FR) || []).length;
      return e >= 2 && e > f;
    });
  }
  function say(text) {
    if (!TTS || !on) return;
    enParts(text).forEach((p) => {
      const u = new SpeechSynthesisUtterance(p.replace(/[“”«»"]/g, ""));
      u.lang = "en-GB"; u.rate = rate(); const v = voiceEn(); if (v) u.voice = v;
      speechSynthesis.speak(u);
    });
  }
  function stop() { try { speechSynthesis.cancel(); } catch (e) {} }
  window.rootsSay = say; window.rootsStopSay = stop;
  if (TTS) { speechSynthesis.getVoices(); speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", () => speechSynthesis.getVoices()); }

  const css = document.createElement("style");
  css.textContent = `.vbtn{width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.28);color:#fff;font:800 14px system-ui;cursor:pointer;flex:none;display:grid;place-items:center;padding:0}
  .vbtn.off{opacity:.55}
  .spk{display:inline-grid;place-items:center;width:24px;height:24px;margin-left:8px;border-radius:50%;border:1px solid rgba(0,0,0,.25);background:rgba(255,255,255,.55);color:#2f1f08;font:700 12px system-ui;cursor:pointer;vertical-align:middle;padding:0}
  .mic{width:44px;border:0;border-radius:14px;background:#2f9e5f;color:#fff;font:800 18px system-ui;cursor:pointer;flex:none}
  .mic.rec{background:#d0533f;animation:micp 1s ease-in-out infinite}
  @keyframes micp{50%{box-shadow:0 0 0 7px rgba(208,83,63,.28)}}`;
  document.head.appendChild(css);

  function toggleBtn(parent, before) {
    if (!TTS || document.getElementById("vtog")) return;
    const b = document.createElement("button");
    b.type = "button"; b.id = "vtog"; b.className = "vbtn" + (on ? "" : " off"); b.setAttribute("aria-label", "Voix du professeur");
    b.textContent = on ? "🔊" : "🔇";
    b.onclick = () => { on = !on; try { localStorage.setItem(LS, on ? "on" : "off"); } catch (e) {} b.textContent = on ? "🔊" : "🔇"; b.classList.toggle("off", !on); if (!on) stop(); };
    parent.insertBefore(b, before || null);
  }

  /* ===== pages de cours en dialogue (G1, G2, G4) ===== */
  function chatPage() {
    const chat = document.getElementById("chat"), zone = document.getElementById("zone");
    const top = document.querySelector(".top1");
    if (top) toggleBtn(top, document.getElementById("gear"));
    const scan = () => {
      chat.querySelectorAll(".row.t .b").forEach((b) => {
        if (b.dataset.v || b.classList.contains("cur") || b.querySelector(".dots")) return;
        const t = b.textContent.trim(); if (!t) return;
        b.dataset.v = "1";
        if (enParts(t).length && TTS) {
          const s = document.createElement("button"); s.type = "button"; s.className = "spk"; s.setAttribute("aria-label", "Écouter"); s.textContent = "🔊";
          s.onclick = (ev) => { ev.stopPropagation(); const was = on; on = true; stop(); say(t); on = was; };
          b.appendChild(s);
        }
        say(t);
      });
      /* micro dans la zone d'écriture */
      const ta = zone.querySelector("#ta");
      if (ta && SR && !zone.querySelector(".mic")) {
        const wrap = zone.querySelector(".inp"), go = zone.querySelector("#go");
        const m = document.createElement("button"); m.type = "button"; m.className = "mic"; m.setAttribute("aria-label", "Parler"); m.textContent = "🎤";
        wrap.insertBefore(m, go);
        let rec = null;
        m.onclick = () => {
          if (rec) { try { rec.stop(); } catch (e) {} return; }
          stop();
          rec = new SR();
          rec.lang = /fran[cç]ais/i.test(ta.placeholder) ? "fr-FR" : "en-GB";
          rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
          const base = ta.value ? ta.value.trim() + " " : "";
          rec.onresult = (e) => { let t = ""; for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript; ta.value = (base + t).slice(0, 300); ta.dispatchEvent(new Event("input")); };
          rec.onend = () => { rec = null; m.classList.remove("rec"); };
          rec.onerror = () => { rec = null; m.classList.remove("rec"); };
          try { rec.start(); m.classList.add("rec"); } catch (e) { rec = null; }
        };
      }
      if (chat.querySelector(".row.me:last-child")) stop();
    };
    new MutationObserver(scan).observe(chat, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    new MutationObserver(scan).observe(zone, { childList: true, subtree: true });
    window.addEventListener("pagehide", stop);
  }

  /* ===== atelier de l'horloger (c1) ===== */
  function clockPage() {
    const tabs = document.getElementById("tabs");
    if (tabs && tabs.parentNode) toggleBtn(tabs.parentNode, document.getElementById("quitC"));
    const live = document.getElementById("live"), fr = document.getElementById("fr");
    let last = "";
    const read = () => {
      const t = ((live && live.textContent) || "").replace(/_{2,}|…/g, " blank ").trim();
      if (!t || t === last) return; last = t; stop(); say(t);
    };
    if (live) new MutationObserver(read).observe(live, { childList: true, subtree: true, characterData: true });
    const bub = document.getElementById("bub");
    if (bub && TTS && !bub.querySelector(".spk")) {
      const s = document.createElement("button"); s.type = "button"; s.className = "spk"; s.textContent = "🔊"; s.setAttribute("aria-label", "Écouter");
      s.onclick = () => { const was = on; on = true; stop(); say(((fr && fr.textContent) || "") + ". " + ((live && live.textContent) || "")); on = was; };
      bub.appendChild(s);
    }
    window.addEventListener("pagehide", stop);
  }
  const init = () => { if (document.getElementById("chat") && document.getElementById("zone")) chatPage(); else if (document.getElementById("qz")) clockPage(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
