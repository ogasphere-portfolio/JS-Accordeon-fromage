# L'accordéon

Je fais partie d'un club d'amateurs de fromage de chèvre, et je voulais coder une super FAQ pour notre site… mais comme je suis une chèvre en JS, finalement il faudrait que quelqu'un s'en occupe pour moi :sweat_smile:

Alors voilà ce que je veux :

- La FAQ serait sous la forme d'un accordéon ([exemple](https://jqueryui.com/accordion/)). L'exemple est fait en jQuery, mais c'est juste pour voir le comportement attendu. Il ne faut pas le faire avec jQuery !
- Quand on clique sur un titre, toutes les autres questions se ferment et celle sur laquelle j'ai cliqué s'ouvre.
- Je veux aussi que la flèche de la question ouverte soit tournée vers le bas, et celles des questions fermées tournées vers la droite !

## On aura besoin de :

- CSS pour faire du joli, pour gérer les flèches
- de `addEventListener`
- de modifier des classes en JS
- peut-être de [`parentNode`](https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode)

## Un peu d'aide pour commencer ?

<details>
  <summary>spoiler</summary>
  Voilà quelques étapes pour bien démarrer :
  
  * Faire un module JS pour organiser le code au mieux.
  * Dans la méthode `init`, trouver tous les titres et écouter leurs clics.
  * Vérifier au clic que la cible du clic est bien le h2 (la flèche étant probablement _dans_ le h2, le clic se déclenche aussi quand on clique dessus, mais c'est bien le h2 qui doit être la cible). Si ce n'est pas le cas, on recible le h2 avec `parentNode`. Whoua c'est compliqué ! Pourquoi pas faire une première version sans flèche :thinking_face:
  * On modifie les classes CSS pour créer l'effet d'accordéon.  
</details>

La correction se trouve sur la branche du même nom.
