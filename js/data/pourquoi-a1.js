// The Roots — « Pourquoi on l'utilise ? » : une page d'explication avant la règle, pour les pages de grammaire A1 qui portent sur un temps ou une structure.
// WHY_A1[code de leçon][titre de la page de grammaire] = { intro, uses: [[ce que ça dit, exemple EN, exemple FR]], marks, watch }
export const WHY_A1 = {
  "A1.3": {
    "Le présent simple : he / she / it": {
      intro: "Il dit ce qui est vrai en général ou ce qui se répète. Demande-toi : « ça arrive souvent, ou tout le temps ? » Si oui, c’est le présent simple.",
      uses: [
        ["Une habitude", "I play tennis on Monday.", "Je joue au tennis le lundi."],
        ["Un fait, un état", "She lives in Paris.", "Elle habite à Paris."],
        ["Un goût", "He likes coffee.", "Il aime le café."]
      ],
      marks: "Mots repères : every day, always, usually, often, never, on Mondays.",
      watch: "Avec he, she, it (une seule personne), le verbe prend un s : she plays. Si l’action se passe maintenant (now), ce n’est pas ce temps : tu le verras plus tard."
    }
  }
};

// Conjugaison : même idée, en 1re page de la conjugaison de la leçon où le présent simple est conjugué pour la première fois.
export const WHY_CONJ_A1 = {
  "A1.1": {
    title: "Le présent simple",
    intro: "On conjugue au présent simple pour dire ce qui est vrai en général ou ce qui se répète : où tu habites, ce que tu parles, d’où tu viens.",
    uses: [
      ["Où tu habites", "I live in Paris.", "J’habite à Paris."],
      ["Ce que tu parles", "She speaks English.", "Elle parle anglais."],
      ["D’où tu viens", "We come from Spain.", "Nous venons d’Espagne."]
    ],
    marks: "Mots repères : every day, always, usually, never.",
    watch: "Avec he, she, it, le verbe prend un s : he lives. Négatif : don’t / doesn’t. Question : Do / Does."
  }
};
