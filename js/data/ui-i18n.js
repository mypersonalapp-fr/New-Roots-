// Traduction automatique de l'habillage de l'appli (textes qui étaient écrits en français dans le code).
// Fonctionne texte par texte (correspondance exacte) selon la langue d'interface choisie. Le contenu à apprendre
// (mots, phrases, leçons) n'est jamais traduit ici. Format : français ¦ English ¦ Português ¦ Español
import { store } from "./store.js?v=20260930a";

const RAW = `
Questions fréquentes¦Frequently asked questions¦Perguntas frequentes¦Preguntas frecuentes
Rien trouvé. Essaie un autre mot.¦Nothing found. Try another word.¦Nada encontrado. Tenta outra palavra.¦No se encontró nada. Prueba otra palabra.
12 livres à lire en anglais, de la jeunesse au policier. Les niveaux sont indicatifs.¦12 books to read in English, from children's books to crime novels. Levels are approximate.¦12 livros para ler em inglês, do infantil ao policial. Os níveis são indicativos.¦12 libros para leer en inglés, de infantiles a policíacos. Los niveles son orientativos.
Pour les classiques, cherche l'édition simplifiée (Penguin Readers, Oxford Bookworms, Cambridge English Readers).¦For classics, look for the simplified edition (Penguin Readers, Oxford Bookworms, Cambridge English Readers).¦Para os clássicos, procura a edição simplificada (Penguin Readers, Oxford Bookworms, Cambridge English Readers).¦Para los clásicos, busca la edición simplificada (Penguin Readers, Oxford Bookworms, Cambridge English Readers).
Afficher le texte (sous-titres)¦Show text (subtitles)¦Mostrar o texto (legendas)¦Mostrar el texto (subtítulos)
Dialogues du quotidien avec voix de synthèse. Tu joues l'un des personnages : 3 ou 4 fois, tu choisis ta réponse.¦Everyday dialogues with a synthetic voice. You play one of the characters: 3 or 4 times, you choose your answer.¦Diálogos do dia a dia com voz sintética. Tu fazes uma das personagens: 3 ou 4 vezes, escolhes a tua resposta.¦Diálogos cotidianos con voz sintética. Haces de uno de los personajes: 3 o 4 veces eliges tu respuesta.
Expressions à retenir¦Expressions to remember¦Expressões a reter¦Expresiones para recordar
Refaire ce dialogue¦Redo this dialogue¦Refazer este diálogo¦Rehacer este diálogo
Transcription complète¦Full transcript¦Transcrição completa¦Transcripción completa
Une case par palier. Touche une case pour lire ses textes un par un.¦One box per stage. Tap a box to read its texts one by one.¦Uma caixa por nível. Toca numa caixa para ler os textos um a um.¦Una casilla por nivel. Toca una casilla para leer sus textos uno a uno.
‹ Précédente¦‹ Previous¦‹ Anterior¦‹ Anterior
🎧 Écoute¦🎧 Listen¦🎧 Ouvir¦🎧 Escucha
Écoute¦Listen¦Ouvir¦Escucha
🔊 Réécouter¦🔊 Listen again¦🔊 Ouvir de novo¦🔊 Escuchar otra vez
Aucune conversation en réserve pour l'instant. Termine (et réussis) une leçon dans Mes cours pour débloquer la suivante.¦No conversation available yet. Finish (and pass) a lesson in My courses to unlock the next one.¦Ainda não há conversas disponíveis. Termina (e passa) uma lição em Os meus cursos para desbloquear a seguinte.¦Aún no hay conversaciones disponibles. Termina (y aprueba) una lección en Mis cursos para desbloquear la siguiente.
Discute avec l'IA dans ta langue d'apprentissage, à l'écrit ou au micro.¦Chat with the AI in the language you are learning, in writing or by voice.¦Conversa com a IA na língua que estás a aprender, por escrito ou por voz.¦Conversa con la IA en el idioma que aprendes, por escrito o por voz.
Ensuite, chaque leçon réussie te donne une conversation sur son thème.¦After that, each lesson you pass gives you a conversation on its topic.¦Depois, cada lição concluída dá-te uma conversa sobre o seu tema.¦Después, cada lección superada te da una conversación sobre su tema.
Fermer la conversation¦Close the conversation¦Fechar a conversa¦Cerrar la conversación
Mode créatrice : conversation d'essai accessible quand même (les apprentis, eux, voient seulement le message ci-dessus).¦Creator mode: trial conversation still available (learners only see the message above).¦Modo criadora: conversa de teste disponível na mesma (os aprendentes só veem a mensagem acima).¦Modo creadora: conversación de prueba disponible igualmente (los alumnos solo ven el mensaje de arriba).
Réessayer¦Try again¦Tentar de novo¦Reintentar
Écouter¦Listen¦Ouvir¦Escuchar
Écris ta réponse… ou appuie sur 🎤¦Write your answer… or press 🎤¦Escreve a tua resposta… ou carrega em 🎤¦Escribe tu respuesta… o pulsa 🎤
💬 Commencer la conversation¦💬 Start the conversation¦💬 Começar a conversa¦💬 Empezar la conversación
📋 Ton bilan¦📋 Your summary¦📋 O teu balanço¦📋 Tu resumen
🔌 L'IA n'est pas encore branchée.¦🔌 The AI is not connected yet.¦🔌 A IA ainda não está ligada.¦🔌 La IA aún no está conectada.
🔒 La Conversation se débloque bientôt¦🔒 Conversation unlocks soon¦🔒 A Conversa desbloqueia em breve¦🔒 La Conversación se desbloqueará pronto
6 situations : avion, hôtel, supermarché, vêtements, train, musée — avec des questions imprévues.¦6 situations: plane, hotel, supermarket, clothes, train, museum — with unexpected questions.¦6 situações: avião, hotel, supermercado, roupa, comboio, museu — com perguntas imprevistas.¦6 situaciones: avión, hotel, supermercado, ropa, tren, museo — con preguntas imprevistas.
7 jours, 6 phrases indispensables par jour, pour être prêt(e) le jour du départ.¦7 days, 6 essential phrases a day, to be ready on departure day.¦7 dias, 6 frases essenciais por dia, para estares pronto(a) no dia da partida.¦7 días, 6 frases imprescindibles al día, para estar listo(a) el día de la salida.
Bientôt : l'exploration de ce pays arrive après le Royaume-Uni.¦Coming soon: exploring this country comes after the United Kingdom.¦Em breve: a exploração deste país vem depois do Reino Unido.¦Próximamente: la exploración de este país llega después del Reino Unido.
Choisir une autre situation¦Choose another situation¦Escolher outra situação¦Elegir otra situación
Entraîne-toi aux situations d'un vrai séjour, ou prépare un départ proche.¦Practise real-trip situations, or prepare for an upcoming departure.¦Treina situações de uma viagem real, ou prepara uma partida próxima.¦Practica situaciones de un viaje real, o prepara una salida cercana.
La bonne réponse :¦The right answer:¦A resposta certa:¦La respuesta correcta:
Les phrases à retenir¦Phrases to remember¦Frases a reter¦Frases para recordar
Un jour = 6 phrases indispensables (écoute, répète) puis un petit quiz. 7 jours et tu as l'essentiel pour ton séjour.¦One day = 6 essential phrases (listen, repeat) then a short quiz. 7 days and you have the essentials for your trip.¦Um dia = 6 frases essenciais (ouve, repete) e depois um pequeno quiz. 7 dias e tens o essencial para a tua viagem.¦Un día = 6 frases imprescindibles (escucha, repite) y luego un pequeño quiz. 7 días y tienes lo esencial para tu viaje.
✓ Bien répondu !¦✓ Well done!¦✓ Bem respondido!¦✓ ¡Bien respondido!
🎉 Programme terminé : tu es prêt(e) pour le Royaume-Uni ! Tu peux refaire n'importe quel jour.¦🎉 Programme complete: you are ready for the United Kingdom! You can redo any day.¦🎉 Programa concluído: estás pronto(a) para o Reino Unido! Podes refazer qualquer dia.¦🎉 Programa terminado: ¡estás listo(a) para el Reino Unido! Puedes repetir cualquier día.
🎤 Je répète¦🎤 I repeat¦🎤 Eu repito¦🎤 Repito
👁 Voir la phrase¦👁 See the sentence¦👁 Ver a frase¦👁 Ver la frase
💡 La réponse :¦💡 The answer:¦💡 A resposta:¦💡 La respuesta:
💡 Ta réponse commence par :¦💡 Your answer starts with:¦💡 A tua resposta começa por:¦💡 Tu respuesta empieza por:
📅 Mon départ :¦📅 My departure:¦📅 A minha partida:¦📅 Mi salida:
🔁 Rejouer (autre imprévu)¦🔁 Play again (another surprise)¦🔁 Jogar de novo (outro imprevisto)¦🔁 Jugar otra vez (otro imprevisto)
🔊 Écouter¦🔊 Listen¦🔊 Ouvir¦🔊 Escuchar
🧭 Explorer ce pays¦🧭 Explore this country¦🧭 Explorar este país¦🧭 Explorar este país
🧭 Explorer le Royaume-Uni¦🧭 Explore the United Kingdom¦🧭 Explorar o Reino Unido¦🧭 Explorar el Reino Unido
🧳 Je pars bientôt · Mode Survie¦🧳 Leaving soon · Survival mode¦🧳 Parto em breve · Modo Sobrevivência¦🧳 Salgo pronto · Modo Supervivencia
🧳 Je pars bientôt · Survie¦🧳 Leaving soon · Survival¦🧳 Parto em breve · Sobrevivência¦🧳 Salgo pronto · Supervivencia
Exemple de mise en page¦Layout example¦Exemplo de paginação¦Ejemplo de maquetación
Le texte¦The text¦O texto¦El texto
Numéros suivants¦Next issues¦Próximos números¦Próximos números
Reviens vite, ou essaie un autre niveau.¦Come back soon, or try another level.¦Volta depressa, ou tenta outro nível.¦Vuelve pronto, o prueba otro nivel.
Réponse modèle¦Model answer¦Resposta modelo¦Respuesta modelo
Termine le précédent pour l'ouvrir¦Finish the previous one to open it¦Termina o anterior para o abrir¦Termina el anterior para abrirlo
Touche un mot souligné pour sa traduction.¦Tap an underlined word for its translation.¦Toca numa palavra sublinhada para ver a tradução.¦Toca una palabra subrayada para ver su traducción.
Vérifier¦Check¦Verificar¦Comprobar
📖 Revoir le texte¦📖 Review the text¦📖 Rever o texto¦📖 Repasar el texto
📰 Actualités¦📰 News¦📰 Notícias¦📰 Noticias
Palier A1 — les bases¦Stage A1 — the basics¦Nível A1 — as bases¦Nivel A1 — lo básico
Palier A2 — un peu plus loin¦Stage A2 — a little further¦Nível A2 — um pouco mais longe¦Nivel A2 — un poco más lejos
Palier B1 — pour aller plus loin¦Stage B1 — going further¦Nível B1 — para ir mais longe¦Nivel B1 — para ir más lejos
Remets les mots dans le bon ordre :¦Put the words in the right order:¦Coloca as palavras na ordem certa:¦Pon las palabras en el orden correcto:
Ta réponse…¦Your answer…¦A tua resposta…¦Tu respuesta…
6 niveaux, 12 paliers par niveau. Ton parcours s'affichera ici dès que le test de niveau sera fait.¦6 levels, 12 stages per level. Your path will appear here once the placement test is done.¦6 níveis, 12 etapas por nível. O teu percurso aparecerá aqui assim que o teste de nível estiver feito.¦6 niveles, 12 etapas por nivel. Tu recorrido aparecerá aquí cuando hagas el test de nivel.
Accès temporaire pendant l'installation : à verrouiller ensuite (UNLOCK_COURSES_PREVIEW dans dev-config.js).¦Temporary access during setup: to be locked afterwards (UNLOCK_COURSES_PREVIEW in dev-config.js).¦Acesso temporário durante a instalação: a bloquear depois (UNLOCK_COURSES_PREVIEW em dev-config.js).¦Acceso temporal durante la instalación: se bloqueará después (UNLOCK_COURSES_PREVIEW en dev-config.js).
Atelier des blocages du francophone¦Workshop on French speakers' sticking points¦Oficina dos bloqueios do francófono¦Taller de los bloqueos del francófono
Aucun rattrapage pour l'instant.¦No catch-up exercises for now.¦Nenhuma recuperação por agora.¦Ninguna recuperación por ahora.
Aucune lacune détectée 🎉¦No gaps detected 🎉¦Nenhuma lacuna detetada 🎉¦Ninguna laguna detectada 🎉
Changer la présentation¦Change the layout¦Mudar a apresentação¦Cambiar la presentación
Chapitre terminé¦Chapter finished¦Capítulo concluído¦Capítulo terminado
Commencer la mission du jour¦Start today's mission¦Começar a missão do dia¦Empezar la misión del día
Contrôles A1 · A2 · final¦Tests A1 · A2 · final¦Controlos A1 · A2 · final¦Controles A1 · A2 · final
Dans la leçon, à l'étape « Lecture », juste après le texte.¦In the lesson, at the "Reading" step, just after the text.¦Na lição, na etapa «Leitura», logo a seguir ao texto.¦En la lección, en el paso «Lectura», justo después del texto.
Dictée¦Dictation¦Ditado¦Dictado
Elle ne compte pas dans les 40 points du test.¦It does not count towards the test's 40 points.¦Não conta para os 40 pontos do teste.¦No cuenta para los 40 puntos del test.
Faire mes exercices de rattrapage¦Do my catch-up exercises¦Fazer os meus exercícios de recuperação¦Hacer mis ejercicios de recuperación
Fais la page « Traduction » d'une leçon : tes scores apparaîtront ici.¦Do the "Translation" page of a lesson: your scores will appear here.¦Faz a página «Tradução» de uma lição: as tuas notas aparecerão aqui.¦Haz la página «Traducción» de una lección: tus puntuaciones aparecerán aquí.
Fais la « Dictée » d'une leçon (Écrire en anglais) : tes scores apparaîtront ici.¦Do the "Dictation" of a lesson (Write in English): your scores will appear here.¦Faz o «Ditado» de uma lição (Escrever em inglês): as tuas notas aparecerão aqui.¦Haz el «Dictado» de una lección (Escribir en inglés): tus puntuaciones aparecerán aquí.
Grand contrôle A1¦Big test A1¦Grande controlo A1¦Gran control A1
Les blocages du francophone · L'atelier de grammaire espagnole¦French speakers' sticking points · The Spanish grammar workshop¦Os bloqueios do francófono · A oficina de gramática espanhola¦Los bloqueos del francófono · El taller de gramática española
Les contrôles arrivent avec les leçons de cette langue.¦Tests will arrive with this language's lessons.¦Os controlos chegam com as lições desta língua.¦Los controles llegarán con las lecciones de este idioma.
Mes ateliers¦My workshops¦As minhas oficinas¦Mis talleres
Mes contrôles¦My tests¦Os meus controlos¦Mis controles
Mes missions¦My missions¦As minhas missões¦Mis misiones
Mes notes par compétence¦My scores by skill¦As minhas notas por competência¦Mis notas por competencia
Mes renforts¦My reinforcements¦Os meus reforços¦Mis refuerzos
Mes tests de fin de leçon¦My end-of-lesson tests¦Os meus testes de fim de lição¦Mis tests de fin de lección
Mode créatrice : essais illimités (à verrouiller plus tard dans dev-config.js).¦Creator mode: unlimited attempts (to be locked later in dev-config.js).¦Modo criadora: tentativas ilimitadas (a bloquear mais tarde em dev-config.js).¦Modo creadora: intentos ilimitados (se bloqueará más tarde en dev-config.js).
Mode vérification : A1 et A2 sont ouverts.¦Check mode: A1 and A2 are open.¦Modo verificação: A1 e A2 estão abertos.¦Modo verificación: A1 y A2 están abiertos.
Mon profil¦My profile¦O meu perfil¦Mi perfil
Mon profil · Mes contrôles · Mes missions¦My profile · My tests · My missions¦O meu perfil · Os meus controlos · As minhas missões¦Mi perfil · Mis controles · Mis misiones
Moyenne des tests¦Average of tests¦Média dos testes¦Media de los tests
Pas de traduction dans ce niveau.¦No translation at this level.¦Sem tradução neste nível.¦Sin traducción en este nivel.
Passe ton premier test de fin de leçon : tes notes apparaîtront ici.¦Take your first end-of-lesson test: your scores will appear here.¦Faz o teu primeiro teste de fim de lição: as tuas notas aparecerão aqui.¦Haz tu primer test de fin de lección: tus notas aparecerán aquí.
Passe ton premier test de fin de leçon : tes notes et tes lacunes apparaîtront ici.¦Take your first end-of-lesson test: your scores and gaps will appear here.¦Faz o teu primeiro teste de fim de lição: as tuas notas e lacunas aparecerão aqui.¦Haz tu primer test de fin de lección: tus notas y lagunas aparecerán aquí.
Radar des compétences¦Skills radar¦Radar de competências¦Radar de competencias
Repérées à partir de tes erreurs aux tests. L'appli a déjà préparé des exercices en plus.¦Spotted from your mistakes in tests. The app has already prepared extra exercises.¦Detetadas a partir dos teus erros nos testes. A app já preparou exercícios extra.¦Detectadas a partir de tus errores en los tests. La app ya ha preparado ejercicios extra.
Test passé avant la mise à jour : le détail se précisera quand tu le repasseras.¦Test taken before the update: details will improve when you retake it.¦Teste feito antes da atualização: o detalhe ficará mais preciso quando o refizeres.¦Test hecho antes de la actualización: el detalle mejorará cuando lo repitas.
Ton objectif :¦Your goal:¦O teu objetivo:¦Tu objetivo:
Tous les temps, les verbes clés, les structures, la prononciation et l'espagnol de la rue¦All tenses, key verbs, structures, pronunciation and street Spanish¦Todos os tempos, os verbos-chave, as estruturas, a pronúncia e o espanhol da rua¦Todos los tiempos, los verbos clave, las estructuras, la pronunciación y el español de la calle
Tous les temps, plus de 100 exercices chacun · formel et informel¦All tenses, over 100 exercises each · formal and informal¦Todos os tempos, mais de 100 exercícios cada · formal e informal¦Todos los tiempos, más de 100 ejercicios cada uno · formal e informal
Une série est réussie à partir de 8 phrases sur 10. Elle ne compte pas dans les 40 points du test.¦A set is passed with 8 sentences out of 10. It does not count towards the test's 40 points.¦Uma série é conseguida a partir de 8 frases em 10. Não conta para os 40 pontos do teste.¦Una serie se supera con 8 frases de 10. No cuenta para los 40 puntos del test.
X1 à X8 : les 8 points où l'on « bugue » en espagnol¦X1 to X8: the 8 points where people "get stuck" in Spanish¦X1 a X8: os 8 pontos onde se «bloqueia» em espanhol¦X1 a X8: los 8 puntos donde uno se «atasca» en español
À travailler :¦To work on:¦A trabalhar:¦Por trabajar:
‹ Mon parcours¦‹ My path¦‹ O meu percurso¦‹ Mi recorrido
← Mes ateliers¦← My workshops¦← As minhas oficinas¦← Mis talleres
↺ Mes rattrapages¦↺ My catch-ups¦↺ As minhas recuperações¦↺ Mis recuperaciones
↺ rattrapé¦↺ caught up¦↺ recuperado¦↺ recuperado
🌱 Mon parcours¦🌱 My path¦🌱 O meu percurso¦🌱 Mi recorrido
🎧 Dictée¦🎧 Dictation¦🎧 Ditado¦🎧 Dictado
🎵🎬 Musique & Ciné¦🎵🎬 Music & Movies¦🎵🎬 Música e Cinema¦🎵🎬 Música y Cine
🏁 Grand contrôle de fin de A1¦🏁 Big end-of-A1 test¦🏁 Grande controlo de fim de A1¦🏁 Gran control de fin de A1
📗 Mon parcours A2¦📗 My A2 path¦📗 O meu percurso A2¦📗 Mi recorrido A2
📘 Mon parcours A1¦📘 My A1 path¦📘 O meu percurso A1¦📘 Mi recorrido A1
📚 Le programme¦📚 The programme¦📚 O programa¦📚 El programa
🔁 Repasser le test de positionnement¦🔁 Retake the placement test¦🔁 Refazer o teste de nível¦🔁 Repetir el test de nivel
🔎 Lacunes détectées¦🔎 Gaps detected¦🔎 Lacunas detetadas¦🔎 Lagunas detectadas
🔓 Ouvrir les cours (mode vérification)¦🔓 Open the courses (check mode)¦🔓 Abrir os cursos (modo verificação)¦🔓 Abrir los cursos (modo verificación)
Ouvrir les cours (mode vérification)¦Open the courses (check mode)¦Abrir os cursos (modo verificação)¦Abrir los cursos (modo verificación)
🧠 Mes ateliers¦🧠 My workshops¦🧠 As minhas oficinas¦🧠 Mis talleres
↻ Refaire le test de niveau¦↻ Retake the placement test¦↻ Refazer o teste de nível¦↻ Repetir el test de nivel
Refaire le test de niveau¦Retake the placement test¦Refazer o teste de nível¦Repetir el test de nivel
Mon parcours¦My path¦O meu percurso¦Mi recorrido
Le programme¦The programme¦O programa¦El programa
Programme¦Programme¦Programa¦Programa
Anglais américain¦American English¦Inglês americano¦Inglés americano
Anglais¦English¦Inglês¦Inglés
Espagnol¦Spanish¦Espanhol¦Español
Portugais¦Portuguese¦Português¦Portugués
Big Ben, le Tube, l'afternoon tea… Explore l'anglais tel qu'on le parle à Londres.¦Big Ben, the Tube, afternoon tea… Explore English as it is spoken in London.¦Big Ben, o Tube, o afternoon tea… Explora o inglês como se fala em Londres.¦Big Ben, el Tube, el afternoon tea… Explora el inglés tal como se habla en Londres.
Fado, pastéis de nata et les voyelles « avalées » du portugais de Lisbonne.¦Fado, pastéis de nata and the "swallowed" vowels of Lisbon Portuguese.¦Fado, pastéis de nata e as vogais «engolidas» do português de Lisboa.¦Fado, pastéis de nata y las vocales «tragadas» del portugués de Lisboa.
Fais tourner le globe · touche un point lumineux¦Spin the globe · tap a glowing dot¦Roda o globo · toca num ponto luminoso¦Gira el globo · toca un punto luminoso
Globe terrestre à faire tourner du doigt¦Globe to spin with your finger¦Globo terrestre para rodar com o dedo¦Globo terráqueo para girar con el dedo
L'accent, les expressions et la culture américaine, de New York à la Californie.¦The accent, expressions and American culture, from New York to California.¦O sotaque, as expressões e a cultura americana, de Nova Iorque à Califórnia.¦El acento, las expresiones y la cultura estadounidense, de Nueva York a California.
Langues et pays¦Languages and countries¦Línguas e países¦Idiomas y países
Le globe a besoin d'une connexion internet pour se dessiner. Reviens sur l'onglet dès que tu es connectée.¦The globe needs an internet connection to draw itself. Come back to this tab once you are connected.¦O globo precisa de ligação à internet para se desenhar. Volta ao separador quando estiveres ligada.¦El globo necesita conexión a internet para dibujarse. Vuelve a la pestaña cuando estés conectada.
Plus chantant, plus ouvert : le portugais du Brésil, de Rio à São Paulo.¦More melodic, more open: Brazilian Portuguese, from Rio to São Paulo.¦Mais cantado, mais aberto: o português do Brasil, do Rio a São Paulo.¦Más cantarín, más abierto: el portugués de Brasil, de Río a São Paulo.
Portugais brésilien¦Brazilian Portuguese¦Português brasileiro¦Portugués brasileño
Portugais européen¦European Portuguese¦Português europeu¦Portugués europeo
Ta langue¦Your language¦A tua língua¦Tu idioma
Tapas, siesta et « vosotros » : l'espagnol de la péninsule.¦Tapas, siesta and "vosotros": the Spanish of the peninsula.¦Tapas, sesta e «vosotros»: o espanhol da península.¦Tapas, siesta y «vosotros»: el español de la península.
Ton point de départ. Toutes les langues de The Roots s'apprennent depuis le français.¦Your starting point. All The Roots languages are learned from French.¦O teu ponto de partida. Todas as línguas de The Roots se aprendem a partir do francês.¦Tu punto de partida. Todos los idiomas de The Roots se aprenden desde el francés.
Un espagnol réputé clair et chaleureux — « ¿Qué más? » veut dire « ça va ? ».¦A Spanish known for being clear and warm — "¿Qué más?" means "how are you?".¦Um espanhol conhecido por ser claro e caloroso — «¿Qué más?» quer dizer «como estás?».¦Un español conocido por ser claro y cálido — «¿Qué más?» significa «¿qué tal?».
Dis ta phrase à voix haute, puis réécoute-toi.¦Say your sentence out loud, then listen to yourself.¦Diz a tua frase em voz alta e depois ouve-te.¦Di tu frase en voz alta y luego escúchate.
Mini-défi¦Mini challenge¦Mini-desafio¦Mini reto
Pratique terminée !¦Practice finished!¦Prática concluída!¦¡Práctica terminada!
Relie chaque mot à son sens¦Match each word to its meaning¦Liga cada palavra ao seu sentido¦Une cada palabra con su significado
Remets les mots dans l'ordre¦Put the words in order¦Põe as palavras por ordem¦Pon las palabras en orden
Ta phrase…¦Your sentence…¦A tua frase…¦Tu frase…
Tape le mot en anglais.¦Type the word in English.¦Escreve a palavra em inglês.¦Escribe la palabra en inglés.
Touche les mots dans l'ordre¦Tap the words in order¦Toca nas palavras por ordem¦Toca las palabras en orden
Touche les mots dans l’ordre¦Tap the words in order¦Toca nas palavras por ordem¦Toca las palabras en orden
À toi ! Écris ta phrase¦Your turn! Write your sentence¦Agora tu! Escreve a tua frase¦¡Tu turno! Escribe tu frase
Écris ici…¦Write here…¦Escreve aqui…¦Escribe aquí…
Écris le mot qui manque¦Write the missing word¦Escreve a palavra que falta¦Escribe la palabra que falta
à revoir¦to review¦a rever¦por repasar
▶ Réécouter¦▶ Listen again¦▶ Ouvir de novo¦▶ Escuchar otra vez
Refaire une série¦Redo a set¦Refazer uma série¦Rehacer una serie
Série terminée¦Set finished¦Série concluída¦Serie terminada
6 missions pour t’entraîner. Non noté : ta note officielle reste celle du test.¦6 missions to practise. Not graded: your official score stays the test's.¦6 missões para treinares. Sem nota: a tua nota oficial continua a do teste.¦6 misiones para entrenarte. Sin nota: tu nota oficial sigue siendo la del test.
6 missions pour t’entraîner (non noté)¦6 missions to practise (not graded)¦6 missões para treinares (sem nota)¦6 misiones para entrenarte (sin nota)
Associe chaque pays à sa nationalité.¦Match each country to its nationality.¦Associa cada país à sua nacionalidade.¦Asocia cada país con su nacionalidad.
Complète les fiches d’identité¦Complete the ID cards¦Completa as fichas de identidade¦Completa las fichas de identidad
Construis le dialogue¦Build the dialogue¦Constrói o diálogo¦Construye el diálogo
Find the person : cheveux, yeux, vêtements.¦Find the person: hair, eyes, clothes.¦Find the person: cabelo, olhos, roupa.¦Find the person: pelo, ojos, ropa.
Le grand rassemblement¦The big gathering¦A grande reunião¦La gran reunión
Présente un personnage en anglais.¦Introduce a character in English.¦Apresenta uma personagem em inglês.¦Presenta un personaje en inglés.
Remets les mots dans l’ordre.¦Put the words in order.¦Põe as palavras por ordem.¦Pon las palabras en orden.
Retour à Roots City¦Back to Roots City¦Voltar a Roots City¦Volver a Roots City
Trouve la bonne personne¦Find the right person¦Encontra a pessoa certa¦Encuentra a la persona correcta
Écoute et remplis nom, âge et nationalité.¦Listen and fill in name, age and nationality.¦Ouve e preenche nome, idade e nacionalidade.¦Escucha y rellena nombre, edad y nacionalidad.
Écoute la description, touche la bonne personne.¦Listen to the description, tap the right person.¦Ouve a descrição, toca na pessoa certa.¦Escucha la descripción, toca a la persona correcta.
▶ Me réécouter¦▶ Listen to myself again¦▶ Ouvir-me de novo¦▶ Escucharme otra vez
✔ Je l’ai dit à voix haute¦✔ I said it out loud¦✔ Disse-o em voz alta¦✔ Lo he dicho en voz alta
🎉 Mission terminée !¦🎉 Mission complete!¦🎉 Missão concluída!¦🎉 ¡Misión terminada!
🎤 Maintenant, dis-le à voix haute !¦🎤 Now say it out loud!¦🎤 Agora diz em voz alta!¦🎤 ¡Ahora dilo en voz alta!
(Sur iPhone, l’appli ne comprend pas ta voix : écris aussi ta réponse pour être corrigé.)¦(On iPhone, the app cannot understand your voice: also write your answer to get corrected.)¦(No iPhone, a app não percebe a tua voz: escreve também a tua resposta para seres corrigido.)¦(En iPhone, la app no entiende tu voz: escribe también tu respuesta para que te corrijan.)
7 jours pour ancrer les acquis.¦7 days to lock in what you learned.¦7 dias para fixar o que aprendeste.¦7 días para afianzar lo aprendido.
Afficher la transcription¦Show the transcript¦Mostrar a transcrição¦Mostrar la transcripción
Appuie et parle¦Tap and speak¦Carrega e fala¦Pulsa y habla
Appuie, parle en anglais, puis appuie sur ⏹ pour terminer.¦Tap, speak in English, then tap ⏹ to finish.¦Carrega, fala em inglês e depois carrega em ⏹ para terminar.¦Pulsa, habla en inglés y luego pulsa ⏹ para terminar.
Commencer la leçon →¦Start the lesson →¦Começar a lição →¦Empezar la lección →
Compréhension orale¦Listening comprehension¦Compreensão oral¦Comprensión oral
Compréhension écrite¦Reading comprehension¦Compreensão escrita¦Comprensión escrita
Corrections et rattrapage¦Corrections and catch-up¦Correções e recuperação¦Correcciones y recuperación
Dans cette leçon, tu vas apprendre à :¦In this lesson, you will learn to:¦Nesta lição, vais aprender a:¦En esta lección aprenderás a:
Dictée et phrases à toi¦Dictation and your own sentences¦Ditado e frases tuas¦Dictado y frases tuyas
Entraînement¦Training¦Treino¦Entrenamiento
Expression orale (auto-éval.)¦Speaking (self-assessment)¦Expressão oral (autoavaliação)¦Expresión oral (autoevaluación)
Expression écrite¦Writing¦Expressão escrita¦Expresión escrita
Expression orale¦Speaking¦Expressão oral¦Expresión oral
Faire ma série de rattrapage¦Do my catch-up set¦Fazer a minha série de recuperação¦Hacer mi serie de recuperación
Faire ma série de rattrapage (5 questions)¦Do my catch-up set (5 questions)¦Fazer a minha série de recuperação (5 perguntas)¦Hacer mi serie de recuperación (5 preguntas)
Grammaire — Be et have¦Grammar — Be and have¦Gramática — Be e have¦Gramática — Be y have
Grammaire¦Grammar¦Gramática¦Gramática
Vocabulaire¦Vocabulary¦Vocabulário¦Vocabulario
Traduction¦Translation¦Tradução¦Traducción
Contrôle¦Test¦Controlo¦Control
Exercices¦Exercises¦Exercícios¦Ejercicios
Exercices ✎¦Exercises ✎¦Exercícios ✎¦Ejercicios ✎
Exercices ✏️¦Exercises ✏️¦Exercícios ✏️¦Ejercicios ✏️
J’ai dit ma réponse à voix haute¦I said my answer out loud¦Disse a minha resposta em voz alta¦He dicho mi respuesta en voz alta
Le personnage parle. Tu réponds en anglais.¦The character speaks. You answer in English.¦A personagem fala. Tu respondes em inglês.¦El personaje habla. Tú respondes en inglés.
Lis le texte puis réponds aux questions.¦Read the text, then answer the questions.¦Lê o texto e responde às perguntas.¦Lee el texto y responde a las preguntas.
L’IA lit tes réponses…¦The AI is reading your answers…¦A IA está a ler as tuas respostas…¦La IA está leyendo tus respuestas…
L’IA lit ton texte…¦The AI is reading your text…¦A IA está a ler o teu texto…¦La IA está leyendo tu texto…
Modèle¦Model¦Modelo¦Modelo
Parler et écrire¦Speak and write¦Falar e escrever¦Hablar y escribir
Pas tout à fait : relis et corrige.¦Not quite: reread and correct.¦Não bem: relê e corrige.¦No del todo: relee y corrige.
Refaire une nouvelle version¦Write a new version¦Refazer uma nova versão¦Rehacer una nueva versión
Règles simples¦Simple rules¦Regras simples¦Reglas sencillas
Répondre¦Answer¦Responder¦Responder
Réponds : la correction s’affiche, tu peux réessayer.¦Answer: the correction appears, you can try again.¦Responde: a correção aparece, podes tentar de novo.¦Responde: aparece la corrección, puedes reintentar.
Réponds en anglais à un personnage¦Answer a character in English¦Responde em inglês a uma personagem¦Responde en inglés a un personaje
Ta présentation en anglais¦Your introduction in English¦A tua apresentação em inglês¦Tu presentación en inglés
Ta réponse en anglais¦Your answer in English¦A tua resposta em inglês¦Tu respuesta en inglés
Test de fin de leçon¦End-of-lesson test¦Teste de fim de lição¦Test de fin de lección
Une petite série d'abord¦A short set first¦Primeiro uma pequena série¦Primero una pequeña serie
Vitesse de lecture¦Reading speed¦Velocidade de leitura¦Velocidad de lectura
Voir la correction¦See the correction¦Ver a correção¦Ver la corrección
Voir la traduction¦See the translation¦Ver a tradução¦Ver la traducción
Écoute encore l’audio.¦Listen to the audio again.¦Ouve o áudio de novo.¦Escucha el audio otra vez.
Écoute et répète les mots.¦Listen and repeat the words.¦Ouve e repete as palavras.¦Escucha y repite las palabras.
Écoute et répète !¦Listen and repeat!¦Ouve e repete!¦¡Escucha y repite!
Écoute les phrases clés¦Listen to the key sentences¦Ouve as frases-chave¦Escucha las frases clave
Écoute l’audio puis réponds aux questions.¦Listen to the audio, then answer the questions.¦Ouve o áudio e responde às perguntas.¦Escucha el audio y responde a las preguntas.
Écouter la phrase¦Listen to the sentence¦Ouvir a frase¦Escuchar la frase
Écouter l’audio¦Listen to the audio¦Ouvir o áudio¦Escuchar el audio
Écrire en anglais¦Write in English¦Escrever em inglês¦Escribir en inglés
Écris d’abord au moins une phrase en anglais.¦First write at least one sentence in English.¦Escreve primeiro pelo menos uma frase em inglês.¦Escribe primero al menos una frase en inglés.
Écris en anglais (au moins une phrase).¦Write in English (at least one sentence).¦Escreve em inglês (pelo menos uma frase).¦Escribe en inglés (al menos una frase).
Écris en anglais…¦Write in English…¦Escreve em inglês…¦Escribe en inglés…
Écris ta réponse en anglais…¦Write your answer in English…¦Escreve a tua resposta em inglês…¦Escribe tu respuesta en inglés…
Écris toi-même, sans choix de réponses.¦Write it yourself, with no answer choices.¦Escreve tu mesmo, sem opções de resposta.¦Escribe tú mismo, sin opciones de respuesta.
← Précédent¦← Previous¦← Anterior¦← Anterior
Précédent¦Previous¦Anterior¦Anterior
Suite →¦Next →¦Seguinte →¦Siguiente →
← Retour¦← Back¦← Voltar¦← Volver
Retour¦Back¦Voltar¦Volver
✅ Enregistré. Appuie sur « ▶ Me réécouter », puis compare avec « 🔊 Modèle ».¦✅ Saved. Tap "▶ Listen to myself again", then compare with "🔊 Model".¦✅ Guardado. Carrega em «▶ Ouvir-me de novo» e compara com «🔊 Modelo».¦✅ Guardado. Pulsa «▶ Escucharme otra vez» y compara con «🔊 Modelo».
✍️ Expression écrite¦✍️ Writing¦✍️ Expressão escrita¦✍️ Expresión escrita
✍️ Écrire¦✍️ Write¦✍️ Escrever¦✍️ Escribir
✏️ À toi de pratiquer !¦✏️ Your turn to practise!¦✏️ É a tua vez de praticar!¦✏️ ¡Te toca practicar!
🎧 Écoute la phrase, puis écris-la en anglais.¦🎧 Listen to the sentence, then write it in English.¦🎧 Ouve a frase e escreve-a em inglês.¦🎧 Escucha la frase y escríbela en inglés.
👉 Page suivante : les exercices¦👉 Next page: the exercises¦👉 Página seguinte: os exercícios¦👉 Página siguiente: los ejercicios
💡 Conseil d’une IA (facultatif)¦💡 Advice from an AI (optional)¦💡 Conselho de uma IA (facultativo)¦💡 Consejo de una IA (opcional)
💡 Faire corriger mes réponses¦💡 Get my answers corrected¦💡 Corrigir as minhas respostas¦💡 Corregir mis respuestas
💡 Obtenir un conseil¦💡 Get advice¦💡 Obter um conselho¦💡 Obtener un consejo
💡 Astuce¦💡 Tip¦💡 Dica¦💡 Consejo
Astuce¦Tip¦Dica¦Consejo
💬 En contexte¦💬 In context¦💬 Em contexto¦💬 En contexto
En contexte¦In context¦Em contexto¦En contexto
🔊 Modèle¦🔊 Model¦🔊 Modelo¦🔊 Modelo
🔑 Mots du texte¦🔑 Words from the text¦🔑 Palavras do texto¦🔑 Palabras del texto
Mots illustrés¦Illustrated words¦Palavras ilustradas¦Palabras ilustradas
Mon nom¦My name¦O meu nome¦Mi nombre
Naissance et lieu¦Birth and place¦Nascimento e local¦Nacimiento y lugar
Nationalité et résidence¦Nationality and residence¦Nacionalidade e residência¦Nacionalidad y residencia
Les nombres¦Numbers¦Os números¦Los números
Apparence physique¦Physical appearance¦Aparência física¦Aspecto físico
Le corps¦The body¦O corpo¦El cuerpo
Décrire et présenter¦Describe and introduce¦Descrever e apresentar¦Describir y presentar
Origine et résidence¦Origin and residence¦Origem e residência¦Origen y residencia
Les documents¦Documents¦Os documentos¦Los documentos
Les pays¦Countries¦Os países¦Los países
Les nationalités¦Nationalities¦As nacionalidades¦Las nacionalidades
Les langues¦Languages¦As línguas¦Los idiomas
Les salutations¦Greetings¦As saudações¦Los saludos
Pratique¦Practice¦Prática¦Práctica
Continuer¦Continue¦Continuar¦Continuar
Fermer¦Close¦Fechar¦Cerrar
Suivant¦Next¦Seguinte¦Siguiente
`;

const MAP = new Map();
RAW.trim().split("\n").forEach((l) => { const p = l.split("¦"); if (p.length === 4) MAP.set(p[0].trim(), p.slice(1).map((x) => x.trim())); });
const IDX = { en: 0, pt: 1, es: 2 };
const SKIP = ".lc-vl small, .lc-bt small, .lc-w small, textarea, input, script, style, [data-no-i18n]";

function tr(s, i) { const k = s.trim(); const v = MAP.get(k) || MAP.get(k.replace(/’/g, "'")); return v ? s.replace(k, v[i]) : null; }
function pass(root) {
  let lang; try { lang = store.get().settings.interfaceLang; } catch (e) { return; }
  const i = IDX[lang]; if (i === undefined) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach((n) => { const p = n.parentElement; if (!p || p.closest(SKIP)) return; const r = tr(n.nodeValue || "", i); if (r !== null && r !== n.nodeValue) n.nodeValue = r; });
  root.querySelectorAll("[placeholder],[aria-label],[title]").forEach((e) => ["placeholder", "aria-label", "title"].forEach((a) => { const v = e.getAttribute(a); if (v) { const r = tr(v, i); if (r !== null && r !== v) e.setAttribute(a, r); } }));
}
let queued = false;
function schedule() { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; try { pass(document.body); } catch (e) { /* ignore */ } }); }
if (typeof MutationObserver !== "undefined") {
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
  schedule();
}
