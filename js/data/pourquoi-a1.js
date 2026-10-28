// The Roots — « Pourquoi on l'utilise ? » : une page d'explication avant la règle, pour les pages de grammaire A1 qui portent sur un temps ou une structure.
// WHY_A1[code de leçon][titre de la page de grammaire] = { intro, uses: [[ce que ça dit, exemple EN, exemple FR]], marks, watch }
export const WHY_A1 = {
  "A1.1": {
    "Le verbe to be (au présent)": {
      intro: "Be (être) sert à dire qui tu es, où tu es, ton âge et comment tu vas. C’est le verbe le plus utilisé : on le trouve presque partout.",
      uses: [
        ["Qui tu es", "I am Ana.", "Je suis Ana."],
        ["Où tu es", "She is at school.", "Elle est à l’école."],
        ["Ton âge", "I am twenty.", "J’ai vingt ans."]
      ],
      marks: "Mots repères : I am, you are, he / she / it is, we / they are.",
      watch: "L’âge se dit avec be : I am twenty (jamais I have twenty)."
    },
    "Le verbe to have": {
      intro: "Have (avoir) sert à dire ce que tu as : une famille, un animal, un objet. Pour une personne seule (he, she, it), on dit has.",
      uses: [
        ["Ta famille", "I have a brother.", "J’ai un frère."],
        ["Un animal", "We have a dog.", "Nous avons un chien."],
        ["Un objet", "She has a phone.", "Elle a un téléphone."]
      ],
      marks: "Mots repères : I have, you have, he / she has.",
      watch: "Pas de s sur have sauf he / she / it : has (jamais haves)."
    }
  },
  "A1.2": {
    "There is / There are": {
      intro: "There is / there are sert à dire ce qu’il y a quelque part : une chose (is) ou plusieurs (are). On l’utilise pour décrire une pièce, une rue, une ville.",
      uses: [
        ["Une chose", "There is a table in the kitchen.", "Il y a une table dans la cuisine."],
        ["Plusieurs choses", "There are two chairs.", "Il y a deux chaises."],
        ["Négatif", "There isn’t a sofa.", "Il n’y a pas de canapé."]
      ],
      marks: "Mots repères : there is + un seul · there are + plusieurs.",
      watch: "On ne dit pas It has : en anglais, il y a = there is / there are."
    },
    "Have got / has got": {
      intro: "Have got dit ce que tu possèdes, surtout à l’oral : ta famille, ta maison, tes animaux. C’est un synonyme de have.",
      uses: [
        ["Ta famille", "I have got a sister.", "J’ai une sœur."],
        ["Ta maison", "We have got a garden.", "Nous avons un jardin."],
        ["Une personne", "She has got a dog.", "Elle a un chien."]
      ],
      marks: "Mots repères : have got / has got · haven’t got / hasn’t got.",
      watch: "Question : Have you got… ? (on inverse, sans do)."
    }
  },
  "A1.4": {
    "L'impératif": {
      intro: "L’impératif sert à donner un ordre, un conseil ou une indication : demander ton chemin, indiquer une direction, dire à quelqu’un quoi faire.",
      uses: [
        ["Une direction", "Turn left.", "Tourne à gauche."],
        ["Un conseil", "Take the bus.", "Prends le bus."],
        ["Défendre", "Don’t turn right.", "Ne tourne pas à droite."]
      ],
      marks: "Mots repères : go, turn, take, cross · please.",
      watch: "Pas de sujet : on dit Turn left (jamais You turn left). Pour défendre : don’t + verbe."
    }
  },
  "A1.5": {
    "Like / love / hate + -ing": {
      intro: "Pour dire ce que tu aimes ou détestes faire, on utilise like, love ou hate. C’est déjà le verbe conjugué : le 2ᵉ verbe devient le nom de l’activité, avec -ing.",
      uses: [
        ["J’aime", "I like swimming.", "J’aime nager."],
        ["J’adore", "She loves dancing.", "Elle adore danser."],
        ["Je déteste", "We hate waiting.", "Nous détestons attendre."]
      ],
      marks: "Mots repères : like, love, hate + verbe-ing.",
      watch: "Seul like se conjugue : he likes swimming. Jamais I like swim."
    }
  },
  "A1.6": {
    "I'd like et I want": {
      intro: "I’d like (je voudrais) sert à demander poliment, par exemple au restaurant. I want (je veux) est plus direct : on l’évite avec des inconnus.",
      uses: [
        ["Commander", "I’d like a coffee, please.", "Je voudrais un café, s’il vous plaît."],
        ["Direct", "I want a coffee.", "Je veux un café."],
        ["Proposer", "Would you like some tea?", "Voulez-vous du thé ?"]
      ],
      marks: "Mots repères : I’d like, would you like, please.",
      watch: "I’d = I would. Après I’d like : un nom (I’d like a tea) ou to + verbe (I’d like to sit)."
    }
  },
  "A1.8": {
    "Le présent continu : formation": {
      intro: "Le présent continu sert à dire ce qui se passe maintenant, en ce moment, pendant que tu parles. Tu l’utilises pour dire ce que tu fais là.",
      uses: [
        ["Maintenant", "I am waiting for the bus.", "J’attends le bus (maintenant)."],
        ["En train de faire", "She is running.", "Elle est en train de courir."],
        ["Plusieurs personnes", "They are talking.", "Ils sont en train de parler."]
      ],
      marks: "Mots repères : now, right now, at the moment.",
      watch: "Forme : am / is / are + verbe-ing. Pas de -ing avec know, like, understand."
    }
  },
  "A1.9": {
    "Going to : les projets": {
      intro: "Going to sert à dire ce que tu as décidé de faire bientôt. Le projet existe déjà dans ta tête : un voyage, un départ, une réservation.",
      uses: [
        ["Un projet", "I am going to travel.", "Je vais voyager."],
        ["Une réservation", "She is going to book a room.", "Elle va réserver une chambre."],
        ["Un départ proche", "We are going to leave at nine.", "Nous allons partir à neuf heures."]
      ],
      marks: "Mots repères : tomorrow, next week, tonight, soon.",
      watch: "Forme : am / is / are + going to + verbe (sans -s, sans -ing)."
    },
    "Would like : demander poliment": {
      intro: "Would like sert à demander ou à proposer quelque chose de façon polie : à l’hôtel, au restaurant, à la réception.",
      uses: [
        ["Demander", "I would like a room.", "Je voudrais une chambre."],
        ["Proposer", "Would you like breakfast?", "Voulez-vous le petit déjeuner ?"],
        ["Dire son souhait", "We would like to stay two nights.", "Nous voudrions rester deux nuits."]
      ],
      marks: "Mots repères : would like, would you like, please.",
      watch: "Pas de -s : she would like (jamais she woulds like)."
    }
  },
  "A1.10": {
    "Prépositions de temps : at / on / in": {
      intro: "On utilise at, on ou in pour dire quand quelque chose arrive. Le choix dépend de la taille du moment : une heure, un jour, une période.",
      uses: [
        ["At : une heure précise", "I start at nine.", "Je commence à neuf heures."],
        ["On : un jour", "We rest on Sunday.", "Nous nous reposons le dimanche."],
        ["In : une période", "She works in the morning.", "Elle travaille le matin."]
      ],
      marks: "At + heure · on + jour · in + mois, saison, matin, année.",
      watch: "Exceptions : at night, at the weekend. On dit in the morning mais on Monday morning."
    }
  },
  "A1.3": {
    "Can / can’t : ce que je sais faire": {
      intro: "Can dit ce que tu sais faire ou ce que tu peux faire : un talent, une capacité, une possibilité. Le verbe qui suit ne change jamais.",
      uses: [
        ["Un talent", "I can swim.", "Je sais nager."],
        ["Une langue", "She can speak English.", "Elle parle anglais."],
        ["Ce que tu ne sais pas", "I can’t dance.", "Je ne sais pas danser."]
      ],
      marks: "Mots repères : can, can’t, Can you… ?",
      watch: "Jamais de -s ni de to après can : she can swim (pas she cans, pas can to swim)."
    },
    "Can I… ? Can you… ? : demander": {
      intro: "Can I… ? sert à demander la permission. Can you… ? sert à demander un service. Ce sont les phrases de tous les jours pour demander poliment.",
      uses: [
        ["Une permission", "Can I sit here?", "Je peux m’asseoir ici ?"],
        ["Un service", "Can you help me, please?", "Tu peux m’aider, s’il te plaît ?"],
        ["Répondre", "Sure. / Sorry, I can’t.", "Bien sûr. / Désolé, je ne peux pas."]
      ],
      marks: "Mots repères : Can I… ? Can you… ? please, sure.",
      watch: "On ne dit pas Do you can… ? : on inverse directement Can you… ?"
    },
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
  "A2.11": { title: "Après le verbe : -ing ou to ?", intro: "Dans chaque phrase, le 1er verbe est conjugué (like, want…). C’est lui qui décide de la forme du 2ᵉ verbe : -ing (gérondif) ou to + verbe.", uses: [["Goût, habitude → -ing", "I like reading books.", "J’aime lire des livres."], ["Projet, envie → to", "I want to see that film.", "Je veux voir ce film."], ["Le 1er verbe se conjugue", "She likes reading. She doesn’t like reading.", "Elle aime lire. Elle n’aime pas lire."]], marks: "like, love, hate + -ing · want, decide, plan + to.", watch: "Seul le 1er verbe prend -s ou don’t / doesn’t. Le 2ᵉ verbe ne change pas." },
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
    "Want, decide, plan, hope + to": {
      title: "Comment savoir : -ing ou to ?",
      intro: "Regarde toujours le 1er verbe : c’est lui qui décide. Chaque verbe s’apprend avec sa structure, comme un mot de vocabulaire.",
      uses: [
        ["Goût, habitude → -ing", "I like reading. I hate waiting.", "J’aime lire. Je déteste attendre."],
        ["Projet, envie, décision → to", "I want to see it. I decided to stay.", "Je veux le voir. J’ai décidé de rester."],
        ["Après une préposition → -ing", "I’m interested in learning.", "Je m’intéresse à apprendre."]
      ],
      marks: "like, love, hate, enjoy + -ing · want, decide, plan, hope + to.",
      watch: "Un doute ? Pense au sens : une chose que tu fais d’habitude (-ing) ou une chose que tu veux faire (to)."
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
