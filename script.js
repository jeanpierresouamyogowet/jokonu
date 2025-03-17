const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const frenchJokeBtn = document.getElementById('frenchJokeBtn');

// Liste des blagues françaises
const frenchJokes = [
    "Pourquoi les Français adorent le fromage ? Parce que c’est le seul truc qui pue plus qu’eux après trois jours sans douche !",
    "Qu’est-ce qu’un Français sans baguette ? Un mec qui a perdu sa bite et son couteau !",
    "Pourquoi les Français font grève tout le temps ? Parce que bosser, c’est pour les Allemands, et eux, ils préfèrent râler en terrasse !",
    "Qu’est-ce qui est long, mou et français ? Une saucisse qui dit ‘je suis fatigué’ après deux heures de boulot !",
    "Pourquoi les Français boivent du Pastis ? Parce que c’est le seul truc qui rend l’eau potable sans vexer les poissons !",
    "Qu’est-ce qu’un Français en vacances ? Un mec qui te dit ‘c’est mieux chez nous’ tout en bronzant à Dubaï !",
    "Pourquoi les Français ont inventé la guillotine ? Parce que couper des têtes, c’est plus rapide que de couper la parole à un Parisien !",
    "Qu’est-ce qui est rond, jaune et chauvin ? Un camembert qui vote pour lui-même aux élections !",
    "Pourquoi les Français disent ‘putain’ tout le temps ? Parce que c’est le seul mot qui va avec le vin, le pain et leur vie de merde !",
    "Qu’est-ce qu’un Français sans vélo ? Un mec qui a vendu Lance Armstrong pour s’acheter une clope !",
    "Pourquoi les Français adorent les croissants ? Parce que c’est le seul truc qui reste courbé même après une nuit avec ta mère !",
    "Qu’est-ce qu’un Français dans un embouteillage ? Un philosophe qui klaxonne en te traitant de con !",
    "Pourquoi les Français mangent des cuisses de grenouilles ? Parce que c’est les seules jambes qui courent plus vite que leurs excuses !",
    "Qu’est-ce qui est petit, noir et qui parle français ? Un café qui te juge parce que t’as pris un latte !",
    "Pourquoi les Français portent des bérets ? Pour cacher leur calvitie et leur complexe d’infériorité face aux Anglais !",
    "Qu’est-ce qu’un Français bourré ? Un mec qui te raconte la Révolution en vomissant sur tes pompes !",
    "Pourquoi les Français aiment les escargots ? Parce que c’est le seul animal qui va aussi lentement qu’eux au boulot !",
    "Qu’est-ce qui est rouge, blanc et bleu ? Un Français qui s’étouffe avec son drapeau en criant ‘liberté’ !",
    "Pourquoi les Français adorent les débats ? Parce que dire ‘non’ à tout, c’est leur cardio quotidien !",
    "Qu’est-ce qu’un Français sans vin ? Un mec qui te fait la gueule parce qu’il a rien à dire !",
    "Pourquoi les Français ont des cheveux gras ? Parce que l’huile d’olive, c’est pas que pour la salade !",
    "Qu’est-ce qu’un Français en couple ? Un mec qui trompe sa femme avec une baguette et un pinard !",
    "Pourquoi les Français détestent le fast-food ? Parce que bouffer en cinq minutes, c’est trahir trois siècles de gastronomie !",
    "Qu’est-ce qui est blanc, collant et français ? Un fromage qui te fait un câlin après une cuite !",
    "Pourquoi les Français ont inventé le parfum ? Parce que sans ça, même les cochons les auraient largués !",
    "Qu’est-ce qu’un Français au chômage ? Un mec qui te dit ‘c’est la faute de l’État’ en fumant sa dixième clope !",
    "Pourquoi les Français adorent les manifs ? Parce que crier dans la rue, c’est leur seul sport national !",
    "Qu’est-ce qui est long, dur et français ? Une grève SNCF qui te nique tes vacances !",
    "Pourquoi les Français disent ‘bof’ ? Parce que dire ‘ça pue la merde’ prend trop d’énergie !",
    "Qu’est-ce qu’un Français sans café ? Un zombie qui te dit ‘je suis pas du matin’ à 15h !",
    "Pourquoi les Français aiment les apéros ? Parce que picoler à 17h, c’est leur façon de dire ‘fuck le patron’ !",
    "Qu’est-ce qui est plat, fade et français ? Une galette qui te rappelle ta vie sans sel !",
    "Pourquoi les Français adorent les vacances ? Parce que bosser 35h, c’est déjà trop pour un Gaulois !",
    "Qu’est-ce qu’un Français en retard ? Un mec qui te dit ‘c’est la faute du métro’ alors qu’il habite en campagne !",
    "Pourquoi les Français mangent du foie gras ? Parce que torturer un canard, c’est leur vengeance contre la vie !",
    "Qu’est-ce qui est petit, vert et parle français ? Une olive qui te dit ‘tchin’ avant de te saouler !",
    "Pourquoi les Français adorent les huîtres ? Parce que c’est le seul truc qui glisse aussi bien que leurs promesses !",
    "Qu’est-ce qu’un Français sans accent ? Un mec qui a vendu son âme à Netflix et McDo !",
    "Pourquoi les Français détestent les Anglais ? Parce que perdre Waterloo, ça fait encore mal au cul !",
    "Qu’est-ce qui est lent, bruyant et français ? Un mec qui te raconte sa vie au feu rouge !",
    "Pourquoi les Français préfèrent le vin ? Parce que l'eau, c'est pour les grenouilles !",
    "Qu’est-ce qu’un squelette dans un placard ? Un Français qui a gagné à cache-cache !",
    "Pourquoi les Français mangent-ils des escargots ? Parce qu’ils n’aiment pas la fast-food !",
    "Qu’est-ce qui est petit, rond et qui parle français ? Une crêpe qui dit 'bonjour' !",
    "Pourquoi les Français se plaignent toujours ? Parce qu’ils ont peur que si ça va trop bien, l’État leur demande un remboursement !",
    "Pourquoi les couples français se disputent-ils souvent ? Parce qu’en amour comme au supermarché, tout finit toujours par une discussion sur le prix !",
    "Qu’est-ce qu’un rendez-vous galant en France ? C’est quand deux personnes essaient de comprendre pourquoi elles n’ont pas encore trouvé mieux.",
    "Pourquoi les Français sont mauvais au romantisme moderne ? Parce qu’ils préfèrent encore offrir des fleurs plutôt que des likes Instagram !",
    "Quelle est la différence entre un ex et une otite ? L’otite, elle, finit par passer…",
    "Pourquoi les Français font-ils autant de psychothérapie ? Parce qu'ils pensent que parler de leurs problèmes va changer quelque chose… Spoiler : non.",
    "Pourquoi les politiciens français ne jouent jamais aux échecs ? Parce qu’ils savent déjà qu’ils vont perdre, peu importe les règles !",
    "Qu’est-ce qu’un ministre qui fait du sport ? Une personne qui court après son mandat pendant que ses électeurs courent après lui avec des fourches !",
    "Pourquoi Macron aime les startups ? Parce que, comme lui, elles promettent beaucoup mais ne livrent presque rien !",
    "Quel est le point commun entre un député et un chewing-gum ? Tous les deux deviennent inutiles après avoir été trop mâchés !",
    "Pourquoi les Français votent-ils encore ? Parce qu’ils espèrent qu’un jour, quelqu’un fera vraiment ce qu’il a promis… Naïfs, hein ?",
    "Pourquoi les Américains ne comprennent pas les films français ? Parce qu’ils n’y a aucun super-héros… sauf peut-être Gérard Depardieu !",
    "Qu’est-ce qu’un touriste étranger qui regarde un match de foot en France ? Quelqu’un qui regrette de ne pas être resté chez lui !",
    "Pourquoi les Anglais trouvent-ils les baguettes françaises trop chères ? Parce qu’ils ne savent pas que c’est le prix de notre dignité nationale !",
    "Quelle est la différence entre une comédie musicale américaine et un film français ? Dans le premier, tout le monde chante ; dans le second, tout le monde pleure.",
    "Pourquoi les Français disent-ils 'Oh là là' ? Parce que c’est plus facile que d’expliquer pourquoi ils sont toujours insatisfaits !",
    "Pourquoi les Français râlent-ils dans les embouteillages ? Parce qu’ils savent qu’ils ne peuvent pas klaxonner contre leur patron, mais qu’une voiture anonyme, ça marche aussi !",
    "Qu’est-ce qu’un conducteur parisien poli ? Un oxymore.",
    "Pourquoi les Français mettent-ils des baskets partout ? Parce que courir après leur train est devenu une tradition olympique !",
    "Quelle est la différence entre un métro bondé et une boîte de nuit ? Dans le métro, tu ne paies pas pour te faire bousculer !",
    "Pourquoi les Français utilisent-ils Google Maps même dans leur propre ville ? Parce que personne ne connaît vraiment Paris… ni les Parisiens eux-mêmes !",
    "Pourquoi les Français mangent-ils des escargots ? Parce qu’ils ont besoin de pratiquer pour manger autre chose que des pâtes au beurre !",
    "Qu’est-ce qu’un steak-frites parfait selon un Français ? Un plat qui coûte moins cher que ta thérapie hebdomadaire !",
    "Pourquoi les croissants français sont-ils si bons ? Parce qu’ils contiennent 50% de beurre et 50% de fierté nationale !",
    "Quelle est la vraie raison pour laquelle les Français aiment le fromage qui pue ? Parce qu’ils veulent être sûrs que personne ne viendra les embêter pendant qu’ils le mangent !",
    "Pourquoi les Français boivent-ils du champagne à chaque occasion ? Parce que sinon, ils risquent de se rendre compte qu’il n’y a aucune vraie raison de célébrer !",
    "Pourquoi les funérailles françaises sont-elles toujours tristes ? Parce que même morts, on continue à payer nos impôts !",
    "Quelle est la différence entre un divorce et une diarrhée ? Avec la diarrhée, tu as encore l’espoir que ça s’arrête…",
    "Pourquoi les Français parlent-ils tant de sexe ? Parce qu’ils préfèrent raconter leurs exploits imaginaires que d’avouer qu’ils regardent Netflix toute la soirée.",
    "Qu’est-ce qu’un enterrement réussi en France ? Quand il y a plus de monde à ton décès qu’à ton mariage !",
    "Pourquoi les Français aiment-ils les insultes créatives ? Parce que c’est la seule forme d’art où ils excellent encore aujourd’hui !",
    "Pourquoi les Français adorent les grèves ? Parce que c'est le seul moment où ils se lèvent tôt !",

"Qu’est-ce qu’un Français avec un casque de réalité virtuelle ? Un touriste qui visite la France en 2050 après la montée des eaux.",

"Pourquoi les Français ne jouent jamais à cache-cache ? Parce que dès qu’ils voient un problème, ils se cachent !",

"Qu’est-ce qu’un Français qui réussit ? Un type qui a réussi à traverser la rue sans se faire klaxonner par un livreur Deliveroo.",

"Pourquoi les Français ont-ils inventé le béret ? Pour cacher leur calvitie précoce due au stress des impôts.",

"Qu’est-ce qu’un Français qui fait du sport ? Un type qui court après son chien qui a volé sa baguette.",

"Pourquoi les Français ne font-ils pas confiance aux ordinateurs ? Parce que dès qu’ils entendent 'Windows', ils pensent à une grève des vitriers.",

"Qu’est-ce qu’un Français qui part en vacances ? Un type qui va se plaindre du soleil ailleurs.",

"Pourquoi les Français ne jouent-ils jamais au loto ? Parce qu’ils ont déjà gagné à la naissance : ils sont nés en France !",

"Qu’est-ce qu’un Français qui fait la cuisine ? Un type qui met du beurre dans du beurre et qui appelle ça de la gastronomie.",

"Pourquoi les Français ne vont-ils jamais dans l’espace ? Parce qu’ils ont peur de trouver un McDonald's sur Mars.",

"Qu’est-ce qu’un Français qui fait du yoga ? Un type qui essaie de toucher ses pieds sans lâcher sa cigarette.",

"Pourquoi les Français ne font-ils jamais de régimes ? Parce que même leur fromage a plus de volonté qu’eux.",

"Qu’est-ce qu’un Français qui fait du vélo ? Un type qui roule à contresens et qui klaxonne les piétons.",

"Pourquoi les Français ne jouent-ils jamais aux échecs ? Parce qu’ils préfèrent les jeux où on peut abandonner rapidement.",

"Qu’est-ce qu’un Français qui part à la retraite ? Un type qui commence enfin à travailler : il devient consultant en grèves.",

"Pourquoi les Français ne font-ils jamais confiance aux météorologues ? Parce qu’ils préfèrent croire à la grève des nuages.",

"Qu’est-ce qu’un Français qui fait du camping ? Un type qui dort dans une tente en se plaignant que l’hôtel était trop cher.",

"Pourquoi les Français ne jouent-ils jamais au poker ? Parce qu’ils ont déjà tout misé sur la retraite à 60 ans.",

"Qu’est-ce qu’un Français qui fait du shopping ? Un type qui achète une baguette et qui négocie le prix.",

"Pourquoi les Français ne font-ils jamais de régimes végétariens ? Parce qu’ils considèrent que la salade, c’est de la décoration.",

"Qu’est-ce qu’un Français qui fait du sport extrême ? Un type qui traverse un passage piéton sans regarder.",

"Pourquoi les Français ne jouent-ils jamais au Monopoly ? Parce qu’ils ont déjà perdu leur appartement à Paris.",

"Qu’est-ce qu’un Français qui part en vacances à la montagne ? Un type qui skie en pyjama avec une clope au bec.",

"Pourquoi les Français ne font-ils jamais confiance aux robots ? Parce qu’ils ont peur qu’ils se mettent en grève.",

"Qu’est-ce qu’un Français qui fait du jardinage ? Un type qui plante des vignes dans son salon.",

"Pourquoi les Français ne jouent-ils jamais au football ? Parce qu’ils ont peur de gagner et de devoir payer des impôts sur la victoire.",

"Qu’est-ce qu’un Français qui fait du vélo électrique ? Un type qui roule à 10 km/h en se sentant écologiste.",

"Pourquoi les Français ne font-ils jamais de régimes sans gluten ? Parce qu’ils considèrent que le pain, c’est sacré.",

"Qu’est-ce qu’un Français qui part en vacances à la plage ? Un type qui se plaint que la mer est trop salée."
];

// Evenement pour blagues françaises
frenchJokeBtn.addEventListener('click', generateFrenchJoke);

// Lance une blague anglaise au chargement
generateEnglishJoke();

// Récupère une blague anglaise via une API
async function generateEnglishJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}

// Générer une blague française aléatoire
function generateFrenchJoke() {
    const randomIndex = Math.floor(Math.random() * frenchJokes.length);
    jokeEl.innerHTML = frenchJokes[randomIndex];
}