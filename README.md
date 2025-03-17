# Jokonu - Générateur de Blagues Bilingues

Bienvenue sur **Jokonu**, le générateur de blagues ultime qui fait rire en anglais et en français ! Préparez-vous à un mélange de "dad jokes" absurdes et de blagues françaises bien crues, inspirées par des humoristes comme Dave Chappelle, Dieudonné, Jérémy Ferrari et Thomas Ngijol. Parce que pourquoi rire dans une seule langue quand on peut rater ses vannes dans deux ?

## Description
Jokonu est une petite application web qui :
- Récupère des "dad jokes" en anglais via l’API `icanhazdadjoke.com`.
- Propose une sélection de blagues originales en français (c'st le prompt que j'ai mis dans l'IA) et sur les français (c'est ce que l'IA a généré), stockées localement (pour l’instant, on attend l’API française des papas blagueurs).
- Offre un design simple mais dynamique, avec des boutons pour choisir entre l’anglais et le français.

## Fonctionnalités
- **Blagues anglaises** : Directement depuis l’API, toujours fraîches et prêtes à faire rire (ou soupirer).
- **Blagues françaises** : Crues, absurdes, et 100% maison – parfaites pour les amateurs d’humour noir et de clichés bien sentis.


## Prérequis
- Un navigateur moderne (Chrome, Firefox, etc.).
- Une connexion internet (pour les blagues anglaises via l’API).
- Un sens de l’humour, même bancal.

## Installation
1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/jeanpierresouamyogowet/jokonu.git
   cd jokonu

   jokonu/
├── index.html      # Page principale
├── script.js       # Logique JavaScript pour récupérer et afficher les blagues
├── style.css       # Styles dynamiques et thématiques
└── README.md       # Ce fichier, évidemment

Améliorations futures
Ajouter une API pour des blagues françaises dynamiques (si quelqu’un en trouve une, prévenez-moi !).
Intégrer un backend Symfony pour gérer une base de blagues personnalisées.
Permettre aux utilisateurs d’ajouter leurs propres vannes.
Contribution
Vous avez une blague hilarante à partager ? Forkez le dépôt, ajoutez-la dans script.js (tableau frenchJokes), et envoyez une Pull Request. Pas de blagues trop sages, on veut du lourd !

Licence
Ce projet est sous licence "Riez si vous voulez" – utilisez-le, modifiez-le, mais ne venez pas me chercher si votre famille vous trouve lourd à table.
