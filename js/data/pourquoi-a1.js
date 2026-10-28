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

// Conjugaison : même idée, en 1re page de la conjugaison de la leçon où le temps / la structure apparaît pour la première fois.
export const WHY_CONJ_A1 = {
  "A1.1": {
    title: "Le présent : to be et to have",
    intro: "Be (être) et have (avoir) sont les deux verbes de base : tu les utilises pour dire qui tu es, où tu es, ton âge et ce que tu as. On les trouve dans presque toutes les phrases.",
    uses: [
      ["Qui / où tu es", "I am at school.", "Je suis à l’école."],
      ["Ton âge", "I am twenty years old.", "J’ai vingt ans."],
      ["Ce que tu as", "I have a brother.", "J’ai un frère."]
    ],
    marks: "Mots repères : I am, you are, he is · I have, he has.",
    watch: "L’âge se dit avec be en anglais (I am twenty), alors qu’on utilise avoir en français. Avec he, she, it : is et has."
  },
  "A1.2": {
    title: "Have got : dire ce qu’on a",
    intro: "Have got dit ce que tu possèdes ou qui fait partie de ta vie : ta famille, tes animaux, ta maison. On l’utilise beaucoup à l’oral pour parler de sa famille.",
    uses: [
      ["Ta famille", "I have got a brother.", "J’ai un frère."],
      ["Ce que tu possèdes", "We have got a big house.", "Nous avons une grande maison."],
      ["Décrire quelqu’un (be)", "My sister is friendly.", "Ma sœur est sympa."]
    ],
    marks: "Mots repères : have got / has got · haven’t got / hasn’t got.",
    watch: "Avec he, she, it : has got. Question : Have you got… ? / Has she got… ? (on inverse, sans do)."
  },
  "A1.3": {
    title: "Le présent simple",
    intro: "On conjugue au présent simple pour dire ce qui est vrai en général ou ce qui se répète : ce que tu fais avec tes amis, ce que vous faites ensemble.",
    uses: [
      ["Une habitude", "We play football on Saturday.", "Nous jouons au football le samedi."],
      ["Une activité partagée", "She meets new friends.", "Elle rencontre de nouveaux amis."],
      ["Ce qu’on fait souvent", "They chat online.", "Ils discutent en ligne."]
    ],
    marks: "Mots repères : every day, always, usually, never.",
    watch: "Avec he, she, it, le verbe prend un s : she plays. Négatif : don’t / doesn’t. Question : Do / Does."
  },
  "A1.8": {
    title: "Le présent continu",
    intro: "On l’utilise pour dire ce qui se passe maintenant, en ce moment, pendant que tu parles : où tu es, ce que tu attends, ce que tu fais là.",
    uses: [
      ["Maintenant", "I am waiting for the bus.", "J’attends le bus (en ce moment)."],
      ["En train de faire", "She is running to the bus.", "Elle est en train de courir vers le bus."],
      ["Habitude ou maintenant ?", "I wait every day. I am waiting now.", "J’attends tous les jours. J’attends maintenant."]
    ],
    marks: "Mots repères : now, right now, at the moment, today.",
    watch: "Forme : am / is / are + verbe-ing. Pas de -ing avec les verbes d’état (understand, know, like) : on dit I understand."
  },
  "A1.9": {
    title: "Going to : les projets",
    intro: "On l’utilise pour dire ce que tu as décidé de faire bientôt : un voyage, une réservation, un départ. Le projet existe déjà dans ta tête.",
    uses: [
      ["Un voyage prévu", "I am going to travel by train.", "Je vais voyager en train."],
      ["Une réservation", "She is going to book a room.", "Elle va réserver une chambre."],
      ["Un départ proche", "We are going to leave at nine.", "Nous allons partir à neuf heures."]
    ],
    marks: "Mots repères : tomorrow, next week, tonight, soon.",
    watch: "Forme : am / is / are + going to + verbe (sans -s, sans -ing). I am going to the station (lieu) ≠ I am going to leave (projet)."
  }
};
