// The Roots — livret : structure complète niveaux → leçons → matières (jauges à 0 tant qu'aucun examen n'est passé).
import { A1_LIST } from "./lecons-a1.js?v=20261031y";
import { A2_LIST, A2_BUILT } from "./lecons-a2.js?v=20261031y";
import { B0_NAMES, B0_ICONS, B0_KEY, b0Load } from "./b0-data.js?v=20261031y";
import { TRADUCTION_A1, TRADUCTION_A2 } from "./traduction-a1a2.js?v=20261031y";
export const LEVELS = [["A1", "Débutant", true], ["A2", "Élémentaire", true], ["B0", "Passerelle", true], ["B1", "Intermédiaire", true], ["B2", "Intermédiaire +", false], ["C1", "Avancé", false], ["C2", "Maîtrise", false]];
const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; } };
const SKN = [["Compréhension écrite", 7.5, "📖"], ["Compréhension orale", 7.5, "🎧"], ["Grammaire", 10, "🧩"], ["Expression écrite", 7.5, "✍️"], ["Expression orale", 7.5, "🎤"]];
export const BONUS_MAX = 1; // points de bonus max sur 20 (Conjugaison)
export function lessonsOf(level) {
  if (level === "A1") return A1_LIST.map((L) => ({ n: L.n, code: L.code, title: L.titleFr, key: L.key, built: true }));
  if (level === "A2") return A2_LIST.map((L) => ({ n: L.n, code: L.code, title: L.titleFr, key: L.key, built: A2_BUILT.includes(L.n) }));
  if (level === "B0") return B0_NAMES.slice(1).map((nm, i) => ({ n: i + 1, code: i === 7 ? "Bilan" : "Étape " + (i + 1), title: i === 7 ? "B0" : nm, key: B0_KEY, built: true }));
  if (level === "B1") return [{ n: 0, code: "B1.0", title: "Le monde B1.0", key: "b1", built: true }];
  return [];
}
const pc = (a, b) => (b ? Math.round((a / b) * 100) : 0);
// entry = { ce, co, gr, glob } en % (ou null) tirés du test d'entrée de l'élève ; la colonne « à l'entrée » du livret.
export function entryOf(lang) {
  const k = (lang && lang.entrySkills) || {}, f = (a) => (a && a[1] ? Math.round((a[0] / a[1]) * 100) : null);
  return { ce: f(k.ce), co: f(k.co), gr: f(k.gr), glob: lang && lang.entryScore != null ? lang.entryScore : null };
}
// B1.0 : une ligne par cours de grammaire (meilleur contrôle /15) + test final (/36). Les autres matières apparaissent à 0 tant que leurs cours n'existent pas.
export const B1_GRAM = [["g1", "G1", "Verbes et prépositions", 12], ["g2", "G2", "Present Simple et Present Continuous", 12.5], ["g3", "G3", "First conditional", 12.5], ["g4", "G4", "Past Simple et Present Perfect", 12.5], ["g5", "G5", "Parler du futur", 12.5], ["g6", "G6", "Récit au passé", 12.5], ["c1", "C1", "Le présent simple (Conjugaison)", 12.5]];
export const B1_SKN = {
  g2: { A: "Routine ou action en cours", B: "Temporaire, stable ou tendance", C: "Verbe d’état ou action selon le sens", D: "Always et nuance", E: "Rendez-vous futur ou horaire", F: "Forme : do/does ou be" },
  g3: { A: "First ou zero conditional", B: "Ordre et ponctuation", C: "Formes verbales après if", D: "Conditions négatives", E: "Conséquence nuancée (modal)", F: "Production et justification" },
  g4: { A: "Repères de passé terminé", B: "Forme du Present Perfect", C: "Participes passés et verbes irréguliers", D: "Choisir le temps selon le contexte", E: "just, already et yet", F: "for et since" },
  g5: { A: "will : décision, prédiction, offre", B: "going to : intention et indice", C: "Arrangement au Present Continuous", D: "Present Simple et horaires", E: "Construction des formes", F: "Choix en contexte et transfert" },
  c1: { A: "Verbe lexical et 3e personne", B: "Be : formes, négation et question", C: "Questions avec do/does", D: "Négations avec don’t/doesn’t", E: "Have/has et fonctions de do", F: "Production intégrée" },
  g6: { A: "Past Continuous : construction", B: "Chronologie des actions", C: "Past Simple, did + base, accord", D: "Verbes irréguliers", E: "Habitudes passées (used to)", F: "Production narrative" },
};
export function b1Gaps() { // [{course, skill, n}] tiré des erreurs enregistrées dans chaque cours
  const out = [];
  B1_GRAM.forEach(([k, code]) => { const sk = (read(k + "-chat-progress-v1").sk) || {}; Object.keys(sk).forEach((c) => { if (sk[c] > 0 && B1_SKN[k] && B1_SKN[k][c]) out.push({ course: code, skill: B1_SKN[k][c], n: sk[c] }); }); });
  return out.sort((a, b) => b.n - a.n);
}
function b1Sheet() {
  const rows = [];
  B1_GRAM.forEach(([k, code, name, thr]) => {
    const p = read(k + "-chat-progress-v1"), h = (p.hist || []).filter((x) => x && x.score != null);
    const best = h.length ? Math.max.apply(null, h.map((x) => x.score)) : null, has = best !== null;
    rows.push({ name: code + " · " + name, e: k === "c1" ? "🕰️" : "🧩", has, pct: has ? pc(best, 15) : 0, note: has ? (String(best).replace(".", ",") + "/15" + (best >= thr ? " ✓" : "")) : "", ent: null, gain: null });
  });
  const t = read("test-final-v1"), tHas = !!t.done;
  rows.push({ name: "Test final de grammaire G1–G6", e: "🏆", has: tHas, pct: tHas ? pc(t.score, 36) : 0, note: tHas ? t.score + "/36" + (t.pend ? " (+" + t.pend + " à relire)" : "") : "", ent: null, gain: null });
  [["Vocabulaire", "📚"], ["Compréhension", "🔭"], ["Expression", "🎭"]].forEach(([n, e]) => rows.push({ name: n + " (cours à venir)", e, has: false, pct: 0, note: "", ent: null, gain: null }));
  const got = rows.filter((r) => r.has), avg = got.length ? Math.round(got.reduce((a, r) => a + r.pct, 0) / got.length) : 0, n20 = Math.round((avg / 100) * 200) / 10;
  return { rows, gain: null, avg, note20: n20, conj: { done: false, note: 0, best: 0, tot: 6, bonus: 0 }, total: n20, any: got.length > 0 };
}
export function lessonSheet(level, L, entry = {}) {
  if (level === "B1") return b1Sheet();
  if (level === "B0") { // Passerelle : une ligne par étape (score sur 10), le bilan est noté en %
    const p = b0Load(), raw = L.n === 8 ? p.bilan : ((p.scores || {})[L.n] != null ? p.scores[L.n] : null), has = raw != null && raw !== undefined, pct = has ? raw : 0;
    const n20 = Math.round(pct / 5 * 10) / 10;
    return { rows: [{ name: L.n === 8 ? "Bilan (70 % pour ouvrir B1)" : "Score de l'étape", e: B0_ICONS[L.n], has, pct, note: has ? pct + " %" : "", ent: null, gain: null }], gain: null, avg: pct, note20: n20, conj: { done: false, note: 0, best: 0, tot: 6, bonus: 0 }, total: n20, any: has };
  }
  const p = read(L.key);
  if (level === "A2" && L.n === 0) { // Passerelle : pas de contrôle ; chaque matière est « faite » ou non, la conjugaison reste notée à part
    const dn = p.done || {}, M = [["Vocabulaire", "📖", "vocab"], ["Grammaire", "🧩", "grammar"], ["Conversation", "💬", "dialogue"], ["Compréhension orale", "🎧", "listening"], ["Compréhension écrite", "📖", "reading"], ["Expressions écrite et orale", "✍️", "speaking"], ["Dictée", "🔤", "write"]];
    const rows = M.map(([name, e, k]) => ({ name, e, has: !!(dn[k] || (k === "write" && p.dict)), pct: dn[k] || (k === "write" && p.dict) ? 100 : 0, note: dn[k] || (k === "write" && p.dict) ? "Fait ✓" : "", ent: null, gain: null }));
    const avg = Math.round((rows.filter((r) => r.has).length / rows.length) * 100);
    if (p.bilan) rows.push({ name: "Bilan (sans note)", e: "🧭", has: true, pct: p.bilan.pct, note: p.bilan.pct + " %", ent: null, gain: null });
    const c0 = p.conj || null, cN = c0 ? Math.round((c0.best / c0.tot) * 100) / 10 : 0, b0 = c0 ? Math.round((cN / 10) * BONUS_MAX * 10) / 10 : 0, n20 = Math.round(avg / 5 * 10) / 10;
    return { rows, gain: null, avg, note20: n20, conj: { done: !!c0, note: cN, best: c0 ? c0.best : 0, tot: c0 ? c0.tot : 6, bonus: b0 }, total: Math.min(20, Math.round((n20 + b0) * 10) / 10), any: avg > 0 };
  }
  const h = (p.testHist && p.testHist.length) ? p.testHist : [];
  const sc = parseInt(((p.scores || {}).test || "").split("/")[0], 10);
  const bestT = h.reduce((m, x) => (!m || x.total > m.total ? x : m), null);
  const rows = SKN.map(([name, max, e], i) => ({ name, e, has: !!(bestT && bestT.pts), pct: bestT && bestT.pts ? pc(bestT.pts[i], max) : 0 }));
  const TR = level === "A2" ? TRADUCTION_A2 : TRADUCTION_A1;
  if (TR[L.n]) { const t = p.trad || {}, ok = ((t.fr || {}).ok || 0) + ((t.en || {}).ok || 0), tot = ((t.fr || {}).tot || 0) + ((t.en || {}).tot || 0); rows.push({ name: "Traduction", e: "🔁", has: tot > 0, pct: pc(ok, tot) }); }
  const d = p.dict; rows.push({ name: "Dictée", e: "🔤", has: !!(d && d.tot), pct: d && d.tot ? pc(d.ok, d.tot) : 0 });
  const best = h.length ? h.reduce((m, x) => Math.max(m, x.total), 0) : (Number.isFinite(sc) ? sc : 0), hasT = h.length > 0 || Number.isFinite(sc);
  rows.push({ name: "Contrôle de fin de leçon", e: "🏆", has: hasT, pct: pc(best, 40), note: hasT ? `${best}/40` : "" });
  const EM = { "Compréhension écrite": entry.ce, "Compréhension orale": entry.co, "Grammaire": entry.gr, "Contrôle de fin de leçon": entry.glob };
  rows.forEach((r) => { r.ent = EM[r.name] != null ? EM[r.name] : null; r.gain = r.has && r.ent != null ? r.pct - r.ent : null; });
  const got = rows.filter((r) => r.has), avg = got.length ? Math.round(got.reduce((a, r) => a + r.pct, 0) / got.length) : 0;
  const note20 = got.length ? Math.round((avg / 100) * 200) / 10 : 0;
  const c = p.conj || null, cNote = c ? Math.round((c.best / c.tot) * 100) / 10 : 0; // /10
  const bonus = c ? Math.round((cNote / 10) * BONUS_MAX * 10) / 10 : 0;
  const gs = rows.filter((r) => r.gain !== null), gain = gs.length ? Math.round(gs.reduce((a, r) => a + r.gain, 0) / gs.length) : null;
  return { rows, gain, avg, note20, conj: { done: !!c, note: cNote, best: c ? c.best : 0, tot: c ? c.tot : 6, bonus }, total: Math.min(20, Math.round((note20 + bonus) * 10) / 10), any: got.length > 0 };
}
