// The Roots — Roots City A1.2 « La photo de famille » : 6 missions (entraînement, non noté dans les 40 points).
// Même format que roots-city.js (A1.1). Textes cliquables ; images de fond à fournir : assets/img/city/a12-m1..m6.webp
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const MISSIONS_A12 = [
  { id: "m1", ic: "👂", title: "Qui est qui ?", sub: "Écoute, puis touche le bon lien de famille.", hero: "city/a12-m1" },
  { id: "m2", ic: "🪪", title: "Les fiches de famille", sub: "Écoute et complète nom, lien et métier.", hero: "city/a12-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l’ordre.", hero: "city/a12-m3" },
  { id: "m4", ic: "💼", title: "Les métiers", sub: "Associe chaque personne à son métier.", hero: "city/a12-m4" },
  { id: "m5", ic: "🏠", title: "La maison de famille", sub: "There is / There are : trouve la bonne maison.", hero: "city/a12-m5" },
  { id: "m6", ic: "📸", title: "La photo de famille", sub: "Présente un membre de la famille en anglais.", hero: "city/a12-m6" },
  { id: "m7", ic: "🖼️", title: "Regarde l’image", sub: "Réponds aux questions sur la photo.", hero: "city/fam-wedding" },
];

const rel = (say, a, o) => ({ say, groups: [{ label: "Who is it?", answer: a, opts: names(o) }] });

const M1 = [
  rel("This is my mother's mother.", "grandmother", ["grandmother", "aunt", "sister", "cousin"]),
  rel("He is my father's brother.", "uncle", ["uncle", "cousin", "grandfather", "brother"]),
  rel("She is my mother's sister.", "aunt", ["mother", "aunt", "grandmother", "cousin"]),
  rel("He is my uncle's son.", "cousin", ["brother", "uncle", "cousin", "grandfather"]),
  rel("She is my parents' daughter. She is not me.", "sister", ["sister", "aunt", "mother", "cousin"]),
];

const M2 = [
  { say: "This is my uncle. His name is Omar. He is an engineer.", groups: [{ label: "Name", answer: "Omar", opts: names(["Omar", "Paul", "Max", "Ben"]) }, { label: "Relation", answer: "uncle", opts: names(["uncle", "father", "cousin", "brother"]) }, { label: "Job", answer: "engineer", opts: names(["engineer", "driver", "doctor", "teacher"]) }] },
  { say: "This is my aunt. Her name is Sara. She is a nurse.", groups: [{ label: "Name", answer: "Sara", opts: names(["Sara", "Lily", "Mia", "Nina"]) }, { label: "Relation", answer: "aunt", opts: names(["aunt", "mother", "sister", "cousin"]) }, { label: "Job", answer: "nurse", opts: names(["nurse", "teacher", "retired", "driver"]) }] },
  { say: "This is my grandfather. His name is Ben. He is retired.", groups: [{ label: "Name", answer: "Ben", opts: names(["Ben", "Tom", "Leo", "Max"]) }, { label: "Relation", answer: "grandfather", opts: names(["grandfather", "father", "uncle", "brother"]) }, { label: "Job", answer: "retired", opts: names(["retired", "doctor", "engineer", "driver"]) }] },
];

const M3 = [
  { prompt: "Présente ta mère.", answer: ["This", "is", "my", "mother", "."], bank: ["my", "This", "mother", "is", "."] },
  { prompt: "Dis : « J’ai deux sœurs. »", answer: ["I", "have", "two", "sisters", "."], bank: ["sisters", "I", "two", "have", "."] },
  { prompt: "Demande : « Combien de frères as-tu ? »", answer: ["How", "many", "brothers", "do", "you", "have", "?"], bank: ["do", "How", "have", "brothers", "?", "many", "you"] },
  { prompt: "Dis : « Mon père est médecin. »", answer: ["My", "father", "is", "a", "doctor", "."], bank: ["doctor", "is", "My", "a", ".", "father"] },
  { prompt: "Dis : « C’est la voiture de Tom. »", answer: ["It", "is", "Tom’s", "car", "."], bank: ["car", "Tom’s", "is", "It", "."] },
];

const JOB_Q = [
  ["She helps sick people in a hospital.", "nurse", ["nurse", "driver", "teacher", "engineer"]],
  ["He teaches children at school.", "teacher", ["doctor", "teacher", "retired", "driver"]],
  ["She drives a bus.", "driver", ["driver", "nurse", "doctor", "engineer"]],
  ["He builds bridges.", "engineer", ["teacher", "engineer", "nurse", "retired"]],
  ["She doesn't work now. She is 70.", "retired", ["retired", "driver", "doctor", "teacher"]],
  ["He works in a hospital. He is a…", "doctor", ["engineer", "doctor", "driver", "teacher"]],
];
const M4 = JOB_Q.map(([say, a, o]) => ({ say, groups: [{ label: "Job", answer: a, opts: names(o) }] }));

const M5 = [
  { say: "There are three bedrooms and a garden.", groups: [{ label: "Bedrooms", answer: "3", opts: names(["1", "2", "3", "4"]) }, { label: "Garden", answer: "yes", opts: names(["yes", "no"]) }] },
  { say: "There is one bedroom and there isn't a garden.", groups: [{ label: "Bedrooms", answer: "1", opts: names(["1", "2", "3", "4"]) }, { label: "Garden", answer: "no", opts: names(["yes", "no"]) }] },
  { say: "There are four bedrooms, two bathrooms and a big kitchen.", groups: [{ label: "Bedrooms", answer: "4", opts: names(["1", "2", "3", "4"]) }, { label: "Bathrooms", answer: "2", opts: names(["1", "2", "3", "4"]) }] },
];

const M6 = [
  { prompt: "Présente ce membre de la famille.", card: [["Name", "Tom"], ["Relation", "brother"], ["Job", "student"]], answer: ["This is", "Tom.", "He is", "my brother.", "He is", "a student."], bank: ["He is", "my brother.", "She is", "This is", "a student.", "Tom.", "He is", "my sister."] },
  { prompt: "Présente ce membre de la famille.", card: [["Name", "Anna"], ["Relation", "mother"], ["Job", "nurse"]], answer: ["This is", "Anna.", "She is", "my mother.", "She is", "a nurse."], bank: ["a nurse.", "He is", "This is", "She is", "Anna.", "my mother.", "She is", "my father."] },
];

const M7 = [
    { img: "city/fam-wedding", groups: [{ label: "What is this?", answer: "a wedding", cols: 3, opts: names(["a wedding", "a lesson", "a match"]) }, { label: "The woman wears a… dress", answer: "white", cols: 3, opts: names(["white", "black", "green"]) }, { label: "The man wears a…", answer: "suit", cols: 3, opts: names(["suit", "cap", "scarf"]) }, { label: "What do they hold?", answer: "flowers", cols: 3, opts: names(["flowers", "books", "phones"]) }, { label: "The people are…", answer: "happy", cols: 3, opts: names(["happy", "sad", "angry"]) }] },
    { img: "city/fam-meal", groups: [{ label: "Where are they?", answer: "at home", cols: 3, opts: names(["at home", "at school", "in a shop"]) }, { label: "What is on the table?", answer: "chicken", cols: 3, opts: names(["chicken", "pizza", "fish"]) }, { label: "The drink is…", answer: "orange juice", cols: 3, opts: names(["orange juice", "milk", "water"]) }, { label: "The boy on the left wears a… hoodie", answer: "red", cols: 3, opts: names(["red", "blue", "pink"]) }, { label: "The girl on the right wears a… hoodie", answer: "purple", cols: 3, opts: names(["purple", "red", "yellow"]) }] },
    { img: "city/fam-jobs", groups: [{ label: "What are the children looking at?", answer: "photos", cols: 3, opts: names(["photos", "a film", "a game"]) }, { label: "The woman in blue is a…", answer: "nurse", cols: 3, opts: names(["nurse", "teacher", "chef"]) }, { label: "The man in white is a…", answer: "doctor", cols: 3, opts: names(["doctor", "pilot", "builder"]) }, { label: "The woman with the books is a…", answer: "teacher", cols: 3, opts: names(["teacher", "nurse", "chef"]) }, { label: "The man with the yellow helmet is a…", answer: "builder", cols: 3, opts: names(["builder", "doctor", "pilot"]) }] },
    { img: "city/fam-living", groups: [{ label: "Where are they?", answer: "in the living room", cols: 3, opts: names(["in the living room", "at school", "in a shop"]) }, { label: "The grandfather has…", answer: "glasses", cols: 3, opts: names(["glasses", "a hat", "a bag"]) }, { label: "The girl wears a… hoodie", answer: "pink", cols: 3, opts: names(["pink", "red", "green"]) }, { label: "What is on the floor?", answer: "a dog", cols: 3, opts: names(["a dog", "a cat", "a bike"]) }, { label: "What is on the table?", answer: "cookies", cols: 3, opts: names(["cookies", "pizza", "fish"]) }] },
    { img: "city/fam-trio", groups: [{ label: "The man on the left is…", answer: "old", cols: 3, opts: names(["old", "young", "a baby"]) }, { label: "The grandfather has a…", answer: "stick", cols: 3, opts: names(["stick", "hat", "bike"]) }, { label: "The boy has a… hoodie", answer: "green", cols: 3, opts: names(["green", "red", "pink"]) }, { label: "What does the boy play with?", answer: "a car", cols: 3, opts: names(["a car", "a phone", "a book"]) }, { label: "The father has a…", answer: "beard", cols: 3, opts: names(["beard", "hat", "bag"]) }] },
    { img: "city/fam-bigmeal", groups: [{ label: "What is this?", answer: "a big family meal", cols: 3, opts: names(["a big family meal", "a lesson", "a match"]) }, { label: "What is on the table?", answer: "chicken", cols: 3, opts: names(["chicken", "pizza", "fish"]) }, { label: "The flowers are…", answer: "white", cols: 3, opts: names(["white", "red", "blue"]) }, { label: "The girl on the right wears a… bow", answer: "pink", cols: 3, opts: names(["pink", "green", "blue"]) }, { label: "The people are…", answer: "happy", cols: 3, opts: names(["happy", "sad", "angry"]) }] },
    { img: "city/fam-tree", groups: [{ label: "What is in the park?", answer: "a big tree", cols: 3, opts: names(["a big tree", "a car", "a house"]) }, { label: "What is on the tree?", answer: "frames", cols: 3, opts: names(["frames", "apples", "birds"]) }, { label: "How many frames at the bottom?", answer: "five", cols: 3, opts: names(["five", "two", "ten"]) }, { label: "What is on the right?", answer: "a fountain", cols: 3, opts: names(["a fountain", "a bus", "a plane"]) }, { label: "What are on the sides?", answer: "benches", cols: 3, opts: names(["benches", "beds", "cars"]) }] },
    { img: "city/fam-house", groups: [{ label: "What is this?", answer: "a house", cols: 3, opts: names(["a house", "a school", "a shop"]) }, { label: "The room on the left is…", answer: "blue", cols: 3, opts: names(["blue", "pink", "green"]) }, { label: "The kitchen is…", answer: "downstairs", cols: 3, opts: names(["downstairs", "upstairs", "outside"]) }, { label: "What is in the garden?", answer: "a slide", cols: 3, opts: names(["a slide", "a bus", "a bed"]) }, { label: "How many floors?", answer: "two", cols: 3, opts: names(["two", "five", "ten"]) }] }
];
export const DATA_A12 = { m1: M1, m2: M2, m3: M3, m4: M4, m5: M5, m6: M6, m7: M7 };

balanceAll(DATA_A12);
