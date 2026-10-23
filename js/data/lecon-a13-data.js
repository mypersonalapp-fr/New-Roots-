// The Roots — A1.3 « Friends / Social Relationships » : contenu texte complet (vocabulaire, grammaire,
// lecture, écoute, exercices, expression, test, Roots City). Même formats qu'A1.1/A1.2. À relire par un natif.
// Images à fournir : scene-a13-*.webp (lesson) et city/a13-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A13 = [
  { kind: "greetings", title: "Présenter quelqu'un", icon: "🤝",
    tip: "“This is…” présente quelqu'un. “Nice to meet you” se dit en rencontrant une personne pour la première fois.",
    examples: [["This is my friend, Sam.", "Voici mon ami, Sam."], ["Nice to meet you!", "Enchanté(e) !"], ["Let me introduce my friend Lily.", "Laisse-moi te présenter mon amie Lily."]],
    practice: "Écoute et répète la phrase.", say: "This is my friend, Sam. Nice to meet you!" },
  { kind: "words", title: "Les amis et les voisins", icon: "👫", scene: ["scene-a13-friends", "Un groupe d'amis : « He is my best friend »"],
    words: [["friend", "ami(e)"], ["best friend", "meilleur(e) ami(e)"], ["neighbour", "voisin(e)"], ["classmate", "camarade de classe"], ["colleague", "collègue"], ["team", "équipe"]],
    tip: "“Friend” se prononce « frènd ». On dit “a friend of mine” = un de mes amis.",
    examples: [["She is my best friend.", "C'est ma meilleure amie."], ["My neighbour is very kind.", "Mon voisin est très gentil."]],
    q: ["“Classmate” veut dire…", ["collègue", "camarade de classe", "voisin"], 1] },
  { kind: "words", title: "Les relations", icon: "💞", scene: ["scene-a13-couple", "Un couple au parc"],
    words: [["boyfriend", "petit ami"], ["girlfriend", "petite amie"], ["partner", "partenaire / conjoint(e)"], ["relationship", "relation"], ["to meet", "rencontrer"], ["to know", "connaître"]],
    tip: "“Boyfriend / girlfriend” = petit(e) ami(e). Pour « ami(e) » tout court, on dit “friend”.",
    examples: [["I know him from school.", "Je le connais de l'école."], ["They are in a relationship.", "Ils sont en couple."]],
    q: ["“Girlfriend” veut dire…", ["amie quelconque", "petite amie", "voisine"], 1] },
  { kind: "words", title: "Les activités ensemble", icon: "⚽", scene: ["scene-a13-activities", "Des amis qui jouent au foot"],
    words: [["play sport", "faire du sport"], ["go to the cinema", "aller au cinéma"], ["hang out", "passer du temps ensemble"], ["chat", "discuter"], ["meet up", "se retrouver"], ["have a coffee", "prendre un café"]],
    tip: "On dit “play football / tennis” mais “go swimming / running”.",
    examples: [["We play football on Saturdays.", "Nous jouons au football le samedi."], ["We often hang out after school.", "On traîne souvent ensemble après l'école."]],
    q: ["“Hang out” veut dire…", ["travailler", "passer du temps ensemble", "dormir"], 1] },
  { kind: "words", title: "Inviter un ami", icon: "📱", scene: ["scene-a13-invite", "Un message d'invitation sur un téléphone"],
    words: [["Do you want to…?", "Tu veux… ?"], ["Let's…", "Si on… / Allons…"], ["Yes, of course!", "Oui, bien sûr !"], ["Sorry, I can't.", "Désolé(e), je ne peux pas."], ["See you later!", "À plus tard !"], ["What time?", "À quelle heure ?"]],
    tip: "“Let's go!” = Allons-y ! “Let's” = “Let us”, pour proposer quelque chose ensemble.",
    examples: [["Do you want to play tennis?", "Tu veux jouer au tennis ?"], ["Let's meet at five.", "Retrouvons-nous à cinq heures."]],
    q: ["« Désolé, je ne peux pas » se dit…", ["Sorry, I can't.", "Yes, of course!", "See you later!"], 0] },
  { kind: "words", title: "Parler de la fréquence", icon: "🔁", scene: ["scene-a13-week", "Un calendrier de la semaine avec des activités"],
    words: [["always", "toujours"], ["often", "souvent"], ["sometimes", "parfois"], ["never", "jamais"], ["every day", "tous les jours"], ["on Saturdays", "le samedi"]],
    tip: "L'adverbe se place avant le verbe : “I always play”, mais après “be” : “I am always late”.",
    examples: [["I often meet my friends.", "Je retrouve souvent mes amis."], ["He never plays video games.", "Il ne joue jamais aux jeux vidéo."]],
    q: ["“Sometimes” veut dire…", ["jamais", "parfois", "toujours"], 1] },
  { kind: "words", title: "Décrire un ami", icon: "😄", scene: ["scene-a13-describe", "Portraits d'amis : drôle, timide, sympa"],
    words: [["nice", "sympa"], ["shy", "timide"], ["friendly", "amical"], ["clever", "intelligent"], ["lazy", "paresseux"], ["helpful", "serviable"]],
    tip: "“Funny” = drôle (qui fait rire). Un ami “nice” est simplement sympa.",
    examples: [["Tom is shy but very kind.", "Tom est timide mais très gentil."], ["My friends are friendly.", "Mes amis sont amicaux."]],
    q: ["“Shy” veut dire…", ["timide", "paresseux", "drôle"], 0] },
];

export const GRAMMAR_A13 = [
  { title: "Le présent simple : he / she / it", icon: "⏱️",
    table: [["I / you / we / they", "play", "Je joue / tu joues…"], ["he / she / it", "plays", "il / elle joue (+ s)"], ["go → he goes", "+ es", "go, watch, finish"], ["study → she studies", "y → ies", "consonne + y"], ["have → he has", "has (pas “haves”)", "He has a bike."], ["do → he does", "+ es", "She does her homework."], ["play → she plays", "voyelle + y : + s", "play, say, buy, enjoy"], ["live → he lives", "+ s", "he works, she likes"]],
    examples: [["She plays tennis.", "Elle joue au tennis."], ["He goes to the cinema.", "Il va au cinéma."]],
    qs: [["He ___ football.", ["play", "plays", "playing"], 1, "he → +s : plays."], ["She ___ to school.", ["go", "goes", "gos"], 1, "go → goes."]] },
  { title: "La négation : don't / doesn't", icon: "🚫",
    table: [["I / you / we / they", "don't + verbe", "I don't play."], ["he / she / it", "doesn't + verbe", "He doesn't play."], ["après doesn't", "verbe sans -s", "She doesn't play ✓ (pas “plays”)"], ["forme courte", "don’t / doesn’t", "do not / does not"], ["avec have", "don’t have", "We don’t have a car."], ["avec be", "pas de don’t", "I’m not tired."], ["réponse courte", "No, I don’t.", "No, she doesn’t."], ["jamais", "doesn’t + -s ✗", "He doesn’t work ✓"]],
    examples: [["I don't like coffee.", "Je n'aime pas le café."], ["He doesn't play tennis.", "Il ne joue pas au tennis."]],
    qs: [["She ___ play tennis.", ["don't", "doesn't", "isn't"], 1, "she → doesn't."], ["They ___ live here.", ["doesn't", "don't", "aren't"], 1, "they → don't."]] },
  { title: "Les questions : do / does", icon: "❓",
    table: [["Do", "I / you / we / they + verbe ?", "Do you play football?"], ["Does", "he / she / it + verbe ?", "Does she live here?"], ["Réponses courtes", "Yes, I do. / No, she doesn't.", ""], ["Where / When / What time", "+ do / does + sujet", "What time do you meet?"], ["Do you like…?", "Yes, I do. / No, I don’t.", "Do you like music?"], ["Does she…?", "Yes, she does.", "Does she work here?"], ["What do you do?", "Tu fais quoi ?", "I’m a student."], ["Why / How / Who", "+ do / does + sujet", "Why do you smile?"]],
    examples: [["Do you play tennis? — Yes, I do.", "Tu joues au tennis ? — Oui."], ["Does he live in Paris? — No, he doesn't.", "Il habite à Paris ? — Non."]],
    qs: [["___ she like music?", ["Do", "Does", "Is"], 1, "she → Does."], ["Where ___ you meet your friends?", ["do", "does", "are"], 0, "you → do."]] },
  { title: "Les adverbes de fréquence", icon: "📅",
    table: [["always", "100 %", "I always say hello."], ["often", "≈ 75 %", "We often chat."], ["sometimes", "≈ 50 %", "She sometimes cooks."], ["never", "0 %", "He never cries."], ["usually", "≈ 90 %", "I usually walk to work."], ["rarely", "≈ 10 %", "We rarely eat out."], ["hardly ever", "≈ 5 %", "He hardly ever calls."], ["every day", "chaque jour", "I call my mum every day."]],
    examples: [["I sometimes go to the cinema.", "Je vais parfois au cinéma."], ["She is always happy.", "Elle est toujours heureuse."]],
    qs: [["He ___ plays video games. (0 %)", ["always", "never", "often"], 1, "never = jamais."], ["I am ___ late. (toujours)", ["always", "am always", "always am"], 0, "Après be : “I am always late”."]] },
  { title: "Les pronoms compléments", icon: "👉",
    table: [["I → me", "Call me.", "Appelle-moi."], ["you → you", "I like you.", "Je t'aime bien."], ["he → him", "I know him.", "Je le connais."], ["she → her", "I like her.", "Je l'aime bien."], ["we → us", "Join us!", "Rejoins-nous !"], ["they → them", "I see them.", "Je les vois."], ["it → it", "I like it.", "Je l’aime bien."], ["verbe + préposition", "Wait for me.", "Attends-moi."]],
    examples: [["Sam is nice. I like him.", "Sam est sympa. Je l'aime bien."], ["My friends call me every day.", "Mes amis m'appellent tous les jours."]],
    qs: [["Lily is my friend. I know ___.", ["she", "her", "his"], 1, "Complément de she → her."], ["Tom and Max are here. Look at ___!", ["they", "them", "their"], 1, "they → them."]] },
  { title: "Inviter et répondre", icon: "💬",
    table: [["Do you want to…?", "Tu veux… ?", "Do you want to play?"], ["Let's + verbe", "Si on… ?", "Let's go!"], ["Yes, of course!", "Oui, bien sûr", ""], ["Sorry, I can't.", "Désolé(e), je ne peux pas", "I'm busy."], ["Would you like…?", "Tu voudrais… ?", "Would you like a coffee?"], ["How about…?", "Et si on… ?", "How about a film?"], ["Yes, great idea!", "Oui, super idée !", "See you at six!"], ["No, thanks.", "Non, merci.", "Maybe next time."]],
    examples: [["Do you want to have a coffee? — Yes, of course!", "Tu veux prendre un café ? — Oui, bien sûr !"], ["Let's meet at six. — Sorry, I can't.", "Retrouvons-nous à six heures. — Désolé, je ne peux pas."]],
    qs: [["Let's ___ to the cinema.", ["go", "goes", "going"], 0, "Let's + verbe de base."], ["___ you want to play?", ["Do", "Does", "Are"], 0, "you → Do."]] },
];

export const READING_A13 = [
  { who: "Sam", text: "Hi! I'm Sam. My best friend is Max. We are classmates. We play football on Saturdays and we often hang out after school. Max is funny and very kind. Max has a dog and we walk it together.",
    fr: "Sam et Max sont meilleurs amis et camarades de classe. Ils jouent au football le samedi. Max a un chien et ils le promènent ensemble.",
    qs: [["Who is Max?", ["Sam's brother", "Sam's best friend", "Sam's teacher"], 1, "My best friend is Max."], ["When do they play football?", ["On Saturdays", "Every day", "On Sundays"], 0, "On Saturdays."]] },
  { who: "Lily", text: "Hello! I'm Lily. My neighbour Anna is my friend. She doesn't play sport, but she always helps me with homework. We sometimes have a coffee after class. She is very nice and I like her a lot.",
    fr: "Anna, voisine de Lily, ne fait pas de sport mais l'aide toujours avec ses devoirs. Elle est très gentille et Lily l'apprécie beaucoup.",
    qs: [["Does Anna play sport?", ["Yes", "No", "We don't know"], 1, "She doesn't play sport."], ["What does Anna always do?", ["Helps Lily", "Plays tennis", "Goes to the cinema"], 0, "She always helps me."]] },
  { who: "Omar", text: "Hi, I'm Omar. I have a colleague called Paul. He is shy, but he is very clever. We never meet at weekends. We chat at work every day. I like him because he is always polite.",
    fr: "Paul, collègue d'Omar, est timide mais intelligent. Ils discutent chaque jour au travail. Omar l'aime bien car il est toujours poli.",
    qs: [["What is Paul like?", ["Shy and clever", "Funny and lazy", "Rude"], 0, "Shy but very clever."], ["When do they chat?", ["At weekends", "At work", "Never"], 1, "We chat at work every day."]] },
  { who: "Nina", text: "Hello! I'm Nina. Today I want to go to the cinema with my friends. I call them and say: 'Do you want to come? Let's meet at six!' They say: 'Yes, of course!' After the film, we eat pizza.",
    fr: "Nina invite ses amis au cinéma et ils acceptent. Après le film, ils mangent une pizza.",
    qs: [["Where does Nina want to go?", ["To the cinema", "To school", "To a café"], 0, "To the cinema."], ["What do her friends say?", ["No, sorry", "Yes, of course!", "Maybe"], 1, "Yes, of course!"]] },
  { who: "Tom", text: "I'm Tom. I am in a football team. We train on Tuesdays and we play on Saturdays. My teammates are my friends. I like them a lot. We always have fun. Our coach is kind and he helps us.",
    fr: "Tom fait partie d'une équipe de football ; ses coéquipiers sont ses amis. Leur entraîneur est gentil et les aide.",
    qs: [["When does Tom's team play?", ["On Tuesdays", "On Saturdays", "Every day"], 1, "We play on Saturdays."], ["Does Tom like his teammates?", ["Yes", "No", "We don't know"], 0, "I like them a lot."]] },
];

export const LISTENING_A13 = [
  { title: "Meeting a friend", text: "Hi Sam! This is my friend, Lily. She is twenty-two and she is from Spain. Lily is a student. She studies English at university. Lily, this is Sam. He is my neighbour. He is a cook and he works in a small restaurant. Nice to meet you! Nice to meet you too!",
    qs: [["Who is Lily?", ["A friend", "A teacher", "A sister"], 0, "This is my friend, Lily."], ["Where is Lily from?", ["Italy", "Spain", "Brazil"], 1, "She is from Spain."], ["How old is Lily?", ["Twelve", "Thirty-two", "Twenty-two"], 2, "She is twenty-two."], ["What is Sam's job?", ["A driver", "A doctor", "A cook"], 2, "He is a cook."], ["What do they say at the end?", ["Sorry", "Goodbye", "Nice to meet you"], 2, "Nice to meet you."]] },
  { title: "Saturday plans", text: "Hi Ben! Do you want to play football on Saturday? Yes, of course! What time? Let's meet at ten at the park. Can Tom come too? Yes, he can. He plays very well. Great! I have a new ball. See you on Saturday, then. Bye!",
    qs: [["What do they want to do?", ["Play football", "Go shopping", "Watch a film"], 0, "Do you want to play football on Saturday?"], ["What time do they meet?", ["At nine", "At ten", "At eleven"], 1, "Let's meet at ten."], ["Where do they meet?", ["At school", "At home", "At the park"], 2, "Let's meet at the park."], ["Who can come too?", ["Sara", "Tom", "Mr Brown"], 1, "Can Tom come too? Yes, he can."], ["What does the speaker have?", ["A new ball", "A new bike", "A new game"], 0, "I have a new ball."]] },
  { title: "Sorry, I can't", text: "Hi Anna! Do you want to go to the cinema tonight? Sorry, I can't. I have homework and I'm very tired. OK, no problem. Do you want to go tomorrow? Yes, good idea! Let's meet at the cinema at seven. See you!",
    qs: [["Why can't the second speaker go?", ["Illness", "Homework", "Lateness"], 1, "I have homework."], ["When do they decide to go?", ["Tomorrow", "Tonight", "Never"], 0, "Do you want to go tomorrow? Yes!"], ["How does Anna feel?", ["Happy", "Tired", "Angry"], 1, "I'm very tired."], ["What time do they meet?", ["At seven", "At six", "At eight"], 0, "At the cinema at seven."], ["Where do they meet?", ["At home", "At the cinema", "At school"], 1, "Let's meet at the cinema."]] },
  { title: "My neighbour", text: "My neighbour is Mrs Brown. She is sixty and she lives next to me. She is friendly and helpful. She always says hello in the morning. She has a small dog. His name is Max. I sometimes help her with her shopping. She is very kind.",
    qs: [["Who is Mrs Brown?", ["A teacher", "The speaker's neighbour", "A cousin"], 1, "My neighbour is Mrs Brown."], ["What is Mrs Brown like?", ["Friendly and helpful", "Shy and lazy", "Funny and clever"], 0, "She is friendly and helpful."], ["When does she say hello?", ["At night", "In the morning", "In the evening"], 1, "She always says hello in the morning."], ["What is the dog's name?", ["Rex", "Tom", "Max"], 2, "His name is Max."], ["What does the speaker sometimes do?", ["Cook", "Help her", "Play sport"], 1, "I sometimes help her with her shopping."]] },
  { title: "Every week", text: "I play tennis on Mondays. On Wednesdays I have an English class. I go to the cinema on Fridays with my cousin. I always meet my friends on Saturdays and we eat pizza. I never work on Sundays. On Sundays I stay at home with my family.",
    qs: [["When does the speaker play tennis?", ["On Mondays", "On Tuesdays", "On Fridays"], 0, "I play tennis on Mondays."], ["What does the speaker do on Wednesdays?", ["Go to the cinema", "Have an English class", "Play tennis"], 1, "On Wednesdays I have an English class."], ["Who goes to the cinema with the speaker?", ["A teacher", "A cousin", "A neighbour"], 1, "I go to the cinema with my cousin."], ["What do they eat on Saturdays?", ["Pasta", "Salad", "Pizza"], 2, "We eat pizza."], ["Does the speaker work on Sundays?", ["Yes, always", "No, never", "Sometimes"], 1, "I never work on Sundays."]] },
  { title: "At the café", text: "Hello Paul! Do you have a girlfriend? No, I don't. But I have a best friend. Her name is Sara. Does she live here? Yes, she does. She lives near the park. She works in a bookshop and she loves reading. We often have coffee on Saturday morning.",
    qs: [["Does the second speaker have a girlfriend?", ["Yes, he does", "No, he doesn't", "Sometimes"], 1, "No, I don't."], ["Who is Sara?", ["His best friend", "His sister", "His teacher"], 0, "I have a best friend. Her name is Sara."], ["Where does Sara live?", ["Near the station", "Near the park", "Near the school"], 1, "She lives near the park."], ["Where does Sara work?", ["In a bank", "In a café", "In a bookshop"], 2, "She works in a bookshop."], ["When do they have coffee?", ["On Saturday morning", "On Sunday evening", "On Friday night"], 0, "We often have coffee on Saturday morning."]] },
  { title: "The team", text: "Tom is in my football team. He is clever and funny. We often chat after training. He doesn't live near me, but I see him every Saturday. He plays in defence and I play in attack. Our coach is Mr Lee. He is strict but fair. We love our team.",
    qs: [["Does Tom live near the speaker?", ["Yes, he does", "No, he doesn't", "Yes, very near"], 1, "He doesn't live near me."], ["What is Tom like?", ["Shy and quiet", "Lazy and sad", "Clever and funny"], 2, "He is clever and funny."], ["When do they see each other?", ["Every Monday", "Every Saturday", "Every Sunday"], 1, "I see him every Saturday."], ["Who is Mr Lee?", ["The teacher", "The doctor", "The coach"], 2, "Our coach is Mr Lee."], ["Where does Tom play?", ["In attack", "In defence", "In goal"], 1, "He plays in defence."]] },
  { title: "A new friend", text: "I have a new friend at school. Her name is Zoe. She is twelve and she has long brown hair. She is shy, but she is very nice. She likes drawing and music. At lunch we sit together and we talk a lot. I like her and she likes me.",
    qs: [["Where is the new friend?", ["At work", "At school", "At the gym"], 1, "I have a new friend at school."], ["How old is Zoe?", ["Twelve", "Eleven", "Thirteen"], 0, "She is twelve."], ["What colour is her hair?", ["Black", "Blond", "Brown"], 2, "She has long brown hair."], ["Is Zoe shy?", ["Yes, she is", "No, she isn't", "Never"], 0, "She is shy, but she is very nice."], ["What does Zoe like?", ["Football", "Drawing and music", "Cooking"], 1, "She likes drawing and music."]] },
];

export const EXERCISES_A13 = [
  { title: "Vocabulaire — Amis et relations", help: "Choisis le sens correct.",
    qs: [["neighbour", ["voisin", "collègue", "cousin"], 0, "Neighbour = voisin."], ["classmate", ["camarade de classe", "professeur", "ami"], 0, "Classmate."], ["hang out", ["dormir", "traîner ensemble", "travailler"], 1, "Hang out."], ["shy", ["drôle", "timide", "gentil"], 1, "Shy = timide."], ["Sorry, I can't.", ["Oui, bien sûr", "Désolé, je ne peux pas", "À plus tard"], 1, "Refus poli."], ["sometimes", ["parfois", "jamais", "toujours"], 0, "Sometimes = parfois."]] },
  { title: "Présent simple (+ s)", help: "he / she / it prend un -s.",
    qs: [["She ___ tennis.", ["play", "plays", "playing"], 1, "she → plays."], ["He ___ to the cinema.", ["go", "goes", "gos"], 1, "go → goes."], ["They ___ football.", ["plays", "play", "playes"], 1, "they → play."], ["My friend ___ in London.", ["live", "lives", "living"], 1, "he/she → lives."], ["She ___ English. (study)", ["studys", "studies", "studyes"], 1, "study → studies."]] },
  { title: "Négation et questions", help: "don't, doesn't, do, does.",
    qs: [["I ___ like coffee.", ["don't", "doesn't", "isn't"], 0, "I → don't."], ["He ___ play tennis.", ["don't", "doesn't", "isn't"], 1, "he → doesn't."], ["___ you have a best friend?", ["Do", "Does", "Are"], 0, "you → Do."], ["___ she live here?", ["Do", "Does", "Is"], 1, "she → Does."], ["Does he play? — No, he ___.", ["don't", "doesn't", "isn't"], 1, "No, he doesn't."]] },
  { title: "Fréquence", help: "always, often, sometimes, never.",
    qs: [["I ___ meet my friends on Saturdays. (toujours)", ["always", "never", "sometimes"], 0, "always."], ["He ___ plays video games. (jamais)", ["often", "never", "always"], 1, "never."], ["She ___ goes to the cinema. (parfois)", ["sometimes", "never", "always"], 0, "sometimes."], ["They are ___ late. (toujours)", ["always", "are always", "late always"], 0, "Après be."], ["We ___ chat after class. (souvent)", ["often", "never", "not"], 0, "often."]] },
  { title: "Pronoms compléments", help: "me, you, him, her, us, them.",
    qs: [["Sam is my friend. I like ___.", ["he", "him", "his"], 1, "him."], ["Anna is nice. I know ___.", ["her", "she", "his"], 0, "her."], ["Call ___, please. (moi)", ["me", "I", "my"], 0, "me."], ["Look at ___! (nous)", ["we", "us", "our"], 1, "us."], ["My friends are here. I see ___.", ["they", "them", "their"], 1, "them."]] },
  { title: "Inviter", help: "Do you want to… / Let's…",
    qs: [["___ you want to play tennis?", ["Do", "Does", "Are"], 0, "Do you want to…"], ["Let's ___ a coffee.", ["have", "has", "having"], 0, "Let's + base."], ["« Oui, bien sûr ! »", ["Yes, of course!", "Sorry, I can't.", "See you later!"], 0, "Accepter."], ["« À quelle heure ? »", ["What time?", "Where?", "Who?"], 0, "What time?"], ["« À plus tard ! »", ["See you later!", "Nice to meet you!", "Let's go!"], 0, "See you later!"]] },
  { title: "Mise en situation", help: "Amis et activités.",
    qs: [["A person who lives next to you:", ["neighbour", "colleague", "classmate"], 0, "Neighbour."], ["A person who works with you:", ["neighbour", "colleague", "cousin"], 1, "Colleague."], ["You go to the cinema once a month:", ["I often go.", "I sometimes go.", "I always go."], 1, "Sometimes."], ["Your friend doesn't like sport:", ["He plays sport.", "He doesn't play sport.", "He don't play sport."], 1, "doesn't."], ["Your friend is afraid to talk to new people:", ["shy", "funny", "helpful"], 0, "Shy."]] },
];

export const EXPRESSION_A13 = [
  { title: "Présente un ami", icon: "🤝",
    prompts: ["Dis le prénom de ton ami(e).", "Dis où vous vous connaissez.", "Dis ce que vous faites ensemble.", "Dis comment il / elle est."],
    model: "This is my friend, Sam. We are classmates. We play football on Saturdays. He is funny and kind.",
    checks: [["Son prénom", "(this is|my friend is|my best friend is)\\s+(my (best )?friend,? )?\\w+"], ["Où vous vous connaissez", "(we are|he is my|she is my) (classmates?|neighbours?|colleagues?|friends?)|we (work|study|live)"], ["Vos activités", "we (often |always |sometimes )?(play|go|chat|meet|hang out|have)\\b"], ["Comment il / elle est", "(he|she) is \\w+( and \\w+)?|(he|she)'s \\w+"]] },
  { title: "Invite quelqu'un", icon: "📱",
    prompts: ["Propose une activité.", "Propose une heure.", "Dis oui ou refuse poliment.", "Dis au revoir."],
    model: "Do you want to go to the cinema? Let's meet at six. Yes, of course! See you later!",
    checks: [["Proposer", "do you want to \\w+|let's \\w+"], ["L'heure", "(at|what time).*\\b\\w+|let's meet"], ["Oui / non", "yes,? of course|sorry,? i can'?t|ok"], ["Au revoir", "see you|goodbye|bye"]] },
];

export const TEST_TEXTS_A13 = [
  { title: "Sam et Max", text: "Hi! I'm Sam. My best friend is Max. We are classmates. We play football on Saturdays. Max is funny and kind. Max has a dog and we walk it together.", q: [["Who is Max?", ["His best friend", "His brother", "His teacher"], 0], ["When do they play?", ["On Saturdays", "On Fridays", "Every day"], 0], ["What is Max like?", ["Funny and kind", "Shy and lazy", "Rude"], 0]] },
  { title: "Anna la voisine", text: "My neighbour Anna doesn't play sport, but she always helps me with homework. We sometimes have a coffee after class. She is also very kind and funny. I like her a lot.", q: [["Does Anna play sport?", ["Yes", "No", "Not stated"], 1], ["What does she always do?", ["Helps with homework", "Plays tennis", "Cooks"], 0], ["What do they sometimes do?", ["Have a coffee", "Go to the cinema", "Play football"], 0]] },
  { title: "Le collègue", text: "I have a colleague called Paul. He is shy but very clever. We never meet at weekends. We chat at work every day. I like him because he is always polite.", q: [["Who is Paul?", ["A colleague", "A neighbour", "A cousin"], 0], ["Is Paul shy?", ["Yes", "No", "Not stated"], 0], ["When do they chat?", ["At work", "At weekends", "Never"], 0]] },
  { title: "Au cinéma", text: "I want to go to the cinema with my friends. I say: 'Do you want to come? Let's meet at six!' They say: 'Yes, of course!' After the film, we eat pizza.", q: [["Where do they go?", ["The cinema", "School", "A café"], 0], ["What time do they meet?", ["Five", "Six", "Seven"], 1], ["What do the friends answer?", ["Yes", "No", "Maybe"], 0]] },
  { title: "L'équipe de Tom", text: "I'm Tom. I'm in a football team. We train on Tuesdays and play on Saturdays. My teammates are my friends and I like them a lot.", q: [["When do they train?", ["On Tuesdays", "On Saturdays", "On Sundays"], 0], ["Who are his teammates?", ["His friends", "His cousins", "His teachers"], 0], ["Does he like them?", ["Yes", "No", "Not stated"], 0]] },
];

export const TEST_AUDIOS_A13 = [
  { script: "Do you want to play football on Saturday? Yes, of course! What time? Let's meet at ten. See you later!", q: [["What sport?", ["Football", "Tennis", "Basketball"], 0], ["What time?", ["Nine", "Ten", "Eleven"], 1]] },
  { script: "Do you want to go to the cinema tonight? Sorry, I can't. I have homework. OK. Let's go tomorrow.", q: [["Why can't the second speaker go?", ["Homework", "Illness", "Lateness"], 0], ["When do they go?", ["Tonight", "Tomorrow", "Never"], 1]] },
  { script: "My neighbour Mrs Brown is friendly and helpful. She always says hello. I sometimes help her with her shopping.", q: [["What is she like?", ["Friendly and helpful", "Shy", "Lazy"], 0], ["Who helps with shopping?", ["The speaker", "Her son", "Nobody"], 0]] },
  { script: "I play tennis on Mondays. I go to the cinema on Fridays. I always meet my friends on Saturdays. I never work on Sundays.", q: [["When does the speaker play tennis?", ["Mondays", "Fridays", "Sundays"], 0], ["Does the speaker work on Sundays?", ["Yes", "No", "Sometimes"], 1]] },
  { script: "I have a new friend at school. Her name is Zoe. She is shy but very nice. I like her and she likes me.", q: [["What is Zoe like?", ["Shy but nice", "Funny and lazy", "Rude"], 0], ["Do they like each other?", ["Yes", "No", "Only Zoe"], 0]] },
];

export const TEST_GRAMMAR_A13 = [
  ["She ___ tennis.", ["play", "plays", "playing"], 1], ["He ___ to the cinema.", ["go", "goes", "gos"], 1], ["They ___ football.", ["plays", "play", "playes"], 1], ["My friend ___ in London.", ["live", "lives", "living"], 1],
  ["She ___ English. (study)", ["studys", "studies", "studyes"], 1], ["I ___ like coffee.", ["don't", "doesn't", "isn't"], 0], ["He ___ play tennis.", ["don't", "doesn't", "isn't"], 1], ["___ you have a best friend?", ["Do", "Does", "Are"], 0],
  ["___ she live here?", ["Do", "Does", "Is"], 1], ["Does he play? — No, he ___.", ["don't", "doesn't", "isn't"], 1], ["I ___ meet my friends on Saturdays. (toujours)", ["always", "never", "sometimes"], 0], ["He ___ plays video games. (jamais)", ["often", "never", "always"], 1],
  ["She ___ goes to the cinema. (parfois)", ["sometimes", "never", "always"], 0], ["They are ___ late.", ["always", "are always", "late always"], 0], ["Sam is my friend. I like ___.", ["he", "him", "his"], 1], ["Anna is nice. I know ___.", ["her", "she", "his"], 0],
  ["Call ___, please. (moi)", ["me", "I", "my"], 0], ["Look at ___! (nous)", ["we", "us", "our"], 1], ["My friends are here. I see ___.", ["they", "them", "their"], 1], ["___ you want to play tennis?", ["Do", "Does", "Are"], 0],
  ["Let's ___ a coffee.", ["have", "has", "having"], 0], ["A person who lives next to you:", ["neighbour", "colleague", "classmate"], 0], ["A person who works with you:", ["neighbour", "colleague", "cousin"], 1], ["Where ___ you meet your friends?", ["do", "does", "are"], 0],
  ["What time ___ she start?", ["do", "does", "is"], 1], ["We ___ chat after class. (souvent)", ["often", "never", "not"], 0], ["He is ___ funny.", ["very", "much", "many"], 0], ["I ___ my friends every day.", ["see", "sees", "seeing"], 0],
  ["She doesn't ___ sport.", ["plays", "play", "playing"], 1], ["“Hang out” means…", ["passer du temps ensemble", "travailler", "dormir"], 0],
];

export const MISSIONS_A13 = [
  { id: "m1", ic: "🤝", title: "Présente tes amis", sub: "Écoute, puis choisis la bonne phrase.", hero: "city/a13-m1" },
  { id: "m2", ic: "📱", title: "Le message d'invitation", sub: "Accepte ou refuse poliment.", hero: "city/a13-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a13-m3" },
  { id: "m4", ic: "🔁", title: "Toujours ou jamais ?", sub: "Choisis le bon adverbe.", hero: "city/a13-m4" },
  { id: "m5", ic: "👉", title: "Me, him, her, us, them", sub: "Choisis le bon pronom.", hero: "city/a13-m5" },
  { id: "m6", ic: "🎉", title: "La grande fête des amis", sub: "Présente un ami en anglais.", hero: "city/a13-m6" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A13 = {
  m1: [
    pick("This is my best friend. We are classmates.", "Relation", "classmate", ["classmate", "colleague", "neighbour", "cousin"]),
    pick("He lives next to my house.", "Who is he?", "neighbour", ["neighbour", "classmate", "teacher", "cousin"]),
    pick("She works with me every day.", "Who is she?", "colleague", ["colleague", "neighbour", "sister", "friend"]),
    pick("We play football together on Saturdays.", "Activity", "play sport", ["play sport", "go to the cinema", "have a coffee", "chat"]),
    pick("They are in a relationship.", "Relation", "boyfriend / girlfriend", ["boyfriend / girlfriend", "classmates", "neighbours", "brothers"]),
  ],
  m2: [
    pick("Do you want to go to the cinema tonight? — I have homework.", "Answer", "Sorry, I can't.", ["Sorry, I can't.", "Yes, of course!", "See you later!"]),
    pick("Let's have a coffee at five! — Great idea!", "Answer", "Yes, of course!", ["Yes, of course!", "Sorry, I can't.", "Nice to meet you!"]),
    pick("Do you want to play tennis? — I'm free!", "Answer", "Yes, of course!", ["Yes, of course!", "Sorry, I can't.", "Goodbye!"]),
    pick("See you tomorrow! —", "Answer", "See you later!", ["See you later!", "Nice to meet you!", "Do you want to…?"]),
  ],
  m3: [
    { prompt: "Dis : « Il joue au football. »", answer: ["He", "plays", "football", "."], bank: ["football", "plays", "He", "."] },
    { prompt: "Dis : « Elle ne joue pas au tennis. »", answer: ["She", "doesn't", "play", "tennis", "."], bank: ["tennis", "play", "She", "doesn't", "."] },
    { prompt: "Demande : « Tu veux jouer au football ? »", answer: ["Do", "you", "want", "to", "play", "football", "?"], bank: ["want", "football", "Do", "to", "you", "play", "?"] },
    { prompt: "Dis : « Je vais souvent au cinéma. »", answer: ["I", "often", "go", "to", "the", "cinema", "."], bank: ["go", "I", "the", "often", "to", "cinema", "."] },
    { prompt: "Propose : « Retrouvons-nous à six heures. »", answer: ["Let's", "meet", "at", "six", "."], bank: ["six", "meet", "Let's", "at", "."] },
  ],
  m4: [
    pick("I play tennis 7 days a week. → I ___ play tennis.", "Adverb", "always", ["always", "never", "sometimes"]),
    pick("He doesn't like cinema. → He ___ goes to the cinema.", "Adverb", "never", ["never", "always", "often"]),
    pick("We meet maybe twice a month. → We ___ meet.", "Adverb", "sometimes", ["sometimes", "always", "never"]),
    pick("She goes to the café 4 times a week. → She ___ goes.", "Adverb", "often", ["often", "never", "always"]),
  ],
  m5: [
    pick("Sam is my friend. I like ___.", "Pronoun", "him", ["him", "he", "his", "her"]),
    pick("Anna is my neighbour. I help ___.", "Pronoun", "her", ["her", "she", "him", "them"]),
    pick("My friends call ___ every day. (moi)", "Pronoun", "me", ["me", "I", "us", "my"]),
    pick("Come with ___! (nous)", "Pronoun", "us", ["us", "we", "them", "our"]),
    pick("Tom and Max are nice. I like ___.", "Pronoun", "them", ["them", "they", "him", "their"]),
  ],
  m6: [
    { prompt: "Présente ton ami.", card: [["Name", "Sam"], ["Relation", "classmate"], ["Activity", "football"]], answer: ["This is", "Sam.", "He is", "my classmate.", "We play", "football."], bank: ["football.", "She is", "This is", "He is", "my classmate.", "Sam.", "We play", "We go"] },
    { prompt: "Présente ton amie.", card: [["Name", "Lily"], ["Relation", "neighbour"], ["Activity", "coffee"]], answer: ["This is", "Lily.", "She is", "my neighbour.", "We have", "a coffee."], bank: ["a coffee.", "He is", "This is", "She is", "my neighbour.", "Lily.", "We have", "We play"] },
  ],
};

balanceAll({ VOCAB_A13, GRAMMAR_A13, READING_A13, LISTENING_A13, EXERCISES_A13, EXPRESSION_A13, TEST_TEXTS_A13, TEST_AUDIOS_A13, TEST_GRAMMAR_A13, MISSIONS_A13, DATA_A13 });

// Exercices : une question de plus par fiche à 5 questions (3 par page).
EXERCISES_A13[1].qs.push(["Tom ___ tennis on Sundays.", ["play", "plays", "playing"], 1, "he → play + s."]);
EXERCISES_A13[2].qs.push(["She ___ like coffee.", ["don’t", "doesn’t", "isn’t"], 1, "she → doesn’t."]);
EXERCISES_A13[3].qs.push(["I ___ go to the gym on Monday.", ["always", "never", "usually"], 0, "always = toujours (à placer avant le verbe)."]);
EXERCISES_A13[4].qs.push(["Ben is my friend. I often see ___.", ["he", "him", "his"], 1, "Complément → him."]);
EXERCISES_A13[5].qs.push(["Would you like ___ come to my party?", ["to", "at", "for"], 0, "Would you like to + verbe."]);
EXERCISES_A13[6].qs.push(["You and your friend like the same film:", ["Me too!", "Me neither!", "I don’t."], 0, "Me too = moi aussi."]);
