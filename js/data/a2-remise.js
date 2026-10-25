// The Roots — A2.01 « Remise à niveau » : parcours par thème (erreurs du bilan → règle autrement → compris ? → texte à trous → exercices → mini-test).
// Question = [énoncé, bonne réponse, faux 1, faux 2, explication] (même format que a2-bilan.js).
export const REMISE = {
  ps: {
    // Erreurs classiques : complètent la liste quand l'élève en a moins de 4 au bilan.
    fallback: [
      ["She work in a bank.", "She works in a bank.", "le « s » oublié", "He / she / it → on ajoute s au verbe."],
      ["Does he works?", "Does he work?", "does + verbe avec s", "Après does, le verbe reste sans s : le « s » est déjà dans does."],
      ["I doesn’t like fish.", "I don’t like fish.", "mauvais auxiliaire", "I / you / we / they → don’t. He / she / it → doesn’t."],
      ["My brother play football.", "My brother plays football.", "un nom = he / she / it", "« My brother » = he. Donc le verbe prend un s."]
    ],
    lesson: {
      title: "Un seul groupe prend un « s »",
      no: ["I work", "you work", "we work", "they work"],
      yes: ["he work|s", "she work|s", "it work|s"],
      tip: "Pense « HE · SHE · IT = S ». Les 3 mots qui prennent un s.",
      neg: ["I **don’t** work", "she **doesn’t** work"],
      qst: ["**Do** you work?", "**Does** she work?"],
      gold: "Après does / doesn’t, le verbe n’a jamais de s. Un seul « s » par phrase.",
      say: ["She works in a bank.", "He doesn’t work on Sunday.", "Does it work?"]
    },
    compris: [
      ["Quelle phrase est correcte ?", "Does she work here?", "Does she works here?", "Do she work here?", "she → Does, et le verbe reste sans s."],
      ["Quel mot prend un « s » au verbe ?", "she", "they", "we", "Seuls he, she, it prennent un s."],
      ["He ___ like fish. (négatif)", "doesn’t", "don’t", "isn’t", "he → doesn’t."],
      ["My brother ___ football. (play)", "plays", "play", "is play", "my brother = he → plays."],
      ["Après « does », le verbe est…", "sans s", "avec s", "avec -ing", "Après does : le verbe de base, sans s."],
      ["They ___ in Paris. (live)", "live", "lives", "are live", "they → pas de s."]
    ],
    cloze: [
      ["Avec I, you, we, they, le verbe ne change ___.", "pas", "souvent", "jamais", "Pas de s : I work, they work."],
      ["Avec he, she, it, j’ajoute un ___ au verbe.", "s", "es", "ed", "she works, he plays."],
      ["Pour dire non avec he / she / it, j’écris ___ + verbe.", "doesn’t", "don’t", "isn’t", "she doesn’t work."],
      ["Pour dire non avec I / you / we / they, j’écris ___ + verbe.", "don’t", "doesn’t", "aren’t", "they don’t work."],
      ["Pour poser une question avec she, je commence par ___.", "Does", "Do", "Is", "Does she work ?"],
      ["Après does, le verbe n’a ___ de s.", "jamais", "toujours", "parfois", "Does she work ? (work, pas works)"]
    ],
    ex2: [
      ["Our teacher ___ English very well.", "speaks", "speak", "is speak", "teacher = she → speaks."],
      ["We ___ eat meat.", "don’t", "doesn’t", "aren’t", "we → don’t."],
      ["___ your brother play tennis?", "Does", "Do", "Is", "brother = he → Does."],
      ["It ___ rain in July.", "doesn’t", "don’t", "isn’t", "it → doesn’t."],
      ["Maria ___ up at six.", "gets", "get", "is get", "Maria = she → gets."],
      ["Where ___ they live?", "do", "does", "are", "they → do."]
    ]
  }
};
