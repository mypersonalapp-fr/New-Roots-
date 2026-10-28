// The Roots — B0 « Passerelle » : 7 étapes de 10 questions + bilan de 10 questions.
// Chaque question : [énoncé, [bonne réponse en 1er, fausses réponses…], explication, type?]  (type : "free" = à écrire, "speak" = à dire)
// La bonne réponse est toujours en 1er dans ce fichier ; l'écran la mélange.
export const B0_STEPS = (() => {
const P = [];
P[1] = { title: "Questions de cours : les règles de grammaire", intro: "Réponds aux questions sur les règles de grammaire de A1 et A2.", qs: [
  ["Avec quels sujets utilise-t-on « does » au présent simple ?", ["He, she, it", "I, you, we, they", "Tous les sujets"], "He does not work. Does va avec he, she, it."],
  ["Complète : « She ___ two brothers. »", ["has", "have", "haves"], "Have got / have : avec he, she, it on dit has."],
  ["Après « does not », le verbe est…", ["à l'infinitif, sans -s (he does not work)", "avec un -s (he does not works)", "au passé (he does not worked)"], "Does porte déjà la marque de la 3e personne : le verbe reste simple."],
  ["Complète : « There ___ three books on the table. »", ["are", "is", "be"], "There is + singulier, there are + pluriel."],
  ["Quel article devant « apple » ?", ["an", "a", "the"], "An devant un son voyelle : an apple, an hour."],
  ["Quel est le pluriel de « child » ?", ["children", "childs", "childes"], "Pluriel irrégulier : child, children."],
  ["Où place-t-on l'adjectif en anglais ?", ["Avant le nom (a red car)", "Après le nom (a car red)", "Au choix"], "L'adjectif est toujours avant le nom et ne prend pas de -s."],
  ["Après « can », le verbe est…", ["à l'infinitif sans to (I can swim)", "avec to (I can to swim)", "avec -ing (I can swimming)"], "Can + base verbale, pour tous les sujets."],
  ["Quelles prépositions : « ___ Monday, ___ 8 o'clock, ___ July » ?", ["on, at, in", "in, on, at", "at, in, on"], "On + jour, at + heure, in + mois."],
  ["Après « like, love, hate », le verbe prend…", ["-ing (I like swimming)", "to seulement", "rien du tout (I like swim)"], "Like / love / hate + -ing pour parler de ce qu'on aime."],
  ["Comment dit-on « Il y a un chat » ?", ["There is a cat.", "There are a cat.", "It has a cat."], "There is + singulier ; there are + pluriel."],
  ["Quelle phrase est correcte avec « should » ?", ["You should drink more water.", "You should to drink more water.", "You should drinking more water."], "Should + base verbale, sans to, comme can et must."]
]};
P[2] = { title: "Les temps : quand les utiliser", intro: "Pour chaque phrase, choisis le temps utilisé.", qs: [
  ["« Every day, I walk to work. »", ["Présent simple (habitude)", "Présent continu", "Passé simple"], "Every day = habitude, donc présent simple."],
  ["« Right now, she is cooking. »", ["Présent continu (en ce moment)", "Présent simple", "Going to"], "Right now = en ce moment : am/is/are + -ing."],
  ["« Last year, we moved to Lyon. »", ["Passé simple", "Présent continu", "Will"], "Last year = passé fini, donc passé simple."],
  ["« Tomorrow, I am going to call him. »", ["Going to (plan)", "Présent simple", "Passé simple"], "Going to = projet déjà décidé."],
  ["« I think it will rain tonight. »", ["Will (prédiction)", "Présent continu", "Passé simple"], "Will = prédiction ou décision sur le moment."],
  ["« At 8 yesterday, I was cooking. »", ["Passé continu (action en cours dans le passé)", "Passé simple", "Présent continu"], "Was / were + -ing : une action en cours à un moment du passé."],
  ["« If it rains, we will stay home. » Quelle structure ?", ["If + présent, will + verbe", "If + will, présent", "If + passé, will + verbe"], "Condition possible : if + présent simple, will + base verbale."],
  ["« I used to play tennis when I was a child. »", ["Used to (habitude passée terminée)", "Présent simple", "Going to"], "Used to = une habitude du passé qui n'existe plus."],
  ["Quel mot annonce le passé simple ?", ["yesterday", "at the moment", "tomorrow"], "Yesterday, last week, ago : passé simple."],
  ["Quel mot annonce le présent continu ?", ["at the moment", "every day", "last week"], "At the moment, now, right now : présent continu."],
  ["« She was sleeping when I called. » Quels temps ?", ["Passé continu + passé simple", "Présent continu + présent simple", "Going to + will"], "Was sleeping = action en cours ; called = action qui l'interrompt."],
  ["« We are going to travel next month. » Pourquoi going to ?", ["C'est un projet déjà décidé", "C'est une habitude", "C'est une action finie"], "Going to = plan déjà décidé."]
]};
P[3] = { title: "Exercices sur les temps", intro: "Choisis la bonne forme du verbe.", qs: [
  ["She ___ (work) in a bank every day.", ["works", "work", "is working"], "Habitude + she : works."],
  ["They ___ (play) football now.", ["are playing", "play", "played"], "Now : are playing."],
  ["I ___ (not like) coffee.", ["don't like", "doesn't like", "am not like"], "I + présent simple négatif : don't like."],
  ["Yesterday he ___ (go) to Paris.", ["went", "goed", "goes"], "Go est irrégulier : went."],
  ["We ___ (see) a film last night.", ["saw", "seen", "seed"], "See est irrégulier : saw."],
  ["___ you ___ (watch) TV at 9 last night ?", ["Were / watching", "Did / watching", "Are / watching"], "Passé continu : were you watching ?"],
  ["Next week, I ___ (visit) my aunt. C'est un projet.", ["am going to visit", "visited", "visits"], "Projet : am going to + base verbale."],
  ["If you study, you ___ (pass).", ["will pass", "pass", "passed"], "If + présent, will + base verbale."],
  ["Corrige : « He don't like fish. »", ["He doesn't like fish.", "He not like fish.", "He don't likes fish."], "He/she/it : doesn't + base verbale."],
  ["Corrige : « I am go to the cinema tomorrow. »", ["I am going to go to the cinema tomorrow.", "I am go to the cinema tomorrow.", "I going to the cinema go tomorrow."], "Going to + base verbale : am going to go."],
  ["She ___ (not go) to school yesterday.", ["didn't go", "doesn't go", "didn't went"], "Passé simple négatif : didn't + base verbale."],
  ["I ___ (cook) when the phone rang.", ["was cooking", "am cooking", "cooked"], "Action en cours dans le passé : was cooking."]
]};
const A = "Hi Anna, it's Tom. I can't come on Friday because I'm working late. But on Saturday I'm going to visit my sister in Lyon. She's moving to a new flat. Can you call me tonight after eight? Thanks, bye!";
const B = "Attention please. The train to Bordeaux is delayed by twenty minutes. It will leave from platform 4 at 10:35, not at 10:15. If you have a ticket for this train, please wait on the platform. We are sorry for the delay.";
P[4] = { title: "Compréhension orale", intro: "Écoute l'audio (aussi souvent que tu veux), puis réponds.", qs: [
  ["Audio 1 : pourquoi Tom ne vient-il pas vendredi ?", ["Il travaille tard", "Il est malade", "Il voyage"], "« I'm working late »."],
  ["Audio 1 : que fait Tom samedi ?", ["Il voit sa sœur", "Il travaille", "Il reste chez lui"], "« I'm going to visit my sister »."],
  ["Audio 1 : où habite sa sœur ?", ["À Lyon", "À Paris", "À Nice"], "« my sister in Lyon »."],
  ["Audio 1 : pourquoi sa sœur est-elle occupée ?", ["Elle déménage", "Elle travaille", "Elle part en vacances"], "« She's moving to a new flat »."],
  ["Audio 1 : quand Anna doit-elle rappeler ?", ["Ce soir, après 20 h", "Demain matin", "Samedi"], "« tonight after eight »."],
  ["Audio 1 : comment Tom termine-t-il son message ?", ["Il remercie et dit au revoir", "Il invite Anna", "Il annule le rendez-vous"], "« Thanks, bye! »."],
  ["Audio 2 : quel est le retard du train ?", ["20 minutes", "10 minutes", "40 minutes"], "« delayed by twenty minutes »."],
  ["Audio 2 : quelle est la destination ?", ["Bordeaux", "Bruxelles", "Brest"], "« The train to Bordeaux »."],
  ["Audio 2 : de quel quai part le train ?", ["Quai 4", "Quai 14", "Quai 10"], "« platform 4 »."],
  ["Audio 2 : à quelle heure part le train ?", ["10 h 35", "10 h 15", "10 h 50"], "« at 10:35, not at 10:15 »."],
  ["Audio 2 : que doivent faire les voyageurs ?", ["Attendre sur le quai", "Aller au guichet", "Prendre un taxi"], "« please wait on the platform »."],
  ["Audio 2 : comment l'annonce se termine-t-elle ?", ["Elle s'excuse du retard", "Elle annonce un remboursement", "Elle annonce la fin du service"], "« We are sorry for the delay »."]
], ctx: (i) => i < 6 ? { k: "audio", t: "Audio 1 · message vocal (0:20)", x: A } : { k: "audio", t: "Audio 2 · annonce en gare (0:18)", x: B } };
const C = "Hi Anna, I work on Monday and Tuesday, but I'm free on Wednesday. Last weekend I went to the sea with my friends. We swam and played volleyball. Next month I'm going to start a new job in Nantes. Do you want to have lunch on Wednesday? Ben";
const D = "Breakfast is served from 7 to 10 a.m. in the restaurant. The pool is open every day, but it is closed on Mondays for cleaning. If you need a taxi, please ask at reception. Guests must leave their room before 11 a.m. on the last day.";
P[5] = { title: "Compréhension écrite", intro: "Lis le texte, puis réponds.", qs: [
  ["Texte 1 : quel jour Ben est-il libre ?", ["Mercredi", "Lundi", "Mardi"], "« I'm free on Wednesday »."],
  ["Texte 1 : qu'a-t-il fait le week-end dernier ?", ["Il est allé à la mer", "Il a travaillé", "Il a visité Nantes"], "« Last weekend I went to the sea »."],
  ["Texte 1 : que va-t-il faire le mois prochain ?", ["Commencer un nouveau travail", "Partir en vacances", "Déménager"], "« I'm going to start a new job »."],
  ["Texte 1 : dans quelle ville ?", ["Nantes", "Nice", "Nancy"], "« a new job in Nantes »."],
  ["Texte 1 : que propose Ben ?", ["Déjeuner mercredi", "Dîner lundi", "Un week-end à la mer"], "« lunch on Wednesday »."],
  ["Texte 1 : qu'ont fait Ben et ses amis à la mer ?", ["Ils ont nagé et joué au volley", "Ils ont visité un musée", "Ils ont mangé au restaurant"], "« We swam and played volleyball »."],
  ["Texte 2 : à quelle heure est le petit-déjeuner ?", ["De 7 h à 10 h", "De 8 h à 11 h", "De 6 h à 9 h"], "« from 7 to 10 a.m. »."],
  ["Texte 2 : quand la piscine est-elle fermée ?", ["Le lundi", "Le dimanche", "Jamais"], "« closed on Mondays »."],
  ["Texte 2 : où demander un taxi ?", ["À la réception", "Au restaurant", "À la piscine"], "« ask at reception »."],
  ["Texte 2 : avant quelle heure quitter la chambre ?", ["11 h", "10 h", "12 h"], "« before 11 a.m. »."],
  ["Texte 2 : où prend-on le petit-déjeuner ?", ["Au restaurant", "Dans la chambre", "À la piscine"], "« in the restaurant »."],
  ["Texte 2 : pourquoi la piscine est-elle fermée le lundi ?", ["Pour le nettoyage", "Pour une fête", "Pour des travaux"], "« closed on Mondays for cleaning »."]
], ctx: (i) => i < 6 ? { k: "text", t: "Texte 1 · message de Ben", x: C } : { k: "text", t: "Texte 2 · hôtel Rivage", x: D } };
P[6] = { title: "Expression écrite", intro: "Remets dans l'ordre, corrige, puis écris toi-même.", qs: [
  ["Remets dans l'ordre : I / get up / at seven / every day", ["I get up at seven every day.", "Every day I at seven get up.", "I at seven get up every day."], "Sujet + verbe + lieu/heure + fréquence."],
  ["Remets dans l'ordre : she / is / reading / a book / now", ["She is reading a book now.", "She reading is a book now.", "Now she a book is reading."], "Sujet + am/is/are + verbe-ing + complément."],
  ["Remets dans l'ordre : we / went / to the park / yesterday", ["We went to the park yesterday.", "We to the park went yesterday.", "Yesterday went we to the park."], "Sujet + verbe au passé + complément."],
  ["Corrige : « He go to school every day. »", ["He goes to school every day.", "He going to school every day.", "He go to the school every day."], "He/she/it + verbe avec -s."],
  ["Corrige : « She don't have a car. »", ["She doesn't have a car.", "She not have a car.", "She don't has a car."], "She : doesn't + base verbale."],
  ["Corrige : « I am agree with you. »", ["I agree with you.", "I am agreeing with you.", "I agrees with you."], "Agree est un verbe : pas de to be."],
  ["Corrige : « There is three apples. »", ["There are three apples.", "There be three apples.", "There is three apple."], "Pluriel : there are."],
  ["Corrige : « Yesterday I go to the cinema. »", ["Yesterday I went to the cinema.", "Yesterday I going to the cinema.", "Yesterday I goes to the cinema."], "Yesterday : passé simple, went."],
  ["Corrige : « She can to swim. »", ["She can swim.", "She cans swim.", "She can swimming."], "Can + base verbale, sans to, sans -s."],
  ["Remets dans l'ordre : they / are / playing / football / now", ["They are playing football now.", "They playing are football now.", "Now football they are playing."], "Sujet + are + verbe-ing + complément."],
  ["Écris 3 phrases : ce que tu fais chaque matin.", ["I get up at seven. I have breakfast and I take the bus. I start work at nine."], "Exemple de réponse. Utilise le présent simple.", "free"],
  ["Écris 3 phrases : ce que tu as fait le week-end dernier.", ["Last weekend I visited my parents. We cooked lunch together. On Sunday I watched a film."], "Exemple de réponse. Utilise le passé simple.", "free"]
]};
P[7] = { title: "Expression orale", intro: "Choisis la bonne réponse à dire à voix haute, répète, puis parle.", qs: [
  ["« What do you do every morning ? »", ["I get up at six and I drink coffee.", "I am get up every morning.", "I getted up at six."], "Habitude : présent simple."],
  ["« What are you doing now ? »", ["I'm talking to you.", "I talked to you.", "I talk to you now."], "Now : présent continu."],
  ["« What did you do yesterday ? »", ["I worked and then I watched TV.", "I work and then I watch TV.", "I am working then watch TV."], "Yesterday : passé simple."],
  ["« What are you going to do tomorrow ? »", ["I'm going to see a friend.", "I went to see a friend.", "I see going a friend."], "Projet : going to."],
  ["« Can you swim ? »", ["Yes, I can.", "Yes, I do.", "Yes, I can to."], "Can se répond avec can."],
  ["« Would you like a coffee ? »", ["Yes, please. I'd like a coffee.", "Yes, I like to coffee.", "Yes, I would a coffee."], "I'd like = I would like."],
  ["« Do you like cooking ? »", ["Yes, I do. I love cooking.", "Yes, I like to cook it.", "Yes, I am cooking."], "Do you ... ? se répond avec Yes, I do."],
  ["« Where were you yesterday evening ? »", ["I was at home.", "I am at home.", "I was go home."], "Passé de to be : I was."],
  ["Répète à voix haute : « I'm going to visit my sister on Saturday. »", ["I'm going to visit my sister on Saturday."], "Écoute le modèle, puis compare avec ta voix.", "speak"],
  ["Répète à voix haute : « Yesterday I was cooking when my phone rang. »", ["Yesterday I was cooking when my phone rang."], "Passé continu, puis passé simple.", "speak"],
  ["Parle 20 secondes : présente-toi et dis ce que tu fais chaque jour.", ["Hi, my name is Ashley. I live near Paris. Every day I get up at six, I go to work by train and I come home at six."], "Exemple de réponse en présent simple.", "speak"],
  ["Parle 20 secondes : raconte ton dernier week-end.", ["Last weekend I went to church on Sunday. I cooked for my son and we watched a film in the evening."], "Exemple de réponse au passé simple.", "speak"]
]};
  return P;
})();
export const B0_NAMES = ["", "Questions de cours", "Les temps : quand les utiliser", "Exercices sur les temps", "Compréhension orale", "Compréhension écrite", "Expression écrite", "Expression orale", "Bilan B0"];
export const B0_ICONS = ["", "📘", "⏱️", "✏️", "🎧", "📖", "✍️", "🎤", "🏁"];
// Bilan : 10 questions tirées des étapes [étape, n° de question]
export const B0_BILAN_REFS = [[1,0],[1,4],[2,2],[2,6],[3,3],[3,7],[3,0],[5,0],[5,6],[6,3],[7,2],[7,0]];
export const B0_KEY = "the_roots_b0_v2"; // v2 : scores en pourcentage
export const B0_PASS = 70;
export function b0Load() { try { return JSON.parse(localStorage.getItem(B0_KEY) || "{}"); } catch (e) { return {}; } }
export function b0Save(p) { try { localStorage.setItem(B0_KEY, JSON.stringify(p)); } catch (e) {} }
export function b0Status() {
  const p = b0Load(), sc = p.scores || {};
  const done = [1,2,3,4,5,6,7].filter((k) => sc[k] != null).length;
  return { done, total: 8, bilan: p.bilan == null ? null : p.bilan, passed: !!p.passed, scores: sc };
}
export const b0Unlocked = (a2Done, unlockAll) => !!(unlockAll || a2Done);
