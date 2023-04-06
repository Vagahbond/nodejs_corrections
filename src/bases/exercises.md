# Exercices sur les bases
## AB AB
 Écrire un programme qui prend une chaine de caractères en paramètre et transforme tous ses "a" en "b" 

### Exemple 
Entrée :
```
jhsdfgasjdfgh caswfd
```

Sortie : 
```
jhsdfgbsjdfgh cbswfd
```

---

## Somme positive
Vous récuperez une liste de nombres, retournez la somme de tous les nombres positifs de cette liste  

### Exemple
Entrée: 
```
[-1, 3, 4, 2, 6, 7, -1, -4, 4]
```

Sortie: 
```
26
```

---

## Somme carrée
Créer une fonction qui prend en paramètre un tableau et renvoie le resultat de la somme de tous ses éléments au carré.

### Exemple
Entrée:
```
[2, 1, 3, 2]
```

Sortie:
```
18
```

---

## Trim
Créer une fonction qui retire tous les espaces d'une chaine de caractère

### Exemple
Entrée:
```
" a bcd wef wer  wrf "
```

Sortie : 
```
"abcdwefwerwrf"
```

---

## Mots
Créer une fonction qui compte le nombre de mots dans une chaine de caractères

### Exemple  
Entrée:
```
Hello,I haven't got a plan
```

Sortie:
```
7
```

---

## Phrase

Créer une fonction qui prend en paramètre une phrase et en inverse tous les mots

### Exemple 
Entrée :
```
"J'aime les pommes"
```

Sortie: 
```
"pommes les aime'J"
```

---

## Merge

Créer une fonction qui permet de cocnatenner deux chaines de caractères en les fusionnant là ou elles ont des caractères identiques

### Exemple
Entrées:
```
"abcde" "cdefgh" 
"abaab" "aabab" 
"abc" "def" 
"abc" "abc" 
```

Sorties:
```
"abcdefgh"
"abaabab"
"abcdef"
"abc"
```

---

## Ami?

Crér une fonction qui prend deux chaines de listes de chaines de caractères en parmètre: 
`people` et `friends`.

La fonction renvoie, de `people`, tous les noms qui sont aussi dans `friends`.

La fonction doit être insensible à la casse

### Exemples
Entrée:
```
people ["tim", "tom", "jack"]
friends ["jack", "Karen", "Johathan"]
```
Sortie:
```
["jack"]
```

---

## Positif/negatif
écrire une fonction qui prend en paramètre un array de nombres positifs et negatifs et renvoie une liste contenant 2 elements, le nombre de positifs et le nombres de negatifs. 0 ne compte ni pour 1 ni pour 0.

### Exemple
Entré: 
```
[-1, -3, 3, 23, 6, 0]
```
Sortie:
```
[3, 2]
```

---

## Suppression d'attribut
Écrire un programme qui affiche tous les attributs d'un objet, supprime une de ses propriétés sur 2, et affiche à nouveau toutes les propriétés 

### Exemple 
Entrée :
```json
{
    "first_name": "John",
    "last_name": "Smith",
    "age": "38",
    "department": "Software"
};

```

Sortie : 
```json
const user = {
    "first_name": "John",
    "age": "38"
};
```

---

## Le plus récurrent

Créer une fonction qui prend en paramètre une liste de nombres entiers, et qui affiche le nombre apparaissant dans plus de la moitié des occurences dans la liste donnée. 

La liste sera toujours d'une longueur impaire et ses nombres positifs, et la fonction renvoie -1 si le nombre en question n'existe pas 
### Exemple

Entrée: 
```
[1, 2, 3, 4, 2, 3, 6, 7 ,8, 6, 4, 3]
```
Sortie:
```
3
```

---

## Paires parfaites
Faire une fonction qui prend en paramètre une liste, et un nombre. 
On considèrera comme "paire parfaite" chaque paire dont la somme est égale au nombre passé en second paramètre. 
Votre fonction renverra la somme de leurs indices.

Une paire parfait ene peut être comptée qu'une fois 

### Exemple

Entrée:
```
arr = [1, 4, 2, 3, 0, 5] et n = 7
```
Sortie:
```
paires parfaites : (4, 3 et 2, 5)
1 + 3 + 2 + 5 = 11

```

---

## Le Tank

Vous devez simuler une map sur laquelle se trouve un tank. 

Le tank doit se déplacer aléatoirement sur la map, mais ne jamais en sortir. 

Affichez à chaque tour l'evolution de la map et de la position du tank dessus. une case vide est représentée par un *. La case du tank par un T.

Vous devez séparer la logique et les fichiers entre les gestions du tank et de la map, et utiliser des interfaces pour gérer les données autour de ceux-ci.

Il est possible de clear la console avec `console.clear()`.

Bonus : Ajouter des objets inertes contre lesquels le tank collisionne.

### Exemple
Sortie 1:
```
* * * * * * * * * *
* * * T * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
```

Sortie 2:
```
* * * * * * * * * *
* * * * * * * * * *
* * * T * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
```

---


## La spirale infernale
Créer une fonction createSpiral qui prend en parametre un nombre N et renvoie, sous forme de tableau en deux dimensions, une spirale de NxN de coté 

La spirale commence à 1 et augmente au fur et à mesure qu'elle se rapproche du centre.

### Exemple 
Entrée: 
```
N = 5 
```
Sortie: 
```
Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
Représentation:
1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9

```
