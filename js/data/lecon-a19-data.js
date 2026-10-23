// The Roots — A1.9 « Travel » : contenu texte complet. Mêmes formats qu'A1.1–A1.8. À relire par un natif.
// Images à fournir : lesson/scene-a19-*.webp et city/a19-m1..m6.webp.
import { balanceAll } from "./balance.js";
const names = (a) => a.map((n) => ({ v: n, label: n }));

export const VOCAB_A19 = [
  { kind: "greetings", title: "Parler d'un voyage", icon: "✈️",
    tip: "Pour parler d'un projet : “I'm going to travel to…” (Je vais voyager à…). “Trip” = voyage court, “holiday” = vacances.",
    examples: [["I'm going to travel to London.", "Je vais voyager à Londres."], ["We are on holiday.", "Nous sommes en vacances."], ["Have a nice trip!", "Bon voyage !"]],
    practice: "Écoute et répète la phrase.", say: "I'm going to travel to London next week." },
  { kind: "words", title: "Réserver un billet", icon: "🎫", scene: ["scene-a19-booking", "Un guichet avec billets et un écran de réservation"],
    words: [["book", "réserver"], ["ticket", "billet"], ["one-way", "aller simple"], ["return", "aller-retour"], ["seat", "place"], ["reservation", "réservation"]],
    tip: "Au Royaume-Uni : “a single” = aller simple et “a return” = aller-retour. “One-way” est plus américain.",
    examples: [["I'd like to book a return ticket.", "Je voudrais réserver un aller-retour."], ["Is this seat free?", "Cette place est-elle libre ?"]],
    q: ["“Seat” veut dire…", ["place", "billet", "valise"], 0] },
  { kind: "words", title: "À l'aéroport", icon: "🛫", scene: ["scene-a19-airport", "Un hall d'aéroport avec comptoirs et valises"],
    words: [["airport", "aéroport"], ["flight", "vol"], ["gate", "porte d'embarquement"], ["boarding pass", "carte d'embarquement"], ["passport", "passeport"], ["check in", "enregistrer (bagages)"]],
    tip: "“Departure” = départ. “Arrival” = arrivée. Les écrans de l'aéroport montrent ces deux mots.",
    examples: [["Here is my passport.", "Voici mon passeport."], ["The flight leaves at ten.", "Le vol part à dix heures."]],
    q: ["“Boarding pass” veut dire…", ["carte d'embarquement", "passeport", "billet de train"], 0] },
  { kind: "words", title: "Les bagages", icon: "🧳", scene: ["scene-a19-luggage", "Un tapis à bagages et des valises colorées"],
    words: [["luggage", "bagages"], ["suitcase", "valise"], ["backpack", "sac à dos"], ["heavy / light", "lourd / léger"], ["lost luggage", "bagage perdu"], ["carry-on", "bagage à main"]],
    tip: "“Luggage” est indénombrable : on dit “my luggage is heavy” (pas “luggages”).",
    examples: [["My suitcase is heavy.", "Ma valise est lourde."], ["I have one carry-on bag.", "J'ai un bagage à main."]],
    q: ["“Luggage” est…", ["indénombrable", "toujours pluriel", "un verbe"], 0] },
  { kind: "words", title: "À l'hôtel", icon: "🏨", scene: ["scene-a19-hotel", "Un hall d'hôtel avec réception et clés"],
    words: [["hotel", "hôtel"], ["room", "chambre"], ["key", "clé"], ["reception", "réception"], ["check in / check out", "arriver / partir de l'hôtel"], ["breakfast included", "petit-déjeuner compris"]],
    tip: "“Check in” = faire enregistrer son arrivée. “Check out” = quitter l'hôtel.",
    examples: [["I'd like to check in, please.", "Je voudrais m'enregistrer, s'il vous plaît."], ["Is breakfast included?", "Le petit-déjeuner est-il compris ?"]],
    q: ["“Check out” veut dire…", ["quitter l'hôtel", "arriver à l'hôtel", "réserver"], 0] },
  { kind: "words", title: "Les services", icon: "📶", scene: ["scene-a19-services", "Une chambre avec Wi-Fi, lit, vue"],
    words: [["Wi-Fi", "Wi-Fi"], ["double / single room", "chambre double / simple"], ["shower", "douche"], ["view", "vue"], ["free", "gratuit / libre"], ["extra bed", "lit supplémentaire"]],
    tip: "“Free” = gratuit (“free Wi-Fi”) ou libre (“a free room”).",
    examples: [["Is there free Wi-Fi?", "Y a-t-il du Wi-Fi gratuit ?"], ["I'd like a double room with a view.", "Je voudrais une chambre double avec vue."]],
    q: ["“Free Wi-Fi” veut dire…", ["Wi-Fi gratuit", "Wi-Fi payant", "Wi-Fi lent"], 0] },
  { kind: "words", title: "Les destinations et les horaires", icon: "🗺️", scene: ["scene-a19-destinations", "Une carte du monde vierge avec des pictogrammes"],
    words: [["departure", "départ"], ["arrival", "arrivée"], ["delayed", "retardé"], ["on time", "à l'heure"], ["abroad", "à l'étranger"], ["sightseeing", "visite touristique"]],
    tip: "“Delayed” = retardé. “Cancelled” = annulé. Deux mots utiles à l'aéroport.",
    examples: [["The flight is delayed.", "Le vol est retardé."], ["We are going abroad.", "Nous allons à l'étranger."]],
    q: ["“Delayed” veut dire…", ["retardé", "annulé", "à l'heure"], 0] },
];

export const GRAMMAR_A19 = [
  { title: "Going to : les projets", icon: "🔮",
    table: [["I am going to travel", "je vais voyager", "am / is / are + going to + verbe"], ["She is going to book", "elle va réserver", "is going to"], ["We are going to fly", "nous allons prendre l'avion", "are going to"], ["They are going to stay", "ils vont rester", "are going to"], ["He is going to leave", "il va partir", "is going to"],["It is going to rain", "il va pleuvoir", "it is going to"],["We aren't going to wait", "nous n'allons pas attendre", "aren't going to"],["I'm going to pack", "je vais faire mes valises", "am going to + verbe"]],
    examples: [["I'm going to visit London.", "Je vais visiter Londres."], ["He is going to take a taxi.", "Il va prendre un taxi."]],
    qs: [["I ___ to book a room.", ["am going", "go", "going"], 0, "I am going to + verbe."], ["She ___ to fly to Rome.", ["is going", "are going", "goes"], 0, "She is going to."]] },
  { title: "Going to : négation et questions", icon: "❓",
    table: [["I'm not going to fly.", "je ne vais pas prendre l'avion", "am not going to"], ["He isn't going to stay.", "il ne va pas rester", "isn't going to"], ["Are you going to book?", "vas-tu réserver ?", "Are + sujet + going to"], ["When are you going to leave?", "quand vas-tu partir ?", "Wh- + are + going to"], ["They aren't going to come.", "ils ne vont pas venir", "aren't going to"],["Is she going to fly?", "va-t-elle prendre l'avion ?", "Is + sujet + going to"],["Where are you going to stay?", "où vas-tu loger ?", "Where + are + going to"],["What are you going to do?", "qu'est-ce que tu vas faire ?", "What + are + going to"]],
    examples: [["Are you going to travel by plane?", "Vas-tu voyager en avion ?"], ["We aren't going to stay long.", "Nous n'allons pas rester longtemps."]],
    qs: [["___ you going to travel?", ["Are", "Do", "Is"], 0, "Are you going to…"], ["He ___ going to stay. (négatif)", ["isn't", "aren't", "doesn't"], 0, "He isn't going to."]] },
  { title: "Would like : demander poliment", icon: "🙏",
    table: [["I'd like a room.", "Je voudrais une chambre.", "poli"], ["We'd like to check in.", "Nous voudrions nous enregistrer.", "would like to + verbe"], ["Would you like a window seat?", "Voulez-vous une place côté fenêtre ?", "proposer"], ["Can I have…?", "Puis-je avoir… ?", "alternative"], ["I'd like a double room.", "Je voudrais une chambre double.", "I'd like + nom"],["I'd like to book a table.", "Je voudrais réserver une table.", "would like to + verbe"],["What would you like?", "Que souhaitez-vous ?", "question polie"],["Could I have the key?", "Pourrais-je avoir la clé ?", "Could I…? = très poli"]],
    examples: [["I'd like to book a flight.", "Je voudrais réserver un vol."], ["Would you like breakfast?", "Voulez-vous le petit-déjeuner ?"]],
    qs: [["I ___ like a double room.", ["would", "do", "am"], 0, "I would like."], ["___ you like a window seat?", ["Would", "Do", "Are"], 0, "Would you like…?"]] },
  { title: "Les questions horaires", icon: "⏰",
    table: [["What time does the flight leave?", "À quelle heure part le vol ?", "does + sujet 3e pers."], ["What time does it arrive?", "À quelle heure arrive-t-il ?", ""], ["When is breakfast?", "Quand est le petit-déjeuner ?", ""], ["How long does it take?", "Combien de temps ça prend ?", ""], ["What time is check-out?", "À quelle heure est le départ de l'hôtel ?", "check-out"],["What time does the train arrive?", "À quelle heure arrive le train ?", "does + arrive"],["When does it start?", "Quand ça commence ?", "does + start"],["How long is the flight?", "Combien dure le vol ?", "How long…?"]],
    examples: [["What time does the train leave?", "À quelle heure part le train ?"], ["It arrives at six.", "Il arrive à six heures."]],
    qs: [["What time ___ the flight leave?", ["does", "do", "is"], 0, "does + the flight."], ["How long ___ it take?", ["does", "do", "is"], 0, "How long does it take?"]] },
  { title: "Is breakfast included?", icon: "🍳",
    table: [["Is breakfast included?", "Le petit-déjeuner est-il compris ?", "Is + nom + included"], ["Is there Wi-Fi?", "Y a-t-il du Wi-Fi ?", "Is there…?"], ["Do you have a room?", "Avez-vous une chambre ?", "Do you have…?"], ["How much is the room?", "Combien coûte la chambre ?", "How much…?"], ["Is there a lift?", "Y a-t-il un ascenseur ?", "Is there…?"],["Is the room quiet?", "La chambre est-elle calme ?", "Is + nom + adjectif"],["Is there parking?", "Y a-t-il un parking ?", "Is there…?"],["Is it near the beach?", "C'est près de la plage ?", "Is it near…?"]],
    examples: [["Is Wi-Fi free?", "Le Wi-Fi est-il gratuit ?"], ["Do you have a single room for tonight?", "Avez-vous une chambre simple pour ce soir ?"]],
    qs: [["___ breakfast included?", ["Is", "Are", "Do"], 0, "Is breakfast included?"], ["___ you have a room?", ["Do", "Does", "Is"], 0, "Do you have…?"]] },
  { title: "Plan proche en -ing", icon: "📅",
    table: [["I'm leaving tomorrow.", "Je pars demain.", "plan arrangé"], ["We're flying at ten.", "Nous prenons l'avion à dix heures.", "plan organisé"], ["She's staying in a hotel.", "Elle loge à l'hôtel.", "plan"], ["tomorrow / next week / tonight", "indices de futur", ""], ["We're meeting at six.", "On se retrouve à six heures.", "plan organisé"],["I'm not working tomorrow.", "Je ne travaille pas demain.", "négatif"],["Are you coming tonight?", "Tu viens ce soir ?", "question"],["What are you doing tonight?", "Que fais-tu ce soir ?", "What + are + -ing"]],
    examples: [["I'm flying to Madrid tomorrow.", "Je prends l'avion pour Madrid demain."], ["They're staying for two nights.", "Ils restent deux nuits."]],
    qs: [["I ___ to London tomorrow. (fly)", ["am flying", "fly", "flies"], 0, "Plan arrangé → continu."], ["We ___ at six. (leave)", ["are leaving", "leaves", "leaving"], 0, "We are leaving."]] },
];

export const READING_A19 = [
  { who: "Emma", text: "Hi! I'm Emma. I'm going to travel to London next week. I'm going to take the plane. I want a window seat. I'm going to stay in a hotel for three nights. I'm very happy! I put my clothes in my bag. My friend Anna is going to meet me there.",
    fr: "Emma part à Londres la semaine prochaine en avion et logera trois nuits à l'hôtel. Elle prépare son sac ; son amie Anna la retrouvera là-bas.",
    qs: [["Where is Emma going?", ["To London", "To Paris", "To Rome"], 0, "To London."], ["How many nights?", ["Three", "Two", "Ten"], 0, "Three nights."]] },
  { who: "Sam", text: "Hello! I'm Sam. I'm at the airport. My flight to Madrid is at ten. I check in and show my passport. I have a boarding pass. The gate is number twelve. The queue is long, but the staff are kind. I buy a bottle of water and wait.",
    fr: "Sam est à l'aéroport : vol pour Madrid à dix heures, porte douze. La file est longue mais le personnel est aimable ; il achète de l'eau.",
    qs: [["Where is Sam's flight?", ["To Madrid", "To London", "To Rome"], 0, "Madrid."], ["Which gate?", ["Twelve", "Two", "Twenty"], 0, "Gate twelve."]] },
  { who: "Lily", text: "I'm Lily. I'm at the hotel reception. 'I'd like to check in, please. I have a reservation.' 'Your name?' 'Lily Brown.' 'Here is your key. Breakfast is included. Room 205.' The room is clean and quiet. There is a big bed and a small table.",
    fr: "Lily s'enregistre à l'hôtel : chambre 205, petit-déjeuner inclus. La chambre est propre et calme, avec un grand lit.",
    qs: [["What is Lily's room number?", ["205", "250", "52"], 0, "205."], ["Is breakfast included?", ["Yes", "No", "We don't know"], 0, "Yes."]] },
  { who: "Omar", text: "Hi, I'm Omar. My suitcase is very heavy. I have a lot of clothes. At the airport, the woman says: 'Your suitcase is too heavy. You need to pay.' I'm not happy, but I pay. The woman is friendly and gives me a receipt. Next time I'm going to take fewer clothes.",
    fr: "La valise d'Omar est trop lourde ; il doit payer un supplément. L'employée est aimable et lui donne un reçu ; la prochaine fois, moins de vêtements.",
    qs: [["What is the problem?", ["The suitcase is heavy", "He lost his passport", "The flight is full"], 0, "Too heavy."], ["What does he do?", ["He pays", "He leaves", "He cries"], 0, "He pays."]] },
  { who: "Nina", text: "Hello! I'm Nina. My train is delayed. It is going to arrive at six, not at five. I'm going to call my friend and say: 'I'm going to be late, sorry!' Then I'm going to have a coffee. The platform is full of people. I read my book and wait.",
    fr: "Le train de Nina est en retard ; elle prévient son amie et prend un café. Le quai est plein de monde ; Nina lit en attendant.",
    qs: [["What time is the train going to arrive?", ["At six", "At five", "At ten"], 0, "At six."], ["What is Nina going to do first?", ["Call her friend", "Go home", "Take a taxi"], 0, "Call her friend."]] },
];

export const LISTENING_A19 = [
  { title: "Booking a ticket", text: "I'd like to book a ticket to London, please. Single or return? Return, please. When are you going to travel? On Friday. That is sixty pounds.",
    qs: [["Which ticket?", ["Return", "Single", "First class"], 0, "Return."], ["When is the trip?", ["On Friday", "On Monday", "Tomorrow"], 0, "Friday."]] },
  { title: "At the airport", text: "Good morning. Your passport, please. Here you are. Do you have luggage? Yes, one suitcase. Here is your boarding pass. Gate fourteen.",
    qs: [["How many suitcases?", ["One", "Two", "None"], 0, "One."], ["Which gate?", ["Fourteen", "Forty", "Four"], 0, "Fourteen."]] },
  { title: "Flight delayed", text: "Attention please. Flight BA two-oh-five to Rome is delayed. It is going to leave at half past ten. Please wait in the departure lounge.",
    qs: [["What is the problem?", ["The flight is delayed", "The flight is cancelled", "The gate is closed"], 0, "Delayed."], ["When does it leave?", ["At half past ten", "At nine", "At noon"], 0, "10:30."]] },
  { title: "Hotel check-in", text: "I'd like to check in. Do you have a reservation? Yes, a double room for two nights. Here is your key. Breakfast is from seven to ten.",
    qs: [["Which room is booked?", ["A double room", "A single room", "A suite"], 0, "Double."], ["How many nights?", ["Two", "Three", "One"], 0, "Two nights."]] },
  { title: "Questions at reception", text: "Is breakfast included? Yes, it is. Is there free Wi-Fi? Yes, the password is on your key card. What time is check-out? At eleven.",
    qs: [["Is breakfast included?", ["Yes", "No", "A little"], 0, "Yes."], ["What time is check-out?", ["At eleven", "At nine", "At noon"], 0, "Eleven."]] },
  { title: "Luggage", text: "My suitcase is heavy. How heavy? Twenty-two kilos. The limit is twenty. You need to take something out. OK, I'm going to take my shoes out.",
    qs: [["How heavy is the suitcase?", ["Twenty-two kilos", "Twelve kilos", "Two kilos"], 0, "22 kg."], ["What does the traveller take out?", ["Their shoes", "Their passport", "Their phone"], 0, "Shoes."]] },
  { title: "Plans", text: "What are you going to do on holiday? I'm going to visit museums and take photos. And you? I'm going to relax on the beach.",
    qs: [["What is the first speaker going to do?", ["Visit museums", "Relax on the beach", "Work"], 0, "Museums."], ["What is the second speaker going to do?", ["Relax on the beach", "Visit museums", "Study"], 0, "Beach."]] },
  { title: "Taking the train", text: "What time does the train leave? At ten past nine. And what time does it arrive? At noon. How long does it take? Almost three hours.",
    qs: [["When does the train leave?", ["Ten past nine", "Nine", "Ten"], 0, "9:10."], ["How long does it take?", ["Almost three hours", "One hour", "All day"], 0, "Almost three."]] },
];

export const EXERCISES_A19 = [
  { title: "Vocabulaire — Voyage", help: "Choisis le sens correct.",
    qs: [["passport", ["passeport", "billet", "valise"], 0, "Passport."], ["suitcase", ["valise", "sac à dos", "clé"], 0, "Suitcase."], ["gate", ["porte d'embarquement", "guichet", "quai"], 0, "Gate."], ["check out", ["quitter l'hôtel", "arriver", "réserver"], 0, "Check out."], ["delayed", ["retardé", "annulé", "à l'heure"], 0, "Delayed."], ["key", ["clé", "chambre", "porte"], 0, "Key."]] },
  { title: "Going to", help: "am / is / are + going to.",
    qs: [["I ___ to travel.", ["am going", "go", "going"], 0, "I am going to."], ["She ___ to book a room.", ["is going", "are going", "goes"], 0, "She is going to."], ["We ___ to fly.", ["are going", "is going", "goes"], 0, "We are going to."], ["They ___ to stay.", ["are going", "is going", "go"], 0, "They are going to."], ["He ___ to leave. (négatif)", ["isn't going", "aren't going", "doesn't going"], 0, "He isn't going to."]] },
  { title: "Questions avec going to", help: "Are you going to…?",
    qs: [["___ you going to travel?", ["Are", "Do", "Is"], 0, "Are you."], ["___ she going to stay?", ["Is", "Are", "Does"], 0, "Is she."], ["When ___ you going to leave?", ["are", "do", "is"], 0, "When are you going to."], ["Where ___ they going to stay?", ["are", "do", "does"], 0, "They are."], ["Are you going to fly? — Yes, I ___.", ["am", "do", "are"], 0, "Yes, I am."]] },
  { title: "Would like", help: "I'd like… / Would you like…?",
    qs: [["I ___ like a room.", ["would", "do", "am"], 0, "I would like."], ["___ you like a window seat?", ["Would", "Do", "Are"], 0, "Would you like."], ["I'd like ___ book a flight.", ["to", "for", "at"], 0, "I'd like to."], ["We ___ like two tickets.", ["would", "does", "is"], 0, "We would like."], ["« Je voudrais m'enregistrer »", ["I'd like to check in.", "I'd like check in to.", "I like checking."], 0, "I'd like to check in."]] },
  { title: "Questions de voyage", help: "What time does…?",
    qs: [["What time ___ the flight leave?", ["does", "do", "is"], 0, "does + the flight."], ["How long ___ it take?", ["does", "do", "is"], 0, "does it take."], ["___ breakfast included?", ["Is", "Are", "Does"], 0, "Is breakfast included?"], ["___ you have a room?", ["Do", "Does", "Are"], 0, "Do you have."], ["___ there Wi-Fi in the room?", ["Is", "Are", "Do"], 0, "Is there."]] },
  { title: "Avion, hôtel, bagages", help: "Vocabulaire en contexte.",
    qs: [["You show it at the airport:", ["a passport", "a key", "a menu"], 0, "Passport."], ["You use it to open your room:", ["a key", "a suitcase", "a gate"], 0, "Key."], ["It carries your clothes:", ["a suitcase", "a ticket", "a seat"], 0, "Suitcase."], ["Breakfast is free:", ["It's included.", "It's delayed.", "It's closed."], 0, "Included."], ["The plane is late:", ["It is delayed.", "It is lost.", "It is free."], 0, "Delayed."]] },
  { title: "Mise en situation", help: "En voyage.",
    qs: [["You arrive at the hotel:", ["I'd like to check in, please.", "I'd like check out please.", "I'm going check."], 0, "Check in."], ["You want a seat by the window:", ["I'd like a window seat.", "I'd like seat window.", "I like window."], 0, "Window seat."], ["You ask the departure time:", ["What time does the flight leave?", "What time leaves the flight?", "What does the flight leave time?"], 0, "Does + leave."], ["You ask if breakfast is free:", ["Is breakfast included?", "Is breakfast free luggage?", "Does breakfast include?"], 0, "Included."], ["You say your plan:", ["I'm going to visit London.", "I go to visit London.", "I'm go to London."], 0, "Going to."]] },
];

export const EXPRESSION_A19 = [
  { title: "Mon projet de voyage", icon: "🗺️",
    prompts: ["Dis où tu vas voyager.", "Dis comment tu vas voyager.", "Dis où tu vas dormir.", "Dis ce que tu vas faire."],
    model: "I'm going to travel to London. I'm going to take the plane. I'm going to stay in a hotel. I'm going to visit museums.",
    checks: [["Destination", "i'?m going to (travel|go|fly) (to|in)\\s+\\w+|i'?m going to visit\\s+\\w+"], ["Transport", "i'?m going to (take|fly|travel by|go by)\\s+\\w*\\s*(the )?(plane|train|bus|car|taxi|bike)?"], ["Hébergement", "i'?m going to stay (in|at)\\s+(a|an|the)?\\s*\\w+"], ["Activité", "i'?m going to (visit|take|see|relax|walk|eat)\\s+\\w+"]] },
  { title: "À la réception de l'hôtel", icon: "🏨",
    prompts: ["Dis que tu veux t'enregistrer.", "Dis que tu as une réservation.", "Demande si le petit-déjeuner est compris.", "Demande l'heure du check-out."],
    model: "I'd like to check in, please. I have a reservation. Is breakfast included? What time is check-out?",
    checks: [["Check in", "i'?d like to check in|i would like to check in"], ["Réservation", "i have a (reservation|booking)"], ["Petit-déjeuner", "is breakfast included"], ["Check-out", "what time is check-?out|when is check-?out"]] },
];

export const TEST_TEXTS_A19 = [
  { title: "Le voyage d'Emma", text: "I'm going to travel to London next week. I'm going to take the plane. I want a window seat. I'm going to stay in a hotel for three nights. I put my clothes in my bag. My friend Anna is going to meet me there.", q: [["Where is she going?", ["To London", "To Paris", "To Rome"], 0], ["How is she going to travel?", ["By plane", "By train", "By bus"], 0], ["How many nights?", ["Three", "Two", "Ten"], 0]] },
  { title: "À l'aéroport", text: "I'm at the airport. My flight to Madrid is at ten. I check in and show my passport. I have a boarding pass. The gate is number twelve. The queue is long, but the staff are kind. I buy a bottle of water and wait.", q: [["Where is the flight going?", ["To Madrid", "To London", "To Rome"], 0], ["What does the speaker show?", ["Their passport", "Their key", "Their menu"], 0], ["Which gate?", ["Twelve", "Two", "Twenty"], 0]] },
  { title: "L'hôtel", text: "I'd like to check in, please. I have a reservation. Here is your key. Breakfast is included. Room 205. The room is clean and quiet. There is a big bed and a small table.", q: [["What does the speaker want?", ["To check in", "To check out", "To book a flight"], 0], ["What is the room number?", ["205", "250", "52"], 0], ["Is breakfast included?", ["Yes", "No", "Not stated"], 0]] },
  { title: "La valise", text: "My suitcase is very heavy. At the airport, the woman says: 'Your suitcase is too heavy. You need to pay.' I'm not happy, but I pay.", q: [["What is the problem?", ["The suitcase is heavy", "A lost passport", "The flight is full"], 0], ["What does the speaker do?", ["Pays", "Leaves", "Complains and doesn't pay"], 0], ["How does the speaker feel?", ["Not happy", "Very happy", "Tired"], 0]] },
  { title: "Le train en retard", text: "My train is delayed. It is going to arrive at six, not at five. I'm going to call my friend and say: 'I'm going to be late, sorry!' The platform is full of people. I read my book and wait.", q: [["What is the problem?", ["The train is delayed", "The train is cancelled", "The ticket is lost"], 0], ["What time is it going to arrive?", ["At six", "At five", "At seven"], 0], ["Who is the speaker going to call?", ["Her friend", "Her mother", "A taxi"], 0]] },
];

export const TEST_AUDIOS_A19 = [
  { script: "I'd like to book a ticket to London, please. Single or return? Return, please. When are you going to travel? On Friday.", q: [["Which ticket?", ["Return", "Single", "First class"], 0], ["When is the trip?", ["On Friday", "On Monday", "Tomorrow"], 0]] },
  { script: "Your passport, please. Here you are. Do you have luggage? Yes, one suitcase. Here is your boarding pass. Gate fourteen.", q: [["How many suitcases?", ["One", "Two", "None"], 0], ["Which gate?", ["Fourteen", "Forty", "Four"], 0]] },
  { script: "Attention please. The flight to Rome is delayed. It is going to leave at half past ten. Please wait in the departure lounge.", q: [["What is the problem?", ["Delayed", "Cancelled", "Closed"], 0], ["When does it leave?", ["Half past ten", "Nine", "Noon"], 0]] },
  { script: "Is breakfast included? Yes, it is. Is there free Wi-Fi? Yes. What time is check-out? At eleven.", q: [["Is breakfast included?", ["Yes", "No", "A little"], 0], ["Check-out time:", ["Eleven", "Nine", "Noon"], 0]] },
  { script: "What are you going to do on holiday? I'm going to visit museums and take photos. And you? I'm going to relax on the beach.", q: [["First speaker:", ["Museums and photos", "The beach", "Work"], 0], ["Second speaker:", ["The beach", "Museums", "Study"], 0]] },
];

export const TEST_GRAMMAR_A19 = [
  ["I ___ to travel.", ["am going", "go", "going"], 0], ["She ___ to book a room.", ["is going", "are going", "goes"], 0], ["We ___ to fly.", ["are going", "is going", "goes"], 0], ["He ___ to leave. (négatif)", ["isn't going", "aren't going", "doesn't going"], 0],
  ["___ you going to travel?", ["Are", "Do", "Is"], 0], ["___ she going to stay?", ["Is", "Are", "Does"], 0], ["When ___ you going to leave?", ["are", "do", "is"], 0], ["Are you going to fly? — Yes, I ___.", ["am", "do", "are"], 0],
  ["I ___ like a room.", ["would", "do", "am"], 0], ["___ you like a window seat?", ["Would", "Do", "Are"], 0], ["I'd like ___ book a flight.", ["to", "for", "at"], 0], ["We ___ like two tickets.", ["would", "does", "is"], 0],
  ["What time ___ the flight leave?", ["does", "do", "is"], 0], ["How long ___ it take?", ["does", "do", "is"], 0], ["___ breakfast included?", ["Is", "Are", "Does"], 0], ["___ there Wi-Fi in the room?", ["Is", "Are", "Do"], 0],
  ["“Passport” means…", ["passeport", "billet", "valise"], 0], ["“Suitcase” means…", ["valise", "sac à dos", "clé"], 0], ["“Check out” means…", ["quitter l'hôtel", "arriver", "réserver"], 0], ["“Delayed” means…", ["retardé", "annulé", "à l'heure"], 0],
  ["You use it to open your room:", ["a key", "a suitcase", "a gate"], 0], ["You show it at the airport:", ["a passport", "a key", "a menu"], 0], ["I'm ___ to London tomorrow. (plan arrangé)", ["flying", "fly", "flies"], 0], ["We ___ at six. (leave)", ["are leaving", "leaves", "leaving"], 0],
  ["My ___ is heavy. (bagages)", ["luggage", "luggages", "a luggage"], 0], ["Is Wi-Fi ___ ? (gratuit)", ["free", "freely", "frees"], 0], ["You arrive at the hotel:", ["I'd like to check in.", "I'd like check out.", "I check going."], 0], ["I'm ___ to stay for two nights.", ["going", "go", "went"], 0],
  ["They ___ going to arrive late.", ["are", "is", "am"], 0], ["The flight ___ at ten.", ["leaves", "leave", "leaving"], 0],
];

export const MISSIONS_A19 = [
  { id: "m1", ic: "🛫", title: "Quel mot ?", sub: "Écoute et choisis l'élément de voyage.", hero: "city/a19-m1" },
  { id: "m2", ic: "🏨", title: "À l'hôtel", sub: "Écoute et choisis la bonne réponse.", hero: "city/a19-m2" },
  { id: "m3", ic: "💬", title: "Construis la phrase", sub: "Remets les mots dans l'ordre.", hero: "city/a19-m3" },
  { id: "m4", ic: "🔮", title: "Going to", sub: "Choisis la bonne forme.", hero: "city/a19-m4" },
  { id: "m5", ic: "🎫", title: "Réserver", sub: "Choisis la bonne phrase pour réserver.", hero: "city/a19-m5" },
  { id: "m6", ic: "🌍", title: "Le grand voyage", sub: "Présente ton voyage en anglais.", hero: "city/a19-m6" },
  { id: "m7", ic: "🖼️", title: "Regarde l’image", sub: "Réponds aux questions sur la photo.", hero: "city/a19-p1" },
];

const pick = (say, label, a, o) => ({ say, groups: [{ label, answer: a, opts: names(o) }] });
export const DATA_A19 = {
  m1: [
    pick("You show it at the airport to travel abroad.", "What is it?", "passport", ["passport", "key", "menu", "ticket"]),
    pick("It carries your clothes on a trip.", "What is it?", "suitcase", ["suitcase", "gate", "passport", "key"]),
    pick("It tells you your seat and gate.", "What is it?", "boarding pass", ["boarding pass", "key", "menu", "map"]),
    pick("You go through it to get on the plane.", "What is it?", "gate", ["gate", "key", "reception", "bed"]),
    pick("It opens your hotel room door.", "What is it?", "key", ["key", "passport", "ticket", "suitcase"]),
  ],
  m2: [
    pick("I'd like to check in, please.", "At the hotel", "arriving", ["arriving", "leaving", "complaining"]),
    pick("I'd like to check out, please.", "At the hotel", "leaving", ["leaving", "arriving", "booking"]),
    pick("Is breakfast included?", "She asks about…", "breakfast", ["breakfast", "luggage", "a flight"]),
    pick("Is there free Wi-Fi?", "She asks about…", "Wi-Fi", ["Wi-Fi", "breakfast", "the bus"]),
  ],
  m3: [
    { prompt: "Dis : « Je vais voyager à Londres. »", answer: ["I'm", "going", "to", "travel", "to", "London", "."], bank: ["travel", "going", "I'm", "to", "London", "to", "."] },
    { prompt: "Dis : « Je voudrais réserver une chambre. »", answer: ["I'd", "like", "to", "book", "a", "room", "."], bank: ["book", "a", "I'd", "to", "like", "room", "."] },
    { prompt: "Demande : « À quelle heure part le vol ? »", answer: ["What", "time", "does", "the", "flight", "leave", "?"], bank: ["leave", "does", "What", "flight", "the", "time", "?"] },
    { prompt: "Demande : « Le petit-déjeuner est-il compris ? »", answer: ["Is", "breakfast", "included", "?"], bank: ["included", "Is", "breakfast", "?"] },
    { prompt: "Dis : « Voici mon passeport. »", answer: ["Here", "is", "my", "passport", "."], bank: ["passport", "my", "Here", "is", "."] },
  ],
  m4: [
    pick("Tomorrow I ___ travel to Rome.", "Form", "am going to", ["am going to", "go to", "going to"]),
    pick("She ___ book a hotel.", "Form", "is going to", ["is going to", "are going to", "goes to"]),
    pick("___ you going to fly?", "Form", "Are", ["Are", "Do", "Is"]),
    pick("They ___ going to stay long. (négatif)", "Form", "aren't", ["aren't", "isn't", "don't"]),
  ],
  m5: [
    pick("Tu veux réserver un vol.", "Say", "I'd like to book a flight.", ["I'd like to book a flight.", "I like booking flight.", "I book to like flight."]),
    pick("Tu veux un aller-retour.", "Say", "A return ticket, please.", ["A return ticket, please.", "A going ticket back.", "A ticket again please."]),
    pick("Tu veux connaître l'heure du vol.", "Say", "What time does the flight leave?", ["What time does the flight leave?", "What time leaves the flight?", "Which hour flight does?"]),
    pick("Tu veux une place côté fenêtre.", "Say", "I'd like a window seat.", ["I'd like a window seat.", "I want seat window.", "I like seating window."]),
  ],
  m6: [
    { prompt: "Présente ton voyage.", card: [["Where", "Rome"], ["How", "plane"], ["Stay", "hotel"]], answer: ["I'm going to", "travel to Rome.", "I'm going to", "take the plane.", "I'm going to", "stay in a hotel."], bank: ["travel to Rome.", "travel to Paris.", "I'm going to", "take the plane.", "take the train.", "stay in a hotel.", "stay at home.", "I'm going to", "I'm going to"] },
    { prompt: "Présente son voyage.", card: [["Where", "London"], ["How", "train"], ["Nights", "three"]], answer: ["She is going to", "travel to London", "by train.", "She is going to", "stay three", "nights."], bank: ["travel to London", "travel to Rome", "She is going to", "She is going to", "by train.", "by plane.", "stay three", "stay ten", "nights."] },
  ],
  m7: [
    { img: "city/a19-p1", groups: [{ label: "Where is this?", answer: "at the airport", cols: 3, opts: names(["at the airport", "at school", "in a shop"]) }, { label: "What is in the sky?", answer: "a plane", cols: 3, opts: names(["a plane", "a bird", "a kite"]) }, { label: "What is next to the chairs?", answer: "suitcases", cols: 3, opts: names(["suitcases", "bikes", "dogs"]) }, { label: "The sun is…", answer: "low", cols: 3, opts: names(["low", "hidden", "green"]) }, { label: "What is on the right?", answer: "desks", cols: 3, opts: names(["desks", "beds", "cars"]) }] },
    { img: "city/a19-p2", groups: [{ label: "Where is this?", answer: "in a hotel", cols: 3, opts: names(["in a hotel", "at school", "in a bank"]) }, { label: "What is next to the desk?", answer: "suitcases", cols: 3, opts: names(["suitcases", "bikes", "dogs"]) }, { label: "The flowers are…", answer: "white", cols: 3, opts: names(["white", "red", "blue"]) }, { label: "What is outside?", answer: "palm trees", cols: 3, opts: names(["palm trees", "snow", "cars"]) }, { label: "The big sofa is…", answer: "beige", cols: 3, opts: names(["beige", "green", "pink"]) }] },
    { img: "city/a19-p3", groups: [{ label: "Who is on the photo?", answer: "a family", cols: 3, opts: names(["a family", "a teacher", "a doctor"]) }, { label: "What do they look at?", answer: "a laptop", cols: 3, opts: names(["a laptop", "a book", "a dog"]) }, { label: "On the left there is a…", answer: "globe", cols: 3, opts: names(["globe", "bike", "bag"]) }, { label: "On the right there is a…", answer: "camera", cols: 3, opts: names(["camera", "phone", "cup"]) }, { label: "The boy's hoodie is…", answer: "red", cols: 3, opts: names(["red", "green", "black"]) }] },
    { img: "city/a19-p4", groups: [{ label: "What do they look at?", answer: "a map", cols: 3, opts: names(["a map", "a film", "a cake"]) }, { label: "The girl's top is…", answer: "pink", cols: 3, opts: names(["pink", "green", "black"]) }, { label: "The boy's hoodie is…", answer: "red", cols: 3, opts: names(["red", "blue", "yellow"]) }, { label: "What is on the table?", answer: "photos", cols: 3, opts: names(["photos", "food", "shoes"]) }, { label: "What is on the table?", answer: "a plane", cols: 3, opts: names(["a plane", "a cat", "a cup"]) }] },
    { img: "city/a19-p5", groups: [{ label: "Where is this?", answer: "at the beach", cols: 3, opts: names(["at the beach", "at school", "in a shop"]) }, { label: "The sea is…", answer: "blue", cols: 3, opts: names(["blue", "red", "black"]) }, { label: "What is on the water?", answer: "a boat", cols: 3, opts: names(["a boat", "a car", "a bus"]) }, { label: "What is on the chair?", answer: "a hat", cols: 3, opts: names(["a hat", "a book", "a dog"]) }, { label: "The sun is…", answer: "low", cols: 3, opts: names(["low", "green", "hidden"]) }] },
    { img: "city/a19-p6", groups: [{ label: "Where is this?", answer: "at the train station", cols: 3, opts: names(["at the train station", "at school", "at a beach"]) }, { label: "What is on the right?", answer: "a train", cols: 3, opts: names(["a train", "a bus", "a boat"]) }, { label: "What is on the wall?", answer: "a clock", cols: 3, opts: names(["a clock", "a cat", "a bike"]) }, { label: "The suitcase is…", answer: "dark blue", cols: 3, opts: names(["dark blue", "pink", "yellow"]) }, { label: "The sun is…", answer: "low", cols: 3, opts: names(["low", "hidden", "green"]) }] },
    { img: "city/a19-p7", groups: [{ label: "Where are they?", answer: "in a hotel", cols: 3, opts: names(["in a hotel", "at school", "in a shop"]) }, { label: "They have…", answer: "breakfast", cols: 3, opts: names(["breakfast", "homework", "a bath"]) }, { label: "In the second picture, they are in the…", answer: "pool", cols: 3, opts: names(["pool", "car", "bus"]) }, { label: "In the third picture, they wait for the…", answer: "lift", cols: 3, opts: names(["lift", "train", "plane"]) }, { label: "They have…", answer: "suitcases", cols: 3, opts: names(["suitcases", "bikes", "dogs"]) }] },
    { img: "city/a19-p8", groups: [{ label: "Where are they?", answer: "at the hotel", cols: 3, opts: names(["at the hotel", "at school", "in a shop"]) }, { label: "Who gives the key?", answer: "the receptionist", cols: 3, opts: names(["the receptionist", "the boy", "the dog"]) }, { label: "What does she give?", answer: "a key", cols: 3, opts: names(["a key", "a book", "a pen"]) }, { label: "The woman has a… bag", answer: "pink", cols: 3, opts: names(["pink", "green", "black"]) }, { label: "The suitcases are…", answer: "blue and silver", cols: 3, opts: names(["blue and silver", "red", "green"]) }] },
    { img: "city/a19-p9", groups: [{ label: "What city is this?", answer: "Paris", cols: 3, opts: names(["Paris", "London", "Rome"]) }, { label: "What is on the right?", answer: "the Eiffel Tower", cols: 3, opts: names(["the Eiffel Tower", "a plane", "a bus"]) }, { label: "What is on the river?", answer: "boats", cols: 3, opts: names(["boats", "cars", "cows"]) }, { label: "The sky is…", answer: "orange", cols: 3, opts: names(["orange", "green", "black"]) }, { label: "What is on the left?", answer: "a bench", cols: 3, opts: names(["a bench", "a bed", "a car"]) }] },
    { img: "city/a19-p10", groups: [{ label: "Where is this?", answer: "a travel agency", cols: 3, opts: names(["a travel agency", "a school", "a bank"]) }, { label: "What is on the wall?", answer: "a map", cols: 3, opts: names(["a map", "a clock", "a bike"]) }, { label: "What is on the table?", answer: "a globe", cols: 3, opts: names(["a globe", "a cat", "a hat"]) }, { label: "The armchairs are…", answer: "orange", cols: 3, opts: names(["orange", "green", "black"]) }, { label: "What is on the right?", answer: "suitcases", cols: 3, opts: names(["suitcases", "cats", "cars"]) }] },
    { img: "city/a19-p11", groups: [{ label: "Where are they?", answer: "at security", cols: 3, opts: names(["at security", "at school", "in a shop"]) }, { label: "The boy shows his…", answer: "passport", cols: 3, opts: names(["passport", "phone", "book"]) }, { label: "The woman at security is…", answer: "smiling", cols: 3, opts: names(["smiling", "sad", "angry"]) }, { label: "The big suitcase is…", answer: "dark blue", cols: 3, opts: names(["dark blue", "red", "pink"]) }, { label: "The sun is…", answer: "low", cols: 3, opts: names(["low", "hidden", "green"]) }] },
    { img: "city/a19-p12", groups: [{ label: "Where are they?", answer: "at the airport", cols: 3, opts: names(["at the airport", "at school", "in a shop"]) }, { label: "What is in the sky?", answer: "a plane", cols: 3, opts: names(["a plane", "a bird", "a kite"]) }, { label: "The boy's hoodie is…", answer: "red", cols: 3, opts: names(["red", "green", "black"]) }, { label: "The woman's bag is…", answer: "pink", cols: 3, opts: names(["pink", "green", "black"]) }, { label: "They have…", answer: "suitcases", cols: 3, opts: names(["suitcases", "bikes", "dogs"]) }] }
  ],
};

balanceAll({ VOCAB_A19, GRAMMAR_A19, READING_A19, LISTENING_A19, EXERCISES_A19, EXPRESSION_A19, TEST_TEXTS_A19, TEST_AUDIOS_A19, TEST_GRAMMAR_A19, DATA_A19 });

// Exercices : une question de plus par fiche à 5 questions (3 par page).
EXERCISES_A19[1].qs.push(["She ___ to leave tomorrow.", ["is going", "goes", "going"], 0, "be going to + verbe."]);
EXERCISES_A19[2].qs.push(["___ he going to fly?", ["Is", "Are", "Does"], 0, "he → Is."]);
EXERCISES_A19[3].qs.push(["I’d like ___ room for two nights.", ["a", "an", "some"], 0, "Consonne → a."]);
EXERCISES_A19[4].qs.push(["What time ___ the train arrive?", ["does", "do", "is"], 0, "Horaire → does."]);
EXERCISES_A19[5].qs.push(["You use it to fly:", ["a plane", "a key", "a suitcase"], 0, "Plane = avion."]);
EXERCISES_A19[6].qs.push(["You want to book a room:", ["I’d like to book a room.", "I like book a room.", "I’m booking room."], 0, "I’d like to + verbe."]);
