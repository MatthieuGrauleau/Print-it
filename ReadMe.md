
# Print it!

Cinquième projet du parcous " Intégrateur web " chez OpenClassroom. J'avais pour objectif de créer un carrousel d'image qui boucle à l'infini


## Objectifs

1. Création d'un carrousel qui boucle à l'infini
2. Ajouter de bullets points afin de savoir à quelle slide on est
## Livrables




### Étape 1 : Mettez à jour le code HTML



Analysez le code HTML et CSS à la recherche des éléments déjà présents sur le site.  
Ajoutez les images des flèches pour pouvoir naviguer dans le carrousel. 


### Étape 2 : Ajoutez des Event Listeners sur les flèches 

Mettre un event listener sur chacune des flèches. 
Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners.
S’assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 

### Étape 3 : Ajoutez des bullet points au slider


Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. 
Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.

### Étape 4 : Modifiez le slide au clic sur le bouton


Au clic sur la flèche droite : 
on change le bullet point actif au suivant ;
on change l’image ;
on change le texte correspondant à l’image.
Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents. 

### Étape 5 : Mettez en place le défilement infini sur le carrousel  
 

Si on est à la dernière image et que l’on clique à droite : 
on affiche la première image ;
le point sélectionné est le premier.
Si on est à la première image et qu’on clique à gauche : 
on affiche la dernière image ;
le point sélectionné est le dernier. 
Dans tous les cas, le texte change en accord avec l’image montrée.
## Technologies

● Autorisés/ HTML/ CSS/ Javascript

● Recommandées: Javascript

● Interdit: Frameworks CSS / Inline CSS
