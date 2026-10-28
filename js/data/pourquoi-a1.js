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

export const WHY_CONJ_A2 = {
  "A2.1": { title: "Présent simple ou continu ?", intro: "Le présent simple dit ce que tu fais d’habitude. Le présent continu dit ce que tu fais en ce moment. Choisis selon la situation : habitude ou action en cours ?", uses: [["Habitude", "She wakes the baby at seven.", "Elle réveille le bébé à sept heures."], ["En ce moment", "She is waking the baby now.", "Elle est en train de réveiller le bébé."], ["Contraste", "I iron on Sunday. I am ironing now.", "Je repasse le dimanche. Je repasse maintenant."]], marks: "Mots repères : every day, usually · now, at the moment.", watch: "Verbes d’état (know, like, own) : jamais de -ing." },
  "A2.2": { title: "Le past simple et used to", intro: "Le past simple raconte une action finie à un moment du passé. Used to dit une habitude qui n’existe plus.", uses: [["Action finie", "I collected stamps last year.", "J’ai collectionné des timbres l’an dernier."], ["Verbe irrégulier", "He built a snowman yesterday.", "Il a construit un bonhomme de neige hier."], ["Habitude passée", "I used to swim in the sea.", "Avant, je nageais dans la mer."]], marks: "Mots repères : yesterday, last week, ago · when I was a child.", watch: "Négatif et question : did + verbe de base (didn’t collect, Did you collect ?). Used to : jamais de -s." },
  "A2.3": { title: "Le past continuous", intro: "Il dit ce qui était en cours à un moment du passé, souvent quand une autre action est arrivée : ce que tu faisais quand quelque chose s’est passé.", uses: [["En cours dans le passé", "I was falling asleep.", "J’étais en train de m’endormir."], ["Interrompu", "She was shouting when he knocked.", "Elle criait quand il a frappé."], ["Contraste", "He broke a glass. He was cleaning.", "Il a cassé un verre. Il nettoyait."]], marks: "Mots repères : while, when, at six o’clock yesterday.", watch: "Forme : was / were + verbe-ing. L’action courte et finie reste au past simple." },
  "A2.4": { title: "Parler du futur : will, going to, présent continu", intro: "Going to : un projet décidé. Will : une décision sur le moment ou une prévision. Présent continu : un rendez-vous déjà organisé.", uses: [["Projet", "I am going to apply for a job.", "Je vais postuler à un poste."], ["Décision / prévision", "I will save money.", "J’économiserai de l’argent."], ["Organisé", "I am moving to London in May.", "Je déménage à Londres en mai."]], marks: "Mots repères : tomorrow, next year, in May, soon.", watch: "Will + verbe de base, sans -s : she will win. Won’t = will not." },
  "A2.6": { title: "Les modaux : should, have to, must", intro: "Should donne un conseil. Have to dit une obligation qui vient des règles ou de la situation. Must dit une obligation forte, ou, au négatif, une interdiction.", uses: [["Conseil", "You should sleep more.", "Tu devrais dormir plus."], ["Obligation", "She has to swallow the pill.", "Elle doit avaler le comprimé."], ["Forte / interdiction", "You mustn’t lift weights.", "Tu ne dois pas soulever de poids."]], marks: "Mots repères : should, have to, must, mustn’t.", watch: "Should et must : verbe de base, jamais de -s, jamais de to. Don’t have to = pas obligé (≠ mustn’t = interdit)." },
  "A2.10": { title: "Would like to : proposer et inviter", intro: "Would like to est la façon polie de dire ce que tu veux faire ou de proposer quelque chose à quelqu’un.", uses: [["Ton souhait", "I would like to celebrate my birthday.", "Je voudrais fêter mon anniversaire."], ["Inviter", "Would you like to accept the invitation?", "Voudrais-tu accepter l’invitation ?"], ["Refuser poliment", "I wouldn’t like to refuse the offer.", "Je ne voudrais pas refuser l’offre."]], marks: "Mots repères : would like to, Shall we…?, Why don’t we…?", watch: "Would like to + verbe de base, sans -s : she would like to thank the guests." }
};

// Grammaire A2 : pages « Pourquoi » avant une règle (clé = code de leçon puis titre de la page de grammaire). Une ligne qui commence par ✗ est fausse : pas d'audio.
export const WHY_A2 = {
  "A2.11": {
    "Like, love, hate, enjoy + -ing": {
      title: "Le gérondif : pourquoi -ing après I like ?",
      intro: "Dans « I like swimming », like est déjà le verbe conjugué. Le 2ᵉ verbe ne peut plus l’être : il devient le nom de l’activité, avec -ing. C’est le gérondif.",
      uses: [
        ["✗ Deux verbes à la suite", "I like swim", "Faux : like est déjà conjugué."],
        ["✓ Le 2ᵉ verbe prend -ing", "I like swimming.", "J’aime nager."],
        ["✓ Même chose", "I like dancing, skipping rope, driving.", "J’aime danser, sauter à la corde, conduire."]
      ],
      marks: "À retenir : I like (verbe conjugué) + verbe-ing (gérondif).",
      watch: "Seul like se conjugue : he likes dancing. Pas le gérondif français (en nageant)."
    },
    "-ing ou to : le sens": {
      title: "I like swimming ou I’d like to swim ?",
      intro: "Dans les deux cas, le 1er verbe est conjugué (like, would like). Le 2ᵉ change de forme selon le sens.",
      uses: [
        ["Goût général : like + -ing", "I like swimming.", "J’aime nager, en général."],
        ["✗ Pas pour aujourd’hui", "I like to swim today", "Faux : today = moment précis, like = goût général."],
        ["Envie du moment : would like + to", "I’d like to swim today.", "J’aimerais nager aujourd’hui."],
        ["✗ Pas de -ing ici", "I’d like swimming", "Faux : would like → to + verbe."]
      ],
      marks: "Goût → like + -ing · Envie → would like + to.",
      watch: "I like to swim existe aussi (un choix). Retiens la règle."
    }
  }
};
