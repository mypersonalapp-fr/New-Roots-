// The Roots — A1 : « Dis-le en anglais » (situations à produire). ok = regex acceptées, model = réponse modèle.
export const SITUATIONS_A1 = {
 "1": [
  {
   "icon": "✋",
   "cue": "You meet a new classmate. Say hello and give your name.",
   "hint": "Dis bonjour et ton prénom.",
   "ok": [
    "\\b(my name is|i'm|i am)\\s+[a-z]+"
   ],
   "model": "Hello! My name is Lucas."
  },
  {
   "icon": "🎂",
   "cue": "Your friend asks: “How old are you?” Answer.",
   "hint": "Dis ton âge.",
   "ok": [
    "\\b(i'm|i am)\\s+(\\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty)\\b"
   ],
   "model": "I'm ten years old."
  },
  {
   "icon": "🌍",
   "cue": "Say where you are from.",
   "hint": "Dis d'où tu viens.",
   "ok": [
    "\\b(i'm|i am)\\s+from\\s+[a-z]+",
    "\\bi come from\\s+[a-z]+"
   ],
   "model": "I'm from France."
  },
  {"icon": "🎓", "cue": "Say you are a student.", "hint": "Dis que tu es étudiant(e).", "ok": ["\\b(i'm|i am)\\s+(a\\s+)?student"], "model": "I'm a student."},
  {"icon": "📞", "cue": "Ask someone: “What is your name?”", "hint": "Demande son nom.", "ok": ["\\bwhat('s| is) your name"], "model": "What is your name?"},
  {"icon": "🌍", "cue": "Say you speak French and a little English.", "hint": "Dis les langues que tu parles.", "ok": ["\\bi speak\\b.*\\b(french|english)"], "model": "I speak French and a little English."}
 ],
 "2": [
  {
   "icon": "👩",
   "cue": "Introduce your mother to a friend.",
   "hint": "Présente ta mère.",
   "ok": [
    "\\b(this is|she is|she's|my (mother|mum|mom) is)\\b.+"
   ],
   "model": "This is my mother. She is a teacher."
  },
  {
   "icon": "🏡",
   "cue": "Say how many bedrooms your house has.",
   "hint": "Dis combien de chambres il y a.",
   "ok": [
    "\\b(there (is|are)|i have|my house has)\\b.+"
   ],
   "model": "There are three bedrooms."
  },
  {
   "icon": "👴",
   "cue": "Say your grandfather is funny.",
   "hint": "Dis que ton grand-père est drôle.",
   "ok": [
    "\\bmy (grandfather|grandpa)('s| is)\\s+\\w+",
    "\\bhe('s| is)\\s+funny"
   ],
   "model": "My grandfather is funny."
  },
  {"icon": "👨‍👩‍👧", "cue": "Say you have two brothers.", "hint": "Dis que tu as deux frères.", "ok": ["\\bi have (two|2) brothers"], "model": "I have two brothers."},
  {"icon": "🏠", "cue": "Say your kitchen is small.", "hint": "Dis que ta cuisine est petite.", "ok": ["\\b(my )?kitchen is small"], "model": "My kitchen is small."},
  {"icon": "🐶", "cue": "Say you have a dog and it is big.", "hint": "Dis que tu as un chien grand.", "ok": ["\\bi have a dog\\b"], "model": "I have a dog. It is big."}
 ],
 "3": [
  {
   "icon": "🎬",
   "cue": "Invite a friend to the cinema.",
   "hint": "Invite un ami au cinéma.",
   "ok": [
    "\\b(do you want|let's|would you like|come)\\b.+"
   ],
   "model": "Do you want to come to the cinema?"
  },
  {
   "icon": "💛",
   "cue": "Say your best friend is kind.",
   "hint": "Dis que ton meilleur ami est gentil.",
   "ok": [
    "\\b(my best friend|he|she)\\b.+\\b(kind|nice|funny|clever)\\b"
   ],
   "model": "My best friend is kind."
  },
  {
   "icon": "📅",
   "cue": "Say you often play football on Saturdays.",
   "hint": "Dis que tu joues souvent au foot le samedi.",
   "ok": [
    "\\bplay\\b.+\\bsaturdays?\\b",
    "\\bsaturdays?\\b.+\\bplay\\b"
   ],
   "model": "I often play football on Saturdays."
  },
  {"icon": "🎉", "cue": "Invite a friend to your birthday party.", "hint": "Invite un ami à ta fête.", "ok": ["\\b(come|invite|would you like|do you want)\\b.*\\b(party|birthday)"], "model": "Do you want to come to my birthday party?"},
  {"icon": "🙏", "cue": "Say sorry: you can't come on Saturday.", "hint": "Refuse poliment samedi.", "ok": ["\\b(sorry|can't|cannot)\\b.*\\b(saturday|come)"], "model": "Sorry, I can't come on Saturday."},
  {"icon": "👫", "cue": "Say your friend is tall and funny.", "hint": "Décris ton ami(e).", "ok": ["\\b(he|she|my friend) (is|'s)\\b.*\\b(tall|funny)"], "model": "My friend is tall and funny."}
 ],
 "4": [
  {
   "icon": "🚌",
   "cue": "Say you go to school by bus.",
   "hint": "Dis que tu vas à l'école en bus.",
   "ok": [
    "\\bi (go|take)\\b.+\\bbus\\b"
   ],
   "model": "I go to school by bus."
  },
  {
   "icon": "🗺️",
   "cue": "Tell a tourist: the station is opposite the bank.",
   "hint": "Dis que la gare est en face de la banque.",
   "ok": [
    "\\bstation\\b.+\\b(opposite|next to|near)\\b.+\\bbank\\b"
   ],
   "model": "The station is opposite the bank."
  },
  {
   "icon": "⏱️",
   "cue": "Say the journey takes ten minutes.",
   "hint": "Dis que le trajet dure dix minutes.",
   "ok": [
    "\\bit takes\\b.+\\bminutes?\\b"
   ],
   "model": "It takes ten minutes."
  },
  {"icon": "🚉", "cue": "Ask: “Where is the station?”", "hint": "Demande où est la gare.", "ok": ["\\bwhere('s| is) the station"], "model": "Excuse me, where is the station?"},
  {"icon": "🚲", "cue": "Say you go to work by bike.", "hint": "Dis que tu vas au travail à vélo.", "ok": ["\\bi (go|ride|cycle)\\b.*\\b(bike|bicycle)"], "model": "I go to work by bike."},
  {"icon": "🎫", "cue": "Ask for a ticket to London.", "hint": "Demande un billet pour Londres.", "ok": ["\\b(ticket|i'd like|i would like|can i have)\\b.*\\blondon"], "model": "I'd like a ticket to London, please."}
 ],
 "5": [
  {
   "icon": "🎨",
   "cue": "Say your favourite colour.",
   "hint": "Dis ta couleur préférée.",
   "ok": [
    "\\bmy favou?rite colou?r is\\s+\\w+"
   ],
   "model": "My favourite colour is purple."
  },
  {
   "icon": "⚽",
   "cue": "Say you like football but you don't like tennis.",
   "hint": "Dis que tu aimes le foot mais pas le tennis.",
   "ok": [
    "\\bi (like|love)\\b.+\\b(but|and)\\b.+\\b(don't|do not) like\\b"
   ],
   "model": "I like football but I don't like tennis."
  },
  {
   "icon": "🍝",
   "cue": "Say you prefer rice to pasta.",
   "hint": "Dis que tu préfères le riz aux pâtes.",
   "ok": [
    "\\bi prefer\\b.+\\bto\\b.+"
   ],
   "model": "I prefer rice to pasta."
  },
  {"icon": "🎵", "cue": "Say you love music.", "hint": "Dis que tu adores la musique.", "ok": ["\\bi (love|like)\\b.*\\bmusic"], "model": "I love music."},
  {"icon": "🍕", "cue": "Ask a friend: “Do you like pizza?”", "hint": "Demande s'il aime la pizza.", "ok": ["\\bdo you like pizza"], "model": "Do you like pizza?"},
  {"icon": "📚", "cue": "Say you hate cleaning.", "hint": "Dis que tu détestes faire le ménage.", "ok": ["\\bi (hate|don't like|can't stand)\\b.*\\bclean"], "model": "I hate cleaning."}
 ],
 "6": [
  {
   "icon": "🥐",
   "cue": "Say what you eat for breakfast.",
   "hint": "Dis ce que tu manges au petit-déjeuner.",
   "ok": [
    "\\bi (eat|have)\\s+\\w+"
   ],
   "model": "I eat bread for breakfast."
  },
  {
   "icon": "🍽️",
   "cue": "Order a soup politely in a restaurant.",
   "hint": "Commande une soupe poliment.",
   "ok": [
    "\\b(i'd like|i would like|can i have)\\b.+\\bsoup\\b"
   ],
   "model": "I'd like a soup, please."
  },
  {
   "icon": "🐟",
   "cue": "Say you don't like fish.",
   "hint": "Dis que tu n'aimes pas le poisson.",
   "ok": [
    "\\bi (don't|do not) like fish\\b"
   ],
   "model": "I don't like fish."
  },
  {"icon": "☕", "cue": "Order a coffee and a croissant.", "hint": "Commande un café et un croissant.", "ok": ["\\bcoffee\\b.*\\bcroissant"], "model": "I'd like a coffee and a croissant, please."},
  {"icon": "💶", "cue": "Ask for the bill.", "hint": "Demande l'addition.", "ok": ["\\b(bill|check)\\b"], "model": "Can I have the bill, please?"},
  {"icon": "🍎", "cue": "Say you want three apples.", "hint": "Demande trois pommes.", "ok": ["\\b(three|3)\\b.*\\bapples?"], "model": "I'd like three apples, please."}
 ],
 "7": [
  {
   "icon": "💰",
   "cue": "Ask how much the jacket is.",
   "hint": "Demande le prix de la veste.",
   "ok": [
    "\\bhow much\\b.+\\b(jacket|is it|is this|is that)\\b"
   ],
   "model": "How much is this jacket?"
  },
  {
   "icon": "💳",
   "cue": "Ask if you can pay by card.",
   "hint": "Demande si tu peux payer par carte.",
   "ok": [
    "\\bcan i pay\\b.+\\bcard\\b"
   ],
   "model": "Can I pay by card?"
  },
  {
   "icon": "👟",
   "cue": "Say the black shoes are cheaper than the white shoes.",
   "hint": "Compare le prix des deux paires.",
   "ok": [
    "\\bblack\\b.+\\bcheaper than\\b.+\\bwhite\\b"
   ],
   "model": "The black shoes are cheaper than the white shoes."
  },
  {"icon": "👕", "cue": "Say you are looking for a blue T-shirt.", "hint": "Dis ce que tu cherches.", "ok": ["\\b(looking for|i want|i need)\\b.*\\bt-shirt"], "model": "I'm looking for a blue T-shirt."},
  {"icon": "📏", "cue": "Say the jacket is too small.", "hint": "Dis que la veste est trop petite.", "ok": ["\\btoo small"], "model": "The jacket is too small."},
  {"icon": "🛍️", "cue": "Ask for a larger size.", "hint": "Demande une taille plus grande.", "ok": ["\\b(larger|bigger|large)\\b"], "model": "Do you have a larger size, please?"}
 ],
 "8": [
  {
   "icon": "🧭",
   "cue": "Ask where the library is.",
   "hint": "Demande où est la bibliothèque.",
   "ok": [
    "\\bwhere is\\b.+\\blibrary\\b",
    "\\bhow (do i|can i) get to\\b.+\\blibrary\\b"
   ],
   "model": "Excuse me, where is the library?"
  },
  {
   "icon": "🗣️",
   "cue": "Ask someone to repeat slowly.",
   "hint": "Demande de répéter lentement.",
   "ok": [
    "\\b(could|can) you (repeat|speak)\\b",
    "\\bslowly\\b"
   ],
   "model": "Could you repeat that slowly, please?"
  },
  {
   "icon": "➡️",
   "cue": "Tell someone: go straight on and turn left.",
   "hint": "Donne le chemin : tout droit puis à gauche.",
   "ok": [
    "\\bgo straight\\b.+\\bturn left\\b"
   ],
   "model": "Go straight on and turn left."
  },
  {"icon": "🏦", "cue": "Ask where the bank is.", "hint": "Demande où est la banque.", "ok": ["\\bwhere('s| is) the bank"], "model": "Excuse me, where is the bank?"},
  {"icon": "↩️", "cue": "Tell someone to turn right at the corner.", "hint": "Dis de tourner à droite.", "ok": ["\\bturn right\\b"], "model": "Turn right at the corner."},
  {"icon": "🗺️", "cue": "Say the museum is near the park.", "hint": "Situe le musée.", "ok": ["\\b(museum)\\b.*\\b(near|next to|opposite)\\b.*\\bpark"], "model": "The museum is near the park."}
 ],
 "9": [
  {
   "icon": "✈️",
   "cue": "Say you are going to take the plane.",
   "hint": "Dis que tu vas prendre l'avion.",
   "ok": [
    "\\bi('m| am) going to (take|travel|fly)\\b.+"
   ],
   "model": "I'm going to take the plane."
  },
  {
   "icon": "🏨",
   "cue": "Say you have a reservation at the hotel.",
   "hint": "Dis que tu as une réservation.",
   "ok": [
    "\\bi have a reservation\\b"
   ],
   "model": "I have a reservation."
  },
  {
   "icon": "🧳",
   "cue": "Say your suitcase is heavy.",
   "hint": "Dis que ta valise est lourde.",
   "ok": [
    "\\bmy (suitcase|bag)\\b.+\\bheavy\\b",
    "\\bit('s| is) (very |too )?heavy\\b"
   ],
   "model": "My suitcase is very heavy."
  },
  {"icon": "🧳", "cue": "Say you have one suitcase.", "hint": "Dis que tu as une valise.", "ok": ["\\bi have (one|a|1)\\b.*\\bsuitcase"], "model": "I have one suitcase."},
  {"icon": "🏨", "cue": "Say you want a room for two nights.", "hint": "Demande une chambre pour deux nuits.", "ok": ["\\b(room)\\b.*\\b(two|2) nights"], "model": "I'd like a room for two nights, please."},
  {"icon": "📶", "cue": "Ask if there is wifi in the hotel.", "hint": "Demande s'il y a du wifi.", "ok": ["\\b(is there|do you have)\\b.*\\bwi-?fi"], "model": "Is there wifi in the hotel?"}
 ],
 "10": [
  {
   "icon": "💼",
   "cue": "Say your job and where you work.",
   "hint": "Dis ton métier et où tu travailles.",
   "ok": [
    "\\bi work (in|at|for)\\b.+",
    "\\bi('m| am) (a|an)\\b.+"
   ],
   "model": "I'm a nurse. I work in a hospital."
  },
  {
   "icon": "🕗",
   "cue": "Say you start work at eight.",
   "hint": "Dis que tu commences à huit heures.",
   "ok": [
    "\\bi (start|begin)\\b.+\\b(eight|8)\\b"
   ],
   "model": "I start work at eight."
  },
  {
   "icon": "🎓",
   "cue": "Say you study history at university.",
   "hint": "Dis que tu étudies l'histoire à l'université.",
   "ok": [
    "\\bi study\\b.+"
   ],
   "model": "I study history at university."
  },
  {"icon": "🕘", "cue": "Say you finish work at five.", "hint": "Dis à quelle heure tu finis.", "ok": ["\\bi (finish|end|stop)\\b.*\\b(five|5)"], "model": "I finish work at five."},
  {"icon": "🏥", "cue": "Say your sister is a nurse.", "hint": "Dis le métier de ta sœur.", "ok": ["\\bsister (is|'s) a nurse"], "model": "My sister is a nurse."},
  {"icon": "📖", "cue": "Say you have homework tonight.", "hint": "Dis que tu as des devoirs ce soir.", "ok": ["\\bi have (some )?homework"], "model": "I have homework tonight."}
 ],
 "11": [
  {
   "icon": "🌧️",
   "cue": "Say it's going to rain tomorrow.",
   "hint": "Dis qu'il va pleuvoir demain.",
   "ok": [
    "\\b(it's|it is) going to\\s+(rain|snow)\\b",
    "\\bit will rain\\b"
   ],
   "model": "It's going to rain tomorrow."
  },
  {
   "icon": "☀️",
   "cue": "Say it's sunny and warm today.",
   "hint": "Dis qu'il fait beau et chaud aujourd'hui.",
   "ok": [
    "\\b(it's|it is|today)\\b.+\\b(sunny|warm)\\b"
   ],
   "model": "It's sunny and warm today."
  },
  {
   "icon": "⏰",
   "cue": "Say what time you get up.",
   "hint": "Dis à quelle heure tu te lèves.",
   "ok": [
    "\\bi (get up|wake up)\\b.+"
   ],
   "model": "I get up at seven."
  },
  {"icon": "🌧️", "cue": "Ask: “What's the weather like today?”", "hint": "Demande le temps.", "ok": ["\\bweather\\b"], "model": "What's the weather like today?"},
  {"icon": "🕒", "cue": "Ask: “What time is it?”", "hint": "Demande l'heure.", "ok": ["\\bwhat time is it"], "model": "What time is it?"},
  {"icon": "📅", "cue": "Say your birthday is in April.", "hint": "Dis ton mois d'anniversaire.", "ok": ["\\bmy birthday is (in|on)\\b.*\\bapril"], "model": "My birthday is in April."}
 ],
 "12": [
  {
   "icon": "🙏",
   "cue": "Thank someone and say sorry for being late.",
   "hint": "Remercie et excuse-toi d'être en retard.",
   "ok": [
    "\\bthank(s| you)\\b.+\\bsorry\\b",
    "\\bsorry\\b.+\\bthank(s| you)\\b"
   ],
   "model": "Thank you! I'm sorry, I'm late."
  },
  {
   "icon": "👋",
   "cue": "Say goodbye and see you tomorrow.",
   "hint": "Dis au revoir et à demain.",
   "ok": [
    "\\bsee you tomorrow\\b"
   ],
   "model": "Goodbye! See you tomorrow!"
  },
  {
   "icon": "🪑",
   "cue": "Ask politely if you can sit here.",
   "hint": "Demande poliment si tu peux t'asseoir ici.",
   "ok": [
    "\\b(can|could) i sit\\b.+"
   ],
   "model": "Excuse me, can I sit here?"
  },
  {"icon": "🙌", "cue": "Say “Nice to meet you” to a new friend.", "hint": "Dis que tu es heureux de le rencontrer.", "ok": ["\\bnice to meet you"], "model": "Nice to meet you!"},
  {"icon": "🎁", "cue": "Thank a friend for the gift.", "hint": "Remercie pour le cadeau.", "ok": ["\\bthank(s| you)\\b.*\\bgift"], "model": "Thank you for the gift!"},
  {"icon": "🤝", "cue": "Say you don't understand and ask to repeat.", "hint": "Dis que tu ne comprends pas.", "ok": ["\\b(don't understand|repeat)\\b"], "model": "Sorry, I don't understand. Can you repeat, please?"}
 ]
};
