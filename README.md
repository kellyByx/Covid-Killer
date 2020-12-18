# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Deux langues autorisées: français, anglais.*

*Copier/coller de code d'internet sanctionnés.*

*Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...).*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

- Qu'est-ce que JavaScript vanilla ?
   C'est lorsque que l'on réalise en code purement/simplement composer en javascript, sans devoir utiliser de Framework ou de librairie en complément pour que celui-ci soit fonctionnel.
  (Par exemple sans devoir télécharger JQuery). C'est un code qui fonctionne à lui seul, juste coder dans le langage javascript ("de base"). 
  Le fait d'utiliser le terme "javascript vanilla" permet d'être plus clair lorsque l'on veut parler de code javascript sans Framework ou dans ses recherches de trouver du code entièrement en javascript. (car beaucoup trop de résultat cache en fait a la fin un bibliothèque a télécharger pour faire fonctionner ce que l'on souhaite réaliser)


- Qu'est-ce qu'AJAX ?
AJAX (viens de : JavaScript And Xml). C'est ce qui peut permettre (au développeur qui utilise javascript) de faire en sorte qu'une partie du contenu/une partie d'une page d'un site web puisse s'actualiser sans que toute la page du site doive elle aussi s'actualiser à chaque fois que cet élément doit l'être. Ce contenu réagis généralement avec les actions d'un utilisateur. 

- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
Parce que c’est un langage plus « libre » et moins strict :
Par exemple au niveau de types en javascript est moins strict (faiblement typé) que le langage C#. Javascript est même un peu trop gentil et nous aide automatiquement et cela peut nous créer des erreurs.  Tout comme la liberté de ne pas obligatoirement devoir mettre de « ; » peuvent nous faire regretter cette liberté plus tard lorsque des bug et erreur vont survenir. 
Peut-être aussi car les class existe en javascript (depuis peu) mais ce n’est qu’un raccourci vers le mot clé fonction, ce qui peut déranger certains développer qui aime moins le fait de travailler qu’avec des fonctions (car en javascript tout se fait avec des fonctions = langage fonctionnel, pas orienté objet).

  
- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
  Oui il existe :
  le type dit primitif : booléen (vrai-faux), string (caractères/textes), number (nombre)
  le type de valeur vide: undefined, Nan, null.
  et le type dit composé tel que les objet, les arrays,...
  
- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
   Non, le navigateur n'accepte / ne travaille qu’avec du HTML, CSS et Javascript. (Mais quand nous utilisons SASS celui-ci peut être "converti" en css et là nous auront notre style qui apparaitra sur le site)

- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
  Car il est principalement fonctionnel mais depuis peut avec l'arriver des class ( meme si ce n'est qu'un racourci au mot clé function) il fait un pas à l'orenté objet.
  De plus javascript considère les functions comme des citoyens de première classe (ce qui n'est pas les cas d'autre langages).

- En JS, une fonction peut-elle retourner une fonction ?
  Oui, Car contrairement à d’autre langage en javascript on peut dire que les fonctions sont des citoyens de 1 ère classe : c’est-à-dire que les fonctions sont considérées comme une valeur comme n’importe qu’elle autre valeurs. (En informatique : ce sont ce que l’on peut traiter comme des données, des valeurs). 	
  Ce n’est pas dans tous les langages mais dans le javascript oui, car c’est un langage fonctionnel. (Et non pas orienté objet) 
  On peut mettre des fonctions dans des variables (c’est même leurs natures). C’est pour cela que l’on dit qu’elles sont fonctionnelles. On peut les ‘‘passer’’ de variables en variables et de fonctions en fonctions.


- Est-ce que `alert` existe en Node.JS ?
  Non, alert est une méthode qui appartient à l’objet window (*c’est un objet qui est déjà là dans le javascript coter navigateur plutôt dans le javascript front end. Il permet a javascript d'intéragir avec la page web). 
  C’est une fonction qui nous est donner pour réaliser diverse choses dans le navigateur.
  Mais ce n’est pas un mot clé de Javascript.
  C’est assez confusant car l’on peut dans la console du navigateur écrire alerte pour l’exécuter mais pas l’inverse dans la console via node.Js.
  Window va permettre d’écrire dans le navigateur. Et en général on ne cite plus window tellement il est omni présent.
  Lorsque que l’on note par exemple alert(‘‘ panda’’) ; cela est pareil que de noter : window.alert(‘‘ panda’’) ;

 
- Est-ce que `window.console.log === console.log` dans le navigateur ?
  Oui, car comme dans la question précédente ( alert) : console.log est ‘‘une méthode’’ qui appartient à l’objet window*. Sauf qu’ici console est aussi un objet qui a elle une méthode log. Ce qui va nous permettre de loguer dans la console (/ d’écrire dans le navigateur).
  Ce n’est de nouveau pas un mot clé de Javascript (comme les ifs/ for par exemple).
( On peut le vérifier si on fait le test de faire :
  console.log (window.console.log === console.log) 
  Cela va bien renvoyer true)

  
- Quel est votre aspect préféré de JavaScript ? **(s)**
  Le javascript me parait plus (re)-lisible que d’autre langage :
  En javascript lorsque l’on utilise des fonctions le code me parait plus facilement (re-) lisible comparé a d’autre langage et même plus facile à comprendre. 
  Ce qui aide aussi à mes yeux cette relecture c’est « des bases » qui me semble moins lourde (en quantité) à connaître pour pouvoir faire des choses simples en javascript comparé a d’autre langage ou l’on doit énormément apprendre d’éléments avant de pouvoir créer même un petit chose simple. (Plus le fait que c’est un langage peu typé même si cela peut amener a des erreurs)
  (+ Évidement étant graphiste, j’aime le fait qu’avec javascript (tout comme html et css) qu’ il donne des résultats visuels)


## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données
Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:
#### Vaccin 1
Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non  
#### Vaccin 4
Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés" 
- un élément HTML `main`. 
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente 
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):
- sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
