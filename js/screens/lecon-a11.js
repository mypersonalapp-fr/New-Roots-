// The Roots — leçon A1.1 « Mon identité » : Introduction → Menu → Vocabulaire.
// Intégrée au vrai routage : ouverte depuis Mes cours (mes-cours.js) avec
// renderLessonA11(root, { onExit }), même schéma que l'onboarding.
// Maquettes de référence : 06 / 07 / 08 / 09 (dossier de transmission).
// Hors leçons : fonds d'origine The Roots (jour/nuit). Ici : cartes illustrées,
// personnage choisi dans Paramètres (settings.avatarGender / avatarIndex).

import { store } from "../data/store.js?v=20260930a";
import { EXPRESSION_PLUS_A1 } from "../data/expression-plus-a1.js?v=20261025n";
import { EXTRA_TURN_A1 } from "../data/dialogues-extra-a1.js?v=20261025n";
import { withExtraQs } from "../data/extra-qs.js?v=20261025n";
import { UNLOCK_ALL_PREVIEW } from "../data/dev-config.js?v=20261025n";
import { retakeLocked, rtSeries } from "../data/bulletin-a1.js?v=20261025n";
import { runRattrapage } from "./rattrapage.js?v=20261025n";
import { AI_RELAY_URL } from "../data/ai-config.js?v=20260930a";
import { createCity } from "./roots-city.js?v=20261025n";
import { createGames } from "./jeux-a11.js?v=20261025n";
import { balanceAll } from "../data/balance.js?v=20261025n";
import { MUST_A1 } from "../data/dialogues-a1-must.js?v=20261025n";
import { REGISTERS_A1 } from "../data/dialogues-a1-registers.js?v=20261025n";
import { plusPages } from "../data/vocab-plus-a1.js?v=20261025n";
import { buildPractice, mountPractice } from "./practice.js?v=20261025n";
import { createVoice } from "./voice.js?v=20261025n";
import { CONJ_A1, conjRows, conjQuiz, conjEx, conjExFor, conjLabel, conjTitle } from "../data/conjugation-a1.js?v=20261025n";
import { REMISE } from "../data/a2-remise.js?v=20261025n";
import { WHY_A1, WHY_A2, WHY_CONJ_A1, WHY_CONJ_A2 } from "../data/pourquoi-a1.js?v=20261025n";
import { THEMES, themeById, mkItems, DICTEES, GUIDED, COMP, checkDictee, checkGuided, WRITE_CRITERIA, BILAN_PASS } from "../data/a2-bilan.js?v=20261025n";
import { SYN_TR } from "../data/syn-fr.js?v=20261025n";
import { XQ } from "../data/a1-extra-q.js?v=20261025n";
import { XQ2 } from "../data/a2-extra-q.js?v=20261025n";
import { mountQuiz, quizHtml, vocabItems, gramItems, same, maskHint, isVoc, setStrict } from "./quiz6.js?v=20261025n";
import { EXT_A1 } from "../data/dialogues-ext-a1.js?v=20261025n";
import { BATCH_A13 } from "../data/dialogues-batch-a13.js?v=20261025n";
import { SITUATIONS_A1 } from "../data/situations-a1.js?v=20261025n";
import { DIALOGUES_A1 } from "../data/dialogues-a1.js?v=20261025n";
import { DIALOGUES_A1_REST } from "../data/dialogues-a1-rest.js?v=20261025n";
import { SITUATIONS_A2 } from "../data/situations-a2.js?v=20261025n";
import { DIALOGUES_A2 } from "../data/dialogues-a2.js?v=20261025n";
import { MORE_A2 } from "../data/dialogues-more-a2.js?v=20261025n";
import { MORE_A1 } from "../data/dialogues-more-a1.js?v=20261025n";
import { flagOf } from "../data/flags.js?v=20261025n";
import { withVocabExtraPlus } from "../data/vocab-extra-plus-a1.js?v=20261025n";
import { withVocabExtra } from "../data/vocab-extra-a1.js?v=20261025n";
import { withGrammarExtra } from "../data/grammar-extra-a1.js?v=20261025n";
import { GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES, EXERCISE_PAGES, EXPRESSION_PAGES, TRANSV_DAYS, TEST_TEXTS, TEST_AUDIOS, TEST_GRAMMAR } from "../data/lecon-a11-data.js?v=20261025n";

let PROGRESS_KEY = "the_roots_a11_lesson_v1"; // fixé à chaque ouverture de leçon (renderLesson)
const GIRLS = 9;
const BOYS = 9;

/* ---------- contenu ---------- */
const GREETINGS = [
  ["Hello!", "Bonjour !"],
  ["Hi!", "Salut !"],
  ["Good morning!", "Bonjour (le matin)"],
  ["Good afternoon!", "Bonjour (l’après-midi)"],
  ["Good evening!", "Bonsoir !"],
  ["Goodbye!", "Au revoir !"],
];

// Pages 2 à 5 : mots d'identité du cahier des charges A1.1.
// q = [question, choix, index de la bonne réponse]
const IC_IMG = { vocab:1, grammar:1, reading:1, listening:1, speaking:1, exercises:1, transversal:1, test:1 };
const icImg = (id, fb) => IC_IMG[id] ? `<img class="lc-ic-img" src="assets/img/lesson/ic-${id}.webp?v=20261025n" alt="" width="28" height="28" onerror="if(!this.dataset.r){this.dataset.r=1;this.src=this.src.split('?')[0]+'?r='+Date.now();}else{this.replaceWith(document.createTextNode('${fb}'));}"/>` : fb;
const SCENES = [["scene-greeting","Hello! Nice to meet you."],["scene-friends","Hi! How are you?"],["scene-goodbye","Goodbye! See you tomorrow!"]];

const rxTest = (re, txt) => new RegExp(re, "i").test(String(txt || "").replace(/[’‘`´]/g, "'").replace(/\s+/g, " "));

// ── Conseil de l'IA (facultatif, ne compte JAMAIS dans la note) ─────────────
const ADVICE_KEY = "the_roots_a11_advice_v1", ADVICE_MAX_PER_DAY = 5;
function adviceLeft() {
  try {
    const d = new Date().toISOString().slice(0, 10), v = JSON.parse(localStorage.getItem(ADVICE_KEY) || "{}");
    return ADVICE_MAX_PER_DAY - (v.d === d ? v.n || 0 : 0);
  } catch (e) { return ADVICE_MAX_PER_DAY; }
}
function adviceUsed() {
  try {
    const d = new Date().toISOString().slice(0, 10), v = JSON.parse(localStorage.getItem(ADVICE_KEY) || "{}");
    localStorage.setItem(ADVICE_KEY, JSON.stringify({ d, n: (v.d === d ? v.n || 0 : 0) + 1 }));
  } catch (e) { /* stockage indisponible */ }
}
async function fetchAdvice(text, topic, lede) {
  if (!/^https:\/\//.test(AI_RELAY_URL || "")) throw new Error("not_configured");
  const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const res = await fetch(AI_RELAY_URL, { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl.signal,
      body: JSON.stringify({ mode: "feedback", lang: "en", variant: "en-gb", level: "A1", topic: topic || "Se présenter en anglais (A1.1)",
        lede: lede || "Prénom, âge, pays, goûts. Réponds avec bienveillance.", messages: [{ role: "user", text: String(text).slice(0, 1200) }] }) });
    const j = await res.json().catch(() => ({}));
    if (res.status === 429 || j.error === "quota_exceeded") throw new Error("quota");
    if (!res.ok || !j.text) throw new Error("relay");
    return String(j.text);
  } finally { clearTimeout(timer); }
}

const VOCAB_PAGES = [
  {
    kind: "greetings", title: "Les salutations",
    tip: "En anglais, on utilise souvent “Hi” et “Hello” dans la vie de tous les jours.",
    examples: [
      ["Hello! My name is {name}.", "Bonjour ! Je m’appelle {name}."],
      ["Hi! How are you?", "Salut ! Ça va ?"],
      ["Goodbye! See you tomorrow!", "Au revoir ! À demain !"],
    ],
    practice: "Écoute et répète la phrase.", say: "Hello! My name is {name}.",
  },
  {
    kind: "words", title: "Mon nom", scene: ["scene-name", "Remplir un formulaire : « What is your name? »"],
    words: [["first name", "prénom"], ["last name", "nom de famille"], ["nickname", "surnom"], ["full name", "nom complet"], ["age", "âge"], ["initial", "initiale"], ["title (Mr, Mrs)", "titre (M., Mme)"], ["middle name", "deuxième prénom"], ["signature", "signature"], ["capital letters", "majuscules"], ["maiden name", "nom de jeune fille"], ["to spell", "épeler"], ["spelling", "orthographe"], ["gender", "sexe"], ["family name", "nom de famille"], ["given name", "prénom (formel)"], ["name tag", "badge nominatif"], ["to introduce", "présenter"]],
    tip: "Le “first name” est le prénom ; le “last name” (ou “surname”) est le nom de famille.",
    examples: [["My first name is {name}.", "Mon prénom est {name}."], ["What is your last name?", "Quel est ton nom de famille ?"]],
    q: ["“Last name” veut dire…", ["prénom", "nom de famille", "surnom"], 1],
  },
  {
    kind: "words", title: "Naissance et lieu", scene: ["scene-birth", "Montrer d’où l’on vient : « I was born in… »"],
    words: [["date of birth", "date de naissance"], ["place of birth", "lieu de naissance"], ["country", "pays"], ["city", "ville"], ["birthday", "anniversaire"], ["town", "petite ville"], ["village", "village"], ["born", "né(e)"], ["year of birth", "année de naissance"], ["month of birth", "mois de naissance"], ["to be born", "naître"], ["region", "région"], ["hospital", "hôpital"], ["month", "mois"], ["to live", "habiter"], ["to move", "déménager"], ["childhood", "enfance"], ["birth certificate", "acte de naissance"]],
    tip: "On dit “I was born in…” pour donner son lieu de naissance.",
    examples: [["My country is France.", "Mon pays est la France."], ["I live in Paris.", "J’habite à Paris."]],
    q: ["“City” veut dire…", ["pays", "ville", "adresse"], 1],
  },
  {
    kind: "words", title: "Nationalité et résidence", scene: ["scene-nationality", "Les drapeaux : « What is your nationality? »"], icon: "🌍",
    words: [["nationality", "nationalité"], ["address", "adresse"], ["phone number", "numéro de téléphone"], ["email", "adresse e-mail"], ["postcode", "code postal"], ["street", "rue"], ["mobile", "portable"], ["passport", "passeport"], ["ID card", "carte d’identité"], ["flat / apartment", "appartement"], ["home", "domicile"], ["contact details", "coordonnées"], ["postal address", "adresse postale"], ["city centre", "centre-ville"], ["resident", "résident(e)"], ["foreign", "étranger"], ["address line", "ligne d’adresse"], ["landline", "téléphone fixe"]],
    tip: "“Nationality” se termine souvent par -ish, -an ou -ese : British, Canadian, Chinese.",
    examples: [["What is your nationality?", "Quelle est ta nationalité ?"], ["What is your address?", "Quelle est ton adresse ?"]],
    q: ["“Address” veut dire…", ["adresse", "âge", "poids"], 0],
  },
  {
    kind: "words", title: "Les nombres", scene: ["scene-numbers", "Compter : « one, two, three… »"], icon: "🔢",
    words: [["one, two, three", "un, deux, trois"], ["ten", "dix"], ["fifteen", "quinze"], ["twenty", "vingt"], ["thirty", "trente"], ["a hundred", "cent"], ["zero", "zéro"], ["five", "cinq"], ["twelve", "douze"], ["number", "numéro / nombre"], ["six", "six"], ["seven", "sept"], ["eight", "huit"], ["nine", "neuf"], ["eleven", "onze"], ["thirteen", "treize"], ["eighteen", "dix-huit"], ["nineteen", "dix-neuf"]],
    tip: "Attention : “fifteen” = 15 mais “fifty” = 50 ; “thirteen” = 13 mais “thirty” = 30.",
    examples: [["I am twenty-two years old.", "J’ai vingt-deux ans."], ["My phone number is oh seven, one two…", "Mon numéro est le 07 12…"]],
    q: ["“Fifty” veut dire…", ["15", "50", "5"], 1],
  },
  {
    kind: "words", title: "Apparence physique", scene: ["scene-describe", "Décrire une personne : « He has curly brown hair. »"], icon: "📏",
    words: [["height", "taille"], ["weight", "poids"], ["shoe size", "pointure"], ["skin colour", "couleur de peau"], ["eye colour", "couleur des yeux"], ["hair colour", "couleur des cheveux"], ["tall", "grand(e)"], ["short", "petit(e)"], ["slim", "mince"], ["young", "jeune"], ["old", "âgé(e)"], ["thin", "maigre"], ["handsome", "beau"], ["fat", "gros(se)"], ["fit", "en forme"], ["strong", "fort(e)"], ["pretty", "joli(e)"], ["bald", "chauve"], ["beard", "barbe"], ["blond", "blond(e)"]],
    tip: "Pour la taille : “I am one metre seventy.” Pour les yeux : “I have blue eyes.”",
    examples: [["I am one metre seventy.", "Je mesure 1,70 m."], ["My shoe size is thirty-nine.", "Je chausse du 39."], ["She has long brown hair.", "Elle a de longs cheveux châtains."]],
    q: ["“Shoe size” veut dire…", ["pointure", "taille", "poids"], 0],
  },
  {
    kind: "words", title: "Le corps", scene: ["scene-body", "Les parties du corps : « head, arms, legs, feet »"], icon: "🧍",
    words: [["head", "tête"], ["eye", "œil"], ["hand", "main"], ["arm", "bras"], ["leg", "jambe"], ["foot (feet)", "pied (pieds)"], ["nose", "nez"], ["mouth", "bouche"], ["ear", "oreille"], ["finger", "doigt"], ["shoulder", "épaule"], ["knee", "genou"], ["back", "dos"], ["neck", "cou"], ["stomach", "ventre"], ["chest", "poitrine"], ["elbow", "coude"], ["toe", "orteil"]],
    tip: "Pluriels irréguliers : one foot → two feet ; one tooth → two teeth.",
    examples: [["I have two arms and two legs.", "J’ai deux bras et deux jambes."], ["Her hands are small.", "Ses mains sont petites."]],
    q: ["“Leg” veut dire…", ["bras", "jambe", "main"], 1],
  },
  {
    kind: "words", title: "Décrire et présenter",
    words: [["student", "étudiant(e)"], ["teacher", "enseignant(e)"], ["job", "métier"], ["doctor", "médecin"], ["engineer", "ingénieur(e)"], ["nurse", "infirmier / infirmière"], ["worker", "ouvrier / employé(e)"], ["manager", "responsable"], ["driver", "chauffeur"], ["farmer", "agriculteur"], ["cook", "cuisinier"], ["salesperson", "vendeur / vendeuse"], ["pilot", "pilote"]],
    tip: "“I am a student” : on met “a” devant un métier ou un statut.",
    examples: [["I am a student.", "Je suis étudiant(e)."], ["She is a teacher.", "Elle est enseignante."]],
    q: ["“Teacher” veut dire…", ["étudiant(e)", "métier", "enseignant(e)"], 2],
  },
];

const LEARN_GOALS = [
  "Te présenter",
  "Poser et répondre à des questions simples",
  "Décrire ta nationalité, ton âge et ta famille",
  "Parler de ce que tu aimes",
  "Comprendre et présenter une autre personne",
];

const MENU = [
  { n: 1, id: "vocab", icon: "📖", title: "Vocabulaire", sub: "Mots essentiels", ready: true },
  { n: 2, id: "grammar", icon: "⚙️", title: "Grammaire", sub: "Règles simples", ready: true },
  { n: 3, id: "reading", icon: "📚", title: "Lecture", sub: "Compréhension écrite", ready: true },
  { n: 4, id: "listening", icon: "🎧", title: "Écoute", sub: "Compréhension orale", ready: true },
  { n: 5, id: "speaking", icon: "🎤", title: "Expression", sub: "Parler et écrire", ready: true },
  { n: 5.5, id: "dialogue", icon: "💬", title: "Conversation", sub: "Réponds en anglais à un personnage", ready: true },
  { n: 5.6, id: "write", icon: "✍️", title: "Écrire en anglais", sub: "Dictée et phrases à toi", ready: true },
  { section: "S’entraîner et progresser" },
  { n: 6, id: "exercises", icon: "🧩", title: "Exercices", sub: "Corrections et rattrapage", ready: true },
  { n: 7, id: "city", icon: "🏙️", title: "Roots City", sub: "6 missions pour t’entraîner (non noté)", ready: true },
  { n: 8, id: "transversal", icon: "🌱", title: "Transversale", sub: "Foundations : couleurs, nombres, dates, heure", ready: true },
  { n: 9, id: "test", icon: "🏆", title: "Test de fin de leçon", sub: "Valide tes acquis", ready: true },
];

/* ---------- état / préférences ---------- */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); } catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* stockage indisponible */ }
}

export function currentCharacter() {
  const s = store.get().settings;
  const gender = s.avatarGender === "boy" ? "boy" : "girl";
  const max = gender === "boy" ? BOYS : GIRLS;
  const idx = Math.min(Math.max(Number(s.avatarIndex) || 0, 0), max - 1);
  const name = gender === "boy" ? "Lucas" : "Emma", key = name.toLowerCase();

  const hasFull = true; // les 18 personnages ont une version en pied
  // Emma et Lucas (n°1) ont une version en pied (introduction) et une version « réussite ».
  return { gender, idx, src: `assets/img/characters/${gender}-${idx + 1}.webp`, name,
    full: hasFull ? (idx === 0 ? `assets/img/characters/${key}-intro.webp` : `assets/img/characters/${gender}-${idx + 1}-intro.webp`) : null,
    win: idx === 0 ? `assets/img/characters/${key}-win.webp` : (hasFull ? `assets/img/characters/${gender}-${idx + 1}-intro.webp` : null) };
}

/* ---------- audio (Safari iPhone : speak() appelé directement dans le clic) ---------- */
function pickVoice() {
  try {
    const voices = window.speechSynthesis.getVoices();
    const pref = store.get().settings.preferredVoiceURI;
    return (pref && voices.find((v) => `${v.name}|${v.lang}` === pref))
      || voices.find((v) => /^en[-_]GB/i.test(v.lang))
      || voices.find((v) => /^en/i.test(v.lang)) || null;
  } catch (e) { return null; }
}
let speedMul = 1;
function speak(text) {
  if (!window.speechSynthesis || !text) return false;
  try {
    const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ""));
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
    u.rate = 0.9 * speedMul;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    return true;
  } catch (e) { return false; }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ico = (src, cls = "") => `<img class="lc-ava ${cls}" src="${src}" alt="" loading="lazy"/>`;
// Texte à lire à voix haute pour une ligne de règle (le premier morceau qui est de l'anglais : exemple, forme, puis 1re colonne)
const FR_W = /(^|[\s'’])(je|tu|il|elle|on|nous|vous|ils|elles|le|la|les|un|une|des|du|de|pas|avec|sans|apr[eè]s|verbe|chaque|jour|forme|r[eé]ponses?|courtes?|jamais|souvent|si|et|ou|pour|dans|sur|est|sont|sommes|suis|es|ai|as|avons|ont|fais|quoi|qui|combien|quand|pourquoi|jou[eé]s?|voyelle|consonne|voudrais|veux|peux|ne|d[eé]sol[eé]|oui|non|bien|s[uû]re|t'aime|ma|mes|mon|ton|ta|tes|sa|ses|son|notre|nos|leur|leurs|ces|ce|cet|cette|chien|livre|chaussures|voitures|sac|mère|père|frère|sœur|nom|propre|pluriel|singulier|seulement|en|adjectif|invariable|métier|état|négation|indénombrable|beaucoup|quelques|peu|question|retenir|règle|générale|irrégulier|à|qu'est-ce|c'est)([\s'’.,?!:;)\-]|$)|-(je|tu|il|elle|on|nous|vous|ils|elles|ce|t-il|t-elle|ci|là)\b/i;
const sayRow = ([a, b, f]) => {
  const cl = (t) => String(t || "").replace(/\(.*?\)/g, "").replace(/[✓✗×]/g, "").replace(/\s*\+\s*(verbe|sujet|-s|nom|pluriel|singulier|indénombrable)\b/gi, "").replace(/→/g, ", ").replace(/\s*\/\s*/g, ", ").replace(/…/g, "").replace(/\s+/g, " ").replace(/\s+,/g, ",").replace(/([.!?]),/g, "$1").trim();
  const enl = (t) => { const c = cl(t); return /[a-z]/i.test(c) && !/[éèêàùçôîâûœ]/i.test(c) && !FR_W.test(c) && !/-(moi|nous|toi)\b|appelle|rejoins|attends/i.test(c); };
  const en = (t) => cl(t).length > 2 && enl(t);
  const nz = (t) => cl(t).toLowerCase().replace(/[^a-z0-9’' ]/g, "").trim();
  const full = (t) => /[.!?]$/.test(cl(t)) && !/→|…|\//.test(t) && cl(t).split(" ").length >= 3;
  if (/→/.test(a) && (/^\s*\+|→|voyelle|consonne/i.test(b))) return cl(a);
  if (/\//.test(b) && /[’']/.test(b) && enl(b) && !en(f)) return cl(b);
  if (en(f) && nz(a).length > 2 && nz(f).includes(nz(a))) return cl(f);
  if (enl(a) && !/→|…|\//.test(a) && /\s/.test(cl(a)) && cl(a).length >= 6 && !enl(b) && en(f)) return cl(a) + " " + cl(f);
  if (enl(a) && !/→|…|\//.test(a) && /\s/.test(cl(a)) && cl(a).length >= 6 && !enl(b) && !f) return cl(a);
  if (full(a)) return cl(a);
  if (en(b) && nz(b).startsWith(nz(a).replace(/s$/, "")) && cl(b).split(" ").length >= 3) return cl(b);
  if (!en(f) && !/→/.test(a) && enl(a) && enl(b) && cl(a).length + cl(b).length <= 34) return cl(a) + " " + cl(b);
  for (const t of [f, b, a]) if (en(t)) return cl(t);
  return cl(a);
};
const spk = (text, label) => `<button type="button" class="lc-spk" data-say="${esc(text)}" aria-label="Écouter : ${esc(label || text)}">🔊</button>`;
const dlgTurns = (t) => { const a = String(t || "").split(/\s+—\s+/).map((x) => x.trim()).filter(Boolean); return a.length >= 3 ? a : null; };
const dlgBubbles = (turns, withSpk) => `<div class="lc-bl lc-bl-full">${turns.map((x, i) => `<div class="lc-bb ${i % 2 ? "me" : "npc"}"><span class="lc-bt">${esc(x)}</span>${withSpk ? spk(x) : ""}</div>`).join("")}</div>`;

/* ---------- rendu ---------- */
export function renderLesson(root, B, { onExit, start } = {}) {
  if (!B._xq) { B._xq = 1; const xn = /^A([12])\.(\d+)$/.exec(String(B.code || "")), xs = xn && (xn[1] === "1" ? XQ : XQ2)[Number(xn[2])]; if (xs) [["reading", "r"], ["listening", "l"]].forEach(([k, c]) => (B[k] || []).forEach((pg, i) => { const ex = xs[c] && xs[c][i]; if (ex && pg.qs) { const nz = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(), seen = new Set(pg.qs.map((q) => nz(q[0]))); pg.qs = [...pg.qs, ...ex.filter((q) => !seen.has(nz(q[0])) && seen.add(nz(q[0])))]; } })); } // plus de questions par texte
  PROGRESS_KEY = B.progressKey; setStrict(/^A2/.test(String(B.code || "")));
  const HEAD = B.head;
  const prog = loadProgress();
  let screen = "intro"; // intro | menu | vocab
  let page = 0;
  const answered = {}; // page → true une fois le mini-quiz réussi (ou vu)

  const el = document.createElement("div");
  el.className = "screen lc-screen";
  root.innerHTML = "";
  root.appendChild(el);
  // Glisser vers la droite (ou geste retour iPhone) : page précédente ; à la première page → menu de la leçon ; dans le menu → sortie + ouverture du menu principal.
  const swipeBack = () => {
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    if (screen === "intro") return;
    if (screen === "menu") { onExit && onExit(); setTimeout(() => { const h = document.getElementById("hamburgerBtn"); if (h) h.click(); }, 400); return; }
    const pv = el.querySelector("#lcPrev, #dlgPrev");
    if (pv && !pv.disabled) pv.click(); else showMenu();
  };
  try { history.pushState({ lc: 1 }, ""); } catch (e) {}
  const onPop = () => {
    if (!el.isConnected) { window.removeEventListener("popstate", onPop); return; }
    try { history.pushState({ lc: 1 }, ""); } catch (e) {}
    swipeBack();
  };
  window.addEventListener("popstate", onPop);
  let sw = null;
  el.addEventListener("touchstart", (e) => { const t = e.touches[0]; sw = e.touches.length === 1 && !e.target.closest("textarea, input, [data-noswipe]") ? { x: t.clientX, y: t.clientY, t: Date.now() } : null; }, { passive: true });
  el.addEventListener("touchend", (e) => {
    if (!sw) return; const t = e.changedTouches[0], dx = t.clientX - sw.x, dy = Math.abs(t.clientY - sw.y), dt = Date.now() - sw.t; sw = null;
    if (dx > 90 && dy < 45 && dx > dy * 2.5 && dt < 700) swipeBack();
  }, { passive: true });
  const capSel = ".lc-w b, .lc-w small, .lc-form, .lc-bt, .lc-bt small, .lc-q";
    const capFirst = () => el.querySelectorAll(capSel).forEach((e) => { for (const nd of e.childNodes) { if (nd.nodeType === 3 && nd.nodeValue.trim()) { const t = nd.nodeValue, i = t.search(/\S/); const u = t[i].toLocaleUpperCase("fr"); if (u !== t[i]) nd.nodeValue = t.slice(0, i) + u + t.slice(i + 1); break; } } });
    new MutationObserver(capFirst).observe(el, { childList: true, subtree: true });
  // Mode vérification : aucun blocage (voir UNLOCK_ALL_PREVIEW dans dev-config.js).
  if (UNLOCK_ALL_PREVIEW) {
    new MutationObserver(() => { const n = el.querySelector("#lcNext"); if (n && n.disabled) n.disabled = false; })
      .observe(el, { subtree: true, childList: true, attributes: true, attributeFilter: ["disabled"] });
  }

  // Ajoute sous la zone d'écriture un bouton « Obtenir un conseil » (IA) — jamais noté.
  function mountAdvice(getText) {
    const ta = el.querySelector("#lcTa"); if (!ta) return;
    const card = ta.closest("section") || ta.parentElement;
    const box = document.createElement("details"); box.className = "lc-advice";
    box.innerHTML = `<summary class="lc-advice-sum">💡 Conseil d’une IA (facultatif)</summary><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Ton texte est envoyé à Google pour l’obtenir. Il ne change pas ta note.</p>
      <button type="button" class="lc-sec-btn lc-advice-btn">💡 Obtenir un conseil</button><div class="lc-advice-out" aria-live="polite"></div>`;
    card.appendChild(box);
    const btn = box.querySelector(".lc-advice-btn"), out = box.querySelector(".lc-advice-out");
    btn.onclick = async () => {
      const txt = (getText() || "").trim();
      if (txt.length < 15) { out.textContent = "Écris d’abord au moins une phrase en anglais."; return; }
      if (adviceLeft() <= 0) { out.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
      btn.disabled = true; out.textContent = "L’IA lit ton texte…";
      try { const r = await fetchAdvice(txt, B.adviceTopic, B.adviceLede); adviceUsed(); out.textContent = r; out.classList.add("on"); }
      catch (e) { out.classList.remove("on"); out.textContent = e.message === "quota" ? "Le service de conseils est très demandé. Réessaie un peu plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant (connexion ?). Ta note n’est pas affectée."; }
      finally { btn.disabled = false; }
    };
  }

  function frame(headTitle, counter, inner, foot) {
    const pct = counter ? Math.round((counter.cur / counter.total) * 100) : 0;
    el.innerHTML = `
      <img class="screen-cover-bg bg-img-light" src="assets/img/shell-bg.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-dark" src="assets/img/shell-bg-dark.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape" src="assets/img/shell-bg-landscape.jpg" alt="" aria-hidden="true"/>
      <img class="screen-cover-bg bg-img-landscape-dark" src="assets/img/shell-bg-landscape-dark.jpg" alt="" aria-hidden="true"/>
      <div class="lc-wrap">
        <header class="lc-head">
          <button type="button" class="lc-back" id="lcBack">← Retour</button>
          <div class="lc-head-title">${esc(headTitle)}</div>
          ${counter ? `<div class="lc-count" aria-label="Page ${counter.cur} sur ${counter.total}">${counter.cur}/${counter.total}</div>` : `<div class="lc-count lc-count-ghost"></div>`}
        </header>
        ${counter ? `<div class="lc-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>` : ""}
        <main class="lc-main">${screen !== "menu" && screen !== "intro" ? matChip(counter) : ""}${inner}</main>
        ${foot || ""}
      </div>`;
    el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => {
      if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil");
      b.classList.add("lc-spk-on"); setTimeout(() => b.classList.remove("lc-spk-on"), 900);
    }));
    el.querySelectorAll("[data-recap]").forEach((b) => b.addEventListener("click", () => openRecap(b.dataset.recap, b.dataset.kind === "audio")));
  }

  // « Revoir le texte » / « Réécouter » : le texte ou l'audio reste accessible depuis les pages de questions (sans changer la mise en page).
  function openRecap(txt, audio) {
    const s = document.createElement("div"); s.className = "lc-recap-sheet";
    s.innerHTML = `<div class="lc-recap-card" role="dialog" aria-label="${audio ? "Réécouter l’audio" : "Revoir le texte"}">${audio
      ? `<p class="lc-lead">Écoute encore l’audio.</p><div class="lc-player"><button type="button" class="lc-play" data-r="say" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span></div>`
      : `<p class="lc-text">${esc(txt)}</p><div class="lc-actions"><button type="button" class="lc-chip" data-r="say">🔊 Écouter</button></div>`}
      <button type="button" class="lc-cta lc-recap-close" data-r="close">Fermer</button></div>`;
    s.addEventListener("click", (e) => {
      const r = e.target.closest("[data-r]");
      if (r && r.dataset.r === "say") { if (!speak(txt)) toast("Audio indisponible sur cet appareil"); return; }
      if (e.target === s || (r && r.dataset.r === "close")) s.remove();
    });
    el.appendChild(s);
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "lc-toast"; t.textContent = msg; el.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  const city = createCity({ el, frame, esc, speak, toast, back: () => showMenu(), missions: B.city && B.city.missions, data: B.city && B.city.data,
    getStars: () => prog.city || {},
    setStar: (k, v) => { prog.city = Object.assign({}, prog.city, { [k]: Math.max(v, (prog.city || {})[k] || 0) }); saveProgress(prog); } });

  // Jeux : mots de la leçon (paires EN/FR) ; niveau 0 = A1, 1 = A2.
  const gameWords = [];
  (B.vocab || []).forEach((pg) => (pg.words || []).forEach(([en, fr]) => { if (en && fr && !/[?!]/.test(en)) gameWords.push({ en: String(en).replace(/\s*\(.*?\)\s*/g, "").trim(), fr: String(fr).replace(/\s*\(.*?\)\s*/g, "").trim(), sc: pg.scene && pg.scene[0] }); }));
  const games = createGames({ el, frame: (h, c, inner) => frame(h, c, inner), head: HEAD, esc, speak, toast, setScreen: (v) => { screen = v; }, back: () => showMenu(), words: gameWords, level: String(B.code || "").startsWith("A2") ? 1 : 0, mode: (() => { const m = /^(A1|A2|B1|B2|C1|C2)\.?(\d+)?/.exec(String(B.code || "")); if (!m) return 0; if (m[1] === "A1") return 0; if (m[1] === "A2") return (+m[2] || 0) <= 6 ? 0 : 1; return 2; })(), prog, save: () => saveProgress(prog) });

  function showIntro() {
    screen = "intro";
    const c = currentCharacter();
    frame(HEAD, { cur: 1, total: 8 }, `
      <section class="lc-hero">
        <div class="lc-bubble">${esc(B.bubble || "Hello!")}</div>
        ${c.full ? `<img class="lc-hero-full" src="${c.full}" alt="Personnage ${c.name}"/>` : `<img class="lc-hero-img" src="${c.src}" alt="Personnage ${c.name}"/>`}
      </section>
      <section class="lc-card lc-intro">
        <div class="lc-level">${esc(B.code)}</div>
        <h1>${esc(B.titleFr)}</h1>
        <p class="lc-lead">Dans cette leçon, tu vas apprendre à :</p>
        <ul class="lc-goals">${B.goals.map((g) => `<li><span class="lc-check">✓</span>${esc(g)}</li>`).join("")}</ul>
        <button type="button" class="lc-cta" id="lcStart">Commencer la leçon →</button>
      </section>`);
    el.querySelector("#lcBack").onclick = () => onExit && onExit();
    el.querySelector("#lcStart").onclick = showMenu;
  }

  // Matières (menu mosaïque) : chaque matière a sa couleur, son icône et son écran. `go` = identifiant d'action.
  const MAT = [
    { go: "vocab", t: "Vocabulaire", s: "Mots Illustrés", c: "#F59E0B", img: "vocab", em: "📖", d: "vocab" },
    { go: "games", t: "Jeux", s: "8 Jeux", c: "#8B5CF6", img: "exercises", em: "🎮", d: "games" },
    { go: "grammar", t: "Grammaire", s: "Les Règles", c: "#22A06B", img: "grammar", em: "⚙️", d: "grammar" },
    { go: "conj", t: "Conjugaison", s: "Les Verbes", c: "#EF476F", em: "🔁", d: "conj", need: "conj" },
    { go: "listening", t: "Compréhension Orale", s: "Écouter", c: "#2F80ED", img: "listening", em: "🎧", d: "listening" },
    { go: "reading", t: "Compréhension Écrite", s: "Lire", c: "#0FA3A3", img: "reading", em: "📰", d: "reading" },
    { go: "ewrite", t: "Expression Écrite", s: "Écrire", c: "#5B5BD6", em: "✍️", d: "speaking" },
    { go: "eoral", t: "Expression Orale", s: "Prononcer Et Parler", c: "#D946EF", img: "speaking", em: "🎤", d: "speaking" },
    { go: "dialogue", t: "Conversation", s: "Répondre À Un Personnage", c: "#0891B2", em: "💬", d: "dialogue", need: "dlg" },
    { go: "write", t: "Dictée", s: "Écrire Ce Que J’entends", c: "#B7791F", em: "📝", d: "write", need: "sit" },
    { go: "trad", t: "Traduction", s: "EN ↔ FR", c: "#65A30D", em: "🌍", d: "speaking" },
    { go: "test", t: "Contrôle", s: "Vérifier", c: "#DC2626", img: "test", em: "🏁", d: "test" },
  ];
  const EXTRA = [
    { go: "exercises", t: "Exercices", s: "Corrections Et Rattrapage", c: "#16A34A", img: "exercises", em: "🧩", d: "exercises" },
    { go: "bilan", t: "Bilan", s: "Où J’en Suis · Sans Note", c: "#0EA5E9", em: "🧭", d: "bilan", need: "bilan" },
    { go: "remise", t: "A2.01", s: "Remise À Niveau", c: "#F59E0B", em: "🔧", d: "remise", need: "remise" },
    { go: "city", t: "Roots City", s: "6 Missions", c: "#0EA5E9", em: "🏙️", d: "city" },
    { go: "transversal", t: "Transversale", s: "Les Bases", c: "#84A016", img: "transversal", em: "🌱", d: "transversal", need: "transv" },
  ];
  const matIcon = (m) => (m.img ? icImg(m.img, m.em) : `<span class="lc-ph-ic">${m.em}</span>`);
  // Pastille de matière affichée en haut de chaque écran de matière (on sait toujours où on est).
  function matChip(counter) {
    let m = null;
    if (screen === "speaking") m = MAT.find((x) => x.go === (spkState.tab === "speak" ? "eoral" : "ewrite"));
    else m = MAT.find((x) => x.d === screen && x.go !== "trad" && x.go !== "ewrite" && x.go !== "eoral") || EXTRA.find((x) => x.d === screen);
    if (!m) return "";
    const pct = counter ? Math.round((counter.cur / counter.total) * 100) : 0;
    return `<div class="lc-mchip" style="--c:${m.c || "#E8A23A"}"><span class="lc-mchip-ic">${matIcon(m)}</span><div class="lc-mchip-tx"><b>${esc(m.t)}</b>${m.s ? `<small>${esc(m.s)}</small>` : ""}</div>${counter ? `<div class="lc-mchip-pg"><i><s style="width:${pct}%"></s></i></div>` : ""}</div>`;
  }

  function showMenu() {
    screen = "menu";
    const done = prog.done || {};
    const ok = (m) => (m.need === "dlg" ? !!DLG : m.need === "sit" ? !!SIT : m.need === "transv" ? !!B.transv : m.need === "conj" ? !!conjList() : m.need === "bilan" ? !!B.bilan : m.need === "remise" ? !!(B.bilan && prog.bilan && prog.bilan.pct < BILAN_PASS) : true);
    const inMenu = (m) => !B.menu || B.menu.includes(m.go); // parcours réduit (ex. A2.0 passerelle) : seulement les matières listées
    const ALL = MAT.filter((m) => inMenu(m) && (m.go !== "trad" || (B.expression || []).some((x) => x.trad))).concat(EXTRA.filter((m) => ok(m) && inMenu(m))); // Traduction : seulement à partir de A1.6
    const tiles = ALL.map((m, i) => {
      const off = m.soon || !ok(m);
      const isDone = m.d && done[m.d] && !off;
      const wide = ALL.length % 2 === 1 && i === ALL.length - 1;
      return `<button type="button" class="lc-tile ${off ? "lc-tile-off" : ""} ${wide ? "lc-tile-wide" : ""}" data-go="${m.go}" style="--c:${m.c}">
        <span class="lc-tn">${i + 1}</span><span class="lc-tic">${matIcon(m)}</span>
        <b>${esc(m.t)}</b><small>${esc(off ? "Bientôt" : m.s)}</small>${isDone ? `<span class="lc-tdone">✓</span>` : ""}</button>`;
    }).join("");
    frame(HEAD, { cur: 1, total: ALL.length }, `<section class="lc-mosaic">${tiles}</section>`);
    el.querySelector("#lcBack").onclick = showIntro;
    el.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => {
      const g = b.dataset.go;
      if (g === "vocab") { page = 0; showVocab(); }
      else if (g === "ewrite") { spkState.tab = "write"; page = 0; showSpeak(); }
      else if (g === "eoral") { spkState.tab = "speak"; page = 0; showSpeak(); }
      else if (g === "games") { games.open(); }
      else if (g === "trad") { spkState.tab = "write"; const k = B.expression.findIndex((x) => x.trad); page = Math.max(0, k); showSpeak(); }
      else if (g === "dialogue") { if (DLG) showDialogueList(); else toast("Cette matière arrive bientôt"); }
      else if (g === "write") { if (SIT) showWriteList(); else toast("Cette matière arrive bientôt"); }
      else if (g === "conj") { page = 0; cjTab = 0; showConj(); }
      else if (g === "bilan") { bl = null; showBilan(); }
      else if (g === "remise") { showRemise(); }
      else if (g === "city") { city.start(); }
      else if (g === "transversal") { showTransvList(); }
      else if (g === "test") { startTest(); }
      else if (ACT[g]) { page = 0; showAct(g); }
      else toast("Cette matière arrive bientôt");
    }));
  }

  // Une scène dont l'image est absente n'occupe aucune place : la pagination se calcule sans elle (pas de vide).
  const capW = (x) => { const t = String(x); const i = t.search(/[A-Za-zÀ-ÿ]/); return i < 0 ? t : t.slice(0, i) + t[i].toUpperCase() + t.slice(i + 1); };
  const capWords = (p) => { if (p && Array.isArray(p.words)) p.words = p.words.map((w) => [capW(w[0]), capW(w[1]), ...w.slice(2)]); return p; };
  const hasScene = (p) => !!p.scene && !(B._noScene && B._noScene[p.scene[0]]);
  // Étapes du vocabulaire : chaque page de mots = écran(s) de 5 mots max, puis UN écran d'exercices. Rien à faire défiler.
  function vocabSteps() {
    const S = [];
    B.vocab.forEach((p0, pi) => {
      // La page d'ouverture (salutations / personnes) suit le même format que les autres pages de mots.
      const p = p0.kind === "greetings" ? Object.assign({}, p0, { kind: "words", wasGreet: true, icon: "👥", words: (B.greetings && B.greetings.length ? B.greetings : p0.examples).map((x) => x.slice(0, 2)), examples: p0.examples }) : p0;
      B.vocab[pi] = p; withVocabExtra(p); withVocabExtraPlus(p); capWords(p);
      if (p.wasGreet) return; // phrases clés : elles vivent dans « Conversation »
      // Écrans équilibrés (jamais un mot seul) : 6 mots max par écran, 4 si l'image de la scène est affichée en entier (16:9).
      const L = p.words.length, sc = hasScene(p), capF = sc ? 5 : 8, capM = 8, capL = 5, ch = [];
      let sizes = (B._S || (B._S = {}))[pi]; const fresh = !sizes || sizes.reduce((x, y) => x + y, 0) !== L;
      if (fresh) {
        let caps0 = [capL]; if (L > capL) { caps0 = [capF, capL]; while (caps0.reduce((x, y) => x + y, 0) < L) caps0.splice(caps0.length - 1, 0, capM); }
        const tot0 = caps0.reduce((x, y) => x + y, 0), raw0 = caps0.map((c) => L * c / tot0); sizes = raw0.map((x) => Math.max(1, Math.floor(x)));
        let rest0 = L - sizes.reduce((x, y) => x + y, 0);
        for (let k = 0; rest0 > 0; k = (k + 1) % sizes.length) { sizes[k]++; rest0--; }
        for (let k = 0; rest0 < 0; k = (k + 1) % sizes.length) { if (sizes[k] > 1) { sizes[k]--; rest0++; } }
      }
      if (fresh && sc && L >= 10 && sizes[0] < 6 && !(window.__vsizes && window.__vsizes[p.title])) { const rest = L - 6, np = Math.ceil(rest / 6), base = Math.floor(rest / np); sizes = [6]; for (let k = 0, r = rest - base * np; k < np; k++) sizes.push(base + (k < r ? 1 : 0)); } // image de la page 1 : 6 mots
      if (fresh && sc && L >= 17 && !(window.__vsizes && window.__vsizes[p.title])) sizes = [6, 7, ...(L - 13 > 7 ? [Math.ceil((L - 13) / 2), Math.floor((L - 13) / 2)] : [L - 13])]; // page 2 : 7 mots, sans exemple
      if (window.__vsizes && window.__vsizes[p.title]) sizes = window.__vsizes[p.title].slice(); // outil de test
      if (!sc && L <= 7 && !(B._S && B._S[pi] && false)) sizes = [L]; // pas d'image : jusqu'à 8 mots sur une seule page (jamais 4 + 3)
      while (sizes.length > 1 && sizes[sizes.length - 1] < 4 && sizes[sizes.length - 2] > 4) { sizes[sizes.length - 1]++; sizes[sizes.length - 2]--; }
      for (let i = 0, k = 0; k < sizes.length; k++) { if (sizes[k]) ch.push(p.words.slice(i, i + sizes[k])); i += sizes[k]; }
      const hasCtx = false, nTot = ch.length;
      ch.forEach((w, ci) => { S.push({ t: "words", p, pi, words: w, ci, n: nTot, last: ci === ch.length - 1 && !hasCtx }); S.push({ t: "vtest", p, pi, ci, words: w }); });
      if (hasCtx) S.push({ t: "ctx", p, pi, ci: ch.length, n: nTot });
      S.push({ t: "prac", p, pi });
    });
    return S;
  }
  // remplit le vide d'une page de leçon : lignes de mots / réponses plus aérées, puis image
  function fillRows() { fillRows0(); fillTyped(); }
  // pages à réponse écrite : le reste de la place est réparti entre les questions (jamais au point de déborder)
  function fillTyped() {
    const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); if (!m || !f) return;
    const qs = [...m.querySelectorAll(".lc-qb")].filter((b) => b.querySelector(".q6-w")); if (!qs.length) return;
    ["--qh", "--qf", "--qp"].forEach((v) => m.style.removeProperty(v)); m.classList.remove("q6-tight"); m.classList.add("q6-fill");
    const card = qs[qs.length - 1].closest(".lc-card") || m.lastElementChild;
    const lastQ = qs[qs.length - 1], rowsOk = () => lastQ.getBoundingClientRect().bottom <= card.getBoundingClientRect().bottom - 6;
    const fits = () => m.scrollHeight <= m.clientHeight + 2 && card.getBoundingClientRect().bottom <= f.getBoundingClientRect().top - 40 && rowsOk();
    if (!fits()) { m.classList.add("q6-tight"); return; }
    const guard = () => { if (card.isConnected && (card.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 4 || !rowsOk())) { ["--qh", "--qf", "--qp"].forEach((v) => m.style.removeProperty(v)); m.classList.add("q6-tight"); } };
    setTimeout(guard, 0); setTimeout(guard, 250);
    for (let l = 22; l > 0; l--) { // plus la page est haute, plus les lignes de réponse et les questions grandissent
      m.style.setProperty("--qh", Math.min(36 + l * 2.5, 68) + "px"); m.style.setProperty("--qf", Math.min(15 + l * 0.4, 20) + "px"); m.style.setProperty("--qp", Math.min(l * 1.2, 22) + "px");
      if (fits()) return;
    }
    ["--qh", "--qf", "--qp"].forEach((v) => m.style.removeProperty(v));
  }
  function fillRows0() {
    const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); if (!m || !f) return;
    const cards0 = m.querySelectorAll(":scope > .lc-card"), c0x = cards0[cards0.length - 1];
    const reset = () => { if (!c0x) return; c0x.style.minHeight = c0x.style.display = c0x.style.flexDirection = c0x.style.justifyContent = ""; c0x.querySelectorAll(":scope > ul.lc-list").forEach((u) => { u.style.flex = u.style.alignContent = ""; }); c0x.querySelectorAll("li, .lc-choice").forEach((x) => { x.style.paddingTop = x.style.paddingBottom = ""; }); c0x.querySelectorAll(".lc-qb").forEach((x) => { x.style.removeProperty("margin-bottom"); }); };
    reset();
    if (m.classList.contains("lc-listen")) { // Écoute : cases à taille normale ; le reste de la place est réparti dans les lignes des phrases clés
      const kw = m.querySelector(".lc-kw"), rows = kw ? kw.querySelectorAll("li") : [];
      if (!m.dataset.fr) { m.dataset.fr = "1"; setTimeout(fillRows, 500); }
      if (rows.length) {
        const L = Math.floor(f.getBoundingClientRect().top - kw.getBoundingClientRect().bottom - 18), pad = Math.min(14, Math.floor(L / (2 * rows.length)));
        if (pad > 0) rows.forEach((li) => { li.style.paddingTop = (parseFloat(getComputedStyle(li).paddingTop) + pad) + "px"; li.style.paddingBottom = (parseFloat(getComputedStyle(li).paddingBottom) + pad) + "px"; });
        if (m.scrollHeight > m.clientHeight + 2) rows.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = ""; });
      } else if (m.querySelectorAll(".lc-qb").length > 1) { // pages de questions d'écoute : le reste de la place est réparti entre les questions (on garde ~34px pour le retour vert/rouge)
        const qbs = m.querySelectorAll(".lc-qb"), cards = m.querySelectorAll(":scope > .lc-card"), last = cards[cards.length - 1] || m.lastElementChild;
        const L = Math.floor(f.getBoundingClientRect().top - last.getBoundingClientRect().bottom - 34), mg = Math.min(24, Math.floor(L / (qbs.length - 1)));
        if (mg > 1) qbs.forEach((x, i) => { if (i < qbs.length - 1) x.style.setProperty("margin-bottom", (parseFloat(getComputedStyle(x).marginBottom) + mg) + "px", "important"); });
        if (m.scrollHeight > m.clientHeight + 2) qbs.forEach((x) => { x.style.removeProperty("margin-bottom"); });
      } else if (m.classList.contains("lc-g3")) { // grammaire : le reste de la place agrandit très légèrement les cases (max +4 px de chaque côté)
        const chs = m.querySelectorAll(".lc-choice"), cards = m.querySelectorAll(":scope > .lc-card"), last = cards[cards.length - 1];
        if (chs.length && last) {
          const L = Math.floor(f.getBoundingClientRect().top - last.getBoundingClientRect().bottom - 22), pad = Math.min(4, Math.floor(L / (2 * chs.length)));
          if (pad > 0) chs.forEach((x) => { x.style.paddingTop = (parseFloat(getComputedStyle(x).paddingTop) + pad) + "px"; x.style.paddingBottom = (parseFloat(getComputedStyle(x).paddingBottom) + pad) + "px"; x.style.minHeight = (parseFloat(getComputedStyle(x).minHeight) + 2 * pad) + "px"; });
          if (m.scrollHeight > m.clientHeight + 2) chs.forEach((x) => { x.style.paddingTop = x.style.paddingBottom = x.style.minHeight = ""; });
        }
      }
      return;
    }
    if (!m.dataset.fr) { m.dataset.fr = "1"; m.querySelectorAll("img").forEach((im) => { if (!im.complete) im.addEventListener("load", fillRows, { once: true }); }); setTimeout(fillRows, 500); }
    const reserve = m.querySelector(".lc-qb, .lc-fb") ? 70 : screen === "vocab" ? 2 : 24;
    const gap = () => Math.floor(f.getBoundingClientRect().top - m.lastElementChild.getBoundingClientRect().bottom - reserve);
    let L = gap();
    if (L < 0 && screen === "vocab") { // ça déborde (police réelle plus large) : on resserre les mots d'abord
      const lc0 = m.querySelectorAll(":scope > .lc-card"), cc = lc0[lc0.length - 1], ll = cc ? cc.querySelectorAll(":scope > ul:not(.lc-bub) > li, :scope ul.lc-words > li") : [];
      for (const q of [3, 1, 0]) { ll.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = q + "px"; }); L = gap(); if (L >= 0) break; }
    }
    if (L >= 120 && screen === "vocab") { // grand vide sous 3-4 mots : on ajoute la phrase en contexte de la fiche
      const lc1 = m.querySelectorAll(":scope > .lc-card"), c1 = lc1[lc1.length - 1], tp = c1 && c1.querySelector("template.lc-ctx-t");
      if (tp && !c1.querySelector(".lc-ctx-in") && !c1.querySelector(".lc-scene-voc")) {
        c1.insertAdjacentHTML("beforeend", tp.innerHTML);
        const ins = c1.querySelector(".lc-ctx-in");
        ins.querySelectorAll("[data-say]").forEach((b2) => b2.addEventListener("click", () => { if (!speak(b2.dataset.say)) toast("Audio indisponible sur cet appareil"); b2.classList.add("lc-spk-on"); setTimeout(() => b2.classList.remove("lc-spk-on"), 900); }));
        L = gap();
        if (L < 0) { ins.querySelectorAll("details").forEach((d) => d.remove()); L = gap(); }
        if (L < 0) { ins.querySelectorAll(".lc-bub li").forEach((li, i) => { if (i > 1) li.remove(); }); L = gap(); }
        if (L < 0) { ins.remove(); L = gap(); }
      }
    }
    const gbl = screen === "grammar" ? m.querySelector(".lc-gex .lc-list.lc-bub") : null; // page d'exemples : le reste de la place est réparti entre les bulles
    if (gbl && L >= 16 && gbl.children.length > 1) {
      const tb2 = () => m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6;
      for (let q = Math.min(22, Math.floor(L / (gbl.children.length - 1))); q > 5; q--) { gbl.style.gap = q + "px"; if (!tb2()) break; gbl.style.gap = ""; }
      if (L >= 16) { const ws = [...gbl.querySelectorAll(".lc-w")], b0 = ws.map((w) => parseFloat(getComputedStyle(w).paddingTop)); for (let q = Math.min(8, Math.floor(L / (2 * ws.length))); q > 0; q--) { ws.forEach((w, i) => { w.style.paddingTop = w.style.paddingBottom = (b0[i] + q) + "px"; }); if (!tb2()) break; ws.forEach((w) => { w.style.paddingTop = w.style.paddingBottom = ""; }); } L = gap(); }
      L = gap();
    }
    if (L < 24) return;
    const cards = m.querySelectorAll(":scope > .lc-card"), c = cards[cards.length - 1]; if (!c) return;
    const rl = m.querySelectorAll(".lc-rules li");
    if (rl.length && L > 20) {
      const tb = () => m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6;
      for (let q = Math.min(24, Math.floor((L - 14) / (2 * rl.length))); q > 0; q--) { rl.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = (5 + q) + "px"; }); if (!tb()) break; rl.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = ""; }); }
      L = gap();
    }
    const tx = screen !== "vocab" ? c.querySelector(":scope > p.lc-text") : null; // page de texte : le reste de la place agrandit un peu le texte
    if (tx && L > 24) {
      const fs0 = parseFloat(getComputedStyle(tx).fontSize), tb3 = () => m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6;
      for (let q = 5; q >= 1; q--) { tx.style.fontSize = (fs0 + q) + "px"; tx.style.lineHeight = "1.45"; if (!tb3() && gap() >= 0) break; tx.style.fontSize = tx.style.lineHeight = ""; }
      L = gap();
    }
    const lis = c.querySelectorAll(":scope > ul:not(.lc-bub) > li, :scope ul.lc-words > li"); 
    if (lis.length && (screen === "vocab" || !c.querySelector(".lc-words, .lc-scene-voc, .lc-vl"))) {
      const pad0 = Math.min(screen === "vocab" ? (lis.length <= 4 ? (m.querySelector(".lc-scenes") ? 14 : 16) : lis.length <= 6 ? 10 : 12) : 26, Math.floor(L / (2 * lis.length))), base = [...lis].map((li) => [parseFloat(getComputedStyle(li).paddingTop), parseFloat(getComputedStyle(li).paddingBottom)]);
      const tooBig = () => m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6;
      for (let q = pad0; q > 1; q--) { lis.forEach((li, i) => { li.style.paddingTop = (base[i][0] + q) + "px"; li.style.paddingBottom = (base[i][1] + q) + "px"; }); if (!tooBig()) break; lis.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = ""; }); }
      L = gap();
    }
    const chs = c.querySelectorAll(".lc-choice");
    if (chs.length && L > 16) { const pad = Math.min(10, Math.floor(L / (2 * chs.length))); if (pad > 1) chs.forEach((b) => { b.style.paddingTop = (parseFloat(getComputedStyle(b).paddingTop) + pad) + "px"; b.style.paddingBottom = (parseFloat(getComputedStyle(b).paddingBottom) + pad) + "px"; }); L = gap(); }
    const qbs = c.querySelectorAll(".lc-qb"); // pages de questions : le reste de la place est réparti entre les questions
    if (qbs.length > 1 && L > 12) { const mg = Math.min(22, Math.floor(L / (qbs.length - 1))); if (mg > 1) qbs.forEach((x, i) => { if (i < qbs.length - 1) x.style.marginBottom = (parseFloat(getComputedStyle(x).marginBottom) + mg) + "px"; }); L = gap(); }
    if (m.scrollHeight > m.clientHeight + 2 || m.lastElementChild.getBoundingClientRect().bottom > f.getBoundingClientRect().top - 6) { reset(); c.querySelectorAll(".lc-qb").forEach((x) => { x.style.marginBottom = ""; }); }
  }
  // Fixe le nombre de mots par écran AVANT l'affichage : on mesure en secret le 1er et le dernier écran de la section,
  // pour que le compteur (1/3, 2/3, 3/3) soit juste dès le premier écran et qu'aucune page ne soit redécoupée ensuite.
  function probeVocab(pi) {
    (B._probed || (B._probed = {}))[pi] = 1;
    const keep = page; B._probing = 1; const S = (B._S || (B._S = {}));
    try {
      const L = B.vocab[pi].words.length;
      const test = (sizes, wi) => { S[pi] = sizes; B._steps = null; const idx = vocabSteps().map((x, i) => (x.t === "words" && x.pi === pi ? i : -1)).filter((i) => i >= 0); if (wi >= idx.length) return false; page = idx[wi]; B._over = false; showVocab(); return !B._over; };
      if (test([L], 0)) { S[pi] = [L]; return; }
      const cap = (mk, wi, max) => { for (let k = Math.min(max, 12); k >= 1; k--) if (test(mk(k), wi)) return k; return 1; };
      const Cf = cap((k) => [k, L - k], 0, L - 1); let Cl = cap((k) => [L - k, k], 1, L - 1);
      if (Cl < 3 && L >= 6) { const nEx = (B.vocab[pi].examples || []).length; for (let e = Math.min(nEx, 3) - 1; e >= 1 && Cl < 3; e--) { (B._ex || (B._ex = {}))[pi] = e; Cl = cap((k) => [L - k, k], 1, L - 1); } }
      let caps = [Cf, Cl];
      if (Cf + Cl < L) { const Cm = L >= 3 ? cap((k) => [1, k, Math.max(1, L - 1 - k)], 1, L - 2) : 1; caps = [Cf]; while (caps.reduce((x, y) => x + y, 0) + Cl < L && caps.length < 8) caps.push(Cm); caps.push(Cl); }
      const tot = caps.reduce((x, y) => x + y, 0), raw = caps.map((c) => L * c / tot); let sizes = raw.map((x) => Math.min(Math.max(1, Math.floor(x)), 12));
      let rest = L - sizes.reduce((x, y) => x + y, 0);
      const ord = raw.map((x, k) => [x - Math.floor(x), k]).sort((u, v) => v[0] - u[0]);
      for (let g2 = 0; rest > 0 && g2 < 50; g2++) { const k = ord[g2 % ord.length][1]; if (sizes[k] < caps[k] || g2 >= ord.length) { sizes[k]++; rest--; } }
      for (let k = 0; rest < 0; k = (k + 1) % sizes.length) { if (sizes[k] > 1) { sizes[k]--; rest++; } }
      if (sizes.length > 2 && sizes.slice(1, -1).some((x) => x <= 1)) { for (let k = Math.ceil(L / 2); k < L; k++) if (test([k, L - k], 0) && test([k, L - k], 1)) { sizes = [k, L - k]; break; } } // jamais de pages à 1 mot
      S[pi] = sizes;
    } finally { B._probing = 0; B._steps = null; page = keep; }
  }
  // Page de test : 6 questions, 4 bonnes réponses pour passer (les erreurs reviennent).
  function quizScreen({ total, key, build, back, prev, next, btn, bubble, onCheck, think, pre, pass }) {
    const c = currentCharacter();
    const guide = `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${bubble}</div><div class="lc-path" aria-hidden="true"><i class="d"></i><u></u><i class="c"></i></div></div>`;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext" disabled>${btn}</button></footer>`;
    frame(HEAD, { cur: page + 1, total }, (pre || "") + (pre ? "" : guide) + quizHtml(pass), foot);
    const m = el.querySelector(".lc-main"); m.scrollTop = 0; m.classList.add("lc-q6");
    el.querySelector("#lcBack").onclick = back; el.querySelector("#lcPrev").onclick = prev; el.querySelector("#lcNext").onclick = next;
    mountQuiz(el.querySelector(".q6"), key, build, { speak, onCheck, think, pass });
  }
  // Conjugaison : 6 verbes nouveaux par leçon (une page par verbe, 3 onglets) puis un test de 6 questions.
  let cjTab = 0; const cjDone = new Set(); // « À toi » obligatoire : onglets déjà réussis (ou corrigés après 2 erreurs)
  const conjList = () => B.conj || ((B.code && /^A1\.\d+$/.test(B.code)) ? CONJ_A1[Number(B.code.split(".")[1])] : null) || null;
  function showConj() {
    screen = "conj";
    const L = conjList() || [], why = WHY_CONJ_A1[B.code] || WHY_CONJ_A2[B.code], off = why ? 1 : 0, total = L.length + 1 + off, lvl = Number(String(B.code || "").split(".")[1]) || 1;
    if (page >= total) page = total - 1;
    const exit = showMenu;
    if (why && page === 0) { // 1re page : pourquoi on utilise ce temps
      const c0 = currentCharacter(), w = why;
      const guide0 = `<div class="lc-guide">${ico(c0.src, "lc-ava-md")}<div class="lc-gbub">Pourquoi ce temps ?</div><div class="lc-path" aria-hidden="true"><i class="c"></i><u></u><i class=""></i></div></div>`;
      const body0 = `<section class="lc-card lc-why"><h2 class="lc-h2">🧭 Pourquoi ? <span class="lc-why-t">🔁 ${esc(w.title)}</span></h2><p class="lc-why-i">${esc(w.intro)}</p>
        <ul class="lc-list lc-vl lc-why-u">${w.uses.map(([lab, en, fr]) => `<li><span class="lc-w"><b>${esc(lab)}</b><span class="lc-form">${esc(en)}</span><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
        <p class="lc-why-m">🔑 ${esc(w.marks)}</p><p class="lc-why-w">⚠️ ${esc(w.watch)}</p></section>`;
      frame(HEAD, { cur: 1, total }, guide0 + body0, `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext">Suivant →</button></footer>`);
      el.querySelector("#lcBack").onclick = exit; el.querySelector("#lcPrev").onclick = exit; el.querySelector("#lcNext").onclick = () => { page++; cjTab = 0; showConj(); };
      el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => { if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil"); }));
      return;
    }
    if (page === L.length + off) {
      return quizScreen({ think: true, total, key: "cj:" + B.code, bubble: "Teste-toi !", btn: "Terminer ✓", back: exit,
        build: (miss) => gramItems(conjQuiz(L), miss), prev: () => { page--; cjTab = 2; showConj(); },
        onCheck: (good, tot) => { const o = prog.conj || {}; prog.conj = { best: Math.max(o.best || 0, good), tot, tries: (o.tries || 0) + 1, last: good }; saveProgress(prog); },
        next: () => { prog.done = Object.assign({}, prog.done, { conj: true }); saveProgress(prog); showMenu(); } });
    }
    const verb = L[page - off], c = currentCharacter();
    const guide = `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">Conjugue avec moi !</div><div class="lc-path" aria-hidden="true"><i class="c"></i><u></u><i class=""></i></div></div>`;
    const TABS = ["Affirmative", "Négative", "Question"];
    const rows = conjRows(verb, cjTab).map(([a, b, cx, fr, say]) => `<li><span class="lc-w"><b>${esc(a)}</b><span class="cj-hl">${esc(b)}</span><span class="cj-cx">${esc(cx)}</span><small class="cj-fr">${esc(fr)}</small></span>${spk(say)}</li>`).join("");
    // Une ligne d'exercice sous le tableau : même forme que l'onglet affiché (affirmative / négative / question).
    const cjQ = conjExFor(L, verb, cjTab);
    const cjEx = `<div class="cj-ex"><p class="cj-exq">✍️ À toi : <b>${esc(cjQ[0])}</b></p><div class="cj-exi"><input class="lc-ta q6-in" id="cjIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Écris ta réponse…"><button type="button" class="cj-ok" id="cjOk">OK</button></div><p class="cj-exf" id="cjFb" aria-live="polite"></p></div>`;
    const body = `<section class="lc-card"><h2 class="lc-h2">🔁 ${esc(conjTitle(verb))} <span class="lc-why-t">${esc(conjLabel(verb))} · onglet ${cjTab + 1}/3</span></h2>
      <div class="cj-tabs" role="tablist">${TABS.map((t, i) => `<button type="button" class="cj-tab ${i === cjTab ? "on" : ""}" data-t="${i}" role="tab" aria-selected="${i === cjTab}">${i < cjTab ? "✓ " : ""}${t}</button>`).join("")}</div>
      <ul class="lc-list lc-vl lc-rules">${rows}</ul>${cjEx}</section>`;
    const lastV = page - off === L.length - 1, nxt = cjTab === 0 ? "Négative →" : cjTab === 1 ? "Question →" : lastV ? "Test ✏️" : "Verbe suivant →";
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext"${cjDone.has(page + ":" + cjTab) ? "" : " disabled"}>${nxt}</button></footer>`;
    frame(HEAD, { cur: page + 1, total }, guide + body, foot);
    const mn = el.querySelector(".lc-main"); if (mn) mn.scrollTop = 0;
    el.querySelector("#lcBack").onclick = exit;
    el.querySelector("#lcPrev").onclick = () => { if (cjTab > 0) { cjTab--; showConj(); return; } if (page === 0) { exit(); return; } page--; cjTab = page >= off ? 2 : 0; showConj(); };
    el.querySelector("#lcNext").onclick = () => { if (!cjDone.has(page + ":" + cjTab)) return; if (cjTab < 2) { cjTab++; showConj(); return; } page++; cjTab = 0; showConj(); };
    el.querySelectorAll(".cj-tab").forEach((b) => b.addEventListener("click", () => { const t = Number(b.dataset.t); if (t > cjTab && !cjDone.has(page + ":" + cjTab)) { const f0 = el.querySelector("#cjFb"); if (f0) { f0.className = "cj-exf ko"; f0.textContent = "Fais d’abord l’exercice « À toi »."; } return; } cjTab = t; showConj(); }));
    el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => { if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil"); b.classList.add("lc-spk-on"); setTimeout(() => b.classList.remove("lc-spk-on"), 900); }));
    { const inp = el.querySelector("#cjIn"), fb = el.querySelector("#cjFb"); let tries = 0;
      const check = () => { const v = inp.value.trim(); if (!v) return; if (same(v, [cjQ[1], cjQ[3]].filter(Boolean).join(" / "), false, null)) { fb.className = "cj-exf ok"; fb.textContent = "✔ " + cjQ[0].replace("___", cjQ[1]).replace(/ \((.*?)\)$/, ""); inp.disabled = true; el.querySelector("#cjOk").disabled = true; unlock(); } else { tries++; fb.className = "cj-exf ko"; fb.textContent = tries < 2 ? "Pas tout à fait. Indice : " + cjQ[2] : "La réponse : " + cjQ[1] + ". " + cjQ[2]; if (tries >= 2) { inp.disabled = true; el.querySelector("#cjOk").disabled = true; unlock(); } } };
      const unlock = () => { cjDone.add(page + ":" + cjTab); const nb = el.querySelector("#lcNext"); if (nb) nb.disabled = false; };
      if (cjDone.has(page + ":" + cjTab)) { inp.disabled = true; el.querySelector("#cjOk").disabled = true; fb.className = "cj-exf ok"; fb.textContent = "✔ " + cjQ[0].replace("___", cjQ[1]).replace(/ \((.*?)\)$/, ""); }
      el.querySelector("#cjOk").onclick = check; inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); }); }
    fillRows();
    { const fitCj = () => { const mn2 = el.querySelector(".lc-main"), lis = el.querySelectorAll(".lc-rules li"), ft = el.querySelector(".lc-foot"); if (!mn2 || !ft || !lis.length || !mn2.lastElementChild) return; // ça déborde (phrases longues, petit écran) : on resserre les lignes puis l'exercice
        const over = () => mn2.scrollHeight > mn2.clientHeight + 2 || mn2.lastElementChild.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 6, exq = el.querySelector(".cj-ex"), fbk = el.querySelector("#cjFb");
        for (const q of [6, 4, 2, 0]) { if (!over()) break; lis.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = q + "px"; }); }
        if (over() && exq) { exq.style.marginTop = "2px"; exq.style.paddingTop = "4px"; if (fbk) { fbk.style.margin = "2px 0 0"; if (!fbk.textContent) fbk.style.minHeight = "0"; } } };
      fitCj(); setTimeout(fitCj, 300); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCj); }
  }

  /* ----- A2.0 : Bilan (non noté) puis A2.01 « Remise à niveau » ----- */
  let bl = null, rstep = 0, rtheme = null;
  const BL_STEPS = () => THEMES.filter((t) => t.diag).length + DICTEES.length + GUIDED.length;
  const blColor = (p) => (p >= 70 ? "#2fa55b" : p >= 50 ? "#caa21b" : "#c8382a");
  // Pages du bilan après les QCM : réponses écrites après une écoute ou une lecture, dictée, phrases guidées.
  const bilanTx = () => [...COMP.map((c) => ({ k: c.kind, c })), { k: "dic", ds: DICTEES.slice(0, 3) }, { k: "dic", ds: DICTEES.slice(3) }, { k: "gui", gs: GUIDED.slice(0, 3) }, { k: "gui", gs: GUIDED.slice(3) }];
  const compItem = (c, j) => Object.assign({}, c.qs[j], { say: c.say, text: c.text, q2: false });
  function showBilan() {
    screen = "bilan";
    const TH = THEMES.filter((t) => t.diag), TX = bilanTx(), nT = TH.length, total = nT + TX.length;
    if (!bl) bl = { step: 0, items: TH.map((t) => mkItems(t.diag, [], t.id === "ec" ? 5 : undefined)), pick: TH.map(() => []), txt: TX.map((t) => (t.c ? t.c.qs : t.ds || t.gs).map(() => "")) };
    const i = bl.step, c = currentCharacter();
    let body = "", ready = false;
    const guide = (t) => `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${t}</div><div class="lc-path" aria-hidden="true"><i class="d"></i><u></u><i class="c"></i></div></div>`;
    const area = (v, ph) => `<textarea class="lc-ta" id="blIn" rows="8" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${ph}">${esc(v)}</textarea>`;
    if (i < nT) {
      const th = TH[i], its = bl.items[i];
      ready = its.every((_, q) => bl.pick[i][q] !== undefined);
      body = guide("Bilan : pas de note !") + `<section class="lc-card q6"><div class="q6-top"><b>${th.icon} ${esc(th.label)}</b><span>${i + 1}/${nT}</span></div><p class="q6-help">Touche 1 réponse par question.</p><div class="q6-list">${its.map((it, q) => `<div class="q6-q"><p class="q6-p"><span>${q + 1}</span>${esc(it.q)}${it.say ? ` <button type="button" class="q6-spk" data-say="${esc(it.say)}" aria-label="Écouter">🔊</button>` : ""}</p><div class="q6-o">${it.opts.map((o, k) => `<button type="button" class="lc-choice q6-c${bl.pick[i][q] === k ? " lc-sel" : ""}" data-q="${q}" data-k="${k}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div></section>`;
    } else {
      const t = TX[i - nT], v = bl.txt[i - nT]; ready = v.every((x) => x.trim().length > 0);
      const qa = (c) => c.qs.map((qq, j) => `<p class="lc-q bl2-qq"><span>${j + 1}</span>${esc(qq.q)}</p><textarea class="lc-ta sm" data-j="${j}" rows="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Ta réponse…">${esc(v[j])}</textarea>`).join("");
      if (t.k === "listen") body = guide("Écoute, puis réponds !") + `<section class="lc-card"><h2 class="lc-h2">🎧 Écoute et réponds</h2><button type="button" class="lc-cta" data-say="${esc(t.c.say)}" style="margin:6px 0">🔊 Écouter</button>${qa(t.c)}</section>`;
      else if (t.k === "read") body = guide("Lis, puis réponds !") + `<section class="lc-card"><h2 class="lc-h2">📖 Lis et réponds</h2><p class="lc-text" style="font-size:16px;line-height:1.5;margin:6px 0">${esc(t.c.text)}</p>${qa(t.c)}</section>`;
      else if (t.k === "dic") body = guide("Écris ce que tu entends !") + `<section class="lc-card"><h2 class="lc-h2">✍️ Dictée</h2>${t.ds.map((d, j) => `<p class="lc-q bl2-qq"><span>${j + 1}</span><button type="button" class="q6-spk" data-say="${esc(d.say)}" aria-label="Écouter">🔊 Écouter</button></p><textarea class="lc-ta sm md" data-j="${j}" rows="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Écris la phrase…">${esc(v[j])}</textarea>`).join("")}</section>`;
      else body = guide("Écris les phrases en anglais !") + `<section class="lc-card"><h2 class="lc-h2">🧱 Phrases guidées</h2><p class="lc-lead">Sujet + verbe + complément, avec la ponctuation.</p>${t.gs.map((g, j) => `<p class="lc-q bl2-qq"><span>${j + 1}</span>${esc(g.fr)}</p><textarea class="lc-ta sm md" data-j="${j}" rows="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Écris ta phrase…">${esc(v[j])}</textarea>`).join("")}</section>`;
    }
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext" ${ready ? "" : "disabled"}>${i === total - 1 ? "Voir mon bilan ✓" : "Suivant →"}</button></footer>`;
    page = i; frame(HEAD, { cur: i + 1, total }, body, foot);
    const mn = el.querySelector(".lc-main"); if (mn) { mn.scrollTop = 0; mn.classList.add("lc-q6", "bl2-fill"); }
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (i === 0) showMenu(); else { bl.step--; showBilan(); } };
    el.querySelector("#lcNext").onclick = () => { if (i === total - 1) finishBilan(); else { bl.step++; showBilan(); } };
    el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil"); }));
    el.querySelectorAll(".q6-c").forEach((b) => b.addEventListener("click", () => { bl.pick[i][+b.dataset.q] = +b.dataset.k; showBilan(); }));
    const ta = el.querySelector("#blIn");
    if (ta) ta.addEventListener("input", () => { bl.txt[i - nT] = ta.value; const nx = el.querySelector("#lcNext"); if (nx) nx.disabled = ta.value.trim().length === 0; });
    el.querySelectorAll("textarea[data-j]").forEach((x) => x.addEventListener("input", () => { bl.txt[i - nT][+x.dataset.j] = x.value; const nx = el.querySelector("#lcNext"); if (nx) nx.disabled = !bl.txt[i - nT].every((v) => v.trim().length > 0); }));
  }
  function finishBilan() {
    const TH = THEMES.filter((t) => t.diag), TX = bilanTx(), rows = [], crit = { orth: [0, 0], punct: [0, 0], ordre: [0, 0], accord: [0, 0] }, cont = { listen: [0, 0], read: [0, 0] };
    const errs = {};
    TH.forEach((t, i) => { const ok = bl.items[i].filter((it, q) => bl.pick[i][q] === it.a).length; rows.push({ id: t.id, label: t.label, icon: t.icon, ok, tot: bl.items[i].length });
      if (t.id !== "ec") errs[t.id] = bl.items[i].map((it, q) => (bl.pick[i][q] !== it.a && bl.pick[i][q] !== undefined ? { q: it.q, wrong: it.opts[bl.pick[i][q]], right: it.opts[it.a], expl: it.expl || "" } : null)).filter(Boolean).slice(0, 4); });
    TX.forEach((t, j) => {
      const list = t.c ? t.c.qs.map((_, q) => [bl.txt[j][q], compItem(t.c, q)]) : (t.ds || t.gs).map((it, q) => [bl.txt[j][q], it]);
      list.forEach(([raw, it]) => {
        const r = t.k === "dic" ? checkDictee(raw, it) : checkGuided(raw, it);
        WRITE_CRITERIA.forEach(([k]) => { crit[k][1]++; if (r[k]) crit[k][0]++; });
        if (cont[t.k]) { cont[t.k][1]++; if (r.contenu) cont[t.k][0]++; }
      });
    });
    const ec = rows.find((r) => r.id === "ec"); if (ec) { ec.ok += cont.listen[0]; ec.tot += cont.listen[1]; }
    const lt = themeById("lect"); rows.push({ id: "lect", label: lt.label, icon: lt.icon, ok: cont.read[0], tot: cont.read[1] });
    WRITE_CRITERIA.forEach(([k, label]) => rows.push({ id: k, label, icon: themeById(k).icon, ok: crit[k][0], tot: crit[k][1] }));
    rows.forEach((r) => { r.pct = Math.round((r.ok / r.tot) * 100); });
    const pct = Math.round(rows.reduce((a, r) => a + r.pct, 0) / rows.length), weak = rows.filter((r) => r.pct < BILAN_PASS).map((r) => r.id);
    prog.bilan = { pct, rows: rows.map(({ id, label, icon, pct: p }) => ({ id, label, icon, pct: p })), weak, errs, at: Date.now() };
    if (pct >= BILAN_PASS) prog.remise = Object.assign({}, prog.remise, { all: true });
    prog.done = Object.assign({}, prog.done, { bilan: true }); saveProgress(prog);
    showBilanResult();
  }
  function showBilanResult() {
    screen = "bilanres";
    const b = prog.bilan; if (!b) { showMenu(); return; }
    const need = b.pct < BILAN_PASS, weakN = b.rows.filter((r) => r.pct < BILAN_PASS).length;
    const row = (r) => `<div class="bl2-r"><b>${r.icon} ${esc(r.label)}</b><div class="bl2-g"><i style="width:${r.pct}%;background:${blColor(r.pct)}"></i><span class="bl2-l"></span></div><span class="bl2-p">${r.pct} %</span><span class="bl2-t ${r.pct >= BILAN_PASS ? "ok" : "ko"}">${r.pct >= BILAN_PASS ? "OK" : "À revoir"}</span></div>`;
    const body = `<section class="lc-card bl2"><h2 class="lc-h2">🧭 Bilan A2.0</h2><div class="bl2-big">${b.pct} %</div><div class="bl2-c">Pas de note : ce bilan repère les points à retravailler. Seuil pour continuer : ${BILAN_PASS} %.</div>${b.rows.map(row).join("")}
      <div class="bl2-step"><span>${need ? "➡️" : "✅"}</span><div>${need ? `<b>Il te manque ${weakN} thème${weakN > 1 ? "s" : ""}.</b> Une étape en plus s’ouvre : <b>A2.01 Remise à niveau</b>, puis A2.1.` : "Tu passes directement à <b>A2.1</b>."}</div></div>
      ${need ? `<button type="button" class="bl2-btn" id="blGo">Ouvrir A2.01 · Remise à niveau</button>` : ""}<button type="button" class="bl2-btn ${need ? "s" : ""}" id="blBack">${need ? "Retour au menu" : "Retour au menu de la leçon"}</button></section>`;
    frame(HEAD, null, body);
    el.querySelector("#lcBack").onclick = showMenu;
    const g = el.querySelector("#blGo"); if (g) g.onclick = showRemise;
    el.querySelector("#blBack").onclick = showMenu;
  }
  function showRemise() {
    screen = "remise";
    const b = prog.bilan; if (!b || b.pct >= BILAN_PASS) { showMenu(); return; }
    const done = (prog.remise && prog.remise.done) || {}, weak = b.rows.filter((r) => r.pct < BILAN_PASS), next = weak.find((r) => !done[r.id]);
    const list = weak.map((r, n) => `<div class="bl2-r"><b>${n + 1} · ${r.icon} ${esc(r.label)}</b><span class="bl2-t ${done[r.id] ? "ok" : "ko"}">${done[r.id] ? "Validé ✓" : "À faire"}</span></div>`).join("");
    const body = `<section class="lc-card bl2"><h2 class="lc-h2">🔧 A2.01 · Remise à niveau</h2><div class="bl2-c" style="margin-top:0">Seulement les thèmes à revoir. Quand tout est refait, A2.1 s’ouvre.</div>${list}
      ${next ? `<div class="bl2-step"><span>📘</span><div>Revoir la règle, expliquée simplement</div></div><div class="bl2-step"><span>✏️</span><div>Exercices neufs</div></div><div class="bl2-step"><span>🏁</span><div>Mini-test : 4 bonnes réponses sur 6</div></div><button type="button" class="bl2-btn" id="rmGo">Commencer : ${esc(next.label)}</button>`
      : `<div class="bl2-step"><span>✅</span><div><b>Remise à niveau terminée.</b> A2.1 est ouvert.</div></div>`}<button type="button" class="bl2-btn s" id="rmBack">Retour au menu</button></section>`;
    frame(HEAD, null, body);
    el.querySelector("#lcBack").onclick = showMenu; el.querySelector("#rmBack").onclick = showMenu;
    const go = el.querySelector("#rmGo"); if (go) go.onclick = () => { rtheme = next.id; rstep = 0; showRemiseStep(); };
  }
  // A2.01 nouveau parcours (par thème) : 0 tes erreurs · 1 règle autrement · 2 compris ? · 3 texte à trous · 4-5 exercices · 6 mini-test
  const RM_CHIPS = ["Tes erreurs", "Leçon", "Compris ?", "Texte", "Exo", "Test"], RM_G = [0, 1, 2, 3, 4, 4, 5], RM_TOTAL = 7;
  function rmPre(th) {
    const g = RM_G[rstep];
    return `<div class="rm-st">${RM_CHIPS.map((t, i) => `<b class="${i < g ? "dn" : i === g ? "on" : ""}">${i < g ? "✓" : i === g ? (i + 1) + " " + t : i + 1}</b>`).join("")}</div>`;
  }
  const rmBold = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  function rmErrors(th, R) {
    const real = ((prog.bilan && prog.bilan.errs && prog.bilan.errs[th.id]) || []).map((e, i) => {
      const fill = (w) => (e.q.includes("___") ? e.q.replace("___", w) : e.q + " " + w);
      return { w: fill(e.wrong), r: fill(e.right), tag: "ton erreur", why: e.expl };
    });
    const seen = new Set(real.map((e) => e.r));
    const fb = R.fallback.filter((f) => !seen.has(f[1])).map((f) => ({ w: f[0], r: f[1], tag: f[2], why: f[3] }));
    return { list: real.concat(fb).slice(0, 4), real: real.length };
  }
  function showRemiseNew(th, R) {
    const key = "rm:" + rtheme, c = currentCharacter();
    page = rstep;
    const pre = rmPre(th), back = showRemise, prev = () => { if (rstep === 0) showRemise(); else { rstep--; showRemiseStep(); } };
    const adv = () => { rstep++; showRemiseStep(); };
    const foot = (lbl) => `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext">${lbl}</button></footer>`;
    const wire = () => { el.querySelector("#lcBack").onclick = back; el.querySelector("#lcPrev").onclick = prev; el.querySelector("#lcNext").onclick = adv;
      el.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => { if (!speak(b.dataset.say)) toast("Audio indisponible sur cet appareil"); })); };
    if (rstep === 0) {
      const { list, real } = rmErrors(th, R);
      const body = pre + `<section class="lc-card rm-card"><h2 class="lc-h2">👀 ${real ? `Tes ${list.length} erreurs du bilan` : "Les erreurs classiques"}</h2><p class="lc-lead">${th.icon} ${esc(th.label)} · ${real ? "on part de ce que TOI tu as écrit." : "on part des pièges les plus fréquents."}</p>
        ${list.map((e, i) => `<div class="rm-err"><span class="rm-tag">Erreur ${i + 1} · ${esc(e.tag)}</span><div><s>${esc(e.w)}</s> → <b>${esc(e.r)}</b></div>${e.why ? `<p>${esc(e.why)}</p>` : ""}</div>`).join("")}
        <p class="rm-note">Ces erreurs reviennent dans les exercices, jusqu’à ce qu’elles soient réussies.</p></section>`;
      frame(HEAD, { cur: 1, total: RM_TOTAL }, body, foot("La règle →")); wire(); return;
    }
    if (rstep === 1) {
      const L = R.lesson, hl = (x) => esc(x).replace(/\|(\w+)/, "<i>$1</i>");
      const body = pre + `<section class="lc-card rm-card"><h2 class="lc-h2">📘 ${esc(L.title)}</h2>
        <div class="rm-cmp"><div><b>Pas de s</b>${L.no.map((x) => `<span>${esc(x)}</span>`).join("")}</div><div class="y"><b>Un s ✅ (he / she / it)</b>${L.yes.map((x) => `<span>${hl(x)}</span>`).join("")}</div></div>
        <div class="rm-tip">💡 <b>Astuce :</b> ${esc(L.tip)}</div>
        <div class="rm-cmp"><div><b>Négatif</b>${L.neg.map((x) => `<span>${rmBold(x)}</span>`).join("")}</div><div><b>Question</b>${L.qst.map((x) => `<span>${rmBold(x)}</span>`).join("")}</div></div>
        <div class="rm-tip">⚠️ <b>Règle d’or :</b> ${esc(L.gold)}</div>
        <div class="rm-ex">${L.say.map((x) => `<button type="button" class="rm-sp" data-say="${esc(x)}">🔊 ${esc(x)}</button>`).join("")}</div></section>`;
      frame(HEAD, { cur: 2, total: RM_TOTAL }, body, foot("Suivant →")); wire(); return;
    }
    const errQ = (((prog.bilan && prog.bilan.errs && prog.bilan.errs[th.id]) || []).map((e) => e.q));
    const errList = th.diag.filter((q) => errQ.includes(q[0]));
    const cfg = {
      2: { k: ":cp", bub: "As-tu compris la règle ?", btn: "Suivant →", b: (m) => mkItems(R.compris, m, 6) },
      3: { k: ":cz", bub: "Complète la leçon !", btn: "Exercices ✏️", b: (m) => mkItems(R.cloze, m, 6) },
      4: { k: ":e1", bub: "À toi de pratiquer !", btn: "Suivant →", b: (m) => mkItems(errList.concat(th.ex), m.length ? m : errList.map((q) => q[0]), 6) },
      5: { k: ":e2", bub: "Encore un peu !", btn: "Mini-test 🏁", b: (m) => mkItems(R.ex2, m, 6) },
      6: { k: ":mt", bub: "Mini-test : questions neuves !", btn: "Terminer ✓", b: (m) => mkItems(th.mini, m, 6), pass: 5 }
    }[rstep];
    quizScreen({ think: true, total: RM_TOTAL, key: key + cfg.k, bubble: cfg.bub, btn: cfg.btn, back, prev, pre, pass: cfg.pass, build: cfg.b,
      next: () => { if (rstep < 6) { adv(); return; }
        const rm = Object.assign({}, prog.remise), dn = Object.assign({}, rm.done, { [rtheme]: true }), weak = (prog.bilan.rows || []).filter((r) => r.pct < BILAN_PASS);
        prog.remise = Object.assign(rm, { done: dn, all: weak.every((r) => dn[r.id]) }); saveProgress(prog); showRemise(); } });
  }
  function showRemiseStep() {
    const th = themeById(rtheme), c = currentCharacter(), key = "rm:" + rtheme;
    if (REMISE[rtheme]) { showRemiseNew(th, REMISE[rtheme]); return; }
    page = rstep;
    if (rstep === 0) {
      const body = `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">On revoit ça ensemble !</div><div class="lc-path" aria-hidden="true"><i class="d"></i><u></u><i class="c"></i></div></div><section class="lc-card"><h2 class="lc-h2">📘 ${esc(th.label)}</h2><ul class="lc-list lc-rules bl2-rule">${th.rule.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>`;
      const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext">Exercices ✏️</button></footer>`;
      frame(HEAD, { cur: 1, total: 3 }, body, foot);
      el.querySelector("#lcBack").onclick = showRemise; el.querySelector("#lcPrev").onclick = showRemise; el.querySelector("#lcNext").onclick = () => { rstep = 1; showRemiseStep(); };
      return;
    }
    const ex = rstep === 1;
    quizScreen({ think: true, total: 3, key: key + (ex ? ":ex" : ":mini"), bubble: ex ? "Exercices !" : "Mini-test !", btn: ex ? "Mini-test 🏁" : "Terminer ✓", back: showRemise,
      build: (miss) => mkItems(ex ? th.ex : th.mini, miss, 6), prev: () => { rstep--; showRemiseStep(); },
      next: () => { if (ex) { rstep = 2; showRemiseStep(); return; }
        const rm = Object.assign({}, prog.remise), dn = Object.assign({}, rm.done, { [rtheme]: true }), weak = (prog.bilan.rows || []).filter((r) => r.pct < BILAN_PASS);
        prog.remise = Object.assign(rm, { done: dn, all: weak.every((r) => dn[r.id]) }); saveProgress(prog); showRemise(); } });
  }
  let vsub = 0, vsubPage = -1; // sous-page (3 mots + 2 questions) des pages à 6 mots
  function showVocab() {
    screen = "vocab";
    let steps = B._steps || (B._steps = vocabSteps());
    if (!B._probing && !B._allProbed) { // on mesure TOUTES les pages une fois pour que le compteur (x/N) ne change plus
      B._allProbed = 1;
      const keepP = page;
      [...new Set(steps.filter((x) => x.t === "words").map((x) => x.pi))].forEach((pi) => { if (!(B._probed && B._probed[pi])) probeVocab(pi); });
      page = keepP; B._steps = null; steps = B._steps = vocabSteps();
    }
    let st = steps[page];
    if (!B._probing && st.t === "words" && st.ci === 0 && !(B._probed && B._probed[st.pi])) { probeVocab(st.pi); steps = B._steps || (B._steps = vocabSteps()); st = steps[page]; }
    const p = st.p;
    const total = steps.length;
    const c = currentCharacter();
    const sub = (s) => s.replace(/\{name\}/g, c.name);
    const lastStep = page === total - 1;
    if (st.t === "vtest") {
      const allW = (B.vocab || []).flatMap((v) => v.words || []).map(([a, b]) => [sub(a), sub(b)]), pw = p.words.map(([a, b]) => [sub(a), sub(b)]), ww = st.words.map(([a, b]) => [sub(a), sub(b)]);
      return quizScreen({ think: true, total, key: "v:" + B.code + ":" + st.pi + ":" + st.ci, bubble: "Teste-toi !", btn: lastStep ? "Terminer ✓" : "Suivant →", back: showMenu,
        build: (miss) => vocabItems(ww, pw, allW, allW.filter((w) => miss.includes(w[0]))),
        prev: () => { page--; showVocab(); }, next: () => { page++; showVocab(); } });
    }
    if (vsubPage !== page) { vsub = 0; vsubPage = page; }
    const vSplit = st.t === "words" && st.ci === 0 && !B._probing && hasScene(st.p) && st.words.length >= 6, vHalf = vSplit ? Math.ceil(st.words.length / 2) : 0;
    const vWords = vSplit ? (vsub ? st.words.slice(vHalf) : st.words.slice(0, vHalf)) : (st.words || []);
    let vqHtml = "";
    if (vSplit) {
      const frAll = [...new Set(st.words.map((w) => sub(w[1])))], qs = vWords.slice(0, 2).map(([en, fr]) => { const ans = sub(fr), others = frAll.filter((x) => x !== ans), pick = [ans]; others.sort((x, y) => x.length - y.length + (Math.random() - 0.5) * 4); for (let k = 0; k < 2 && others.length; k++) pick.push(others.shift()); pick.sort(() => Math.random() - 0.5); return { en: sub(en), ans, pick }; });
      vqHtml = `<div class="lc-vq">${qs.map((q, i) => `<div class="lc-vq-i" data-a="${esc(q.ans)}"><p class="lc-vq-q">${i + 1}. « ${esc(q.en)} » veut dire ?</p><div class="lc-vq-o">${q.pick.map((o) => `<button type="button" class="lc-vq-b" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div>`;
    }
    let body = "", btn = lastStep ? "Terminer ✓" : "Suivant →", hint = "", bubble = "Écoute et répète !", stationNow = 0;

    if (st.t === "greet") {
      body = `
        <section class="lc-card">
          <h2 class="lc-h2">👥 ${esc(p.title)}</h2>
          <div class="lc-greet">
            <div class="lc-greet-hero">${B.greetings ? `<div class="lc-bubble lc-bubble-sm">Hello!</div>` : ""}<img src="${c.src}" alt=""/></div>
            <div class="lc-bl">${(B.greetings || p.examples).map(([en, fr], i) => `
              <div class="lc-bb ${i % 2 ? "me" : "npc"}"><span class="lc-bt">${esc(en)}<small>${esc(fr)}</small></span>${spk(en)}</div>`).join("")}</div>
          </div>
          ${B.scenes ? `<h3 class="lc-h3">En situation</h3>
          <div class="lc-scenes">${B.scenes.map(([f, t]) => `<figure><img src="assets/img/lesson/${f}.webp?v=20261025n" alt="" loading="lazy" onerror="this.closest('figure').remove()"/><figcaption>${esc(t)}</figcaption></figure>`).join("")}</div>` : ""}
          <div class="lc-tip"><span>💡</span><div><b>Astuce</b><p>${esc(p.tip)}</p></div></div>
        </section>`;

      if (p.kind !== "greetings" && !(p.kind === "greetings" && !B.greetings) && !(B.greetings && JSON.stringify(B.greetings) === JSON.stringify(p.examples))) body += `
        <section class="lc-card lc-ctx">
          <h2 class="lc-h2 lc-h2-ctx">💬 Exemples en contexte</h2>
          <ul class="lc-list lc-bub">${p.examples.map(([en, fr]) => `
            <li>${ico(c.src, "lc-ava-sm")}<span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul>
        </section>`;
      body += `
        <section class="lc-card lc-prac">
          <h2 class="lc-h2 lc-h2-prac">✏️ À toi de pratiquer !</h2>
          <p class="lc-q">1. ${esc(p.practice)}</p>
          <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(sub(p.say))}" aria-label="Écouter la phrase">▶</button>
            <span class="lc-wave" aria-hidden="true"></span><span class="lc-speed">1x</span></div>
        </section>`;
    } else if (st.t === "words" || st.t === "ctx") {
      stationNow = 0;
      const isCtx = st.t === "ctx";
      btn = "Test ✏️";
      hint = `<p class="lc-nexthint">👉 Page suivante : le test</p>`;
      const ctxHtml = `${p.examples && p.examples.length && !(hasScene(p) && st.n >= 3 && st.ci === 1 && p.words.length >= 17) ? `<h3 class="lc-h3 lc-h3s">💬 En contexte</h3>
          <ul class="lc-list lc-vl lc-bub">${p.examples.slice(0, (B._ex || {})[st.pi] || 99).map(([en, fr]) => `
            <li><span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`).join("")}</ul>` : ""}
          ${p.tip && (isCtx || st.pi % 4 === 0) ? `<details class="lc-tipd"${isCtx ? " open" : ""}><summary>💡 Astuce</summary><p>${esc(p.tip)}</p></details>` : ""}`;
      const head = `<h2 class="lc-h2">${p.icon || "📖"} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>`;
      body = isCtx ? `
        <section class="lc-card">
          ${head}
          ${ctxHtml}
        </section>` : `
        <section class="lc-card">
          ${head}
          ${hasScene(p) && st.ci === 0 ? `<div class="lc-scenes lc-scene-sm lc-scene-voc${st.words.length >= 6 && !vSplit ? " lc-sc6" : ""}"><figure><img src="assets/img/lesson/${p.scene[0]}.webp?v=20261025n" alt="" decoding="async" onerror="this.closest('figure').remove()"/></figure></div>` : ""}
          <ul class="lc-list lc-vl">${vWords.map(([en, fr]) => `
            <li><span class="lc-w"><b>${/^Les (pays|nationalités)$/.test(p.title) ? flagOf(en) + " " : ""}${esc(en)}</b><small>${esc(fr)}</small></span>${spk(en)}</li>`).join("")}</ul>
          ${vSplit ? vqHtml : ""}
          ${st.last ? ctxHtml : `<template class="lc-ctx-t"><div class="lc-ctx-in">${ctxHtml}</div></template>`}
        </section>`;
    } else {
      stationNow = 1; bubble = "À toi de jouer !";
      btn = lastStep ? "Terminer ✓" : "Suivant →";
      body = `
        <section class="lc-card lc-prac">
          <div id="lcPrac" class="pr-host"></div>
        </section>`;
    }

    const needsAnswer = st.t === "prac" && !answered[page];
    const foot = `
      <footer class="lc-foot">
        <button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
        <button type="button" class="lc-cta lc-next" id="lcNext" ${needsAnswer ? "disabled" : ""}>${btn}</button>
      </footer>`;
    const guide = st.t === "greet" ? `<div class="lc-vocab-head"><span class="lc-vh-ic">📖</span><div><h1>Vocabulaire</h1><p>Écoute et répète les mots.</p></div></div>`
      : `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${bubble}</div>
         <div class="lc-path" aria-hidden="true"><i class="${stationNow > 0 ? "d" : "c"}"></i><u></u><i class="${stationNow > 0 ? "c" : ""}"></i></div></div>`;

    frame(HEAD, { cur: page + 1, total }, `${guide}${body}${hint}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;
    if (st.t === "words" && hasScene(p) && st.ci === 0) { // image absente : on repagine sans elle
      const im = el.querySelector(".lc-scene-sm img"), myPage = page;
      if (im) im.addEventListener("error", () => { (B._noScene || (B._noScene = {}))[p.scene[0]] = 1; if (B._S) delete B._S[st.pi]; if (B._probed) delete B._probed[st.pi]; B._steps = null; if (page === myPage) showVocab(); }, { once: true });
    }
    if (st.t === "words" && !vSplit) { // ça dépasse ? on réduit le nombre de mots de cette page et on redessine
      const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), le = mn.lastElementChild;
      const over = !!(le && ft && (le.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 6 || mn.scrollHeight > mn.clientHeight + 2));
      if (B._probing) { B._over = over; B._waste = (le && ft) ? Math.round(ft.getBoundingClientRect().top - le.getBoundingClientRect().bottom) : 0; return; }
      if (over) {
        if (st.last && !(B._ex && B._ex[st.pi] === 1) && st.p.examples && st.p.examples.length > 1) { (B._ex || (B._ex = {}))[st.pi] = 1; showVocab(); return; } // d'abord une seule phrase en contexte, avant de déplacer des mots
        { const S2 = (B._S || {})[st.pi]; if (S2 && S2[st.ci] > 1) { S2[st.ci]--; if (S2[st.ci + 1] !== undefined) S2[st.ci + 1]++; else S2.push(1); B._steps = null; showVocab(); return; } }
      }
    }

    if (vSplit) { const hp0 = el.querySelector(".lc-nexthint"); if (hp0) hp0.remove(); }
    if (vSplit) { const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), ov = () => { const cd = mn.querySelector(":scope > .lc-card"); return cd && ft && cd.getBoundingClientRect().bottom > ft.getBoundingClientRect().top + 14; }; if (ov()) { const its = el.querySelectorAll(".lc-vq-i"); if (its.length > 1) its[1].remove(); } }
    fillRows();
    { const hp = el.querySelector(".lc-nexthint"), ft2 = el.querySelector(".lc-foot"); if (hp && ft2 && hp.getBoundingClientRect().bottom > ft2.getBoundingClientRect().top - 2) hp.remove(); }
    for (let k = 1; k <= 4; k++) { const ns = steps[page + k]; if (ns && ns.p && ns.t === "words" && ns.ci === 0 && hasScene(ns.p)) { const im = new Image(); im.src = `assets/img/lesson/${ns.p.scene[0]}.webp?v=20261025n`; } }
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll(".lc-vq-b").forEach((bt) => bt.addEventListener("click", () => { const it = bt.closest(".lc-vq-i"); if (it.dataset.done) return; it.dataset.done = "1"; const ok = bt.dataset.v === it.dataset.a; it.querySelectorAll(".lc-vq-b").forEach((x) => { x.disabled = true; if (x.dataset.v === it.dataset.a) x.classList.add("ok"); }); if (!ok) bt.classList.add("ko"); }));
    el.querySelector("#lcPrev").onclick = () => { if (vSplit && vsub) { vsub = 0; showVocab(); return; } if (page === 0) showMenu(); else { page--; showVocab(); } };
    el.querySelector("#lcNext").onclick = () => {
      if (vSplit && !vsub) { vsub = 1; showVocab(); return; }
      if (!lastStep) { page++; showVocab(); return; }
      prog.done = Object.assign({}, prog.done, { vocab: true });
      saveProgress(prog);
      showMenu();
    };
    const host = el.querySelector("#lcPrac");
    if (host) mountPractice(host, buildPractice(p, sub), {
      speak, startAt: answered[page] ? 99 : 0, scene: p.scene && p.scene[0], icon: p.icon,
      onDone: () => { answered[page] = true; const n = el.querySelector("#lcNext"); if (n) n.disabled = false; },
    });
  }

  /* ----- Grammaire / Lecture / Écoute : pages à questions obligatoires ----- */
  // Au moins 3 questions par page (phrases à compléter générées depuis le texte) : plus d'écran avec une seule question et du vide.
  const vocW = (B.vocab || []).flatMap((v) => (v.words || []).map((w) => String(w[0]).trim())).filter((w) => !/\s/.test(w));
  const aug = (kind, pages) => (pages || []).map((p0) => { const p = kind === "grammar" ? withGrammarExtra(p0) : p0; return Object.assign({}, p, { hand: (p0.qs || []).length, qsPool: withExtraQs(kind, Object.assign({}, p, { examples: (p.examples || []).filter((e) => !/\{/.test(e[0])) }), vocW, kind === "grammar" ? 9 : (kind === "listening" || kind === "reading") && (p0.qs || []).length >= 6 && kind === "listening" ? 12 : (kind === "listening" || kind === "reading") && (p0.qs || []).length >= 5 ? 5 : kind === "reading" || kind === "listening" ? 9 : 5) }); });
  const ACT = {
    grammar: { icon: "⚙️", title: "Grammaire", sub: B.grammarSub, pages: aug("grammar", B.grammar) },
    reading: { icon: "📚", title: "Lecture", sub: "Lis le texte puis réponds aux questions.", pages: aug("reading", B.reading) },
    listening: { icon: "🎧", title: "Écoute", sub: "Écoute l’audio puis réponds aux questions.", pages: aug("listening", B.listening) },
    transversal: { icon: "🌱", title: "Transversale", sub: "", pages: [] },
    exercises: { icon: "🧩", title: "Exercices", sub: "Réponds : la correction s’affiche, tu peux réessayer.", pages: (B.exercises || []).map((p0) => { const src = typeof p0.passage === "string" ? p0.passage : ""; if (!src || p0.qs.length >= 9) return p0; try { return Object.assign({}, p0, { qs: withExtraQs("reading", { title: p0.title, text: src, qs: p0.qs }, vocW, 9) }); } catch (e) { return p0; } }) },
  };
  const READERS = { Emma: "girl-1", Lucas: "boy-2", Maya: "girl-2", Alex: "boy-5", Noah: "boy-3" };
  const readerAva = (who) => { if (READERS[who]) return READERS[who]; let h = 0; for (const ch of String(who)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return `${h % 2 ? "boy" : "girl"}-${(h >>> 1) % 9 + 1}`; };
  const firstTry = {}; // "exercices:page:question" → réussi du premier coup ?
  const okQ = {}; // "activité:page" → { indexQuestion: true }

  // Étapes d'une activité : même principe que le vocabulaire — écrans courts (contenu), puis écrans de questions. Rien à faire défiler.
  const chunkEven = (arr, cap) => {
    const L = arr.length, nc = Math.max(1, Math.ceil(L / cap)), base = Math.floor(L / nc), extra = L % nc, out = [];
    for (let i = 0, k = 0; k < nc; k++) { const sz = base + (k < extra ? 1 : 0); out.push(arr.slice(i, i + sz)); i += sz; }
    return out;
  };
  const cLvl = {}, noMerge = new Set(), gLvl = {}, qCap = {}, noHint = new Set(), kwMax = {}, exMax = {}, qFirst = {}, tight = new Set(), tight2 = new Set(); // écrans qui ne tiennent pas en un seul : on les redécoupe
  const typableAct = (q) => !/^(Écoute|Which|Quelle|Choisis)/i.test(q[0]) && !q[1].some((o) => /^(yes|no|oui|non|true|false|vrai|faux|nobody|we don)\b/i.test(String(o).trim())) && (/___/.test(q[0]) || isVoc(q[0]) || q[1].every((o) => String(o).trim().split(/\s+/).length <= 3));
  function actSteps(id, A) {
    const S = [];
    A.pages.forEach((p, pi) => {
      const mergeT = !noMerge.has(id + ":t" + pi);
      if (id === "grammar") {
        const lv = gLvl[id + ":g" + pi] || 0, R = p.table, why = p.why || (WHY_A1[B.code] || {})[p.title] || (WHY_A2[B.code] || {})[p.title];
        if (why) S.push({ t: "gwhy", p, pi, why }); // page « Pourquoi on l'utilise ? » avant la règle
        if (p.qa) { /* page 100 % questions-réponses : pas de tableau, les règles sont dans les explications */ }
        else if (lv === 0) S.push({ t: "gall", p, pi, rows: R, ex: true });
        else if (lv === 1) S.push({ t: "gall", p, pi, rows: R, ex: false }); // règles seules ; exemples avec la 1re question
        else {
          const ch = chunkEven(R, 9);
          ch.forEach((rows, ci) => S.push({ t: "gtab", p, pi, rows, ci, n: ch.length }));
          S.push({ t: "gex", p, pi });
        }
      } else if (id === "transversal" && p.kind === "words") {
        capWords(p); const ch = chunkEven(p.words, 6);
        ch.forEach((words, ci) => S.push({ t: "twords", p, pi, words, ci, n: ch.length }));
      } else if (p.kind === "write") S.push({ t: "twrite", p, pi });
      const hasText = id === "reading" || id === "listening" || (id === "exercises" && (p.passage || p.audio));
      if (hasText && (!mergeT || !p.qs.length)) S.push({ t: "text", p, pi });
      if (id === "grammar" && p.qsPool && p.qsPool.length >= 6) S.push({ t: "gtest", p, pi });
      const special = (hasText && mergeT) || (id === "grammar" && (gLvl[id + ":g" + pi] || 0) === 1);
      if (p.qsPool) { // nombre de questions choisi pour que chaque écran soit plein (pas de question seule)
        let n = Math.max(p.qs.length, 3); const pool = p.qsPool;
        if (id === "grammar") n = pool.length >= 9 ? 9 : pool.length >= 6 ? 6 : Math.min(3, pool.length); // grammaire : 3 questions par écran
        else if ((id === "reading" || id === "listening")) { const m = mergeT ? (id === "listening" && p.hand >= 6 ? [Math.min(pool.length, [9, 7, 5][cLvl[id + ":" + pi] || 0])] : [10, 8, 5, 2]) : (id === "reading" && (B.code === "A2.0" || B.code === "A2.12") ? [12, 9, 8, 6, 5, 3] : [12, 9, 6, 5, 3]); n = m.find((x) => x <= pool.length) || pool.length; }
        else { if (special ? n % 2 === 0 : n % 2 === 1) n += 1;
        n = Math.min(n, pool.length); if (special ? n % 2 === 0 : n % 2 === 1) n = Math.max(n - 1, 1); }
        let pl = pool; if (id === "reading" && (B.code === "A2.0" || B.code === "A2.12")) { const mc = pool.filter((q) => !typableAct(q)), ty = pool.filter(typableAct); pl = []; for (let i = 0; i < Math.max(mc.length, ty.length); i++) { if (mc[i]) pl.push(mc[i]); if (ty[i]) pl.push(ty[i]); } }
        p = Object.assign({}, p, { qs: pl.slice(0, Math.max(n, 1)) });
      }
      if (p.qs.length) {
        const all = p.qs.map((_, i) => i), wt = hasText && mergeT;
        const qc0 = id === "listening" && p.hand >= 6 ? 5 : id === "grammar" || id === "exercises" || (id === "reading" || id === "listening") ? 3 : 2;
        const tyR = p.qs.filter(typableAct).length / p.qs.length, qc = qCap[id + ":" + pi] || (id === "listening" && B.code === "A2.12" && p.qs.length === 8 && window.innerHeight >= 700 && p.qs.every(typableAct) ? 4 : id === "reading" && B.code === "A2.12" && p.qs.length === 12 && window.innerHeight >= 700 && p.qs.every(typableAct) ? 6 : id === "reading" && (B.code === "A2.0" || B.code === "A2.12") && p.qs.length === 8 && window.innerHeight >= 700 ? 4 : id === "grammar" && (B.code === "A2.0" || B.code === "A2.12") && p.qs.length === 6 && window.innerHeight >= 700 && p.qs.every(typableAct) ? 6 : id === "exercises" && p.qs.length >= 8 && !p.passage && !p.audio && window.innerHeight >= 700 && p.qs.every(typableAct) ? (p.qs.length >= 12 ? 6 : 4) : id === "grammar" || qc0 > 3 ? qc0 : qc0 + (tyR >= 0.99 ? 2 : tyR >= 0.6 || id === "reading" ? 1 : 0)); // réponses à écrire = lignes plus courtes : plus de questions par écran
        const wex = id === "grammar" && (gLvl[id + ":g" + pi] || 0) === 1;
        const qf = id === "exercises" ? qFirst[id + ":" + pi] : undefined;
        const fs = (id === "exercises" || (id === "reading" || id === "listening")) && wt ? (id === "listening" && p.hand >= 6 ? [4, 3, 2][cLvl[id + ":" + pi] || 0] : 2) : 1;
        const ch = wt || wex ? [all.slice(0, fs), ...chunkEven(all.slice(fs), qc)].filter((x) => x.length) : qf !== undefined ? [all.slice(0, qf), ...chunkEven(all.slice(qf), qc)].filter((x) => x.length) : chunkEven(all, qc);
        ch.forEach((ix, ci) => S.push({ t: "qs", p, pi, ix, ci, n: ch.length, withText: wt && ci === 0, withEx: wex && ci === 0 }));
      }
    });
    return S;
  }
  function showAct(id) {
    screen = id;
    const A = ACT[id], steps = actSteps(id, A), total = steps.length;
    if (page >= total) page = total - 1;
    const st = steps[page], p = st.p, key = id + (id === "transversal" ? ":d" + tday : "") + ":" + st.pi, exit = id === "transversal" ? showTransvList : showMenu;
    const c = currentCharacter();
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    const li = (en, fr) => `<li><span class="lc-w"><b>${esc(sub(en))}</b><small>${esc(sub(fr))}</small></span>${spk(sub(en))}</li>`;
    let body = "", hint = "", btn = "Suivant →", bubble = "À toi de jouer !", station = 1;
    if (st.t === "gtest") {
      return quizScreen({ think: true, total, key: "g:" + B.code + ":" + st.pi, bubble: "Teste-toi !", btn: "Exercices ✏️", back: exit,
        build: (miss) => gramItems(p.qsPool, miss), prev: () => { page--; showAct(id); }, next: () => { page++; showAct(id); } });
    }
    const nxt = steps[page + 1], toQ = st.t !== "qs" && nxt && (nxt.t === "qs" || nxt.t === "gtest") && nxt.pi === st.pi;
    if (toQ && !(st.t === "gall" && !st.ex)) { btn = id === "reading" || id === "listening" ? "Questions ✏️" : "Exercices ✏️"; if (!noHint.has(id + st.pi)) hint = `<p class="lc-nexthint">👉 Page suivante : ${id === "reading" || id === "listening" ? "les questions" : "les exercices"}</p>`; }

    const exBody = () => id === "grammar" && (p.table || []).length >= 7 ? "" : `<section class="lc-card lc-ctx lc-gex lc-gex-s"><h2 class="lc-h2 lc-h2-ctx">💡 Exemples</h2><ul class="lc-list lc-vl lc-bub">${p.examples.slice(0, id === "grammar" ? (exMax[id + ":" + st.pi] ?? ((p.table || []).length >= 7 ? 1 : p.examples.length)) : p.examples.length).map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    let textBody = "";
    if (st.t === "text" || st.withText) {
      if (id === "reading") {
        bubble = "Lis le texte !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">${ico(`assets/img/characters/${readerAva(p.who)}.webp`)} ${esc(p.who)}</h2>
          ${dlgTurns(p.text) ? dlgBubbles(dlgTurns(p.text), true) : `<p class="lc-text">${esc(p.text)}</p>`}
          <div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.text)}">🔊 Écouter</button><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Voir la traduction</button></div>
          <p class="lc-tr" id="lcTrText" hidden>${esc(p.fr)}</p></section>`;
      } else if (id === "listening") {
        bubble = "Écoute bien !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">🎧 ${esc(p.title)}</h2>
          <div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.text)}" aria-label="Écouter l’audio">▶</button>
            <span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>
          <div class="lc-actions"><button type="button" class="lc-chip" id="lcTr" aria-expanded="false">Afficher la transcription</button></div>
          ${dlgTurns(p.text) ? `<div class="lc-tr" id="lcTrText" hidden>${dlgBubbles(dlgTurns(p.text), false)}</div>` : `<p class="lc-tr" id="lcTrText" hidden>${esc(p.text)}</p>`}</section>`;
      } else {
        bubble = "Lis et écoute !";
        textBody = `<section class="lc-card"><h2 class="lc-h2">🧩 ${esc(p.title)}</h2><p class="lc-lead">${esc(p.help || "")}</p>
          ${p.passage ? `<p class="lc-text">${esc(p.passage)}</p><div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(p.passage)}">🔊 Écouter</button></div>` : ""}
          ${p.audio ? `<div class="lc-player"><button type="button" class="lc-play" data-say="${esc(p.audio)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed" aria-label="Vitesse de lecture">${speedMul === 1 ? "1x" : "0.75x"}</button></div>` : ""}</section>`;
      }
    }
    // Écran de lecture un peu vide : on ajoute « Mots du texte » (vocabulaire de la leçon repéré dans le texte)
    let kwBody = "";
    const kwKey = key + ":" + (st.ci || 0);
    if (st.t === "text" && id === "reading" && (kwMax[kwKey] ?? 4) >= 1) {
      const tx = " " + String(p.text).toLowerCase().replace(/[^a-z0-9'’ -]/g, " ") + " ", seen = new Set();
      const kw = (B.vocab || []).flatMap((v) => (v.words || [])).filter(([en]) => { const e = String(en).toLowerCase().trim(); if (seen.has(e) || e.length < 3) return false; seen.add(e); return new RegExp(" " + e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(s|es)? ").test(tx); })
        .sort((a, b) => b[0].length - a[0].length).slice(0, kwMax[kwKey] ?? 4);
      if (Array.isArray(p.kwx)) p.kwx.forEach((w) => { if (kw.length < (kwMax[kwKey] ?? 4) && !kw.some((k) => String(k[0]).toLowerCase() === String(w[0]).toLowerCase())) kw.push(w); });
      if (kw.length >= 1) kwBody = `<section class="lc-card lc-ctx lc-kw"><h2 class="lc-h2 lc-h2-ctx">🔑 Mots du texte</h2><ul class="lc-list lc-vl">${kw.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    }
    // Écoute : phrases clés de l'audio (jamais la réponse) pour que l'écran soit plein ; le nombre de lignes baisse seul si ça déborde.
    const kwSrc = st.t !== "qs" ? null : id === "listening" ? p.kw : null;
    if (Array.isArray(kwSrc) && (kwMax[kwKey] ?? 3) >= 1) {
      const kw = kwSrc.slice(0, kwMax[kwKey] ?? 3);
      kwBody = `<section class="lc-card lc-ctx lc-kw"><h2 class="lc-h2 lc-h2-ctx">${id === "listening" ? "🔑 Phrases de l’audio" : "💡 Exemples"}</h2><ul class="lc-list lc-vl">${kw.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    }
    const tipCard = p.tip && !st.ex ? `<section class="lc-card lc-ctx lc-kw"><h2 class="lc-h2 lc-h2-ctx">⚠️ Piège fréquent</h2><p class="lc-tipt">${esc(p.tip)}</p></section>` : "";
    if (st.t === "gwhy") {
      station = 0; bubble = st.why.title ? "Pourquoi on dit ça ?" : "Pourquoi ce temps ?";
      const w = st.why;
      body = `<section class="lc-card lc-why"><h2 class="lc-h2">🧭 Pourquoi ? <span class="lc-why-t">${p.icon} ${esc(w.title || p.title)}</span></h2><p class="lc-why-i">${esc(w.intro)}</p>
        <ul class="lc-list lc-vl lc-why-u">${w.uses.map(([lab, en, fr]) => `<li><span class="lc-w"><b>${esc(lab)}</b><span class="lc-form">${esc(en)}</span><small>${esc(fr)}</small></span>${lab.startsWith("✗") ? "" : spk(en)}</li>`).join("")}</ul>
        <p class="lc-why-m">🔑 ${esc(w.marks)}</p><p class="lc-why-w">⚠️ ${esc(w.watch)}</p></section>`;
    } else if (st.t === "gall") {
      station = 0; bubble = "Retiens la règle !";
      body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>
        <ul class="lc-list lc-vl lc-rules">${st.rows.map((r) => { const [a, b, f] = r; return `<li><span class="lc-w"><b>${esc(a)}</b><span class="lc-form">${esc(b)}</span><small>${esc(f)}</small></span>${spk(sayRow(r))}</li>`; }).join("")}</ul></section>${st.ex ? exBody() : ""}${tipCard}`;
    } else if (st.t === "gtab") {
      station = 0; bubble = "Retiens la règle !";
      body = `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>
        <ul class="lc-list lc-vl lc-rules">${st.rows.map((r) => { const [a, b, f] = r; return `<li><span class="lc-w"><b>${esc(a)}</b><span class="lc-form">${esc(b)}</span><small>${esc(f)}</small></span>${spk(sayRow(r))}</li>`; }).join("")}</ul></section>${st.ci === st.n - 1 ? tipCard : ""}`;
    } else if (st.t === "gex") {
      station = 0; bubble = "Écoute et répète !";
      body = `<section class="lc-card lc-ctx lc-gex"><h2 class="lc-h2 lc-h2-ctx">💡 Exemples</h2><ul class="lc-list lc-vl lc-bub">${p.examples.slice(0, id === "grammar" ? (exMax[id + ":x" + st.pi] ?? p.examples.length) : p.examples.length).map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    } else if (st.t === "twords") {
      station = 0; bubble = "Écoute et répète !";
      body = `<section class="lc-card"><h2 class="lc-h2">🔊 ${esc(p.title)}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</h2>${st.ci === 0 && p.goal ? `<p class="lc-lead">${esc(p.goal)}</p>` : ""}<ul class="lc-list lc-vl">${st.words.map(([en, fr]) => li(en, fr)).join("")}</ul></section>`;
    } else if (st.t === "twrite") {
      station = 0; bubble = "Écris en anglais !";
      body = `<section class="lc-card"><h2 class="lc-h2">✍️ Expression écrite</h2><p class="lc-lead">${esc(p.prompt)}</p><textarea id="lcTa" class="lc-ta" rows="5" aria-label="Ta réponse en anglais">${esc(writeTx[key] || "")}</textarea><p class="lc-small">Écris en anglais (au moins une phrase).</p></section>`;
    } else if (st.t === "text") {
      station = 0; body = textBody + kwBody;
    } else {
      const lbl = id === "grammar" || id === "exercises" || id === "transversal" ? "À toi de pratiquer !" : "Questions";
      body = `${st.withText ? textBody : ""}${st.withEx ? exBody() : ""}<section class="lc-card lc-prac"><h2 class="lc-h2 lc-h2-prac${(id === "reading" || id === "listening") && !st.withText && p.text ? " lc-h2-row" : ""}"><span>✏️ ${lbl}${st.n > 1 ? ` <span class="lc-part">${st.ci + 1}/${st.n}</span>` : ""}</span>${(id === "reading" || id === "listening") && !st.withText && p.text ? `<button type="button" class="lc-chip lc-recap" data-recap="${esc(p.text)}" data-kind="${id === "listening" ? "audio" : "text"}">${id === "listening" ? "🎧 Réécouter" : "📖 Revoir le texte"}</button>` : ""}</h2>
        ${st.ci === 0 && id === "exercises" && !(p.passage || p.audio) ? `<p class="lc-lead">${esc(p.title)}${p.help ? " — " + esc(p.help) : ""}</p>` : ""}
        ${st.ix.map((qi, k) => { const q = p.qs[qi]; return `<div class="lc-qb" data-qi="${qi}"><p class="lc-q">${qi + 1}. ${esc(q[0])}</p>
        <div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice" data-qi="${qi}" data-i="${i}">${esc(o)}</button>`).join("")}</div>
        <p class="lc-fb" aria-live="polite"></p></div>`; }).join("")}</section>${id === "listening" || id === "grammar" ? kwBody : ""}`;
    }

    const last = page === total - 1;
    if (last) btn = "Terminer ✓";
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${btn}</button></footer>`;
    const guide = `<div class="lc-guide">${ico(c.src, "lc-ava-md")}<div class="lc-gbub">${esc(bubble)}</div>
      <div class="lc-path" aria-hidden="true"><i class="${station > 0 ? "d" : "c"}"></i><u></u><i class="${station > 0 ? "c" : ""}"></i></div></div>`;
    frame(HEAD, { cur: page + 1, total }, `${guide}${body}${hint}`, foot);
    el.querySelector(".lc-main").scrollTop = 0;
    el.querySelector(".lc-main").classList.toggle("lc-listen", st.t === "qs" && (id === "listening" || id === "reading" || id === "grammar" || id === "exercises"));
    el.querySelector(".lc-main").classList.toggle("lc-wt3", st.t === "qs" && id === "listening" && st.ix.length >= 2 && p.hand >= 6);
    el.querySelector(".lc-main").classList.toggle("lc-ex", id === "exercises" || (id === "reading" || id === "listening"));
    el.querySelector(".lc-main").classList.toggle("lc-g3", st.t === "qs" && (id === "grammar" || id === "exercises" || (id === "reading" || id === "listening")));
    el.querySelector(".lc-main").classList.toggle("lc-tight2", st.t === "qs" && tight2.has(id + ":" + st.pi));
    el.querySelector(".lc-main").classList.toggle("lc-tight", st.t === "qs" && (id === "grammar" ? tight.has(id + ":" + st.pi) : id === "exercises" || (id === "reading" || id === "listening")));
    {
      const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), lastEl = mn.lastElementChild;
      if (lastEl && ft && !(((id === "exercises" || (id === "grammar" && (B.code === "A2.0" || B.code === "A2.12"))) && st.t === "qs" && (st.ix.length === 4 || st.ix.length === 6) && !st.withText && window.innerHeight >= 700 && st.ix.every((qi) => typableAct(p.qs[qi]))) || ((id === "reading" || (id === "listening" && B.code === "A2.12")) && (B.code === "A2.0" || B.code === "A2.12") && st.t === "qs" && (st.ix.length === 4 || (st.ix.length === 6 && B.code === "A2.12")) && window.innerHeight >= 700)) && (lastEl.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - ((id === "grammar" || id === "exercises" || (id === "reading" || id === "listening")) && st.t === "qs" && st.ix.length >= 3 && !tight.has(id + ":" + st.pi) ? 40 + (st.ix.some((qi) => String((p.qs[qi] || [])[0]).length > 44 || String((p.qs[qi] || [])[3]).length > 40) ? 18 : 0) : 6) || mn.scrollHeight > mn.clientHeight + 2)) {
        const gk = id + ":g" + st.pi;
        if (kwBody) { kwMax[kwKey] = (kwMax[kwKey] ?? (id === "listening" || id === "grammar" ? 3 : 4)) - 1; showAct(id); return; }
        if (hint && !noHint.has(id + st.pi)) { noHint.add(id + st.pi); showAct(id); return; }
        if (id === "grammar" && st.t === "gex" && (exMax[id + ":x" + st.pi] ?? p.examples.length) > 2) { exMax[id + ":x" + st.pi] = (exMax[id + ":x" + st.pi] ?? p.examples.length) - 1; showAct(id); return; }
        if (id === "grammar" && st.t === "gall" && st.ex && (exMax[id + ":" + st.pi] ?? p.examples.length) > 2) { exMax[id + ":" + st.pi] = (exMax[id + ":" + st.pi] ?? p.examples.length) - 1; showAct(id); return; }
        if ((id === "grammar" || id === "exercises" || (id === "reading" || id === "listening")) && st.t === "qs" && st.ix.length >= 3 && !tight.has(id + ":" + st.pi)) { tight.add(id + ":" + st.pi); showAct(id); return; }
        if ((id === "grammar" || id === "exercises" || (id === "reading" || id === "listening")) && st.t === "qs" && st.ix.length >= 3 && tight.has(id + ":" + st.pi) && !tight2.has(id + ":" + st.pi)) { tight2.add(id + ":" + st.pi); showAct(id); return; }
        if (st.t === "gall" && (gLvl[gk] || 0) < 2) { delete exMax[id + ":" + st.pi]; gLvl[gk] = (gLvl[gk] || 0) + 1; showAct(id); return; }
        if (st.t === "qs" && st.withEx) { gLvl[id + ":g" + st.pi] = 2; showAct(id); return; }
        if (id === "exercises" && st.t === "qs" && !st.withText && st.ci === 0 && st.ix.length > 1) { qFirst[id + ":" + st.pi] = st.ix.length - 1; showAct(id); return; }
        if (st.t === "qs" && !st.withText && st.ix.length > 1) { qCap[id + ":" + st.pi] = Math.max(1, st.ix.length - 1); showAct(id); return; }
        if (st.withText && id === "listening" && p.hand >= 6 && (cLvl[id + ":" + st.pi] || 0) < 2 && st.ix.length > 2) { cLvl[id + ":" + st.pi] = (cLvl[id + ":" + st.pi] || 0) + 1; showAct(id); return; }
        const k = st.withText ? id + ":t" + st.pi : null;
        if (k && !noMerge.has(k)) { noMerge.add(k); showAct(id); return; }
      }
    }

    fillRows();
    const next = el.querySelector("#lcNext");
    const refresh = () => {
      if (st.t === "qs") next.disabled = !st.ix.every((qi) => (okQ[key] || {})[qi]);
      else if (st.t === "twrite") next.disabled = (writeTx[key] || "").trim().length < 15;
      else next.disabled = false;
    };
    const xp = (q, i) => (Array.isArray(q[3]) ? q[3][i] : q[3]) || "";
    const mark = (qi, withMsg) => {
      const q = p.qs[qi], box = el.querySelector(`.lc-qb[data-qi="${qi}"]`);
      if (!box) return;
      box.querySelectorAll(".lc-choice").forEach((x) => { x.disabled = true; x.classList.toggle("lc-right", Number(x.dataset.i) === q[2]); });
      const fb = box.querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ok"; fb.textContent = withMsg ? "Bravo ! " + xp(q, q[2]) : "✓ " + xp(q, q[2]);
    };
    Object.keys(okQ[key] || {}).forEach((qi) => mark(Number(qi), false));
    refresh();

    el.querySelector("#lcBack").onclick = exit;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) exit(); else { page--; showAct(id); } };
    const wta = el.querySelector("#lcTa"); if (wta) { wta.addEventListener("input", () => { writeTx[key] = wta.value; refresh(); }); mountAdvice(() => wta.value); }
    next.onclick = () => {
      if (!last) { page++; showAct(id); return; }
      if (id === "transversal") {
        prog.transv = Object.assign({}, prog.transv, { [tday]: true });
        const n = Object.keys(prog.transv).length;
        prog.scores = Object.assign({}, prog.scores, { transversal: `${n}/7 jours` });
        if (n >= 7) prog.done = Object.assign({}, prog.done, { transversal: true });
        saveProgress(prog); showTransvList(); return;
      }
      prog.done = Object.assign({}, prog.done, { [id]: true });
      if (id === "exercises") {
        let sc = 0, tot = 0;
        B.exercises.forEach((pg, k) => pg.qs.forEach((_, qi) => { tot++; if (firstTry[`exercises:${k}:${qi}`] === true) sc++; }));
        prog.scores = Object.assign({}, prog.scores, { exercises: `${sc}/${tot}` });
      }
      saveProgress(prog); showMenu();
    };
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      const qi = Number(b.dataset.qi), q = p.qs[qi], ftKey = `${key}:${qi}`;
      el.querySelectorAll(`.lc-qb[data-qi="${qi}"] .lc-choice`).forEach((x) => x.classList.remove("lc-wrong"));
      if (Number(b.dataset.i) === q[2]) { if (firstTry[ftKey] === undefined) firstTry[ftKey] = true; okQ[key] = Object.assign({}, okQ[key], { [qi]: true }); mark(qi, true); refresh(); }
      else { firstTry[ftKey] = false; b.classList.add("lc-wrong"); const fb = b.closest(".lc-qb").querySelector(".lc-fb"); fb.className = "lc-fb lc-fb-ko"; fb.textContent = Array.isArray(q[3]) ? "Pas tout à fait — " + xp(q, Number(b.dataset.i)) + " Réessaie." : id === "exercises" ? "Pas tout à fait — " + (q[3] || "") + " Réessaie." : "Pas tout à fait, réessaie."; }
    }));
    // « Écrire d'abord » : pour les questions courtes, l'élève tape sa réponse ; les choix sont derrière « Indice ».
    el.querySelectorAll(".lc-qb[data-qi]").forEach((box) => {
      const qi = Number(box.dataset.qi), q = p.qs[qi];
      if (!q || (okQ[key] || {})[qi] || !typableAct(q)) return;
      const ch = box.querySelector(".lc-choices"), fb = box.querySelector(".lc-fb"), w = document.createElement("div");
      w.className = "q6-w"; w.innerHTML = `<input class="lc-ta q6-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Écris ta réponse…"><button type="button" class="q6-okb">OK</button><button type="button" class="q6-hintb">💡 Indice</button>`;
      ch.hidden = true; ch.style.setProperty("display", "none", "important"); ch.before(w);
      const inp = w.querySelector("input");
      const submit = () => {
        const v = inp.value.trim(); if (!v) return;
        if (same(v, q[1][q[2]], isVoc(q[0]), q[1])) { ch.hidden = false; ch.style.removeProperty("display"); w.remove(); ch.querySelector(`.lc-choice[data-i="${q[2]}"]`).click(); }
        else { firstTry[`${key}:${qi}`] = false; fb.className = "lc-fb lc-fb-ko"; fb.textContent = "Pas tout à fait — 💡 " + maskHint({ opts: q[1], a: q[2], expl: xp(q, q[2]) }) + " Réessaie."; }
      };
      w.querySelector(".q6-okb").onclick = submit; inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); submit(); } });
      w.querySelector(".q6-hintb").onclick = (e) => { ch.hidden = false; ch.style.removeProperty("display"); e.currentTarget.remove(); };
    });
    const tr = el.querySelector("#lcTr");
    if (tr) tr.onclick = () => { const t = el.querySelector("#lcTrText"); t.hidden = !t.hidden; tr.setAttribute("aria-expanded", String(!t.hidden)); };
    const sp = el.querySelector("#lcSpeed");
    if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
  }

  /* ----- Expression : parler ou écrire (validation si ≥ 3 éléments repérés) ----- */
  const spkState = { tab: "write", text: {}, heard: {}, said: {}, ok: {}, exn: {} };
  function showSpeak() {
    screen = "speaking";
    const tab = spkState.tab;
    // Les exercices de traduction (p.trad) s'écrivent seulement : ils n'apparaissent pas dans l'onglet « Parler ».
    const EXL = tab === "speak" ? B.expression.filter((x) => !x.trad) : B.expression;
    const p = EXL[page], total = EXL.length, c = currentCharacter();
    const EXN = spkState.exn[tab + ":" + page] ?? (tab === "write" ? 5 : 7);
    const sub = (x) => x.replace(/\{name\}/g, c.name);
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const txt = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
    const TRS = (spkState.trad = spkState.trad || {});
    // Page « Traduction » : une phrase = une carte, chaque phrase est vérifiée séparément (mots-clés, sans accents).
    const normT = (t) => String(t || "").toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    // Contractions : don't = do not, I'm = I am, I'd like = I would like… (des deux côtés) ; synonymes : SYN_TR (une variante d'un groupe en vaut une autre).
    const ctr = (n) => " " + n.replace(/\bcannot\b/g, "can not").replace(/\bwon t\b/g, "will not").replace(/\bcan t\b/g, "can not").replace(/\b(\w+)n t\b/g, "$1 not").replace(/\bi m\b/g, "i am").replace(/\b(you|we|they) re\b/g, "$1 are").replace(/\b(he|she|it|that|there|what|who|where|here) s\b/g, "$1 is").replace(/\blet s\b/g, "let us").replace(/\b(i|you|he|she|it|we|they) d\b/g, "$1 would").replace(/\b(i|you|he|she|it|we|they) ll\b/g, "$1 will").replace(/\b(i|you|we|they|would|could|should) ve\b/g, "$1 have").replace(/\s+/g, " ").trim() + " ";
    const SI = (globalThis.__synTr = globalThis.__synTr || (() => { const m = new Map(); SYN_TR.forEach((g) => g.forEach((w) => { const k = normT(w); if (!m.has(k)) m.set(k, new Set()); g.forEach((v) => m.get(k).add(normT(v))); })); return m; })());
    const hitK = (n, x) => { const k0 = normT(x), k = k0 === "n t" ? "not" : k0, alts = new Set([k]); (SI.get(k) || []).forEach((v) => alts.add(v)); return [...alts].some((a) => n.includes(ctr(a)) || n.includes(" " + a + " ") || n.includes(a)); };
    const rowOk = (r, txt) => { const n = ctr(normT(txt)); return normT(txt).length >= Math.max(4, normT(r.model).length * 0.5) && r.keys.every((g) => g.some((x) => hitK(n, x))); };
    const trSt = (d) => (TRS[page + d] = TRS[page + d] || { text: {}, res: {}, tries: {}, rev: {} });
    const trCount = (pt) => { const st = trSt(pt.dir); return pt.rows.filter((_, i) => st.res[i] || st.rev[i]).length; };
    const trDone = (pt) => trCount(pt) >= Math.ceil(pt.rows.length * 0.8);
    const curDir = TRS.dir || "fr";
    const trBody = () => { const pt = p.parts.find((x) => x.dir === curDir) || p.parts[0], st = trSt(pt.dir), fr = pt.dir === "fr";
      return `<section class="lc-card"><h2 class="lc-h2">🔁 Traduction</h2>
      <div class="lc-seg">${p.parts.map((x) => `<button type="button" class="${x.dir === pt.dir ? "on" : ""}" data-dir="${x.dir}"><span class="lc-pill">${x.dir === "fr" ? "EN" : "FR"}</span>→<span class="lc-pill fr">${x.dir === "fr" ? "FR" : "EN"}</span> <b>${trCount(x)}/${x.rows.length}</b>${trDone(x) ? " <i>✓</i>" : ""}</button>`).join("")}</div>
      <p class="lc-trad-t">${esc(pt.title)} · traduis phrase par phrase</p>
      ${pt.rows.map((r, i) => { const ok = st.res[i], rev = st.rev[i], ko = st.res[i] === false, tr = st.tries[i] || 0;
        return `<div class="lc-ph ${ok ? "ok" : ko ? "ko" : ""}"><span class="lc-n">${i + 1}</span><div class="lc-ph-b"><p>${esc(r.src)}</p>
          <textarea data-i="${i}" rows="1" placeholder="${fr ? "Ta traduction en français…" : "Ta traduction en anglais…"}" aria-label="${fr ? "Traduction en français" : "Traduction en anglais"} de la phrase ${i + 1}" ${ok ? "readonly" : ""}>${esc(st.text[i] || "")}</textarea>
          ${ko && !rev ? `<small class="lc-ko">Pas tout à fait : relis et corrige.</small>${tr >= 2 ? ` <button type="button" class="lc-see" data-i="${i}">Voir la correction</button>` : ""}` : ""}
          ${ok || rev ? `<small class="lc-mo">${rev && !ok ? "Correction" : "Modèle"} : <b>${esc(r.model)}</b></small>` : ""}</div>
          <span class="lc-st">${ok ? "✅" : rev ? "💡" : ko ? "❌" : ""}</span></div>`; }).join("")}
      <button type="button" class="lc-cta lc-trad-ok">Valider</button>
      <p class="lc-trad-msg" aria-live="polite">${trDone(pt) ? "Série réussie : bravo !" : `${trCount(pt)}/${pt.rows.length} phrases justes. Objectif : ${Math.ceil(pt.rows.length * 0.8)}.`}</p></section>`; };
    const body = p.trad ? trBody() : `<section class="lc-card"><h2 class="lc-h2">${p.icon} ${esc(p.title)}</h2>
      ${p.img ? `<figure class="lc-pic"><img src="assets/img/lesson/${p.img}.webp?v=20261025n" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}
      <div class="lc-tabs" role="tablist">
        ${`<button type="button" class="lc-tab ${tab === "speak" ? "on" : ""}" data-tab="speak" role="tab" aria-selected="${tab === "speak"}">🎤 Parler</button>`}
        <button type="button" class="lc-tab ${tab === "write" ? "on" : ""}" data-tab="write" role="tab" aria-selected="${tab === "write"}">✍️ Écrire</button></div>
      <ol class="lc-prompts">${p.prompts.concat(p.trad || p.img ? [] : ["Ajoute un détail.", "Pose une question.", "Dis ce que tu aimes.", "Dis pourquoi.", "Dis où et quand.", "Dis avec qui.", "Dis ce que tu veux."].slice(0, EXN)).map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      <div class="lc-model"><span class="lc-w"><small>Modèle</small><b>${esc(sub(p.model))}</b></span>${spk(sub(p.model))}</div>
      ${tab === "write"
        ? `<textarea id="lcTa" class="lc-ta" rows="${p.img ? 2 : 4}" placeholder="Écris en anglais…" aria-label="Ta réponse en anglais">${esc(txt)}</textarea>`
        : `<div class="lc-mic">${(SR || window.MediaRecorder) ? `<button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-small">Appuie, parle en anglais, puis appuie sur ⏹ pour terminer.</p>` : `<p class="lc-small">La reconnaissance vocale n’est pas disponible sur cet appareil : dis ta réponse à voix haute, puis coche la case.</p>`}
            <p class="lc-heard" id="lcHeard">${esc(txt)}</p>
            <button type="button" class="lc-sec-btn" id="lcReplay" ${spkState.url && spkState.url[page] ? "" : "hidden"}>▶ Me réécouter</button>
            <label class="lc-said"><input type="checkbox" id="lcSaid" ${spkState.said[page] ? "checked" : ""}/> J’ai dit ma réponse à voix haute</label></div>`}
      <ul class="lc-checks lc-chips" id="lcChecks" aria-live="polite"></ul></section>`;
    const last = page === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button>
      <button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame(HEAD, { cur: page + 1, total }, body, foot);
    el.querySelector(".lc-main").scrollTop = 0;

    const next = el.querySelector("#lcNext");
    const normalPaint = () => {
      const cur = (tab === "write" ? spkState.text[page] : spkState.heard[page]) || "";
      const res = p.checks.map(([l, re]) => [l, rxTest(re, cur)]);
      el.querySelector("#lcChecks").innerHTML = res.map(([l, ok]) => `<li class="${ok ? "on" : ""}"><span>${ok ? "✓" : "○"}</span>${esc(l)}</li>`).join("");
      if (res.filter((r) => r[1]).length >= 3 || (tab === "speak" && spkState.said[page])) spkState.ok[tab + page] = true;
      next.disabled = !spkState.ok[tab + page];
    };
    // Page de traduction : on passe à la suite quand les deux séries (EN→FR et FR→EN) sont réussies.
    const tradPaint = () => { next.disabled = !p.parts.every(trDone); };
    const paint = p.trad ? tradPaint : normalPaint;
    if (p.trad) el.querySelectorAll(".lc-ph textarea").forEach((t) => { const g = () => { t.style.height = "auto"; t.style.height = Math.max(24, t.scrollHeight) + "px"; }; t.addEventListener("input", g); g(); });
    if (p.trad) {
      const keep = (fn) => { const m = el.querySelector(".lc-main"), y = m ? m.scrollTop : 0; fn(); const m2 = el.querySelector(".lc-main"); if (m2) m2.scrollTop = y; };
      const pt = p.parts.find((x) => x.dir === curDir) || p.parts[0], st = trSt(pt.dir);
      el.querySelectorAll(".lc-seg button").forEach((b) => (b.onclick = () => { TRS.dir = b.dataset.dir; showSpeak(); }));
      el.querySelectorAll(".lc-ph textarea").forEach((ta) => ta.addEventListener("input", () => { st.text[ta.dataset.i] = ta.value; if (st.res[ta.dataset.i] === false) { delete st.res[ta.dataset.i]; } }));
      el.querySelectorAll(".lc-see").forEach((b) => (b.onclick = () => keep(() => {
        st.rev[b.dataset.i] = true;
        if (trDone(pt)) { prog.trad = Object.assign({}, prog.trad, { [pt.dir]: Object.assign({ ok: 0, tot: pt.rows.length }, (prog.trad || {})[pt.dir], { done: true }) }); saveProgress(prog); }
        showSpeak(); })));
      el.querySelector(".lc-trad-ok").onclick = () => keep(() => {
        let n = 0;
        pt.rows.forEach((r, i) => { const t = (st.text[i] || "").trim(); if (!t || st.res[i]) return; n++; st.res[i] = rowOk(r, t); st.tries[i] = (st.tries[i] || 0) + 1; });
        if (!n) { toast("Écris au moins une traduction avant de valider"); return; }
        // Livret de notes : on garde, par sens, le meilleur nombre de phrases justes (les corrections vues ne comptent pas dans la note).
        const good = pt.rows.filter((_, i) => st.res[i]).length, old = (prog.trad || {})[pt.dir] || {};
        prog.trad = Object.assign({}, prog.trad, { [pt.dir]: { ok: Math.max(good, old.ok || 0), tot: pt.rows.length, done: !!old.done || trDone(pt), at: new Date().toISOString().slice(0, 10) } });
        saveProgress(prog);
        showSpeak();
      });
    }
    paint(); fillSpace();
    const ovfFix = () => { // ça dépasse (conseil IA compris) ? on retire une consigne supplémentaire et on redessine
      if (screen !== "speaking" || page !== PG0 || spkState.tab !== tab) return;
      const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), le = mn && mn.lastElementChild;
      const over = le && ft ? le.getBoundingClientRect().bottom - (ft.getBoundingClientRect().top - 6) : 0;
      if (over > -2 && EXN > 0 && !p.trad) { spkState.exn[tab + ":" + page] = EXN - 1; showSpeak(); }
      else if (over > -22) { const ta = el.querySelector("#lcTa"); if (ta) { ta.style.minHeight = "60px"; ta.style.height = Math.max(60, Math.round(ta.getBoundingClientRect().height - over - 22)) + "px"; } }
    };
    const PG0 = page;
    setTimeout(fillSpace, 400); setTimeout(ovfFix, 100); setTimeout(ovfFix, 260);
    { const mn = el.querySelector(".lc-main"); if (mn.scrollHeight > mn.clientHeight + 2) mn.classList.add("lc-tight"); }
    el.querySelectorAll(".lc-tab").forEach((b) => b.addEventListener("click", () => { spkState.tab = b.dataset.tab; showSpeak(); }));
    const ta = el.querySelector("#lcTa");
    if (ta) { ta.addEventListener("input", () => { spkState.text[page] = ta.value; paint(); }); mountAdvice(() => ta.value); }
    const said = el.querySelector("#lcSaid");
    if (said) said.addEventListener("change", () => { spkState.said[page] = said.checked; paint(); });
    const mic = el.querySelector("#lcMic");
    if (mic) {
      spkState.url = spkState.url || {};
      let on = false;
      const V = createVoice({
        onState: (st) => { on = st === "listening"; mic.textContent = on ? "⏹" : "🎙️"; mic.classList.toggle("lc-mic-on", on); },
        onText: (t) => { spkState.heard[page] = t; const h = el.querySelector("#lcHeard"); if (h) h.textContent = t; },
        onDone: ({ alts, url }) => {
          if (alts && alts[0]) spkState.heard[page] = alts[0];
          if (url) { spkState.url[page] = url; const r = el.querySelector("#lcReplay"); if (r) r.hidden = false; }
          const h = el.querySelector("#lcHeard"); if (h) h.textContent = spkState.heard[page] || "";
          paint();
        },
        onError: (c) => toast(c === "denied" ? "Micro refusé : autorise-le dans les réglages" : "Micro indisponible sur cet appareil"),
      });
      mic.onclick = () => (on ? V.stop() : V.start());
      const rp = el.querySelector("#lcReplay");
      if (rp) rp.onclick = () => { try { new Audio(spkState.url[page]).play(); } catch (e) { toast("Lecture impossible"); } };
    }
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelector("#lcPrev").onclick = () => { if (page === 0) showMenu(); else { page--; showSpeak(); } };
    next.onclick = () => {
      if (!last) { page++; showSpeak(); return; }
      // Fin d'une série (6 sujets) : on propose l'autre mode (Parler ↔ Écrire) avant de revenir au menu.
      spkState.modeDone = Object.assign({}, spkState.modeDone, { [tab]: true });
      const other = tab === "speak" ? "write" : "speak";
      if (!spkState.modeDone[other]) {
        spkState.tab = other; page = 0;
        toast(other === "write" ? "Parler : terminé ! Maintenant, écris les mêmes sujets." : "Écrire : terminé ! Maintenant, parle sur les mêmes sujets.");
        showSpeak(); return;
      }
      prog.done = Object.assign({}, prog.done, { speaking: true }); saveProgress(prog); showMenu();
    };
  }

  /* ----- Conversation : le personnage parle, l'élève répond en anglais ----- */
  const dlgState = { done: {} };
  const sceneHero = (k) => { const sl = (B.vocab || []).filter((x) => x.scene).map((x) => x.scene).concat(B.scenes || []), sc = sl[k % Math.max(1, sl.length)]; return sc ? `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/${sc[0]}.webp?v=20261025n" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>` : ""; };
  function showDialogueList() {
    screen = "dialogue";
    const done = prog.dialogues || {};
    const kp = keyPhrases();
    const kpRow = kp ? `<button type="button" class="lc-row" data-kp="1"><span class="lc-num">1</span><span class="lc-ic">${kp.icon}</span><span class="lc-txt"><b>${esc(kp.title)}</b><small>Écoute les phrases clés</small></span><span class="lc-go">${(prog.keyphrases || {}).done ? "✓" : "›"}</span></button>` : "";
    const off = kp ? 1 : 0;
    const rows = kpRow + DLG.map((d, i) => `<button type="button" class="lc-row" data-dlg="${i}">
      <span class="lc-num">${i + 1 + off}</span><span class="lc-ic">${d.icon}</span>
      <span class="lc-txt"><b>${esc(d.title)}</b><small>${esc(d.scene)}</small></span><span class="lc-go">${done[i] ? "✓" : "›"}</span></button>`).join("");
    frame(HEAD, null, `<p class="lc-sub2">Le personnage parle. Tu réponds en anglais.</p><section class="lc-card lc-menu lc-menu2">${rows}</section>`);
    fillSpace();
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-dlg]").forEach((b) => b.addEventListener("click", () => runDialogue(Number(b.dataset.dlg))));
    el.querySelectorAll("[data-kp]").forEach((b) => b.addEventListener("click", () => showKeyPhrases(0)));
  }
  // Phrases clés de la leçon (ancienne page d'ouverture du vocabulaire) : bulles de conversation, 5 par page.
  function keyPhrases() {
    const g = (B.vocab || []).find((x) => x.wasGreet || x.kind === "greetings"); if (!g) return null;
    const words = (B.greetings && B.greetings.length ? B.greetings : g.examples || []).map((x) => x.slice(0, 2));
    return words.length ? { title: g.title, icon: "💬", words, tip: g.tip } : null;
  }
  function showKeyPhrases(pg) {
    screen = "dialogue";
    const kp = keyPhrases(); if (!kp) { showDialogueList(); return; }
    const per = 5, n = Math.max(1, Math.ceil(kp.words.length / per)), a = Math.min(pg, n - 1), part = kp.words.slice(a * per, a * per + per), last = a === n - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext">${last ? "Terminer ✓" : "Suivant →"}</button></footer>`;
    frame(HEAD, { cur: a + 1, total: n }, `<section class="lc-card lc-card-bare"><h2 class="lc-h2">💬 ${esc(kp.title)}${n > 1 ? ` <span class="lc-part">${a + 1}/${n}</span>` : ""}</h2>
      <div class="lc-bl lc-bl-full">${part.map(([en, fr], i) => `<div class="lc-bb ${(a * per + i) % 2 ? "me" : "npc"}"><span class="lc-bt">${esc(en)}<small>${esc(fr)}</small></span>${spk(en)}</div>`).join("")}</div>
      ${last && kp.tip ? `<div class="lc-tip"><span>💡</span><div><b>Astuce</b><p>${esc(kp.tip)}</p></div></div>` : ""}</section>`, foot);
    el.querySelector("#lcBack").onclick = showDialogueList;
    el.querySelector("#lcPrev").onclick = () => { if (a === 0) showDialogueList(); else showKeyPhrases(a - 1); };
    el.querySelector("#lcNext").onclick = () => { if (!last) { showKeyPhrases(a + 1); return; } prog.keyphrases = { done: true }; saveProgress(prog); showDialogueList(); };
  }
  function runDialogue(di) {
    screen = "dialogue";
    const D = DLG[di];
    const log = [];            // {who:"npc"|"me", text, tag?}
    let turn = 0, tries = 0, helped = false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recOn = false, vUrl = null, recTimer = null, activeJ = 0;
    const curTa = () => el.querySelector(`.lc-bq[data-j="${activeJ}"]`) || el.querySelector("#dlgIn");
    const V = createVoice({
      onState: (st) => {
        recOn = st === "listening"; const m = el.querySelector("#dlgMic"); if (m) m.textContent = recOn ? "⏹ Terminer" : "🎙️ Parler";
        clearInterval(recTimer); const rb = el.querySelector("#dlgRec");
        if (recOn) { const t0 = Date.now(); const tick = () => { const s = Math.floor((Date.now() - t0) / 1000); if (rb) rb.innerHTML = `<span class="lc-recdot"></span> Enregistrement… ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")} — parle en anglais, puis appuie sur « ⏹ Terminer »`; }; if (rb) rb.hidden = false; tick(); recTimer = setInterval(tick, 500); }
        else if (rb) { if (vUrl) rb.innerHTML = "✅ Enregistré. Appuie sur « ▶ Me réécouter », puis compare avec « 🔊 Modèle »."; else rb.hidden = true; }
      },
      onText: (t) => { const ta = curTa(); if (ta && t) ta.value = t; },
      onDone: ({ alts, url }) => {
        const ta = curTa(); if (ta && alts && alts[0]) ta.value = alts[0];
        if (url) { vUrl = url; const r = el.querySelector("#dlgReplay"); if (r) r.hidden = false; const md = el.querySelector("#dlgModel"); if (md) md.hidden = false; const rb = el.querySelector("#dlgRec"); if (rb) { rb.hidden = false; rb.innerHTML = "✅ Enregistré. Appuie sur « ▶ Me réécouter », puis compare avec « 🔊 Modèle »." + (alts && alts[0] ? "" : " <small>(Sur iPhone, l’appli ne comprend pas ta voix : écris aussi ta réponse pour être corrigé.)</small>"); } }
        const mm = el.querySelector("#dlgMsg"); if (!(alts && alts[0]) && url && ta) { ta.placeholder = "Tape ta réponse (l’appli ne transcrit pas ta voix ici), puis réécoute-toi."; }
      },
      onError: (c) => toast(c === "denied" ? "Micro refusé : autorise-le dans les réglages" : c === "play" ? "Lecture impossible : vérifie le volume et le mode silencieux" : "Micro indisponible sur cet appareil"),
    });
    const norm = (t) => String(t || "").replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim();
    const matches = (T, txt) => { const n = norm(txt); const ti = D._xi === undefined ? turn : turn === D._xi ? -1 : turn > D._xi ? turn - 1 : turn, mu = ti < 0 ? null : MUST_A1[`${String(B.code).replace("A1.", "")}.${di}.${ti}`]; return T.ok.some((re) => new RegExp(re, "i").test(n)) && (!mu || new RegExp(mu, "i").test(n)); };
    let fplan = null, fi = 0;
    function drawEnd() {
      const msgHtml = (m) => m.who === "npc" ? `<div class="lc-bb npc"><span class="lc-bt">${esc(m.text)}</span>${spk(m.text)}</div>` : `<div class="lc-bb me"><span class="lc-bt">${esc(m.text)}</span></div><div class="lc-corr ${m.tag === "✓" ? "ok" : "help"}"><b>${m.tag === "✓" ? "✓ Bien joué" : "Avec aide"}</b><span>Modèle : ${esc(m.model || "")}</span>${m.model ? spk(m.model) : ""}${m.reg ? `<details class="lc-alt"><summary>Formel / Informel ▾</summary><b>Formel :</b> ${esc(m.reg[0])} ${spk(m.reg[0])}<br><b>Informel :</b> ${esc(m.reg[1])} ${spk(m.reg[1])}</details>` : ""}</div>`;
      const pairs = []; for (let i = 0; i < log.length; i += 2) pairs.push(log.slice(i, i + 2).map(msgHtml).join(""));
      const nOk = log.filter((m) => m.who === "me" && m.tag === "✓").length, nAll = log.filter((m) => m.who === "me").length;
      const extras = `<div class="lc-score"><b>Correction</b><span>${nOk} / ${nAll} réponses trouvées sans aide. Compare chaque réponse avec le modèle.</span></div><div class="lc-advice"><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Tes réponses sont envoyées à Google. Ne change pas ta note.</p><button type="button" class="lc-sec-btn" id="dlgAdv">💡 Faire corriger mes réponses</button><div class="lc-advice-out" id="dlgAdvOut" aria-live="polite"></div></div>`;
      const mk = (a, z, lastPage) => `<section class="lc-card lc-card-bare lc-endv">${a === 0 ? `<h2 class=\"lc-h2\">${D.icon} ${esc(D.title)} — Correction</h2>` : ""}<div class="lc-bl lc-bl-full">${pairs.slice(a, z).join("")}</div>${lastPage ? extras : ""}</section>`;
      const foot = (i, n) => `<footer class="lc-foot">${i > 0 ? '<button type="button" class="lc-sec-btn" id="dlgPrev">← Précédent</button>' : ""}${i < n - 1 ? '<button type="button" class="lc-cta lc-next" id="dlgNextP">Suivant →</button>' : '<button type="button" class="lc-cta" id="dlgEnd">Terminer ✓</button>'}</footer>`;
      const cnt = { cur: D.turns.length, total: D.turns.length };
      const fits = () => { const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); return m.scrollHeight <= m.clientHeight + 2 && (!f || m.lastElementChild.getBoundingClientRect().bottom <= f.getBoundingClientRect().top - 10); };
      if (!fplan) {
        fplan = []; let a = 0;
        while (a < pairs.length) {
          let z = pairs.length;
          for (;;) { frame(HEAD, cnt, mk(a, z, z === pairs.length), foot(0, 2)); if (fits() || z - a <= 1) break; z--; }
          fplan.push([a, z]); a = z;
        }
      }
      fi = Math.min(fi, fplan.length - 1);
      const [a, z] = fplan[fi];
      frame(HEAD, cnt, mk(a, z, z === pairs.length), foot(fi, fplan.length));
      fillSpace();
      el.querySelector("#lcBack").onclick = showDialogueList;
      const pv = el.querySelector("#dlgPrev"); if (pv) pv.onclick = () => { fi--; drawEnd(); };
      const nx = el.querySelector("#dlgNextP"); if (nx) nx.onclick = () => { fi++; drawEnd(); };
      const ab = el.querySelector("#dlgAdv"), ao = el.querySelector("#dlgAdvOut");
      if (ab) ab.onclick = async () => {
        if (adviceLeft() <= 0) { ao.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
        ab.disabled = true; ao.textContent = "L’IA lit tes réponses…";
        const txt = log.map((m) => (m.who === "npc" ? "Friend: " : "Learner: ") + m.text).join("\n");
        try { const r = await fetchAdvice("Corrige UNIQUEMENT les phrases du Learner (grammaire, mots, majuscules), une par une, avec la version corrigée.\n" + txt, D.title, "Dialogue débutant A1. Sois précis et bref."); adviceUsed(); ao.textContent = r; ao.classList.add("on"); }
        catch (e) { ao.textContent = e.message === "quota" ? "Service très demandé. Réessaie plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant."; }
        finally { ab.disabled = false; }
      };
      const de = el.querySelector("#dlgEnd"); if (de) de.onclick = () => {
        prog.dialogues = Object.assign({}, prog.dialogues, { [di]: true });
        if (DLG.every((_, i) => (prog.dialogues || {})[i])) prog.done = Object.assign({}, prog.done, { dialogue: true });
        saveProgress(prog); showDialogueList();
      };
    }
    function draw(msg, noReg) {
      if (turn >= D.turns.length) { drawEnd(); return; }
      const T = D.turns[turn], finished = false;
      const bub = (m) => `<div class="lc-bb ${m.who === "npc" ? "npc" : "me"}"><span class="lc-bt">${esc(m.text)}</span>${m.who === "npc" ? spk(m.text) : ""}${m.tag ? `<em class="lc-tg">${esc(m.tag)}</em>` : ""}</div>`;
      const chat = log.map(bub).join("") + `<div class="lc-bb npc"><span class="lc-bt">${esc(T.npc)}</span>${spk(T.npc)}</div>`;
      const goals = D.turns.map((t, k) => `<li class="${k < turn ? "ok" : k === turn ? "now" : ""}"><i>${k < turn ? "✓" : k + 1}</i>${esc(t.hint || "")}</li>`).join("");
      const input = finished ? `<p class="lc-small">Conversation terminée. ✓ = ta réponse contient les bons éléments. L’appli ne vérifie pas toute la grammaire : compare avec les versions « Formel » et « Informel » sous chaque réponse.</p><div class="lc-advice"><p class="lc-advice-info">💡 Conseil facultatif d’une IA (Google Gemini). Tes réponses sont envoyées à Google. Ne change pas ta note.</p><button type="button" class="lc-sec-btn" id="dlgAdv">💡 Faire corriger mes réponses</button><div class="lc-advice-out" id="dlgAdvOut" aria-live="polite"></div></div>` : `
        <textarea id="dlgIn" class="lc-ta" rows="2" placeholder="Écris ta réponse en anglais…" aria-label="Ta réponse en anglais"></textarea>
        ${msg ? `<p class="lc-small" id="dlgMsg" aria-live="polite">${msg}</p>` : ""}
        <p class="lc-rec" id="dlgRec" aria-live="polite" ${recOn ? "" : "hidden"}></p>
        <div class="lc-dlg-actions">${(SR || window.MediaRecorder) ? `<button type="button" class="lc-sec-btn" id="dlgMic">${recOn ? "⏹ Terminer" : "🎙️ Parler"}</button><button type="button" class="lc-sec-btn" id="dlgReplay" ${vUrl ? "" : "hidden"}>▶ Me réécouter</button><button type="button" class="lc-sec-btn" id="dlgModel" ${vUrl ? "" : "hidden"} data-say="${esc(T.model)}">🔊 Modèle</button>` : ""}
        <button type="button" class="lc-sec-btn" id="dlgHelp">💡 Aide</button>
        <button type="button" class="lc-cta" id="dlgSend">Répondre</button></div>`;
      frame(HEAD, { cur: Math.min(turn + 1, D.turns.length), total: D.turns.length },
        `<section class="lc-card lc-card-bare lc-dlg"><div class="lc-dlg-top"><span>${D.icon}</span><div><b>${esc(D.title)}</b><small>${esc(D.scene)}</small></div></div><ul class="lc-goals">${goals}</ul><div class="lc-bl lc-bl-full">${chat}</div></section>`,
        `<footer class="lc-foot lc-dlg-foot">${input}</footer>`);
      { const mn = el.querySelector(".lc-main"); if (!noReg && mn.scrollHeight > mn.clientHeight + 2) { draw(msg, true); return; } }
      el.querySelector("#lcBack").onclick = showDialogueList;
      fillSpace();
      { const ft3 = el.querySelector(".lc-foot"), lis = el.querySelectorAll(".lc-goals li"), bb = el.querySelectorAll(".lc-dlg .lc-bb"), ch = el.querySelector(".lc-bl-full"); // 1re réplique : on répartit le vide (liste des objectifs, bulle) au lieu d'ajouter une aide
        if (ft3 && ch && log.length === 0) { const g = () => Math.floor(ft3.getBoundingClientRect().top - ch.getBoundingClientRect().bottom - 30); let L = g(); if (L > 8) { const per = Math.min(10, Math.floor(L * 0.6 / Math.max(1, lis.length))); lis.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = per + "px"; }); L = g(); } if (L > 8) { bb.forEach((x) => { x.style.padding = Math.min(26, 12 + Math.floor(L / 2)) + "px 16px"; x.style.fontSize = "18px"; }); } } }
      const mn2 = el.querySelector(".lc-main"); if (mn2) mn2.scrollTop = mn2.scrollHeight;
      if (finished) {
        const ab = el.querySelector("#dlgAdv"), ao = el.querySelector("#dlgAdvOut");
        ab.onclick = async () => {
          if (adviceLeft() <= 0) { ao.textContent = "Tu as utilisé tes " + ADVICE_MAX_PER_DAY + " conseils du jour. Reviens demain !"; return; }
          ab.disabled = true; ao.textContent = "L’IA lit tes réponses…";
          const txt = log.map((m) => (m.who === "npc" ? "Friend: " : "Learner: ") + m.text).join("\n");
          try { const r = await fetchAdvice("Corrige UNIQUEMENT les phrases du Learner (grammaire, mots, majuscules), une par une, avec la version corrigée.\n" + txt, D.title, "Dialogue débutant A1. Sois précis et bref."); adviceUsed(); ao.textContent = r; ao.classList.add("on"); }
          catch (e) { ao.textContent = e.message === "quota" ? "Service très demandé. Réessaie plus tard." : e.message === "not_configured" ? "Les conseils de l’IA ne sont pas encore activés." : "Impossible d’obtenir un conseil pour l’instant."; }
          finally { ab.disabled = false; }
        };
        el.querySelector("#dlgEnd").onclick = () => {
          prog.dialogues = Object.assign({}, prog.dialogues, { [di]: true });
          if (DLG.every((_, i) => (prog.dialogues || {})[i])) prog.done = Object.assign({}, prog.done, { dialogue: true });
          saveProgress(prog); showDialogueList();
        };
        return;
      }
      const ta = el.querySelector("#dlgIn");
      const send = () => {
        const v = norm(ta.value); if (!v) return;
        const nw = v.split(/\s+/).length;
        if (matches(T, v) && (nw >= 2 || /\b(bye|goodbye|yes|no|thanks|thank you|sorry|please)\b/i.test(v))) { log.push({ who: "npc", text: T.npc }); log.push({ who: "me", text: v, tag: helped ? "avec aide" : "✓", model: T.model, reg: REGISTERS_A1[`${String(B.code).replace("A1.","")}.${di}.${turn}`] }); turn++; tries = 0; helped = false; vUrl = null; draw(); }
        else { tries++; draw(tries >= 2 ? `Pas tout à fait. Essaie comme ceci : « ${esc(T.model)} »` : `Pas tout à fait. ${T.hint ? esc(T.hint) : "Réessaie."}`); el.querySelector("#dlgIn").value = v; }
      };
      el.querySelector("#dlgSend").onclick = send;
      ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
      el.querySelector("#dlgHelp").onclick = () => { helped = true; draw(`Modèle : « ${esc(T.model)} » — recopie-le ou change des mots.`); };
      const mic = el.querySelector("#dlgMic");
      if (mic) mic.onclick = () => (recOn ? V.stop() : (vUrl = null, V.start()));
      const rp = el.querySelector("#dlgReplay"); if (rp) rp.onclick = () => V.play();
      const root = el.querySelector(".lc-main") || el;
      ta.addEventListener("focus", () => { root.classList.add("lc-kb"); setTimeout(() => { window.scrollTo(0, 0); root.scrollTop = 0; }, 60); });
      ta.addEventListener("blur", () => root.classList.remove("lc-kb"));
    }
    // A1.3 : trois questions par écran (le personnage pose 3 questions, l'élève répond à chacune, puis l'écran suivant).
    let bs = null;
    function drawBatch(keep) {
      if (turn >= D.turns.length) { drawEnd(); return; }
      const n = Math.min(D.batch, D.turns.length - turn), ts = D.turns.slice(turn, turn + n), nb = Math.ceil(D.turns.length / D.batch), bi = Math.floor(turn / D.batch);
      if (!keep || !bs || bs.turn !== turn) bs = { turn, vals: [], ok: [], tries: [], helped: [], msg: "" };
      const allOk = () => ts.every((_, j) => bs.ok[j]);
      const goals = Array.from({ length: nb }, (_, k) => { const a = k * D.batch, z = Math.min(a + D.batch, D.turns.length); return `<li class="${k < bi ? "ok" : k === bi ? "now" : ""}"><i>${k < bi ? "✓" : (z - a > 1 ? (a + 1) + "-" + z : a + 1)}</i>${D.turns.slice(a, z).map((t) => esc(String(t.hint || "").replace(/\.$/, ""))).join(" · ")}</li>`; }).join("");
      const rows = ts.map((T, j) => `<div class="lc-bb npc"><span class="lc-bt">${esc(T.npc)}</span>${spk(T.npc)}</div>
        <div class="lc-brow"><i class="lc-bnum ${bs.ok[j] ? "ok" : ""}">${bs.ok[j] ? "✓" : j + 1 + turn}</i>${bs.ok[j] ? `<div class="lc-bb me"><span class="lc-bt">${esc(bs.vals[j])}</span></div>` : `<textarea class="lc-ta lc-bq" data-j="${j}" rows="1" placeholder="Écris ta réponse en anglais…" aria-label="Réponse ${j + 1 + turn}" autocapitalize="sentences" autocomplete="off" spellcheck="false">${esc(bs.vals[j] || "")}</textarea>`}</div>`).join("");
      const lastB = turn + n >= D.turns.length;
      const input = `${bs.msg ? `<p class="lc-small" id="dlgMsg" aria-live="polite">${bs.msg}</p>` : ""}<p class="lc-rec" id="dlgRec" aria-live="polite" ${recOn ? "" : "hidden"}></p>
        <div class="lc-dlg-actions">${(SR || window.MediaRecorder) ? `<button type="button" class="lc-sec-btn" id="dlgMic">${recOn ? "⏹ Terminer" : "🎙️ Parler"}</button>` : ""}<button type="button" class="lc-sec-btn" id="dlgHelp">💡 Aide</button>
        <button type="button" class="lc-cta" id="dlgSend">${allOk() ? (lastB ? "Voir la correction" : "Suite →") : n > 1 ? `Répondre aux ${n}` : "Répondre"}</button></div>`;
      frame(HEAD, { cur: bi + 1, total: nb }, `<section class="lc-card lc-card-bare lc-dlg lc-dlgb"><div class="lc-dlg-top"><span>${D.icon}</span><div><b>${esc(D.title)}</b><small>${esc(D.scene)}</small></div></div><ul class="lc-goals">${goals}</ul><div class="lc-bl lc-bl-full">${rows}</div></section>`, `<footer class="lc-foot lc-dlg-foot">${input}</footer>`);
      el.querySelector("#lcBack").onclick = showDialogueList;
      { const mn = el.querySelector(".lc-main"), ft = el.querySelector(".lc-foot"), sec0 = el.querySelector(".lc-dlgb"), sec = { classList: sec0.classList, getBoundingClientRect: () => el.querySelector(".lc-brow:last-child").getBoundingClientRect() }; // trop haut ? on resserre
        const over = () => !!(ft && sec && (sec.getBoundingClientRect().bottom > ft.getBoundingClientRect().top - 16 || mn.scrollHeight > mn.clientHeight + 1));
        if (over()) sec.classList.add("lc-dlgb1"); if (over()) sec.classList.add("lc-dlgb2"); if (over()) sec.classList.add("lc-dlgb3");
        const L = ft && sec ? Math.floor(ft.getBoundingClientRect().top - sec.getBoundingClientRect().bottom - 14) : 0; // reste du vide : on aère la liste et les bulles
        if (L > 10) { const lis = el.querySelectorAll(".lc-goals li"), per = Math.min(14, Math.floor(L * 0.4 / Math.max(1, lis.length))); lis.forEach((li) => { li.style.paddingTop = li.style.paddingBottom = per + "px"; }); const L2 = Math.floor(ft.getBoundingClientRect().top - sec.getBoundingClientRect().bottom - 14); if (L2 > 10) el.querySelectorAll(".lc-bq,.lc-brow .lc-bb").forEach((x) => { x.style.marginTop = x.style.marginBottom = Math.min(14, Math.floor(L2 / (2 * n + 2))) + "px"; }); } }
      { const mn = el.querySelector(".lc-main"), sec = el.querySelector(".lc-dlgb"); // garde-fou : si ça défile encore, on retire l'aération et on resserre
        for (const c of ["lc-dlgb1", "lc-dlgb2", "lc-dlgb3"]) { if (mn.scrollHeight <= mn.clientHeight + 1) break; el.querySelectorAll(".lc-goals li,.lc-bq,.lc-brow .lc-bb").forEach((x) => { x.style.padding = x.style.margin = ""; }); sec.classList.add(c); } }
      const tas = [...el.querySelectorAll(".lc-bq")];
      tas.forEach((ta) => { ta.addEventListener("focus", () => { activeJ = +ta.dataset.j; }); ta.addEventListener("input", () => { bs.vals[+ta.dataset.j] = ta.value; }); });
      if (tas[0]) { activeJ = +tas[0].dataset.j; }
      const send = () => {
        if (allOk()) {
          ts.forEach((T, j) => { log.push({ who: "npc", text: T.npc }); log.push({ who: "me", text: bs.vals[j], tag: bs.helped[j] ? "avec aide" : "✓", model: T.model, reg: REGISTERS_A1[`${String(B.code).replace("A1.", "")}.${di}.${turn + j}`] }); });
          turn += n; vUrl = null; bs = null; drawBatch(); return;
        }
        const bad = [];
        ts.forEach((T, j) => {
          if (bs.ok[j]) return; const v = norm(bs.vals[j] || ""); if (!v) { bad.push(j); return; }
          const nw = v.split(/\s+/).length;
          if (T.ok.some((re) => new RegExp(re, "i").test(v)) && (nw >= 2 || /\b(bye|goodbye|yes|no|thanks|thank you|sorry|please)\b/i.test(v))) { bs.ok[j] = true; bs.vals[j] = v; }
          else { bs.tries[j] = (bs.tries[j] || 0) + 1; bad.push(j); }
        });
        const w = bad[0];
        bs.msg = w === undefined ? "" : (bs.vals[w] && (bs.tries[w] || 0) >= 2) ? `${w + 1 + turn}. Essaie comme ceci : « ${esc(ts[w].model)} »` : (bs.vals[w] ? `${w + 1 + turn}. Pas tout à fait. ${esc(ts[w].hint || "Réessaie.")}` : `Réponds à la question ${w + 1 + turn}.`);
        drawBatch(true);
      };
      el.querySelector("#dlgSend").onclick = send;
      el.querySelector("#dlgHelp").onclick = () => { const w = ts.findIndex((_, j) => !bs.ok[j]); if (w < 0) return; bs.helped[w] = true; bs.msg = `${w + 1 + turn}. Modèle : « ${esc(ts[w].model)} » — recopie-le ou change des mots.`; drawBatch(true); };
      const mic = el.querySelector("#dlgMic"); if (mic) mic.onclick = () => (recOn ? V.stop() : (vUrl = null, V.start()));
      tas.forEach((ta) => ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); const nx = tas[tas.indexOf(ta) + 1]; if (nx && !nx.value.trim()) nx.focus(); else send(); } }));
      const root = el.querySelector(".lc-main") || el;
      tas.forEach((ta) => { ta.addEventListener("focus", () => { root.classList.add("lc-kb"); setTimeout(() => { window.scrollTo(0, 0); }, 60); }); ta.addEventListener("blur", () => root.classList.remove("lc-kb")); });
    }
    if (D.batch) { drawBatch(); return; }
    draw();
  }

  /* ----- Écrire en anglais : dictée + « dis-le en anglais » (production libre, sans traduire) ----- */
  const CONTR = [[/\bi am\b/g, "i'm"], [/\byou are\b/g, "you're"], [/\bhe is\b/g, "he's"], [/\bshe is\b/g, "she's"], [/\bit is\b/g, "it's"], [/\bwe are\b/g, "we're"], [/\bthey are\b/g, "they're"], [/\bdo not\b/g, "don't"], [/\bdoes not\b/g, "doesn't"], [/\bis not\b/g, "isn't"], [/\bare not\b/g, "aren't"], [/\bcannot\b/g, "can't"], [/\bwhat is\b/g, "what's"], [/\bthat is\b/g, "that's"]];
  const dnorm = (t) => { let x = String(t || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim(); CONTR.forEach(([r, v]) => { x = x.replace(r, v); }); return x; };
  function dictSentences() {
    const out = [], more = [], bad = (x) => /\d|“|”|"/.test(x) || /^(hi|hello|good morning)\b/i.test(x);
    (B.reading || []).forEach((r) => {
      const ss = String(r.text || "").split(/(?<=[.!?])\s+/).map((x) => x.trim());
      const ok = ss.filter((x) => { const n = x.split(/\s+/).length; return n >= 4 && n <= 10 && !bad(x); });
      if (ok.length) { out.push(ok[Math.min(ok.length - 1, 1)]); ok.forEach((x) => { if (x !== out[out.length - 1]) more.push(x); }); }
      else { const any = ss.filter((x) => x.split(/\s+/).length >= 3 && x.split(/\s+/).length <= 10 && !/“|”|"/.test(x)); if (any.length) out.push(any[0]); }
    });
    for (const x of more) { if (out.length >= 6) break; if (!out.includes(x)) out.push(x); } // 6 phrases : on complète avec une 2ᵉ phrase des textes
    return out.slice(0, 6);
  }
  function showWriteList() {
    screen = "write";
    const done = prog.writes || {};
    const rows = [["dict", "🎧", "Dictée", "Écoute la phrase et écris-la"], ["sit", "💬", "Dis-le en anglais", "Une situation : écris ce que tu dirais"]].map(([k, ic, t, sub], i) => `<button type="button" class="lc-row" data-wr="${k}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">${ic}</span><span class="lc-txt"><b>${esc(t)}</b><small>${esc(sub)}</small></span><span class="lc-go">${done[k] ? (k === "dict" && prog.dict ? "✓ " + prog.dict.ok + "/" + prog.dict.tot : "✓") : "›"}</span></button>`).join("");
    frame(HEAD, null, `<div class="lc-vocab-head"><span class="lc-vh-ic">✍️</span><div><h1>Écrire en anglais</h1><p>Écris toi-même, sans choix de réponses.</p></div></div>${sceneHero(5)}<section class="lc-card lc-menu">${rows}</section>`);
    fillSpace();
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-wr]").forEach((b) => b.addEventListener("click", () => runWrite(b.dataset.wr)));
  }
  function runWrite(kind) {
    screen = "write";
    const items = kind === "dict"
      ? dictSentences().map((t) => ({ kind, text: t, model: t }))
      : SIT.map((x) => Object.assign({ kind }, x));
    let i = 0, tries = 0, first = 0, shown = false;
    const scImg = (k) => { const sl = (B.vocab || []).filter((x) => x.scene).map((x) => x.scene).concat(B.scenes || []), sc = sl[k % Math.max(1, sl.length)]; return sc ? `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/${sc[0]}.webp?v=20261025n" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>` : ""; };
    function draw(msg) {
      if (i >= items.length) {
        prog.writes = Object.assign({}, prog.writes, { [kind]: true });
        // Livret de notes : la dictée garde son meilleur nombre de phrases justes du premier coup.
        if (kind === "dict") { const o = prog.dict || {}; prog.dict = { ok: Math.max(first, o.ok || 0), tot: items.length, last: first, at: new Date().toISOString().slice(0, 10) }; }
        saveProgress(prog);
        frame(HEAD, { cur: items.length, total: items.length }, `<section class="lc-card"><h2 class="lc-h2">🎉 Bravo !</h2><p>${first} réponse${first > 1 ? "s" : ""} juste${first > 1 ? "s" : ""} du premier coup sur ${items.length}.</p></section>`,
          `<footer class="lc-foot"><button type="button" class="lc-cta" id="wrEnd">Terminer ✓</button></footer>`);
        el.querySelector("#lcBack").onclick = showWriteList; el.querySelector("#wrEnd").onclick = showWriteList; return;
      }
      const it = items[i];
      const top = kind === "dict"
        ? `<p class="lc-ask">🎧 Écoute la phrase, puis écris-la en anglais.</p><div class="lc-actions"><button type="button" class="lc-chip" data-say="${esc(it.text)}">🔊 Écouter</button></div>`
        : `<p class="lc-ask">${it.icon} ${esc(it.cue)}</p>${shown ? `<p class="lc-small">💡 ${esc(it.hint)}</p>` : ""}`;
      frame(HEAD, { cur: i + 1, total: items.length }, `${scImg(i)}<section class="lc-card"><h2 class="lc-h2">${kind === "dict" ? "🎧 Dictée" : "💬 Dis-le en anglais"}</h2>${top}
        <textarea id="wrIn" class="lc-ta" rows="2" placeholder="Écris en anglais…" aria-label="Ta réponse en anglais" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>
        ${msg ? `<p class="lc-small" aria-live="polite">${msg}</p>` : ""}
        <div class="lc-dlg-actions">${kind === "sit" ? `<button type="button" class="lc-sec-btn" id="wrHint">💡 Aide</button>` : ""}<button type="button" class="lc-cta" id="wrSend">Vérifier</button></div></section>`);
      fillSpace();
      el.querySelector("#lcBack").onclick = showWriteList;
      const ta = el.querySelector("#wrIn");
      const next = () => { i++; tries = 0; shown = false; draw(); };
      const send = () => {
        const v = ta.value.trim(); if (!v) return;
        let good, score = 0;
        if (kind === "dict") { const a = dnorm(v).split(" "), b = dnorm(it.text).split(" "); good = a.join(" ") === b.join(" "); score = b.filter((w, k) => a[k] === w).length + "/" + b.length; }
        else good = it.ok.some((r) => new RegExp(r, "i").test(v.replace(/[’‘`´]/g, "'")));
        if (good) { if (tries === 0) first++; frame2(true, v, it); }
        else { tries++; draw(kind === "dict" ? (tries >= 2 ? `${score} mots justes. Voici la phrase : « ${esc(it.text)} »` : `${score} mots justes. Réécoute et vérifie chaque mot.`) : (tries >= 2 ? `Pas tout à fait. Essaie comme ceci : « ${esc(it.model)} »` : "Pas tout à fait. Relis la situation et réessaie."));
          const t2 = el.querySelector("#wrIn"); if (t2) t2.value = v; }
      };
      function frame2(ok, v, it2) {
        frame(HEAD, { cur: i + 1, total: items.length }, `${scImg(i)}<section class="lc-card"><h2 class="lc-h2">✅ Bien !</h2><div class="lc-chat me"><span>${esc(v)}</span></div><p class="lc-small">Modèle : « ${esc(it2.model)} »</p>${spk(it2.model)}</section>`,
          `<footer class="lc-foot"><button type="button" class="lc-cta" id="wrNext">${i + 1 >= items.length ? "Terminer ✓" : "Suivant →"}</button></footer>`);
        fillSpace(); el.querySelector("#lcBack").onclick = showWriteList; el.querySelector("#wrNext").onclick = next;
      }
      el.querySelector("#wrSend").onclick = send;
      ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
      const h = el.querySelector("#wrHint"); if (h) h.onclick = () => { shown = true; const cur = ta.value; draw(tries >= 1 ? `Modèle : « ${esc(it.model)} »` : ""); el.querySelector("#wrIn").value = cur; };
      const root = el.querySelector(".lc-main") || el;
      ta.addEventListener("focus", () => { root.classList.add("lc-kb"); setTimeout(() => { window.scrollTo(0, 0); root.scrollTop = 0; }, 60); });
      ta.addEventListener("blur", () => root.classList.remove("lc-kb"));
      // la case grandit avec le texte (3 lignes max, ensuite elle défile) : réduite au repos, jamais limitante
      const grow = () => { ta.style.height = "50px"; const h = Math.min(Math.max(ta.scrollHeight + 2, 50), 92); ta.style.height = h + "px"; root.style.setProperty("--kbimg", Math.max(34, 78 - (h - 50)) + "px"); };
      ta.addEventListener("input", grow); ta.addEventListener("focus", grow);
    }
    draw();
  }

  /* ----- Transversale : 7 jours (mots → entraînement → expression écrite) ----- */
  const writeTx = {};
  let tday = 0;
  function dayPages(d) {
    const D = B.transv[d];
    return [
      { kind: "words", title: D.title, goal: D.goal, words: D.words, qs: [] },
      { kind: "practice", title: "Entraînement", qs: D.qs },
      { kind: "write", title: "Expression écrite", prompt: D.writing, qs: [] },
    ];
  }
  function showTransvList() {
    screen = "transversal";
    const done = prog.transv || {};
    const rows = B.transv.map((D, i) => `<button type="button" class="lc-row" data-day="${i}">
      <span class="lc-num">${i + 1}</span><span class="lc-ic">${icImg("transversal","🌱")}</span>
      <span class="lc-txt"><b>${esc(D.title)}</b><small>${esc(D.goal)}</small></span><span class="lc-go">${done[i] ? "✓" : "›"}</span></button>`).join("");
    frame(HEAD, null, `<div class="lc-vocab-head"><span class="lc-vh-ic">🌱</span><div><h1>Transversale</h1><p>7 jours pour ancrer les acquis.</p></div></div><section class="lc-card lc-menu">${rows}</section>`);
    el.querySelector("#lcBack").onclick = showMenu;
    el.querySelectorAll("[data-day]").forEach((b) => b.addEventListener("click", () => {
      tday = Number(b.dataset.day); page = 0; ACT.transversal.pages = dayPages(tday); ACT.transversal.sub = B.transv[tday].title; showAct("transversal");
    }));
  }

  /* ----- Test de fin de leçon : 40 points (7,5 + 7,5 lecture/écoute, 10 grammaire, 7,5 + 7,5 expression) ----- */
  let T = null; // état du test en cours
  const POOL = (B.testPool || B.expression).filter((x) => !x.trad), DEFW = B.expression[B.testW || 0], DEFO = B.expression[B.testO || 0];
  let EW = DEFW, EO = DEFO; // sujets d'expression du test en cours (changent à chaque passage, voir startTest)
  const isA2 = String(B.code || "").startsWith("A2.");
  const SIT = (!B.exam && (isA2 ? SITUATIONS_A2[B.code] : SITUATIONS_A1[String(B.code || "").replace("A1.", "")])) || null;
  const DLG0 = (!B.exam && (isA2 ? (DIALOGUES_A2[B.code] ? DIALOGUES_A2[B.code].concat(MORE_A2[B.code] || []) : DIALOGUES_A2[B.code]) : (() => { const k = String(B.code || "").replace("A1.", ""), b = Object.assign({}, DIALOGUES_A1_REST, DIALOGUES_A1)[k]; return b ? b.concat(MORE_A1[k] || []).map((d) => { const ex = EXTRA_TURN_A1[k + "|" + d.title]; return ex && !d.turns.some((t) => t.npc === ex.npc) ? Object.assign({}, d, { turns: [...d.turns.slice(0, -1), ex, d.turns[d.turns.length - 1]], _xi: d.turns.length - 1 }) : d; }) : b; })())) || null;
  const STOPW = new Set("the and you for are have its this that with don not yes please thank thanks".split(" "));
  const mkOk = (m) => { const w = [...new Set(String(m).toLowerCase().replace(/[^a-z' ]/g, " ").split(/\s+/).filter((x) => x.length >= 2 && !STOPW.has(x)))]; return ["\\b(" + (w.length ? w : ["yes"]).map((x) => x.replace(/'/g, "'")).join("|") + ")\\b"]; };
  const DLG = DLG0 && B.code === "A1.3" ? DLG0.map((d) => (BATCH_A13[d.title] ? Object.assign({}, d, { turns: BATCH_A13[d.title], batch: 3, _xi: undefined }) : d))
    : DLG0 && !isA2 && EXT_A1[String(B.code).replace("A1.", "")] ? DLG0.map((d) => { // A1.4–A1.12 : 6 répliques, 2 écrans de 3
      const ex = (EXT_A1[String(B.code).replace("A1.", "")][d.title] || []).filter((e) => !d.turns.some((t) => t.npc === e[0])), need = 6 - d.turns.length;
      if (need < 0 || need > ex.length) return d;
      const add = ex.slice(0, need).map((e) => ({ npc: e[0], ok: mkOk(e[1]), model: e[1], hint: e[2] }));
      return Object.assign({}, d, { turns: [...d.turns.slice(0, -1), ...add, d.turns[d.turns.length - 1]], batch: 3, _xi: undefined });
    }) : DLG0; // A1.3 : 3 questions par écran
  const leave = () => (B.exam ? (onExit && onExit()) : showMenu());
  const RID = B.exam ? (B.examId || "EXAM-A1") : B.code;
  const retakeBlocked = () => !UNLOCK_ALL_PREVIEW && retakeLocked(prog, RID);
  // Après un échec, le test est fermé tant qu'une série de rattrapage n'est pas terminée (voir bulletin-a1.js : retakeLocked).
  function showRetakeLock() {
    screen = "retake-lock";
    const last = ((prog.testHist || []).slice(-1)[0]) || null, sc = (prog.scores || {}).test || (last ? last.total + "/40" : "");
    frame(B.exam ? (B.examTitle || "Grand contrôle A1") : "Test de fin de leçon", null, `
      <section class="lc-hero">${c0().win ? `<img class="lc-hero-full" src="${c0().win}" alt=""/>` : `<img class="lc-hero-img lc-hero-sm" src="${c0().src}" alt=""/>`}</section>
      <section class="lc-card lc-intro"><h1>Une petite série d'abord</h1>
        <p class="lc-lead">Ta dernière note : ${esc(sc)}. Il faut 32/40 pour valider. Fais une série de 5 questions corrigées (environ 5 minutes) : le test se rouvre ensuite.</p>
        <button type="button" class="lc-cta" id="lcRt">Faire ma série de rattrapage</button>
        <button type="button" class="lc-sec-btn" id="lcToMenu" style="width:100%;margin-top:10px">${B.exam ? "Retour à Mes cours" : "Retour aux leçons"}</button></section>`);
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcToMenu").onclick = leave;
    el.querySelector("#lcRt").onclick = () => runRattrapage(el, RID, { onBack: leave, onRetest: startTest, backLabel: B.exam ? "Retour à Mes cours" : "Retour aux leçons" });
  }
  function startTest() {
    if (retakeBlocked()) return showRetakeLock();
    const attempt = prog.testAttempts || 0;
    let seed = attempt * 7919 + 13;
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    const ids = B.testGrammar.map((_, i) => i);
    for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
    // Après un rattrapage, le contrôle n'est plus le même : on évite les textes, audios et questions déjà vus aux essais précédents
    // (d'abord tout ce qui a déjà été vu ; si la banque est épuisée, au moins ceux du dernier essai).
    const H = (prog.testHist || []).filter((x) => x.used), seenAll = (k) => new Set(H.flatMap((x) => x.used[k])), seenLast = (k) => new Set(H.length ? H[H.length - 1].used[k] : []);
    const pickIdx = (len, from, k) => { const a = seenAll(k), l = seenLast(k); for (const bad of [a, l, new Set()]) for (let d = 0; d < len; d++) { const i = (from + d) % len; if (!bad.has(i)) return i; } return from % len; };
    const ti = pickIdx(B.testTexts.length, attempt, "t"), ai = pickIdx(B.testAudios.length, attempt + 1, "a");
    const ga = seenAll("g"), gl = seenLast("g");
    const gram = [...ids.filter((i) => !ga.has(i)), ...ids.filter((i) => ga.has(i) && !gl.has(i)), ...ids.filter((i) => gl.has(i))].slice(0, 20);
    // Sujets d'expression écrite et orale : eux aussi changent (on prend des pages d'expression pas encore utilisées).
    const ea = seenAll("e"), el2 = seenLast("e"), fresh = (bad, not) => { for (let d = 0; d < POOL.length; d++) { const i = (attempt * 2 + d) % POOL.length; if (!bad.has(i) && i !== not) return i; } return -1; };
    let wi = POOL.indexOf(DEFW), oi = POOL.indexOf(DEFO);
    if (H.length) { wi = [fresh(ea, -1), fresh(el2, -1), POOL.indexOf(DEFW)].find((x) => x >= 0); oi = [fresh(new Set([...ea, wi]), wi), fresh(new Set([...el2, wi]), wi), POOL.indexOf(DEFO)].find((x) => x >= 0); }
    EW = POOL[wi]; EO = POOL[oi];
    const wDef = EW === DEFW, oDef = EO === DEFO;
    T = { wi, oi, wt: wDef ? B.testWriteTitle : EW.title, wl: String(wDef ? B.testWriteLead : `Écris 4 phrases : ${EW.prompts.join(" ")}`).replace(/(?:au moins )?4 phrases/, "au moins 6 phrases") + " Ajoute 2 détails de plus.", wimg: EW.img || "", ot: oDef ? B.testOralTitle : EO.title, ol: oDef ? B.testOralLead : EO.prompts.join(" "), oimg: EO.img || "", attempt, ti, ai, text: B.testTexts[ti], audio: B.testAudios[ai], gram, ans: {}, written: "", heard: "", oral: EO.checks.map(() => false), p: 0 };
    { const vw = (B.vocab || []).flatMap((v) => (v.words || []).map((w) => String(w[0]).trim())).filter((w) => !/\s/.test(w)); // 3 questions de plus en lecture et en écoute (phrases à trous tirées du texte)
      try { const tq = withExtraQs("reading", { title: T.text.title, text: T.text.text, qs: T.text.q }, vw, T.text.q.length + 7); T.text = Object.assign({}, T.text, { q: tq }); } catch (e) {}
      try { const aq = withExtraQs("reading", { title: "audio", text: T.audio.script, qs: T.audio.q }, vw, T.audio.q.length + 7); T.audio = Object.assign({}, T.audio, { q: aq }); } catch (e) {} }
    showTest();
  }
  // remplit le vide restant : image plus grande, puis la dernière carte s'étire et répartit son contenu
  function fillSpace() {
    const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"); if (!m) return;
    const gap = () => { const l = m.lastElementChild; return Math.floor((f ? f.getBoundingClientRect().top : m.getBoundingClientRect().bottom - 8) - l.getBoundingClientRect().bottom - 26); };
    let L = gap(); if (L < 24) return;
    const im = el.querySelector(".lc-exhero img");
    if (im) { const h0 = im.getBoundingClientRect().height, add = Math.min(L * 0.6, 110); im.style.aspectRatio = "auto"; im.style.objectFit = "contain"; im.style.height = Math.round(Math.min(h0 + add, im.getBoundingClientRect().width * 9 / 16)) + "px"; L = gap(); }
    const pim = el.querySelector(".lc-card > .lc-pic img"); // « Décris l'image » : l'image prend la place restante (jamais rognée)
    if (pim && L >= 6) {
      const pf = pim.closest(".lc-pic"), h0 = pim.getBoundingClientRect().height, add = Math.min(L, Math.max(0, Math.round(pim.getBoundingClientRect().width * 9 / 16) - h0));
      pf.style.maxHeight = "none"; pim.style.height = Math.round(h0 + add) + "px"; L = gap();
      if (L < 0) { pim.style.height = Math.round(h0 + add + L) + "px"; L = gap(); }
    }
    const mic0 = el.querySelector(".lc-micbtn"); if (mic0 && L >= 24) { const s0 = mic0.getBoundingClientRect().width, sz = Math.round(Math.min(104, s0 + L * 0.6)); mic0.style.width = mic0.style.height = sz + "px"; mic0.style.fontSize = Math.round(sz * 0.4) + "px"; L = gap(); if (L < 0) { mic0.style.width = mic0.style.height = ""; mic0.style.fontSize = ""; L = gap(); } }
    const cks = el.querySelector(".lc-card .lc-checks.lc-chips"); if (cks && L >= 24) { cks.style.marginTop = Math.min(18, Math.round(L / 3)) + "px"; L = gap(); }
    const tx = el.querySelector("#lcTa, #wrIn"); if (tx && L > 8) { tx.style.height = Math.round(tx.getBoundingClientRect().height + (tx.id === "wrIn" ? Math.min(L, 140) : Math.max(0, L - 34))) + "px"; L = gap(); }
  }
  function showTest() {
    screen = "test";
    if (globalThis.__ROOTS_TEST) globalThis.__T = () => ({ T, B });
    const total = 6, p = T.p;
    T.plan = T.plan || {};
    const Q = (key, q, n) => `<div class="lc-qb"><p class="lc-q">${n}. ${esc(q[0])}</p><div class="lc-choices" role="group">${q[1].map((o, i) => `<button type="button" class="lc-choice ${T.ans[key] === i ? "lc-sel" : ""}" data-k="${key}" data-i="${i}">${esc(o)}</button>`).join("")}</div></div>`;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const exImg = (n) => `<div class="lc-scenes lc-scene-sm lc-exhero"><figure><img src="assets/img/lesson/exam-a1-${n}.webp?v=20261025n" alt="" loading="lazy" onerror="this.closest('.lc-exhero').remove()"/></figure></div>`;
    // la page est découpée en blocs ; on remplit chaque écran au maximum, sans défilement
    const bl = []; let head = "", hero = "";
    if (p === 0) {
      head = "Compréhension écrite · 7,5 pts"; hero = exImg("reading");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">📚 ${esc(T.text.title)}</h2><p class="lc-text">${esc(T.text.text)}</p></section>` });
      T.text.q.forEach((q, i) => bl.push({ k: "q", h: Q("r" + i, q, i + 1), keys: ["r" + i] }));
    } else if (p === 1) {
      head = "Compréhension orale · 7,5 pts"; hero = exImg("listening");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">🎧 Écoute</h2><div class="lc-player"><button type="button" class="lc-play" data-say="${esc(T.audio.script)}" aria-label="Écouter l’audio">▶</button><span class="lc-wave" aria-hidden="true"></span><button type="button" class="lc-speed" id="lcSpeed">${speedMul === 1 ? "1x" : "0.75x"}</button></div></section>` });
      T.audio.q.forEach((q, i) => bl.push({ k: "q", h: Q("l" + i, q, i + 1), keys: ["l" + i] }));
    } else if (p === 2 || p === 3) {
      head = "Grammaire, verbes, vocabulaire · 10 pts";
      T.gram.slice((p - 2) * 10, (p - 2) * 10 + 10).forEach((id, i) => bl.push({ k: "q", h: Q("g" + id, B.testGrammar[id], (p - 2) * 10 + i + 1), keys: ["g" + id] }));
    } else if (p === 4) {
      head = "Expression écrite · 7,5 pts"; hero = exImg("writing");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">✍️ ${esc(T.wt)}</h2><p class="lc-lead">${esc(T.wl)}</p>${T.wimg ? `<figure class="lc-pic"><img src="assets/img/lesson/${T.wimg}.webp?v=20261025n" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}<textarea id="lcTa" class="lc-ta" rows="6" aria-label="Ta présentation en anglais">${esc(T.written)}</textarea></section>`, ta: true });
    } else {
      head = "Expression orale · 7,5 pts"; hero = exImg("speaking");
      bl.push({ k: "x", h: `<section class="lc-card"><h2 class="lc-h2">🎤 ${esc(T.ot)}</h2><p class="lc-lead">${esc(T.ol)} Puis coche ce que tu as réellement dit (auto-évaluation).</p>
        ${SR ? `<div class="lc-mic"><button type="button" class="lc-micbtn" id="lcMic" aria-label="Appuie et parle">🎙️</button><p class="lc-heard" id="lcHeard">${esc(T.heard)}</p></div>` : ""}${T.oimg ? `<figure class="lc-pic"><img src="assets/img/lesson/${T.oimg}.webp?v=20261025n" alt="Image à décrire" onerror="this.closest('figure').remove()"/></figure>` : ""}</section>` });
      EO.checks.forEach(([l], i) => bl.push({ k: "c", h: `<li><label><input type="checkbox" data-o="${i}" ${T.oral[i] ? "checked" : ""}/> ${esc(l)}</label></li>` }));
    }
    const last = p === total - 1;
    const foot = `<footer class="lc-foot"><button type="button" class="lc-sec-btn" id="lcPrev">← Précédent</button><button type="button" class="lc-cta lc-next" id="lcNext" disabled>${last ? "Voir mon résultat" : "Suivant →"}</button></footer>`;
    const build = (a, z, first, tight, meas) => {
      let html = first ? `${tight === 2 ? (p === 4 ? hero.replace("lc-exhero", "lc-exhero lc-exs lc-exs2") : "") : tight === 1 ? hero.replace("lc-exhero", "lc-exhero lc-exs") : hero}<div class="lc-vocab-head"><span class="lc-vh-ic">🏆</span><div><h1>${B.exam ? (B.examTitle || "Grand contrôle A1") : "Test de fin"}</h1><p>${esc(head)}</p></div></div>` : (hero && tight < 1 ? hero : "");
      if (!first && p < 2) { const rt = p === 0 ? T.text.text : T.audio.script; html += `<div class="lc-recap-row"><button type="button" class="lc-chip lc-recap" data-recap="${esc(rt)}" data-kind="${p === 0 ? "text" : "audio"}">${p === 0 ? "📖 Revoir le texte" : "🎧 Réécouter"}</button></div>`; }
      for (let i = a; i < z;) {
        const k = bl[i].k;
        if (k === "x") { html += (tight === 3 ? bl[i].h.replace('<figure class="lc-pic">', '<figure class="lc-pic" style="max-height:150px;overflow:hidden;margin:6px 0">').replace(/<img /, '<img style="width:100%;height:150px;object-fit:cover" ') : tight === 2 ? bl[i].h : bl[i].h) + (meas && bl[i].ta ? '<div style="height:52px"></div>' : ""); i++; continue; }
        let j = i; while (j < z && bl[j].k === k) j++;
        const inner = bl.slice(i, j).map((x) => x.h).join("");
        html += k === "q" ? `<section class="lc-card lc-prac">${inner}</section>` : `<section class="lc-card"><ul class="lc-checks lc-checks-in">${inner}</ul></section>`;
        i = j;
      }
      return html;
    };
    const ttl = B.exam ? (B.examTitle || "Grand contrôle A1") : "Test de fin de leçon";
    T.typed = T.typed || {};
    const qOf = (k) => (k[0] === "r" ? T.text.q[+k.slice(1)] : k[0] === "l" ? T.audio.q[+k.slice(1)] : B.testGrammar[+k.slice(1)]);
    const typifyDom = () => el.querySelectorAll(".lc-qb").forEach((box) => { // on écrit d'abord : champ de réponse, propositions derrière « Indice »
      const c1 = box.querySelector(".lc-choice"); if (!c1 || box.querySelector(".q6-w")) return;
      const key = c1.dataset.k, q = qOf(key); if (!q || !typableAct(q)) return;
      const ch = box.querySelector(".lc-choices"), w = document.createElement("div"), used = T.ans[key] !== undefined && !T.typed[key];
      w.className = "q6-w"; w.innerHTML = `<input class="lc-ta q6-in" data-key="${key}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Écris ta réponse…">${used ? "" : `<button type="button" class="q6-hintb">💡 Indice</button>`}`;
      w.querySelector("input").value = T.typed[key] || "";
      if (!used) { ch.hidden = true; ch.style.setProperty("display", "none", "important"); }
      ch.before(w);
    });
    const draw0 = (a, z, tight, meas) => { frame(ttl, { cur: p + 1, total }, build(a, z, a === 0, tight, meas), foot); { const m0 = el.querySelector(".lc-main"); if (m0) m0.classList.add("lc-testp"); } typifyDom(); if (p <= 3 && z - a >= 3) { const mm = el.querySelector(".lc-main"); mm.classList.add("lc-listen", "lc-g3", "lc-ex"); if (mm.scrollHeight > mm.clientHeight + 2) mm.classList.add("lc-tight"); if (mm.scrollHeight > mm.clientHeight + 2) mm.classList.add("lc-tight2"); } else if (p === 2 || p === 3) el.querySelector(".lc-main").classList.add("lc-bigq"); };
    const draw = (a, z, tight, meas) => { draw0(a, z, tight, meas); typifyDom(); };
    const fits = () => { const m = el.querySelector(".lc-main"); return m.scrollHeight <= m.clientHeight + 2; };
    if (!T.plan[p]) {
      const plan = []; let a = 0;
      while (a < bl.length) {
        let best = null;
        for (const tier of bl.some((x) => x.ta) ? [0, 1, 2] : [0]) {
          let z = (p === 2 || p === 3) && a === 0 && bl.length > 3 ? Math.ceil(bl.length / 2) : bl.length; // grammaire : 3 + 3 questions, jamais 4 + 1
          for (;;) { draw(a, z, tier, true); if (fits() || z - a <= 1) break; z--; }
          const ok = fits();
          if (!best || (ok && (!best.ok || z > best.z))) best = { z, tier, ok };
          if (ok && z === bl.length) break;
        }
        plan.push([a, best.z, best.tier]); a = best.z;
      }
      if (p <= 3 && plan.length >= 3 && bl.slice(plan[1][0]).every((x) => x.k === "q")) { const st0 = plan[1][0], mm2 = plan.length - 1, tot = bl.length - st0, bs = Math.floor(tot / mm2), ex = tot % mm2; let aa = st0; for (let k = 1; k <= mm2; k++) { const sz = bs + (k <= ex ? 1 : 0); plan[k] = [aa, aa + sz, plan[k][2]]; aa += sz; } } // pages suivantes : même nombre de questions partout
      if (plan.length > 1) { const L1 = plan[plan.length - 1], P1 = plan[plan.length - 2]; if (L1[1] - L1[0] === 1 && P1[1] - P1[0] >= 3 && bl[L1[0]].k === "q" && bl[P1[1] - 1].k === "q") { P1[1]--; L1[0]--; } } // jamais une question seule sur la dernière page
      if (plan.length > 1 && bl.slice(plan[plan.length - 1][0]).every((x) => x.k === "c")) { // dernière page = juste des cases à cocher : on les remonte sur la page précédente si ça tient
        const l0 = plan[plan.length - 2];
        for (const tier of [2, 3]) { draw(l0[0], bl.length, tier, true); if (fits()) { plan.splice(plan.length - 2, 2, [l0[0], bl.length, tier]); break; } }
      }
      T.plan[p] = plan;
    }
    const plan = T.plan[p], s = T.s === "last" ? plan.length - 1 : Math.min(T.s || 0, plan.length - 1);
    T.s = s;
    const [pa, pz, ptight] = plan[s];
    draw(pa, pz, ptight);
    if (p <= 3) { // les cases s'agrandissent pour remplir la page (sans défilement)
      const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"), chs = [...m.querySelectorAll(".lc-choice")].filter((x) => x.offsetParent), cards = m.querySelectorAll(":scope > .lc-card"), lastC = cards[cards.length - 1];
      if (chs.length && lastC && f) {
        const L = Math.floor(f.getBoundingClientRect().top - lastC.getBoundingClientRect().bottom - 16), base = chs.map((x) => parseFloat(getComputedStyle(x).paddingTop));
        for (let q = Math.min(20, Math.floor(L / (2 * chs.length))); q > 0; q--) {
          chs.forEach((x, i) => { x.style.paddingTop = x.style.paddingBottom = (base[i] + q) + "px"; });
          if (m.scrollHeight <= m.clientHeight + 2 && lastC.getBoundingClientRect().bottom <= f.getBoundingClientRect().top - 12) break;
          chs.forEach((x) => { x.style.paddingTop = x.style.paddingBottom = ""; });
        }
      }
    }
    if (p <= 3 && el.querySelector(".q6-in[data-key]")) fillTyped();
    if (p === 5) { // expression orale : les cases à cocher s'étirent pour remplir la page
      const m = el.querySelector(".lc-main"), f = el.querySelector(".lc-foot"), lbs = [...m.querySelectorAll(".lc-checks-in label")], cards = m.querySelectorAll(":scope > .lc-card"), lastC = cards[cards.length - 1];
      if (lbs.length && lastC && f) {
        const L = Math.floor(f.getBoundingClientRect().top - lastC.getBoundingClientRect().bottom - 16);
        for (let q = Math.min(16, Math.floor(L / (2 * lbs.length))); q > 0; q--) {
          lbs.forEach((x) => { x.style.paddingTop = x.style.paddingBottom = q + "px"; });
          if (m.scrollHeight <= m.clientHeight + 2 && lastC.getBoundingClientRect().bottom <= f.getBoundingClientRect().top - 12) break;
          lbs.forEach((x) => { x.style.paddingTop = x.style.paddingBottom = ""; });
        }
      }
    }
    const keys = bl.slice(pa, pz).flatMap((x) => x.keys || []);
    el.querySelector(".lc-main").scrollTop = 0;
    const next = el.querySelector("#lcNext");
    const refresh = () => {
      if (p <= 3) next.disabled = !keys.every((k) => T.ans[k] !== undefined);
      else if (p === 4) next.disabled = T.written.trim().length < 15;
      else next.disabled = s === plan.length - 1 && !T.oral.some(Boolean);
    };
    refresh();
    el.querySelectorAll(".lc-choice").forEach((b) => b.addEventListener("click", () => {
      T.ans[b.dataset.k] = Number(b.dataset.i);
      el.querySelectorAll(`.lc-choice[data-k="${b.dataset.k}"]`).forEach((x) => x.classList.toggle("lc-sel", x === b));
      refresh();
    }));
    // Contrôle noté : champs créés par typifyDom() ; réponse juste = point, erreur = pas de point (pas de 2e essai) ; « Indice » montre les propositions.
    el.querySelectorAll(".q6-in[data-key]").forEach((inp) => {
      const key = inp.dataset.key, q = qOf(key), w = inp.closest(".q6-w"), ch = w.parentElement.querySelector(".lc-choices"), hb = w.querySelector(".q6-hintb");
      if (hb) hb.onclick = () => { ch.hidden = false; ch.style.removeProperty("display"); hb.remove(); fillTyped(); };
      inp.addEventListener("input", () => { const v = inp.value.trim(); if (v) { T.typed[key] = v; T.ans[key] = same(v, q[1][q[2]], isVoc(q[0]), q[1]) ? q[2] : -1; } else { delete T.typed[key]; delete T.ans[key]; } refresh(); });
    });
    const ta = el.querySelector("#lcTa"); if (ta) { ta.addEventListener("input", () => { T.written = ta.value; refresh(); }); mountAdvice(() => ta.value); }
    fillSpace();
    if (p === 4) { const mm = el.querySelector(".lc-main"), hh = mm && mm.querySelector(".lc-exhero"); if (hh && mm.scrollHeight > mm.clientHeight + 2) { hh.style.display = "none"; fillSpace(); } } // petit écran : on retire l'image pour que tout tienne sans défiler
    el.querySelectorAll("[data-o]").forEach((b) => b.addEventListener("change", () => { T.oral[Number(b.dataset.o)] = b.checked; refresh(); }));
    const sp = el.querySelector("#lcSpeed"); if (sp) sp.onclick = () => { speedMul = speedMul === 1 ? 0.75 : 1; sp.textContent = speedMul === 1 ? "1x" : "0.75x"; };
    const mic = el.querySelector("#lcMic");
    if (mic) mic.addEventListener("click", () => {
      try {
        const r = new SR(); r.lang = "en-GB"; r.interimResults = false; mic.classList.add("lc-mic-on");
        r.onresult = (e) => {
          T.heard = Array.from(e.results).map((x) => x[0].transcript).join(" "); el.querySelector("#lcHeard").textContent = T.heard;
          EO.checks.forEach(([, re], i) => { if (rxTest(re, T.heard)) { T.oral[i] = true; const cb = el.querySelector(`[data-o="${i}"]`); if (cb) cb.checked = true; } });
          refresh();
        };
        r.onerror = () => toast("Micro indisponible ou refusé"); r.onend = () => mic.classList.remove("lc-mic-on"); r.start();
      } catch (e) { toast("Micro indisponible sur cet appareil"); }
    });
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcPrev").onclick = () => { if (s > 0) { T.s = s - 1; showTest(); } else if (p === 0) leave(); else { T.p--; T.s = "last"; showTest(); } };
    next.onclick = () => { if (s < plan.length - 1) { T.s = s + 1; showTest(); } else if (!last) { T.p++; T.s = 0; showTest(); } else showTestResult(); };
  }
  function showTestResult() {
    screen = "test-result";
    const cnt = (list, pre) => list.reduce((n, q, i) => n + (T.ans[pre + i] === q[2] ? 1 : 0), 0);
    const r = cnt(T.text.q, "r"), l = cnt(T.audio.q, "l");
    const g = T.gram.reduce((n, id) => n + (T.ans["g" + id] === B.testGrammar[id][2] ? 1 : 0), 0) * 10 / Math.max(1, T.gram.length);
    const w = EW.checks.filter(([, re]) => rxTest(re, T.written)).length / EW.checks.length * 7.5;
    const o = T.oral.filter(Boolean).length / EO.checks.length * 7.5;
    const pts = [r / Math.max(1, T.text.q.length) * 7.5, l / Math.max(1, T.audio.q.length) * 7.5, g, w, o];
    const sum = Math.round(pts.reduce((a, b) => a + b, 0));
    const passed = sum >= 32;
    const fmt = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
    prog.testAttempts = (T.attempt || 0) + 1;
    // Sans pénalité : repasser le test ne fait jamais baisser la meilleure note ni ne retire une leçon validée.
    const prevBest = parseInt(((prog.scores || {}).test || "").split("/")[0], 10), keep = Number.isFinite(prevBest) && prevBest > sum;
    prog.scores = Object.assign({}, prog.scores, { test: `${keep ? prevBest : sum}/40` });
    const gapsRec = [
      ...T.text.q.map((q, i) => ["Lecture", "r" + i, q]), ...T.audio.q.map((q, i) => ["Écoute", "l" + i, q]), ...T.gram.map((id) => ["Grammaire", "g" + id, B.testGrammar[id]]),
    ].filter(([, k, q]) => T.ans[k] !== q[2]).map(([sk, , q]) => ({ sk, q: String(q[0]).slice(0, 90) })).slice(0, 12);
    prog.testHist = (prog.testHist || []).concat([{ d: new Date().toISOString().slice(0, 10), total: sum, passed, t: Date.now(), rt: rtSeries(RID), used: { t: [T.ti], a: [T.ai], g: T.gram.slice(), e: [T.wi, T.oi] }, pts: pts.map((x) => Math.round(x * 10) / 10), gaps: gapsRec }]).slice(-20);
    if (passed) prog.done = Object.assign({}, prog.done, { test: true });
    saveProgress(prog);
    const wrong = [
      ...T.text.q.map((q, i) => ["r" + i, q]), ...T.audio.q.map((q, i) => ["l" + i, q]), ...T.gram.map((id) => ["g" + id, B.testGrammar[id]]),
    ].filter(([k, q]) => T.ans[k] !== q[2]).map(([k, q]) => `<li><b>${esc(q[0])}</b><small>Ta réponse : ${esc((T.typed && T.typed[k]) || q[1][T.ans[k]] || "—")} · Bonne réponse : ${esc(q[1][q[2]])}</small></li>`).join("");
    frame(B.exam ? (B.examTitle || "Grand contrôle A1") : "Test de fin de leçon", null, `
      <section class="lc-hero">${c0().win ? `<img class="lc-hero-full" src="${c0().win}" alt=""/>` : `<img class="lc-hero-img lc-hero-sm" src="${c0().src}" alt=""/>`}</section>
      <section class="lc-card lc-intro"><h1>${passed ? (B.exam ? (B.examPassedTitle || "Niveau A1 validé !") : "Leçon terminée !") : (prog.done || {}).test ? "Déjà validée" : "Presque !"}</h1>
        <p class="lc-lead">${passed ? `Bravo ! Tu as validé ${HEAD}.` : (prog.done || {}).test ? "Cette note ne change rien : ta leçon reste validée." : "Il faut 32/40 pour valider. Revois les points manqués et réessaie."}</p>
        <table class="lc-table"><tbody>
          <tr><td>Compréhension écrite</td><td class="lc-form">${fmt(pts[0])} / 7,5</td></tr>
          <tr><td>Compréhension orale</td><td class="lc-form">${fmt(pts[1])} / 7,5</td></tr>
          <tr><td>Grammaire, vocabulaire</td><td class="lc-form">${fmt(pts[2])} / 10</td></tr>
          <tr><td>Expression écrite</td><td class="lc-form">${fmt(pts[3])} / 7,5</td></tr>
          <tr><td>Expression orale (auto-éval.)</td><td class="lc-form">${fmt(pts[4])} / 7,5</td></tr>
          <tr><td><b>Total</b></td><td class="lc-form"><b>${sum} / 40</b></td></tr></tbody></table>
        ${wrong ? `<details class="lc-det"><summary>Revoir mes réponses (${wrong.split("</li>").length - 1})</summary><ul class="lc-list lc-wronglist">${wrong}</ul></details>` : ""}
        ${keep ? `<p class="lc-lead" style="margin-top:10px">Aucune pénalité : ta meilleure note reste ${prevBest} / 40.</p>` : ""}
        ${!passed && retakeBlocked() ? `<button type="button" class="lc-cta" id="lcRtFirst" style="margin-top:12px">Faire ma série de rattrapage (5 questions)</button>` : `<button type="button" class="lc-cta" id="lcAgain" style="margin-top:12px">Refaire une nouvelle version</button>`}
        <button type="button" class="lc-sec-btn" id="lcToMenu" style="width:100%;margin-top:10px">${B.exam ? "Retour à Mes cours" : "Retour aux leçons"}</button></section>`);
    el.querySelector("#lcBack").onclick = leave;
    el.querySelector("#lcToMenu").onclick = leave;
    const ag = el.querySelector("#lcAgain"); if (ag) ag.onclick = startTest;
    const rf = el.querySelector("#lcRtFirst"); if (rf) rf.onclick = () => runRattrapage(el, RID, { onBack: leave, onRetest: startTest, backLabel: B.exam ? "Retour à Mes cours" : "Retour aux leçons" });
  }
  const c0 = () => currentCharacter();

  if (B.exam) startTest(); else if (start === "remise" && B.bilan) showRemise(); else showIntro();
}

/* ---------- lot de données de la leçon A1.1 (les autres leçons viennent de js/data/lecons-a1.js) ---------- */
balanceAll({ VOCAB_PAGES, GRAMMAR_PAGES, READING_PAGES, LISTENING_PAGES, EXERCISE_PAGES, TRANSV_DAYS, TEST_TEXTS, TEST_AUDIOS, TEST_GRAMMAR });

/* Allègement A1.1 : les possessifs (A1.2) et do/does (A1.3) ne sont plus enseignés ici. */
const DROP_GRAMMAR = ["Questions et possessifs", "To do : questions et réponses courtes"];
const DROP_TEST_G = [/^___ he live in Paris\?/, /^Where ___ you live\?/, /^___ she have a brother\?/, /^___ you have a phone\?/, /^He ___ not like coffee/, /^Does she live in Rome/, /^What is ___ nationality\?/];
const GRAMMAR_LIGHT = GRAMMAR_PAGES.filter((g) => !DROP_GRAMMAR.includes(g.title));
const TEST_GRAMMAR_LIGHT = TEST_GRAMMAR.filter((q) => !DROP_TEST_G.some((r) => r.test(q[0])));
const EXERCISES_LIGHT = EXERCISE_PAGES.map((pg) => {
  if (pg.title === "Grammaire — Be, have, do") return Object.assign({}, pg, { title: "Grammaire — Be et have", qs: pg.qs.filter((q) => !/^___ you live in London\?|^He ___ not have a car/.test(q[0])) });
  if (pg.title === "Grammaire — This/that et do/does") return Object.assign({}, pg, { title: "Grammaire — This/that", qs: pg.qs.slice(0, 2).concat([
    ["___ is my bag. (loin, un seul)", ["This", "That", "These"], 1, "Loin + un seul : That."],
    ["___ are my friends. (près, plusieurs)", ["Those", "That", "These"], 2, "Près + plusieurs : These."],
    ["___ you like tea?", ["Do", "Does", "Are"], 0, "you → Do."],
    ["___ is my book. (près, un seul)", ["That", "Those", "This"], 2, "Près + un seul : This."]]) });
  return pg;
});

export const BUNDLE_A11 = {
  code: "A1.1", head: "A1.1 – Mon identité", titleFr: "Mon identité", progressKey: "the_roots_a11_lesson_v1",
  goals: LEARN_GOALS, vocab: [...VOCAB_PAGES, ...plusPages(1, new Set(VOCAB_PAGES.flatMap((p) => (p.words || []).map((w) => String(w[0]).toLowerCase()))))], greetings: GREETINGS, scenes: SCENES,
  grammar: GRAMMAR_LIGHT, grammarSub: "Be, have, this/that et les questions.",
  reading: READING_PAGES, listening: LISTENING_PAGES, exercises: EXERCISES_LIGHT, expression: [...EXPRESSION_PAGES, ...(EXPRESSION_PLUS_A1[1] || [])], transv: TRANSV_DAYS,
  testTexts: TEST_TEXTS, testAudios: TEST_AUDIOS, testGrammar: TEST_GRAMMAR_LIGHT, testW: 0, testO: 0,
  testWriteTitle: "Présente-toi en anglais", testWriteLead: "Écris au moins 4 phrases : ton prénom, ton âge, d’où tu viens, ce que tu aimes.",
  testOralTitle: "Dis ta présentation", testOralLead: "Présente-toi à voix haute en anglais.",
  city: null,
};

export function renderLessonA11(root, opts) { return renderLesson(root, BUNDLE_A11, opts); }
