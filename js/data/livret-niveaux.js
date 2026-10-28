// The Roots — livret : structure complète niveaux → leçons → matières (jauges à 0 tant qu'aucun examen n'est passé).
import { A1_LIST } from "./lecons-a1.js?v=20261025d";
import { A2_LIST, A2_BUILT } from "./lecons-a2.js?v=20261025d";
import { TRADUCTION_A1, TRADUCTION_A2 } from "./traduction-a1a2.js?v=20261025d";
export const LEVELS = [["A1", "Débutant", true], ["A2", "Élémentaire", true], ["B1", "Intermédiaire", false], ["B2", "Intermédiaire +", false], ["C1", "Avancé", false], ["C2", "Maîtrise", false]];
const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; } };
const SKN = [["Compréhension écrite", 7.5, "📖"], ["Compréhension orale", 7.5, "🎧"], ["Grammaire", 10, "🧩"], ["Expression écrite", 7.5, "✍️"], ["Expression orale", 7.5, "🎤"]];
export const BONUS_MAX = 1; // points de bonus max sur 20 (Conjugaison)
export function lessonsOf(level) {
  if (level === "A1") return A1_LIST.map((L) => ({ n: L.n, code: L.code, title: L.titleFr, key: L.key, built: true }));
  if (level === "A2") return A2_LIST.map((L) => ({ n: L.n, code: L.code, title: L.titleFr, key: L.key, built: A2_BUILT.includes(L.n) }));
  return [];
}
const pc = (a, b) => (b ? Math.round((a / b) * 100) : 0);
// entry = { ce, co, gr, glob } en % (ou null) tirés du test d'entrée de l'élève ; la colonne « à l'entrée » du livret.
export function entryOf(lang) {
  const k = (lang && lang.entrySkills) || {}, f = (a) => (a && a[1] ? Math.round((a[0] / a[1]) * 100) : null);
  return { ce: f(k.ce), co: f(k.co), gr: f(k.gr), glob: lang && lang.entryScore != null ? lang.entryScore : null };
}
export function lessonSheet(level, L, entry = {}) {
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
