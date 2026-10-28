// The Roots — registre des leçons du niveau A2 (anglais) : charge à la demande les données de chaque leçon
// et les met au format attendu par renderLesson() (js/screens/lecon-a11.js). Même principe que lecons-a1.js.
// Leçons construites : A2.0 à A2.12 (voir A2_BUILT). Les autres paliers viendront un par un.
import { CONJ_A2 } from "./conjugation-a1.js?v=20261025f";
import { A2_EN_PALIERS } from "./programme-a2-en.js";
import { EXPRESSION_PLUS_A2 } from "./expression-plus-a1.js?v=20261025f";

// Objectifs courts pour l'écran d'accueil : une ligne chacun (le détail reste dans les pages de grammaire).
const cut = (t, n = 64) => { let x = String(t).split(/ [—–-] | \(|\.\s/)[0].replace(/^Grammaire : /, ""); x = x.split(" : ")[0]; if (x.length > n) { x = x.slice(0, n); x = x.slice(0, x.lastIndexOf(" ")) + "…"; } return x; };
export const shortGoals = (base) => [cut(base.objective.split(", ")[0], 70), ...base.grammar.slice(0, 2).map((g) => "Grammaire : " + cut(g, 40))];
export const A2_TITLES_FR = ["Ma routine au quotidien", "Le passé et « used to »", "Pendant que…", "Mes projets", "Comparer", "Santé et bien-être", "Météo et environnement", "Logement et quartier", "Au téléphone", "Sorties et invitations", "Opinions et sentiments", "Imprévus en voyage"];
export const A2_BUILT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// A2.0 « Passerelle A1 → A2 » : leçon transversale placée entre A1 et A2.1 (n = 0).
const A20_BASE = { code: "A2.0", title: "Bridge A1 to A2", objective: "Réviser les règles des temps vus en A1 et les verbes de base, pour partir sans lacune vers le passé (A2.2).", grammar: ["Présent simple : la règle complète", "Présent continu : la règle complète", "Be et have got : révision"] };
const KEYS = (n) => `the_roots_a2${n}_lesson_v1`;

export const A2_LIST = [{ n: 0, code: "A2.0", titleEn: "Bridge A1 to A2", titleFr: "Passerelle A1 → A2", key: KEYS(0), built: true }, ...A2_EN_PALIERS.slice(0, 12).map((p, i) => ({ n: i + 1, code: p.code, titleEn: p.title, titleFr: A2_TITLES_FR[i], key: KEYS(i + 1), built: A2_BUILT.includes(i + 1) }))];

export function bilanA2() { try { const p = JSON.parse(localStorage.getItem(KEYS(0)) || "{}"); return p.bilan ? { pct: p.bilan.pct, need: p.bilan.pct < 70, remiseDone: !!(p.remise && p.remise.all) } : null; } catch (e) { return null; } }
export function lessonStatusA2(n) {
  try {
    const p = JSON.parse(localStorage.getItem(KEYS(n)) || "{}");
    const dn = p.done || {};
    return { started: Object.keys(dn).length > 0 || !!p.scores, passed: n === 0 ? (A20_DONE.every((k) => dn[k] || (k === "write" && p.dict)) && (!p.bilan || p.bilan.pct >= 70 || !!(p.remise && p.remise.all))) : !!dn.test, score: (p.scores || {}).test || null };
  } catch (e) { return { started: false, passed: false, score: null }; }
}

// A2.0 « Passerelle » : petit parcours (pas de Roots City, Exercices, Jeux, ni Contrôle). Il est validé quand toutes ces matières sont faites.
export const A20_MENU = ["vocab", "grammar", "dialogue", "trad", "listening", "reading", "ewrite", "eoral", "write", "conj", "bilan", "remise"];
const A20_DONE = ["vocab", "grammar", "dialogue", "listening", "reading", "speaking", "write", "conj", "bilan"];
const V = "20261025f";
export async function loadBundleA2(n) {
  if (!A2_BUILT.includes(n)) throw new Error("A2." + n + " pas encore construit");
  const s = `A2${n}`, base = n === 0 ? A20_BASE : A2_EN_PALIERS[n - 1], titleFr = n === 0 ? "Passerelle A1 → A2" : A2_TITLES_FR[n - 1];
  const m = await import(`./lecon-a2${n}-data.js?v=${V}`);
  const vocab = m[`VOCAB_${s}`], exprs0 = m[`EXPRESSION_${s}`], exprs = [...exprs0, ...(EXPRESSION_PLUS_A2[n] || [])];
  const w = exprs0[0], o = exprs0[1] || exprs0[0];
  return {
    code: base.code, head: `${base.code} – ${titleFr}`, titleFr, progressKey: KEYS(n),
    goals: shortGoals(base),
    vocab, grammar: m[`GRAMMAR_${s}`], grammarSub: "Les règles de la leçon, avec des exemples.",
    reading: m[`READING_${s}`], listening: m[`LISTENING_${s}`], exercises: m[`EXERCISES_${s}`], expression: exprs, transv: null, conj: CONJ_A2[n] || null,
    menu: n === 0 ? A20_MENU : null, bilan: n === 0,
    testTexts: m[`TEST_TEXTS_${s}`], testAudios: m[`TEST_AUDIOS_${s}`], testGrammar: m[`TEST_GRAMMAR_${s}`], testW: 0, testO: exprs0[1] ? 1 : 0,
    testWriteTitle: w.title, testWriteLead: `Écris 4 phrases : ${w.prompts.join(" ")}`,
    testOralTitle: o.title, testOralLead: o.prompts.join(" "),
    adviceTopic: `${base.title} (${base.code})`, adviceLede: "Réponds avec bienveillance. Niveau A2.",
    city: { missions: m[`MISSIONS_${s}`], data: m[`DATA_${s}`] },
  };
}
