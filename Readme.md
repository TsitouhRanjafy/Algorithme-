# Le crible d'Erathostène
C'est une algorithme qui permet de trouver tous les nombres premiers inférieur à un nombre donné N.

> Déterminons tous les nombres premiers inférieurs à N = 100.

## 1.Ecrire tous la liste des nombres inférieurs à 100
<img src="https://github.com/user-attachments/assets/5c8f48dd-90bc-4699-a042-e1b82c6365cd" alt="Image1" width="350" height="350">

## 2.Eliminer 1
1 ne possede qu'un seul diviseur lui même 
<br/>
<br/>
<img src="https://github.com/user-attachments/assets/aa725281-5b4a-450a-9164-83d418176c70" alt="Image2" width="350" height="350">

## 3.Entourer 2 et élimnier les multiples de 2
2 est le premier nombre premier.
Tous les multiples de 2 ne peuvent pas donc être premiers, on les barre
<br/>
<br/>
<img src="https://github.com/user-attachments/assets/d70a9a52-dadc-456e-82a9-d5d6eafdeaf4" alt="Image2" width="350" height="350">

## 4.Entourer 3 et éliminer les multiples de 3
Séléctionné le premier nombre qui n'a pas été éliminer. Ce nombre doit être premier, on l'entoure.
Tous les multiples de 3 ne peuvent pas être premiers
<br/>
<br/>
<img src="https://github.com/user-attachments/assets/62c8ca5c-0fea-40f9-8cd9-5c44cc88845a" alt="Image2" width="350" height="350">

## 5.Entourer 5 et éliminer les multiples de 5
Séléctionné le nombre  suivant qui n'a pas été éliminer, ce nombre est premier, ici 5 est le nombre premier suivant, on l'entoure.
Tous les multiples de 5 ne peuvennt pas premiers
<br/>
<br/>
<img src="https://github.com/user-attachments/assets/f879e688-e467-479c-8177-5105363aac3d" alt="Image2" width="350" height="350">

## 6.Renouveler le procédé jusqu'à la partie entière de *√N*
Le nombre suivant est le 7, On l'entoure et on barre les multiples de 7
<br/>
Ensuite le nombre suivant est le 11 mais 11 > √100
<br/>
Donc, on s'arrête là.
<br/>
<br/>
<img src="https://github.com/user-attachments/assets/03f99224-3caf-4b33-ad3a-64609ab077e8" alt="Image2" width="350" height="350">

## 7.Conclusion
On conclut en donnant la liste des nombres premiers inférieur à N.

> Nombre premiers inférieurs à 100 : 
> 2--3--5--7--11--13--17--19--23--29--31--37--41--43--47--53--59--61--67--71--73--79--83--89--97


# Algorithms Collection

Explore a range of powerful algorithms implemented in Python 3.12.6, Typescript. This repository includes efficient solutions for key algorithmic challenges, focusing on recursion, backtracking, and number theory.

## 📚 Algorithms Included

### 1. **Recursion & Backtracking**
- 🔗 [Recursive Functions](https://github.com/TsitouhRanjafy/Python/tree/recursive)  
  Dive into a series of recursive function implementations that solve common algorithmic problems through recursion.

- 🔗 [Prime Numbers](https://github.com/TsitouhRanjafy/Python/blob/base/base.py)  
  Efficient methods to identify prime numbers, leveraging number theory and recursion.

- 🔗 [Palindrome Partitioning](https://github.com/TsitouhRanjafy/Python/tree/palindrome.partitioning)  
  Solve the palindrome partitioning problem using backtracking techniques. Break a string into all possible palindromic partitions.

- 🔗 [Merge Array](https://github.com/TsitouhRanjafy/Python/blob/merge-array/merge-array.py) ([LeetCode 88](https://leetcode.com/problems/merge-sorted-array/submissions/1526158540))  
    Python solution for merging two sorted arrays in-place. The algorithm runs in `O(m + n)` time complexity and uses `O(1)` extra space.

- 🔗 [CheckParity01](https://github.com/TsitouhRanjafy/Python/blob/parity/parity.py)  
    - 1- Verification of parity 0 and 1 only **`isHasParity_0_1(list,i,q,contient1,contient0)`**
 
- 🔗 [Binary Logic CLI](https://github.com/TsitouhRanjafy/Algorithme-/blob/verite_binaire/main.ts)  
     Simple command-line interface (CLI) tool for performing basic binary logic operations: `AND`(ET),`OR`(OU), `NOT`(NON),`IMPLICATION`(IMPLIQUE)
            


## 🚀 Features
- Written in Python 3.12.6
- Focus on core algorithms, recursion, and backtracking
- Clean, easy-to-understand code, optimized for performance






























