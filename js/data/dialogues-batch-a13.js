// The Roots — A1.3 Conversation : 9 répliques par dialogue (3 écrans de 3 questions).
export const BATCH_A13 = {
 "Inviter un ami": [
  {
   "npc": "Hi! Do you want to come to the cinema?",
   "ok": [
    "\\b(yes|no|sure|of course|great|sorry)\\b"
   ],
   "model": "Yes, of course! Great idea!",
   "hint": "Accepte ou refuse poliment."
  },
  {
   "npc": "Let's meet at six. Is that OK?",
   "ok": [
    "\\b(yes|ok|okay|sure|fine|great|see you|sorry)\\b"
   ],
   "model": "Yes, OK. See you at six!",
   "hint": "Dis si ça te va."
  },
  {
   "npc": "Is Saturday OK for you?",
   "ok": [
    "\\b(yes|no|ok|okay|great|sorry|saturday|sunday|friday)\\b"
   ],
   "model": "Yes, Saturday is great.",
   "hint": "Réponds."
  },
  {
   "npc": "Where do we meet?",
   "ok": [
    "\\b(at|in front of|outside|near)\\s+(the|a|my)\\s+\\w+"
   ],
   "model": "Let's meet at the cinema.",
   "hint": "Propose un lieu avec « Let's meet… »."
  },
  {
   "npc": "Do you like action films?",
   "ok": [
    "\\b(yes|no)\\b|\\bi (like|love|don't like|do not like|hate)\\b"
   ],
   "model": "Yes, I love action films.",
   "hint": "Réponds par oui ou non."
  },
  {
   "npc": "Do you want popcorn?",
   "ok": [
    "\\b(yes|no|please|thanks|thank)\\b"
   ],
   "model": "Yes, please! I love popcorn.",
   "hint": "Réponds poliment."
  },
  {
   "npc": "Who do you want to bring?",
   "ok": [
    "\\b(i want|i'd like|my friend|my brother|my sister|bring)\\b"
   ],
   "model": "I want to bring my friend Tom.",
   "hint": "Dis qui vient avec toi."
  },
  {
   "npc": "What is your favourite film?",
   "ok": [
    "\\b(my favourite|i like|i love|favourite)\\b"
   ],
   "model": "My favourite film is a comedy.",
   "hint": "Dis ton film préféré."
  },
  {
   "npc": "See you later!",
   "ok": [
    "\\b(see you|bye|goodbye)\\b"
   ],
   "model": "See you later! Bye!",
   "hint": "Dis au revoir."
  }
 ],
 "Mon meilleur ami": [
  {
   "npc": "Who is your best friend?",
   "ok": [
    "\\bmy best friend is\\s+\\w+|\\b\\w+ is my (best )?friend|\\b(he|she)('s| is)\\b"
   ],
   "model": "My best friend is Max.",
   "hint": "Commence par « My best friend is… »."
  },
  {
   "npc": "How old is he?",
   "ok": [
    "\\b(he is|he's)\\s+(\\d{1,2}|\\w+teen|twelve|eleven|ten)\\b"
   ],
   "model": "He is fourteen.",
   "hint": "Dis son âge."
  },
  {
   "npc": "Where does he live?",
   "ok": [
    "\\b(he lives|he's from|he is from)\\b"
   ],
   "model": "He lives in London.",
   "hint": "Dis où il habite."
  },
  {
   "npc": "What does he do after school?",
   "ok": [
    "\\b(he|we|they) (plays?|goes?|watches?|does?|chats?|hang)\\b"
   ],
   "model": "He plays football after school.",
   "hint": "Dis une activité."
  },
  {
   "npc": "Does he like sport?",
   "ok": [
    "\\b(yes|no)\\b|\\bhe (likes|doesn't|does not|loves)\\b"
   ],
   "model": "Yes, he does.",
   "hint": "Réponds par oui ou non."
  },
  {
   "npc": "What is he like?",
   "ok": [
    "\\b(he is|he's)\\s+(very\\s+)?\\w+"
   ],
   "model": "He is funny and kind.",
   "hint": "Décris-le."
  },
  {
   "npc": "How often do you meet?",
   "ok": [
    "\\b(every|always|often|sometimes|never|on)\\b"
   ],
   "model": "We meet every Saturday.",
   "hint": "Utilise « every », « often »…"
  },
  {
   "npc": "Do you chat online?",
   "ok": [
    "\\b(yes|no|we chat)\\b"
   ],
   "model": "Yes, we chat every day.",
   "hint": "Réponds par oui ou non."
  },
  {
   "npc": "Is he a good friend?",
   "ok": [
    "\\b(yes|no|he is|he's)\\b"
   ],
   "model": "Yes, he is a very good friend.",
   "hint": "Réponds."
  }
 ],
 "Au parc avec un ami": [
  {
   "npc": "Hi! Are you free today?",
   "ok": [
    "\\b(yes|no)\\b|\\b(i am|i'm|im)\\b"
   ],
   "model": "Yes, I am free.",
   "hint": "Réponds oui ou non."
  },
  {
   "npc": "Let's go to the park!",
   "ok": [
    "\\b(yes|ok|okay|good idea|great|sure|let's)\\b"
   ],
   "model": "Great idea!",
   "hint": "Accepte."
  },
  {
   "npc": "What time do we meet?",
   "ok": [
    "\\b(at|let's meet|we meet)\\s*\\w+"
   ],
   "model": "Let's meet at three.",
   "hint": "Propose une heure."
  },
  {
   "npc": "What do you like to do there?",
   "ok": [
    "\\bi (like|love|play)\\b"
   ],
   "model": "I like to play football.",
   "hint": "Dis ce que tu aimes faire."
  },
  {
   "npc": "Do you have a ball?",
   "ok": [
    "\\b(yes|no)\\b|\\bi (have|don't)\\b"
   ],
   "model": "Yes, I have a ball.",
   "hint": "Réponds par oui ou non."
  },
  {
   "npc": "Who else can come?",
   "ok": [
    "\\b(my|can|friend|brother|sister|come)\\b"
   ],
   "model": "My friend Sara can come.",
   "hint": "Cite quelqu'un."
  },
  {
   "npc": "Is the park far from your house?",
   "ok": [
    "\\b(yes|no|near|far|it is|it's)\\b"
   ],
   "model": "No, it is near my house.",
   "hint": "Réponds."
  },
  {
   "npc": "Do you want a drink?",
   "ok": [
    "\\b(yes|no|please|thank|thanks)\\b"
   ],
   "model": "Yes, please. Thank you!",
   "hint": "Réponds poliment."
  },
  {
   "npc": "Perfect. See you at three.",
   "ok": [
    "\\b(bye|goodbye|see you|thank you|thanks|thank)\\b"
   ],
   "model": "See you at three!",
   "hint": "Dis au revoir."
  }
 ],
 "Ma meilleure amie": [
  {
   "npc": "Who is your best friend?",
   "ok": [
    "\\b(my best friend is|it's|it is|she is|he is)\\s*[a-z]+"
   ],
   "model": "My best friend is Emma.",
   "hint": "Dis qui c'est."
  },
  {
   "npc": "How old is she?",
   "ok": [
    "\\b(she is|she's)\\s+(\\d{1,2}|[a-z]+teen|twelve|eleven|ten)\\b"
   ],
   "model": "She is fifteen.",
   "hint": "Dis son âge."
  },
  {
   "npc": "Where does she live?",
   "ok": [
    "\\b(she lives|she's from|she is from|near)\\b"
   ],
   "model": "She lives near my house.",
   "hint": "Dis où elle habite."
  },
  {
   "npc": "What does she like?",
   "ok": [
    "\\bshe (likes|loves)\\b"
   ],
   "model": "She likes music.",
   "hint": "Dis ce qu'elle aime."
  },
  {
   "npc": "Is she shy?",
   "ok": [
    "\\b(yes|no|she is|she isn't|she's)\\b"
   ],
   "model": "No, she isn't. She is very funny.",
   "hint": "Réponds."
  },
  {
   "npc": "What do you do together?",
   "ok": [
    "\\bwe (play|study|talk|go|eat|watch|listen|cook|chat)\\b"
   ],
   "model": "We listen to music together.",
   "hint": "Dis ce que vous faites."
  },
  {
   "npc": "How often do you see her?",
   "ok": [
    "\\b(every|always|often|sometimes|on)\\b"
   ],
   "model": "I see her every weekend.",
   "hint": "Utilise « every » ou « often »."
  },
  {
   "npc": "Does she play sport?",
   "ok": [
    "\\b(yes|no)\\b|\\bshe (plays|doesn't|does not)\\b"
   ],
   "model": "Yes, she plays tennis.",
   "hint": "Réponds."
  },
  {
   "npc": "She sounds nice!",
   "ok": [
    "\\b(thank you|thanks|thank|yes|she is|she's)\\b"
   ],
   "model": "Yes, she is very nice.",
   "hint": "Réponds."
  }
 ],
 "Inviter à une fête": [
  {
   "npc": "Hello! What's up?",
   "ok": [
    "\\b(hi|hello|fine|good|great|not much|i'm|i am)\\b"
   ],
   "model": "Hi! I'm fine, thanks.",
   "hint": "Salue."
  },
  {
   "npc": "Do you want to come to my party?",
   "ok": [
    "\\b(yes|no|i'd love to|i would love to|of course|sure)\\b"
   ],
   "model": "Yes, I'd love to!",
   "hint": "Accepte."
  },
  {
   "npc": "It's on Saturday at seven.",
   "ok": [
    "\\b(ok|okay|great|good|see you|saturday|seven|thanks|thank you)\\b"
   ],
   "model": "Great, see you on Saturday.",
   "hint": "Réponds."
  },
  {
   "npc": "Do you know my house?",
   "ok": [
    "\\b(yes|no|i)\\b"
   ],
   "model": "No, I don't. Where is it?",
   "hint": "Réponds."
  },
  {
   "npc": "Can you bring some music?",
   "ok": [
    "\\b(yes|no|sure|sorry|of course|ok)\\b"
   ],
   "model": "Yes, of course.",
   "hint": "Accepte ou refuse."
  },
  {
   "npc": "What food do you like?",
   "ok": [
    "\\bi (like|love)\\b|\\bmy favourite\\b"
   ],
   "model": "I like pizza and chicken.",
   "hint": "Dis ce que tu aimes manger."
  },
  {
   "npc": "Do you want to bring a friend?",
   "ok": [
    "\\b(yes|no|bring|friend)\\b"
   ],
   "model": "Yes, I want to bring my friend Tom.",
   "hint": "Réponds."
  },
  {
   "npc": "What is your friend's name?",
   "ok": [
    "\\b(his|her) name is\\b|\\b(it's|it is)\\b|\\bname\\b"
   ],
   "model": "His name is Tom.",
   "hint": "Dis son prénom."
  },
  {
   "npc": "See you on Saturday!",
   "ok": [
    "\\b(bye|goodbye|see you|thank you|thanks|thank)\\b"
   ],
   "model": "Thanks! See you on Saturday!",
   "hint": "Dis au revoir et remercie."
  }
 ],
 "Un nouvel ami": [
  {
   "npc": "Hi, I'm Ben. Are you Tom's friend?",
   "ok": [
    "\\b(yes|no)\\b|\\b(i am|i'm|im)\\b"
   ],
   "model": "Yes, I'm Tom's friend.",
   "hint": "Réponds oui."
  },
  {
   "npc": "Nice to meet you. Do you play sports?",
   "ok": [
    "\\b(yes|no)\\b|\\bi play\\b"
   ],
   "model": "Yes, I play tennis.",
   "hint": "Réponds."
  },
  {
   "npc": "What is your name?",
   "ok": [
    "\\b(my name is|i am|i'm|it's)\\s*\\w+"
   ],
   "model": "My name is Sam.",
   "hint": "Dis ton prénom."
  },
  {
   "npc": "How old are you?",
   "ok": [
    "\\b(i am|i'm)\\s+(\\d{1,2}|\\w+teen|twelve|eleven|ten)\\b"
   ],
   "model": "I am fourteen.",
   "hint": "Dis ton âge."
  },
  {
   "npc": "Where do you live?",
   "ok": [
    "\\bi live\\b|\\bi'm from\\b|\\bi am from\\b"
   ],
   "model": "I live in Leeds.",
   "hint": "Dis où tu habites."
  },
  {
   "npc": "Do you want to play with us?",
   "ok": [
    "\\b(yes|no|i'd love to|sure|of course|ok)\\b"
   ],
   "model": "Yes, sure!",
   "hint": "Accepte."
  },
  {
   "npc": "What is your favourite sport?",
   "ok": [
    "\\b(my favourite|i like|i love|favourite)\\b"
   ],
   "model": "My favourite sport is football.",
   "hint": "Dis ton sport préféré."
  },
  {
   "npc": "Do you play on Saturdays?",
   "ok": [
    "\\b(yes|no|i play|on saturdays)\\b"
   ],
   "model": "Yes, I play on Saturdays.",
   "hint": "Réponds."
  },
  {
   "npc": "Great. See you tomorrow!",
   "ok": [
    "\\b(bye|goodbye|see you)\\b"
   ],
   "model": "See you tomorrow!",
   "hint": "Dis au revoir."
  }
 ],
 "Un message à un ami": [
  {
   "npc": "What are you doing on Sunday?",
   "ok": [
    "\\b(i am|i'm|im|i play|i go|i watch|i stay|nothing)\\b"
   ],
   "model": "I'm playing video games.",
   "hint": "Dis ce que tu fais."
  },
  {
   "npc": "Do you play online with friends?",
   "ok": [
    "\\b(yes|no)\\b|\\bi play\\b"
   ],
   "model": "Yes, I play with my friends.",
   "hint": "Réponds."
  },
  {
   "npc": "Which game do you like?",
   "ok": [
    "\\bi (like|love)\\b|\\bmy favourite\\b"
   ],
   "model": "I like football games.",
   "hint": "Dis ton jeu préféré."
  },
  {
   "npc": "Can I play with you?",
   "ok": [
    "\\b(yes|no|sure|of course|ok|okay)\\b"
   ],
   "model": "Yes, of course!",
   "hint": "Accepte."
  },
  {
   "npc": "What time do you play?",
   "ok": [
    "\\b(at|i play)\\s*\\w+"
   ],
   "model": "I play at four.",
   "hint": "Dis l'heure."
  },
  {
   "npc": "Do you have a headset?",
   "ok": [
    "\\b(yes|no)\\b|\\bi (have|don't)\\b"
   ],
   "model": "Yes, I have a headset.",
   "hint": "Réponds."
  },
  {
   "npc": "Who else plays with you?",
   "ok": [
    "\\b(my|plays|friend|cousin|brother|sister)\\b"
   ],
   "model": "My cousin plays with us.",
   "hint": "Cite quelqu'un."
  },
  {
   "npc": "Is it fun?",
   "ok": [
    "\\b(yes|no|it is|it's|fun|great)\\b"
   ],
   "model": "Yes, it is great fun!",
   "hint": "Réponds."
  },
  {
   "npc": "Thanks! Talk to you soon.",
   "ok": [
    "\\b(bye|goodbye|see you|thank you|thanks|thank)\\b"
   ],
   "model": "See you soon!",
   "hint": "Dis au revoir."
  }
 ],
 "Au café entre amis": [
  {
   "npc": "Hello! How are you?",
   "ok": [
    "\\b(i am|i'm|im|fine|good|great)\\b"
   ],
   "model": "I'm fine, thanks. And you?",
   "hint": "Dis comment tu vas."
  },
  {
   "npc": "We're good. What do you want to drink?",
   "ok": [
    "\\b(i'd like|i would like|i want|a|an)\\b"
   ],
   "model": "I'd like a tea, please.",
   "hint": "Commande une boisson."
  },
  {
   "npc": "Do you want something to eat?",
   "ok": [
    "\\b(yes|no|i'd like|i would like|please)\\b"
   ],
   "model": "Yes, I'd like a sandwich.",
   "hint": "Réponds."
  },
  {
   "npc": "Do you like coffee?",
   "ok": [
    "\\b(yes|no)\\b|\\bi (like|love|don't|do not)\\b"
   ],
   "model": "No, I don't like coffee.",
   "hint": "Réponds."
  },
  {
   "npc": "Is the café near your house?",
   "ok": [
    "\\b(yes|no|near|far|it is|it's)\\b"
   ],
   "model": "Yes, it is near my house.",
   "hint": "Réponds."
  },
  {
   "npc": "How often do you come here?",
   "ok": [
    "\\b(every|always|often|sometimes|never|on)\\b"
   ],
   "model": "I come here every Friday.",
   "hint": "Utilise « every » ou « sometimes »."
  },
  {
   "npc": "Do you want sugar?",
   "ok": [
    "\\b(yes|no|please|thank|thanks)\\b"
   ],
   "model": "No, thank you.",
   "hint": "Réponds poliment."
  },
  {
   "npc": "Is this table OK for you?",
   "ok": [
    "\\b(yes|no|ok|okay|perfect|great|fine)\\b"
   ],
   "model": "Yes, it's perfect.",
   "hint": "Accepte."
  },
  {
   "npc": "OK! Here is your tea.",
   "ok": [
    "\\b(thank you|thanks|thank)\\b"
   ],
   "model": "Thank you!",
   "hint": "Remercie."
  }
 ],
 "Mes amis d'école": [
  {
   "npc": "Who are your friends at school?",
   "ok": [
    "\\b(my friends are|my friend|they are)\\b|\\b[a-z]+ and [a-z]+\\b"
   ],
   "model": "My friends are Léa and Max.",
   "hint": "Cite deux amis."
  },
  {
   "npc": "Are they in your class?",
   "ok": [
    "\\b(yes|no)\\b|\\b(they are|they're)\\b"
   ],
   "model": "Yes, they are in my class.",
   "hint": "Réponds."
  },
  {
   "npc": "What are they like?",
   "ok": [
    "\\b(they are|they're)\\s+(very\\s+)?\\w+"
   ],
   "model": "They are funny and kind.",
   "hint": "Décris-les."
  },
  {
   "npc": "What do you do together?",
   "ok": [
    "\\bwe (play|study|talk|go|eat|watch|listen)\\b"
   ],
   "model": "We play football together.",
   "hint": "Dis ce que vous faites."
  },
  {
   "npc": "Where do you eat lunch?",
   "ok": [
    "\\b(we eat|we have|in the|at the)\\b"
   ],
   "model": "We eat lunch in the canteen.",
   "hint": "Réponds."
  },
  {
   "npc": "Do they live near you?",
   "ok": [
    "\\b(yes|no|they live|near|far)\\b"
   ],
   "model": "Yes, they live near my house.",
   "hint": "Réponds."
  },
  {
   "npc": "Do you see them at weekends?",
   "ok": [
    "\\b(yes|no|we meet|on)\\b"
   ],
   "model": "Yes, we meet on Saturdays.",
   "hint": "Réponds."
  },
  {
   "npc": "Who is your best friend?",
   "ok": [
    "\\b(my best friend is|it's|it is)\\b"
   ],
   "model": "My best friend is Léa.",
   "hint": "Cite-le."
  },
  {
   "npc": "That sounds fun!",
   "ok": [
    "\\b(thank you|thanks|thank|yes|it is|it's|great)\\b"
   ],
   "model": "Yes, it is great fun!",
   "hint": "Réponds."
  }
 ],
 "Dire non poliment": [
  {
   "npc": "Do you want to come to the cinema tonight?",
   "ok": [
    "\\b(sorry|no|i can't|i cannot|i'm busy|i am busy)\\b"
   ],
   "model": "Sorry, I can't. I'm busy.",
   "hint": "Refuse poliment."
  },
  {
   "npc": "Oh no! Why?",
   "ok": [
    "\\b(i have|i must|i'm|i am|homework|work|study)\\b"
   ],
   "model": "I have homework.",
   "hint": "Donne une raison."
  },
  {
   "npc": "Are you free tomorrow?",
   "ok": [
    "\\b(yes|no|free|i am|i'm)\\b"
   ],
   "model": "Yes, I am free tomorrow.",
   "hint": "Réponds."
  },
  {
   "npc": "What about Saturday?",
   "ok": [
    "\\b(yes|no|ok|okay|good|great|sorry|saturday)\\b"
   ],
   "model": "Saturday is good for me.",
   "hint": "Réponds."
  },
  {
   "npc": "What time is good for you?",
   "ok": [
    "\\b(at|around)\\s*\\w+|\\d"
   ],
   "model": "At six is good for me.",
   "hint": "Propose une heure."
  },
  {
   "npc": "Where do we meet?",
   "ok": [
    "\\b(at|in front of|outside|near)\\s+(the|a|my)\\s+\\w+"
   ],
   "model": "Let's meet at the park.",
   "hint": "Propose un lieu."
  },
  {
   "npc": "Do you want to bring a friend?",
   "ok": [
    "\\b(yes|no|bring|friend)\\b"
   ],
   "model": "Yes, I want to bring Sam.",
   "hint": "Réponds."
  },
  {
   "npc": "Great! Do you want a drink after the film?",
   "ok": [
    "\\b(yes|no|good idea|sure|please)\\b"
   ],
   "model": "Yes, that is a good idea.",
   "hint": "Réponds."
  },
  {
   "npc": "Great! See you Saturday.",
   "ok": [
    "\\b(bye|goodbye|see you)\\b"
   ],
   "model": "See you Saturday!",
   "hint": "Dis au revoir."
  }
 ],
 "Décrire un ami": [
  {
   "npc": "Who is your new friend?",
   "ok": [
    "\\b(his name is|he is|he's|her name is|she is|she's|it's)\\s*[a-z]+"
   ],
   "model": "His name is Adam.",
   "hint": "Dis qui c'est."
  },
  {
   "npc": "How old is he?",
   "ok": [
    "\\b(he is|he's)\\s+(\\d{1,2}|\\w+teen|twelve|eleven|ten)\\b"
   ],
   "model": "He is fifteen.",
   "hint": "Dis son âge."
  },
  {
   "npc": "What is he like?",
   "ok": [
    "\\b(he is|he's)\\s+(very\\s+)?\\w+"
   ],
   "model": "He is funny and kind.",
   "hint": "Décris-le."
  },
  {
   "npc": "What does he look like?",
   "ok": [
    "\\b(he is|he has|he's)\\s+\\w+"
   ],
   "model": "He is tall and he has short hair.",
   "hint": "Décris-le physiquement."
  },
  {
   "npc": "Does he like sports?",
   "ok": [
    "\\b(yes|no)\\b|\\bhe (likes|plays|loves)\\b"
   ],
   "model": "Yes, he plays basketball.",
   "hint": "Réponds."
  },
  {
   "npc": "Where does he live?",
   "ok": [
    "\\b(he lives|he's from|he is from|near)\\b"
   ],
   "model": "He lives near my school.",
   "hint": "Dis où il habite."
  },
  {
   "npc": "Is he in your class?",
   "ok": [
    "\\b(yes|no|he is|he's)\\b"
   ],
   "model": "No, he is in another class.",
   "hint": "Réponds."
  },
  {
   "npc": "What do you do together?",
   "ok": [
    "\\bwe (play|study|talk|go|eat|watch|listen)\\b"
   ],
   "model": "We play games together.",
   "hint": "Dis ce que vous faites."
  },
  {
   "npc": "He sounds great!",
   "ok": [
    "\\b(thank you|thanks|thank|yes|he is|he's)\\b"
   ],
   "model": "Yes, he is a good friend.",
   "hint": "Réponds."
  }
 ]
};
