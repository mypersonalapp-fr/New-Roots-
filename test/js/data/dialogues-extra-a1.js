// The Roots — une étape de conversation en plus par dialogue (A1.3 à A1.12), insérée avant la dernière réplique. À relire par un anglophone natif.
export const EXTRA_TURN_A1 = {
 "3|Mon meilleur ami": {
  "npc": "What is his name?",
  "ok": [
   "\\b(his name|name is|called|he is)\\b"
  ],
  "model": "His name is Tom.",
  "hint": "Dis comment il s'appelle."
 },
 "3|Au parc avec un ami": {
  "npc": "What time is it now?",
  "ok": [
   "\\b(it's|it is|o'clock|half|quarter|past|two|three|four|five|six)\\b"
  ],
  "model": "It's two o'clock.",
  "hint": "Dis quelle heure il est."
 },
 "3|Ma meilleure amie": {
  "npc": "Where does she live?",
  "ok": [
   "\\b(she lives|lives in|live in|in)\\b"
  ],
  "model": "She lives in Paris.",
  "hint": "Dis où elle habite."
 },
 "3|Inviter à une fête": {
  "npc": "What time does it start?",
  "ok": [
   "\\b(at|starts|seven|eight|six|o'clock)\\b"
  ],
  "model": "It starts at seven.",
  "hint": "Dis à quelle heure ça commence."
 },
 "3|Un nouvel ami": {
  "npc": "What is your favourite sport?",
  "ok": [
   "\\b(favourite|i like|i love|football|tennis|basketball|swimming|sport)\\b"
  ],
  "model": "My favourite sport is football.",
  "hint": "Dis ton sport préféré."
 },
 "3|Un message à un ami": {
  "npc": "What is your favourite game?",
  "ok": [
   "\\b(favourite|i like|i love|game|play)\\b"
  ],
  "model": "My favourite game is chess.",
  "hint": "Dis ton jeu préféré."
 },
 "3|Au café entre amis": {
  "npc": "Do you want some cake?",
  "ok": [
   "\\b(yes|no|please|thank|thanks|sure|cake)\\b"
  ],
  "model": "Yes, please. Thank you!",
  "hint": "Réponds oui ou non poliment."
 },
 "3|Mes amis d'école": {
  "npc": "How many friends do you have?",
  "ok": [
   "\\b(one|two|three|four|five|six|seven|eight|nine|ten|many|friends)\\b"
  ],
  "model": "I have five friends.",
  "hint": "Dis combien d'amis tu as."
 },
 "3|Dire non poliment": {
  "npc": "What do you want to do instead?",
  "ok": [
   "\\b(i want|let's|we can|stay|watch|go|play|instead)\\b"
  ],
  "model": "Let's watch a film at home.",
  "hint": "Propose une autre idée."
 },
 "3|Décrire un ami": {
  "npc": "How old is he?",
  "ok": [
   "\\b(he is|he's|years old|old)\\b"
  ],
  "model": "He is twelve years old.",
  "hint": "Dis quel âge il a."
 },
 "4|Aller à l'école": {
  "npc": "What time does school start?",
  "ok": [
   "\\b(at|starts|eight|nine|o'clock)\\b"
  ],
  "model": "It starts at eight.",
  "hint": "Dis à quelle heure l'école commence."
 },
 "4|Demander son chemin": {
  "npc": "Is there a bank near here?",
  "ok": [
   "\\b(yes|no|there is|there isn't|bank|near)\\b"
  ],
  "model": "Yes, there is a bank near here.",
  "hint": "Réponds par oui ou non."
 },
 "4|À la gare": {
  "npc": "Do you have a student card?",
  "ok": [
   "\\b(yes|no|i have|i don't|card)\\b"
  ],
  "model": "Yes, I have a student card.",
  "hint": "Dis si tu as une carte étudiant."
 },
 "4|Dans le bus": {
  "npc": "Is this seat free?",
  "ok": [
   "\\b(yes|no|sure|of course|sorry|free|please)\\b"
  ],
  "model": "Yes, of course. Please sit.",
  "hint": "Réponds oui ou non."
 },
 "4|Demander l'heure du train": {
  "npc": "Do you want a return ticket?",
  "ok": [
   "\\b(yes|no|please|return|one way|single)\\b"
  ],
  "model": "Yes, a return ticket, please.",
  "hint": "Dis si tu veux un aller-retour."
 },
 "4|À vélo": {
  "npc": "Do you wear a helmet?",
  "ok": [
   "\\b(yes|no|always|sometimes|helmet|i wear)\\b"
  ],
  "model": "Yes, I always wear a helmet.",
  "hint": "Dis si tu portes un casque."
 },
 "4|Demander une direction": {
  "npc": "Is it far on foot?",
  "ok": [
   "\\b(yes|no|far|near|minutes|walk)\\b"
  ],
  "model": "No, it's five minutes on foot.",
  "hint": "Dis si c'est loin à pied."
 },
 "4|Prendre un taxi": {
  "npc": "Can you stop here, please?",
  "ok": [
   "\\b(yes|no|sure|stop|here|please|thank)\\b"
  ],
  "model": "Yes, stop here, please. Thank you.",
  "hint": "Demande de t'arrêter ici."
 },
 "4|Le métro": {
  "npc": "Do you need a ticket?",
  "ok": [
   "\\b(yes|no|ticket|i need|please)\\b"
  ],
  "model": "Yes, I need a ticket, please.",
  "hint": "Dis si tu as besoin d'un ticket."
 },
 "4|Je suis en retard": {
  "npc": "What time is the next bus?",
  "ok": [
   "\\b(at|next|bus|o'clock|ten|eight|nine)\\b"
  ],
  "model": "The next bus is at nine.",
  "hint": "Dis à quelle heure est le prochain bus."
 },
 "5|Tes loisirs": {
  "npc": "Do you like reading?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|reading|books)\\b"
  ],
  "model": "Yes, I like reading books.",
  "hint": "Réponds oui ou non."
 },
 "5|Un concert": {
  "npc": "Do you like dancing?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|dancing)\\b"
  ],
  "model": "Yes, I love dancing.",
  "hint": "Réponds oui ou non."
 },
 "5|Quel sport préfères-tu ?": {
  "npc": "Do you play it with friends?",
  "ok": [
   "\\b(yes|no|i play|with|friends|alone)\\b"
  ],
  "model": "Yes, I play it with friends.",
  "hint": "Dis avec qui tu joues."
 },
 "5|Au cinéma": {
  "npc": "What is your favourite film?",
  "ok": [
   "\\b(favourite|i like|i love|film|movie)\\b"
  ],
  "model": "My favourite film is a comedy.",
  "hint": "Dis ton film préféré."
 },
 "5|Ta musique": {
  "npc": "Do you like listening to music at home?",
  "ok": [
   "\\b(yes|no|i like|i love|i listen|music)\\b"
  ],
  "model": "Yes, I listen to music at home.",
  "hint": "Réponds oui ou non."
 },
 "5|Ce que je n'aime pas": {
  "npc": "Do you like cold weather?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|i hate|cold)\\b"
  ],
  "model": "No, I don't like cold weather.",
  "hint": "Réponds oui ou non."
 },
 "5|Mon passe-temps": {
  "npc": "How often do you draw?",
  "ok": [
   "\\b(every|once|twice|often|sometimes|day|week|always)\\b"
  ],
  "model": "I draw every weekend.",
  "hint": "Dis à quelle fréquence tu dessines."
 },
 "5|Choisir un jeu": {
  "npc": "Do you like playing with your family?",
  "ok": [
   "\\b(yes|no|i like|i love|family|with)\\b"
  ],
  "model": "Yes, I like playing with my family.",
  "hint": "Réponds oui ou non."
 },
 "5|Un week-end idéal": {
  "npc": "Do you like walking in the park?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|walking|park)\\b"
  ],
  "model": "Yes, I love walking in the park.",
  "hint": "Réponds oui ou non."
 },
 "5|Un cadeau selon les goûts": {
  "npc": "How much is the shirt?",
  "ok": [
   "\\b(euro|euros|pound|pounds|twenty|thirty|forty|fifty|ten)\\b"
  ],
  "model": "It's twenty euros.",
  "hint": "Dis le prix du maillot."
 },
 "5|Une préférence de saison": {
  "npc": "What do you do in summer?",
  "ok": [
   "\\b(i swim|i play|i go|i like|beach|holiday|swim|walk)\\b"
  ],
  "model": "I go to the beach in summer.",
  "hint": "Dis ce que tu fais en été."
 },
 "6|Au petit-déjeuner": {
  "npc": "Do you like eggs?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|eggs)\\b"
  ],
  "model": "Yes, I like eggs.",
  "hint": "Réponds oui ou non."
 },
 "6|Au restaurant": {
  "npc": "Would you like a salad?",
  "ok": [
   "\\b(yes|no|please|thank|salad|i'd like|i would like)\\b"
  ],
  "model": "Yes, please. I'd like a salad.",
  "hint": "Réponds poliment."
 },
 "6|Le marché de fruits": {
  "npc": "How many apples do you want?",
  "ok": [
   "\\b(one|two|three|four|five|six|a kilo|some|apples)\\b"
  ],
  "model": "Four apples, please.",
  "hint": "Dis combien de pommes tu veux."
 },
 "6|Faire une pizza": {
  "npc": "What do you want on the pizza?",
  "ok": [
   "\\b(cheese|ham|mushroom|tomato|i want|i'd like|i would like|with)\\b"
  ],
  "model": "I'd like cheese and ham, please.",
  "hint": "Dis ce que tu veux sur la pizza."
 },
 "6|Au café": {
  "npc": "Do you want milk in your tea?",
  "ok": [
   "\\b(yes|no|please|thank|milk|with|without)\\b"
  ],
  "model": "Yes, with milk, please.",
  "hint": "Réponds poliment."
 },
 "6|Faire les courses": {
  "npc": "Do you have a bag?",
  "ok": [
   "\\b(yes|no|i have|i don't|bag|please)\\b"
  ],
  "model": "No, I don't have a bag.",
  "hint": "Dis si tu as un sac."
 },
 "6|Le petit-déjeuner de ma famille": {
  "npc": "What does your mother eat?",
  "ok": [
   "\\b(she eats|she drinks|eats|drinks|bread|cereal|fruit|toast)\\b"
  ],
  "model": "She eats bread and fruit.",
  "hint": "Dis ce que mange ta mère."
 },
 "6|Au restaurant avec un ami": {
  "npc": "Do you want some water?",
  "ok": [
   "\\b(yes|no|please|thank|water)\\b"
  ],
  "model": "Yes, please. Some water.",
  "hint": "Réponds poliment."
 },
 "6|L'addition": {
  "npc": "Do you want to pay by card?",
  "ok": [
   "\\b(yes|no|card|cash|by card|please)\\b"
  ],
  "model": "Yes, by card, please.",
  "hint": "Dis si tu paies par carte."
 },
 "6|Mon plat préféré": {
  "npc": "Is it sweet or salty?",
  "ok": [
   "\\b(sweet|salty|it's|it is)\\b"
  ],
  "model": "It's salty.",
  "hint": "Dis si c'est sucré ou salé."
 },
 "6|Au supermarché : une liste": {
  "npc": "Do we need milk?",
  "ok": [
   "\\b(yes|no|we need|we don't|milk)\\b"
  ],
  "model": "Yes, we need milk.",
  "hint": "Réponds oui ou non."
 },
 "7|Au magasin de vêtements": {
  "npc": "Do you like this colour?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|colour|blue|red|green|black)\\b"
  ],
  "model": "Yes, I like this colour.",
  "hint": "Réponds oui ou non."
 },
 "7|Au marché": {
  "npc": "How many tomatoes do you want?",
  "ok": [
   "\\b(one|two|three|four|five|six|a kilo|some|tomatoes)\\b"
  ],
  "model": "Two kilos of tomatoes, please.",
  "hint": "Dis combien de tomates tu veux."
 },
 "7|Acheter un pull": {
  "npc": "What colour do you want?",
  "ok": [
   "\\b(blue|red|green|black|white|grey|yellow|pink|i want|colour)\\b"
  ],
  "model": "I want a blue one.",
  "hint": "Dis quelle couleur tu veux."
 },
 "7|Rendre un article": {
  "npc": "Do you have the receipt?",
  "ok": [
   "\\b(yes|no|i have|i don't|receipt|here)\\b"
  ],
  "model": "Yes, here is the receipt.",
  "hint": "Dis si tu as le ticket."
 },
 "7|Au marché de vêtements": {
  "npc": "Do you like this hat?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|hat)\\b"
  ],
  "model": "Yes, I like this hat.",
  "hint": "Réponds oui ou non."
 },
 "7|Quel prix ?": {
  "npc": "How much is the bag?",
  "ok": [
   "\\b(euro|euros|pound|pounds|ten|twenty|thirty|forty|fifty)\\b"
  ],
  "model": "It's twenty euros.",
  "hint": "Dis le prix du sac."
 },
 "7|Mes couleurs préférées": {
  "npc": "Do you like dark colours?",
  "ok": [
   "\\b(yes|no|i like|i love|i prefer|dark|bright)\\b"
  ],
  "model": "No, I prefer bright colours.",
  "hint": "Réponds oui ou non."
 },
 "7|Des chaussures": {
  "npc": "Do you like these shoes?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|shoes)\\b"
  ],
  "model": "Yes, I like these shoes.",
  "hint": "Réponds oui ou non."
 },
 "7|Un cadeau d'anniversaire": {
  "npc": "What does your friend like?",
  "ok": [
   "\\b(he likes|she likes|likes|loves|books|music|sport|games)\\b"
  ],
  "model": "She likes music.",
  "hint": "Dis ce que ton ami aime."
 },
 "7|À la caisse": {
  "npc": "Can I have your card, please?",
  "ok": [
   "\\b(yes|here|sure|of course|card|thank)\\b"
  ],
  "model": "Yes, here is my card.",
  "hint": "Donne ta carte."
 },
 "8|Tu es perdu": {
  "npc": "Do you know the name of the street?",
  "ok": [
   "\\b(yes|no|i know|i don't know|street|road)\\b"
  ],
  "model": "No, I don't know the street.",
  "hint": "Dis si tu connais la rue."
 },
 "8|À l'office de tourisme": {
  "npc": "Is there a good restaurant near here?",
  "ok": [
   "\\b(yes|no|there is|there isn't|restaurant|near)\\b"
  ],
  "model": "Yes, there is a good restaurant.",
  "hint": "Réponds oui ou non."
 },
 "8|Un touriste perdu": {
  "npc": "How long does it take on foot?",
  "ok": [
   "\\b(minutes|ten|five|twenty|fifteen|hour|walk)\\b"
  ],
  "model": "It takes ten minutes on foot.",
  "hint": "Dis combien de temps à pied."
 },
 "8|Trouver la pharmacie": {
  "npc": "Is the pharmacy open now?",
  "ok": [
   "\\b(yes|no|open|closed|it's|it is)\\b"
  ],
  "model": "Yes, it's open now.",
  "hint": "Dis si la pharmacie est ouverte."
 },
 "8|Sur la place": {
  "npc": "Is there a fountain?",
  "ok": [
   "\\b(yes|no|there is|there isn't|fountain)\\b"
  ],
  "model": "Yes, there is a fountain.",
  "hint": "Réponds oui ou non."
 },
 "8|Au bureau de poste": {
  "npc": "Do you want a stamp?",
  "ok": [
   "\\b(yes|no|please|stamp|thank)\\b"
  ],
  "model": "Yes, one stamp, please.",
  "hint": "Réponds poliment."
 },
 "8|Rendez-vous devant la gare": {
  "npc": "What is next to the station?",
  "ok": [
   "\\b(next to|near|opposite|cafe|bank|shop|bus|there is)\\b"
  ],
  "model": "There is a café next to the station.",
  "hint": "Dis ce qu'il y a à côté de la gare."
 },
 "8|Ma ville": {
  "npc": "Is there a park in your town?",
  "ok": [
   "\\b(yes|no|there is|there isn't|park)\\b"
  ],
  "model": "Yes, there is a big park.",
  "hint": "Réponds oui ou non."
 },
 "8|À l'arrêt de bus": {
  "npc": "How much is the ticket?",
  "ok": [
   "\\b(euro|euros|pound|pounds|one|two|three|four|five)\\b"
  ],
  "model": "It's two euros.",
  "hint": "Dis le prix du ticket."
 },
 "8|Se repérer sur un plan": {
  "npc": "Is the museum on the left or on the right?",
  "ok": [
   "\\b(left|right|on the)\\b"
  ],
  "model": "It's on the left.",
  "hint": "Dis si c'est à gauche ou à droite."
 },
 "9|À l'aéroport": {
  "npc": "Do you have a bag with you?",
  "ok": [
   "\\b(yes|no|i have|i don't|bag|suitcase)\\b"
  ],
  "model": "Yes, I have one bag.",
  "hint": "Dis si tu as un bagage."
 },
 "9|À l'hôtel": {
  "npc": "Do you want a room with a view?",
  "ok": [
   "\\b(yes|no|please|view|sea|city|garden)\\b"
  ],
  "model": "Yes, with a sea view, please.",
  "hint": "Réponds poliment."
 },
 "9|Réserver une chambre": {
  "npc": "Do you want breakfast?",
  "ok": [
   "\\b(yes|no|please|breakfast|thank)\\b"
  ],
  "model": "Yes, breakfast, please.",
  "hint": "Réponds poliment."
 },
 "9|Enregistrement à l'aéroport": {
  "npc": "Do you want a window seat?",
  "ok": [
   "\\b(yes|no|please|window|aisle|seat)\\b"
  ],
  "model": "Yes, a window seat, please.",
  "hint": "Dis ta préférence de siège."
 },
 "9|Au guichet": {
  "npc": "Do you want a single or a return?",
  "ok": [
   "\\b(single|return|one way|round|please)\\b"
  ],
  "model": "A return, please.",
  "hint": "Dis aller simple ou retour."
 },
 "9|Dans l'avion": {
  "npc": "Do you want chicken or fish?",
  "ok": [
   "\\b(chicken|fish|please|thank|i'd like|i would like)\\b"
  ],
  "model": "Chicken, please.",
  "hint": "Choisis poulet ou poisson."
 },
 "9|Un problème à l'hôtel": {
  "npc": "What is your room number?",
  "ok": [
   "\\b(room|number|two|one|three|four|five|six|seven|eight|nine|zero|\\d)\\b"
  ],
  "model": "My room number is two zero five.",
  "hint": "Dis ton numéro de chambre."
 },
 "9|Louer une voiture": {
  "npc": "Do you have a driving licence?",
  "ok": [
   "\\b(yes|no|i have|i don't|licence|license)\\b"
  ],
  "model": "Yes, I have a driving licence.",
  "hint": "Dis si tu as le permis."
 },
 "9|À la douane": {
  "npc": "Do you have anything to declare?",
  "ok": [
   "\\b(yes|no|nothing|i have|i don't)\\b"
  ],
  "model": "No, I have nothing to declare.",
  "hint": "Réponds oui ou non."
 },
 "9|Un message de vacances": {
  "npc": "What is the weather like?",
  "ok": [
   "\\b(sunny|rainy|hot|cold|warm|windy|cloudy|it's|it is)\\b"
  ],
  "model": "It's sunny and hot.",
  "hint": "Dis quel temps il fait."
 },
 "9|Demander la wifi": {
  "npc": "What is the password?",
  "ok": [
   "\\b(password|the password|it is|it's|is)\\b"
  ],
  "model": "The password is on the card.",
  "hint": "Dis où est le mot de passe."
 },
 "10|Ton travail": {
  "npc": "Do you work with a team?",
  "ok": [
   "\\b(yes|no|i work|team|alone|with)\\b"
  ],
  "model": "Yes, I work with a team.",
  "hint": "Dis si tu travailles en équipe."
 },
 "10|À l'université": {
  "npc": "Do you like your university?",
  "ok": [
   "\\b(yes|no|i like|i love|i don't|university)\\b"
  ],
  "model": "Yes, I like my university.",
  "hint": "Réponds oui ou non."
 },
 "10|Un métier": {
  "npc": "How many hours do you work a day?",
  "ok": [
   "\\b(one|two|three|four|five|six|seven|eight|nine|hours)\\b"
  ],
  "model": "I work eight hours a day.",
  "hint": "Dis combien d'heures tu travailles."
 },
 "10|Ma journée de travail": {
  "npc": "Do you work on Saturday?",
  "ok": [
   "\\b(yes|no|i work|i don't|saturday)\\b"
  ],
  "model": "No, I don't work on Saturday.",
  "hint": "Réponds oui ou non."
 },
 "10|Un entretien simple": {
  "npc": "Can you start on Monday?",
  "ok": [
   "\\b(yes|no|i can|i can't|monday|sorry)\\b"
  ],
  "model": "Yes, I can start on Monday.",
  "hint": "Dis si tu peux commencer lundi."
 },
 "10|À l'école de langues": {
  "npc": "Do you have a pen and a notebook?",
  "ok": [
   "\\b(yes|no|i have|i don't|pen|notebook)\\b"
  ],
  "model": "Yes, I have a pen and a notebook.",
  "hint": "Dis si tu as un stylo et un cahier."
 },
 "10|Ma matière préférée": {
  "npc": "Do you have homework today?",
  "ok": [
   "\\b(yes|no|i have|i don't|homework)\\b"
  ],
  "model": "Yes, I have homework today.",
  "hint": "Réponds oui ou non."
 },
 "10|Un travail à temps partiel": {
  "npc": "How many days do you work?",
  "ok": [
   "\\b(one|two|three|four|five|days|day)\\b"
  ],
  "model": "I work three days a week.",
  "hint": "Dis combien de jours tu travailles."
 },
 "10|Une journée à l'université": {
  "npc": "Do you eat at the university?",
  "ok": [
   "\\b(yes|no|i eat|i don't|lunch|canteen|university)\\b"
  ],
  "model": "Yes, I eat lunch at the canteen.",
  "hint": "Dis si tu manges à l'université."
 },
 "10|Au bureau d'accueil": {
  "npc": "Can I see your ID?",
  "ok": [
   "\\b(yes|here|sure|of course|id|card|passport)\\b"
  ],
  "model": "Yes, here is my ID.",
  "hint": "Montre ta pièce d'identité."
 },
 "11|Quel temps fait-il ?": {
  "npc": "Is it hot or cold today?",
  "ok": [
   "\\b(hot|cold|warm|cool|it's|it is)\\b"
  ],
  "model": "It's cold today.",
  "hint": "Dis s'il fait chaud ou froid."
 },
 "11|Ma journée": {
  "npc": "What time do you go to bed?",
  "ok": [
   "\\b(at|o'clock|ten|nine|eleven|midnight|go to bed)\\b"
  ],
  "model": "I go to bed at ten.",
  "hint": "Dis à quelle heure tu te couches."
 },
 "11|Quelle heure est-il ?": {
  "npc": "What time is the film?",
  "ok": [
   "\\b(at|o'clock|seven|eight|nine|six|film)\\b"
  ],
  "model": "The film is at eight.",
  "hint": "Dis à quelle heure est le film."
 },
 "11|La météo demain": {
  "npc": "Is it going to be windy?",
  "ok": [
   "\\b(yes|no|windy|it will|it's)\\b"
  ],
  "model": "Yes, it's going to be windy.",
  "hint": "Réponds oui ou non."
 },
 "11|Mon planning": {
  "npc": "What day is good for you?",
  "ok": [
   "\\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b"
  ],
  "model": "Wednesday is good for me.",
  "hint": "Dis quel jour te convient."
 },
 "11|Mon anniversaire": {
  "npc": "How old are you this year?",
  "ok": [
   "\\b(i am|i'm|years old|old)\\b"
  ],
  "model": "I'm thirty years old.",
  "hint": "Dis quel âge tu as cette année."
 },
 "11|Les saisons": {
  "npc": "What do you wear in winter?",
  "ok": [
   "\\b(coat|hat|scarf|gloves|jumper|i wear|warm)\\b"
  ],
  "model": "I wear a coat and a hat.",
  "hint": "Dis ce que tu portes en hiver."
 },
 "11|Un horaire d'ouverture": {
  "npc": "Are you open on Saturday?",
  "ok": [
   "\\b(yes|no|open|closed|we are|we're)\\b"
  ],
  "model": "Yes, we're open on Saturday.",
  "hint": "Réponds oui ou non."
 },
 "11|Le programme de la semaine": {
  "npc": "What do you do on Friday?",
  "ok": [
   "\\b(i|friday|work|study|play|go|visit)\\b"
  ],
  "model": "On Friday I play football.",
  "hint": "Dis ce que tu fais vendredi."
 },
 "11|Quel temps pour la sortie ?": {
  "npc": "What time do we leave?",
  "ok": [
   "\\b(at|o'clock|nine|eight|ten|seven|leave)\\b"
  ],
  "model": "We leave at nine.",
  "hint": "Dis à quelle heure on part."
 },
 "12|Rencontre": {
  "npc": "How is your family?",
  "ok": [
   "\\b(fine|good|well|great|ok|okay|they are|they're)\\b"
  ],
  "model": "They're fine, thank you.",
  "hint": "Dis comment va ta famille."
 },
 "12|Les formules utiles": {
  "npc": "How do you say thank you politely?",
  "ok": [
   "\\b(thank you|thanks|thank you very much|thanks a lot)\\b"
  ],
  "model": "Thank you very much.",
  "hint": "Dis merci poliment."
 },
 "12|Un petit bonjour": {
  "npc": "How are you today?",
  "ok": [
   "\\b(fine|good|well|great|ok|okay|i'm|i am)\\b"
  ],
  "model": "I'm fine, thank you.",
  "hint": "Dis comment tu vas."
 },
 "12|Demander poliment": {
  "npc": "Can you repeat, please?",
  "ok": [
   "\\b(yes|sure|of course|pardon|again|repeat)\\b"
  ],
  "model": "Yes, of course. Can I have a pen, please?",
  "hint": "Réponds poliment."
 },
 "12|S'excuser": {
  "npc": "Are you sure you are OK?",
  "ok": [
   "\\b(yes|no|i'm|i am|fine|ok|okay|sure)\\b"
  ],
  "model": "Yes, I'm sure. I'm OK.",
  "hint": "Rassure l'autre personne."
 },
 "12|Présenter un ami": {
  "npc": "How do you know Tom?",
  "ok": [
   "\\b(friend|school|work|neighbour|we|he is|from)\\b"
  ],
  "model": "He is my friend from school.",
  "hint": "Dis comment tu connais Tom."
 },
 "12|Remercier": {
  "npc": "Would you like some tea?",
  "ok": [
   "\\b(yes|no|please|thank|tea)\\b"
  ],
  "model": "Yes, please. Thank you!",
  "hint": "Réponds poliment."
 },
 "12|Au téléphone avec un ami": {
  "npc": "Are you free tomorrow?",
  "ok": [
   "\\b(yes|no|i am|i'm|free|sorry|busy)\\b"
  ],
  "model": "Yes, I'm free tomorrow.",
  "hint": "Dis si tu es libre demain."
 },
 "12|Aborder quelqu'un": {
  "npc": "What is your name again?",
  "ok": [
   "\\b(my name|i'm|i am|name is)\\b"
  ],
  "model": "My name is Anna.",
  "hint": "Redis ton prénom."
 },
 "12|Dire au revoir": {
  "npc": "Can I call you tomorrow?",
  "ok": [
   "\\b(yes|no|sure|of course|please|call)\\b"
  ],
  "model": "Yes, of course. Call me tomorrow.",
  "hint": "Réponds poliment."
 },
 "12|Au restaurant : formules de politesse": {
  "npc": "Would you like some water?",
  "ok": [
   "\\b(yes|no|please|thank|water)\\b"
  ],
  "model": "Yes, some water, please.",
  "hint": "Réponds poliment."
 }
};
