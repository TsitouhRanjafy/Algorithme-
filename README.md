# Binary Logic CLI
> Install nodejs first on your machine
## Installation
  - **Clone the repository or download the script.**
  - **Ensure you have Node.js installed.**
## Usage
  - **Run the script using Node.js with the following syntax:**
  ```shell
    tsc main.ts && node main.js <operand1> <operator> <operand2>
  ``` 
## Operators

  - `ET` (AND operation)
  - `OU` (OR operation)
  - `NON` (NOT operation, only needs one operand)
  - `IMPLIQUE` (Implication operation)
## Examples

  ```shell
    node script.js 1 ET 0
    # Output: 0

    node script.js 1 OU 0
    # Output: 1

    node script.js 1 NON
    # Output: 0

    node script.js 1 IMPLIQUE 0
    # Output: 0
  ```

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
