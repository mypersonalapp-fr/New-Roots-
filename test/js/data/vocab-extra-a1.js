// The Roots — mots en plus pour les fiches de vocabulaire courtes A1.2 à A1.12 (4 mots utiles par fiche, sans doublon).
// Fusionnés par titre dans `withVocabExtra`. À relire par un anglophone natif (fin de projet).
const V = {
  // A1.2
  "La famille proche": [["baby", "bébé"], ["son", "fils"], ["daughter", "fille"], ["twin", "jumeau / jumelle"]],
  "La famille élargie": [["uncle", "oncle"], ["aunt", "tante"], ["cousin", "cousin / cousine"], ["niece", "nièce"], ["nephew", "neveu"], ["relatives", "famille (parents proches)"]],
  "Mariage et relations": [["husband", "mari"], ["wife", "épouse"], ["boyfriend", "petit ami"], ["girlfriend", "petite amie"]],
  "Les âges et les métiers": [["teenager", "adolescent(e)"], ["adult", "adulte"], ["baby", "bébé"], ["old", "âgé(e)"]],
  "Décrire un proche": [["young", "jeune"], ["funny", "drôle"], ["friendly", "sympathique"], ["shy", "timide"]],
  "La maison familiale": [["garden", "jardin"], ["bedroom", "chambre"], ["kitchen", "cuisine"], ["bathroom", "salle de bain"]],
  // A1.3
  "Les amis et les voisins": [["neighbour", "voisin(e)"], ["classmate", "camarade de classe"], ["best friend", "meilleur(e) ami(e)"], ["colleague", "collègue"]],
  "Les relations": [["partner", "partenaire"], ["roommate", "colocataire"], ["boss", "patron(ne)"], ["team", "équipe"]],
  "Les activités ensemble": [["to play", "jouer"], ["to cook", "cuisiner"], ["to walk", "marcher"], ["to chat", "discuter"]],
  "Inviter un ami": [["party", "fête"], ["invitation", "invitation"], ["tonight", "ce soir"], ["weekend", "week-end"]],
  "Parler de la fréquence": [["every day", "tous les jours"], ["once a week", "une fois par semaine"], ["twice a month", "deux fois par mois"], ["usually", "d’habitude"]],
  "Décrire un ami": [["kind", "gentil(le)"], ["helpful", "serviable"], ["clever", "intelligent(e)"], ["lazy", "paresseux(se)"]],
  // A1.4
  "Les moyens de transport": [["bus", "bus"], ["train", "train"], ["bike", "vélo"], ["taxi", "taxi"]],
  "Les lieux dans la ville": [["bank", "banque"], ["library", "bibliothèque"], ["post office", "poste"], ["market", "marché"]],
  "Les directions": [["left", "gauche"], ["right", "droite"], ["straight on", "tout droit"], ["corner", "coin de rue"]],
  "Où se trouve… ?": [["near", "près de"], ["far from", "loin de"], ["opposite", "en face de"], ["between", "entre"]],
  "Au guichet": [["ticket", "billet"], ["return ticket", "billet aller-retour"], ["platform", "quai"], ["timetable", "horaires"]],
  "Les trajets": [["journey", "trajet"], ["stop", "arrêt"], ["to arrive", "arriver"], ["to leave", "partir"]],
  // A1.5
  "Aimer et ne pas aimer": [["to love", "adorer"], ["to hate", "détester"], ["to enjoy", "apprécier"], ["I don’t mind", "ça m’est égal"]],
  "Les loisirs": [["hobby", "loisir"], ["painting", "peinture"], ["reading", "lecture"], ["gardening", "jardinage"]],
  "Le sport et la musique": [["swimming", "natation"], ["guitar", "guitare"], ["song", "chanson"], ["team", "équipe"]],
  "Donner son opinion": [["I think", "je pense"], ["in my opinion", "à mon avis"], ["I agree", "je suis d’accord"], ["I disagree", "je ne suis pas d’accord"]],
  "Poser des questions de goûts": [["favourite", "préféré(e)"], ["Why?", "pourquoi ?"], ["Because", "parce que"], ["What kind of…?", "quel genre de… ?"]],
  // A1.6
  "Les aliments": [["bread", "pain"], ["cheese", "fromage"], ["egg", "œuf"], ["vegetables", "légumes"]],
  "Les boissons": [["water", "eau"], ["juice", "jus"], ["tea", "thé"], ["milk", "lait"]],
  "Les repas": [["breakfast", "petit-déjeuner"], ["lunch", "déjeuner"], ["dinner", "dîner"], ["snack", "en-cas"]],
  "Les quantités": [["a bottle of", "une bouteille de"], ["a packet of", "un paquet de"], ["a slice of", "une tranche de"], ["a kilo of", "un kilo de"]],
  "Au restaurant": [["menu", "carte"], ["waiter", "serveur"], ["bill", "addition"], ["table for two", "table pour deux"]],
  "Goûts et saveurs": [["sweet", "sucré"], ["salty", "salé"], ["spicy", "épicé"], ["delicious", "délicieux"]],
  // A1.7
  "Les vêtements": [["shirt", "chemise"], ["trousers", "pantalon"], ["dress", "robe"], ["coat", "manteau"]],
  "Les couleurs et les tailles": [["red", "rouge"], ["blue", "bleu"], ["small", "petit"], ["large", "grand"]],
  "Les prix": [["cheap", "bon marché"], ["expensive", "cher"], ["sale", "soldes"], ["discount", "réduction"]],
  "Payer": [["cash", "espèces"], ["credit card", "carte bancaire"], ["receipt", "ticket de caisse"], ["change", "monnaie"]],
  "Essayer et choisir": [["fitting room", "cabine d’essayage"], ["size", "taille"], ["to try on", "essayer"], ["to fit", "aller (taille)"]],
  "Les magasins": [["supermarket", "supermarché"], ["bakery", "boulangerie"], ["pharmacy", "pharmacie"], ["shopping centre", "centre commercial"]],
  // A1.8
  "Les lieux de la ville": [["bridge", "pont"], ["square", "place"], ["museum", "musée"], ["church", "église"]],
  "Prendre les transports": [["bus stop", "arrêt de bus"], ["underground", "métro"], ["tram", "tramway"], ["to get off", "descendre"]],
  "Être perdu": [["I’m lost", "je suis perdu(e)"], ["map", "plan"], ["wrong way", "mauvais chemin"], ["Can you help me?", "pouvez-vous m’aider ?"]],
  "Demander de répéter": [["Sorry?", "pardon ?"], ["Slowly, please", "lentement, s’il vous plaît"], ["I don’t understand", "je ne comprends pas"], ["Again, please", "encore une fois, s’il vous plaît"]],
  "Distance et durée": [["minute", "minute"], ["kilometre", "kilomètre"], ["a long way", "loin"], ["close", "proche"]],
  "Guider un touriste": [["tourist", "touriste"], ["sightseeing", "visite touristique"], ["tourist office", "office de tourisme"], ["landmark", "monument"]],
  // A1.9
  "Réserver un billet": [["single", "aller simple"], ["return", "aller-retour"], ["seat", "place"], ["to book", "réserver"]],
  "À l'aéroport": [["flight", "vol"], ["passport", "passeport"], ["gate", "porte d’embarquement"], ["departure", "départ"]],
  "Les bagages": [["suitcase", "valise"], ["backpack", "sac à dos"], ["luggage", "bagages"], ["heavy", "lourd"]],
  "À l'hôtel": [["reception", "réception"], ["key", "clé"], ["single room", "chambre simple"], ["double room", "chambre double"]],
  "Les services": [["Wi-Fi", "Wi-Fi"], ["breakfast", "petit-déjeuner"], ["lift", "ascenseur"], ["pool", "piscine"]],
  "Les destinations et les horaires": [["arrival", "arrivée"], ["delay", "retard"], ["on time", "à l’heure"], ["abroad", "à l’étranger"]],
  // A1.10
  "Les métiers": [["nurse", "infirmier(ère)"], ["driver", "chauffeur"], ["cook", "cuisinier(ère)"], ["engineer", "ingénieur(e)"]],
  "Les lieux de travail": [["office", "bureau"], ["factory", "usine"], ["hospital", "hôpital"], ["shop", "magasin"]],
  "À l'école": [["pupil", "élève"], ["classroom", "salle de classe"], ["homework", "devoirs"], ["break", "récréation"]],
  "Les matières": [["maths", "maths"], ["history", "histoire"], ["science", "sciences"], ["art", "arts plastiques"]],
  "La journée de travail": [["meeting", "réunion"], ["lunch break", "pause déjeuner"], ["email", "e-mail"], ["to finish", "finir"]],
  "Les études": [["university", "université"], ["student", "étudiant(e)"], ["exam", "examen"], ["degree", "diplôme"]],
  // A1.11
  "La météo": [["sunny", "ensoleillé"], ["cloudy", "nuageux"], ["windy", "venteux"], ["foggy", "brumeux"]],
  "La température": [["hot", "chaud"], ["cold", "froid"], ["warm", "doux"], ["degrees", "degrés"]],
  "Les moments de la journée": [["morning", "matin"], ["afternoon", "après-midi"], ["evening", "soir"], ["midnight", "minuit"]],
  "Hier, aujourd'hui, demain": [["yesterday", "hier"], ["today", "aujourd’hui"], ["tomorrow", "demain"], ["next week", "la semaine prochaine"]],
  "Les saisons et les mois": [["spring", "printemps"], ["summer", "été"], ["autumn", "automne"], ["winter", "hiver"]],
  "Dire l'heure": [["o’clock", "pile"], ["quarter past", "et quart"], ["half past", "et demie"], ["quarter to", "moins le quart"]],
  // A1.12
  "Saluer selon le moment": [["Good morning", "bonjour (matin)"], ["Good afternoon", "bonjour (après-midi)"], ["Good evening", "bonsoir"], ["Good night", "bonne nuit"]],
  "Merci, pardon, s'il vous plaît": [["Thank you very much", "merci beaucoup"], ["You’re welcome", "de rien"], ["Excuse me", "excusez-moi"], ["I’m sorry", "je suis désolé(e)"]],
  "Demander poliment": [["Could you…?", "pourriez-vous… ?"], ["Would you mind…?", "cela vous dérangerait-il de… ?"], ["Can I…?", "puis-je… ?"], ["May I…?", "puis-je… ? (formel)"]],
  "Prendre des nouvelles": [["How are you?", "comment vas-tu ?"], ["I’m fine, thanks", "je vais bien, merci"], ["Not bad", "pas mal"], ["And you?", "et toi ?"]],
  "Les connecteurs": [["and", "et"], ["but", "mais"], ["because", "parce que"], ["so", "donc"]],
  "Finir une conversation": [["Goodbye", "au revoir"], ["See you soon", "à bientôt"], ["Take care", "prends soin de toi"], ["Have a nice day", "bonne journée"]],
};
export function withVocabExtra(p) {
  const x = V[p.title]; if (!x || p._ve || !p.words) return p;
  const seen = new Set(p.words.map((w) => String(w[0]).toLowerCase().trim()));
  const add = x.filter((w) => !seen.has(w[0].toLowerCase()));
  p.words = [...p.words, ...add]; p._ve = 1; return p;
}
