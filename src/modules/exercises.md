### Exercices sur les modules

## Inertie
Créer un programme qui, chaque fois qu’on modifie un fichier, le remet dans son état original.

---

## Time
Faire un serveur HTTP qui:
Renvoie l’heure quand on fait un GET HTTP sur  /time
Renvoie la date quand on fait un GET HTTP sur /date

---


## Watch and emit
Faire un programme qui watch les modifications d’un fichier, et écrit des logs sur un autre fichier, indiquant l’heure et la différence dans le nombre de caractères avant et après la modification.

Vous devrez utiliser les events emitters et listeners.

---

## Syslogs
Créer un programme qui ouvre un stream d’écriture vers un fichier et fait un résumé de l'état du système toutes les secondes dans ce fichier

---

## FileSize
écrire une fonction qui reçoit un stream et ressort le nombre de byte dans ce stream.
tester la fonction sur un fichier binaire(audio, compressé...)

---


tip : le type Buffer (type de chunk reçu dans le callback de `on` ou de `addListener()` a une propriete “length”

---

## FileWordCount
Avec les streams, compter le nombre de mots dans un fichier texte 

---

## Cowsay
Créer un serveur simple qui répond aux requêtes sur `/cowsay` en get par un ascii art de vache. Un message doit être passé en paramètre de la requête et affiché dans l'art ascii.

---

## Todos
Faire un serveur HTTP qui:
Quand il reçoit des requêtes les écrit dans un fichier de logs dans le dossier temporaire de l’OS sur lequel il tourne
Permet (en stockant dans la ram, pas de BDD) de créer une to do list avec des items. 
les chemins seront les suivants :

`POST /todo`: avec un body de type `application/json` contenant les informations pour créer un item de to do list

`GET /todo`: renvoie la liste des items de to do list

`GET /todo/:id`: renvoie l’item de to do list à l'ID donné

`DELETE /todo/:id`: supprime l’item de to do list à l'ID donné
