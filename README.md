<h2><a href="https://leetcode.com/problems/word-pattern">Word Pattern</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /><hr><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code>&nbsp;follows the same pattern.</p>

<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>. Specifically:</p>

<ul>
	<li>Each letter in <code>pattern</code> maps to <strong>exactly</strong> one unique word in <code>s</code>.</li>
	<li>Each unique word in <code>s</code> maps to <strong>exactly</strong> one letter in <code>pattern</code>.</li>
	<li>No two letters map to the same word, and no two words map to the same letter.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The bijection can be established as:</p>

<ul>
	<li><code>&#39;a&#39;</code> maps to <code>&quot;dog&quot;</code>.</li>
	<li><code>&#39;b&#39;</code> maps to <code>&quot;cat&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pattern.length &lt;= 300</code></li>
	<li><code>pattern</code> contains only lower-case English letters.</li>
	<li><code>1 &lt;= s.length &lt;= 3000</code></li>
	<li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li>
	<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li>
	<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li>
</ul>


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

- 🔗 [Check Parity 0 and 1 in Array](https://github.com/TsitouhRanjafy/Python/blob/parity/parity.py)  
    - 1- Verification of parity `0` and `1` only in `Array`
 
- 🔗 [Binary Logic CLI](https://github.com/TsitouhRanjafy/Algorithme-/tree/verite_binaire)   
     Simple command-line interface (CLI) tool for performing basic binary logic operations: `AND`(ET),`OR`(OU), `NOT`(NON),`IMPLICATION`(IMPLIQUE)

- 🔗 [Word Pattern](https://github.com/TsitouhRanjafy/Algorithme-/tree/word-pattern)    
    Given a `pattern` and a string `s`, find if `s` follows the same pattern.

  
### 2. **Other**
- 🔗 [Crible d'Eratosthene](https://github.com/TsitouhRanjafy/Algorithme-/tree/crible_eratosthene)
- 🔗 [Couple amis](https://github.com/TsitouhRanjafy/Algorithme-/tree/couple_amis)
- 🔗 Occurance
  
  - [code](https://github.com/TsitouhRanjafy/Algorithme-/blob/main/return_occurance.py) Remove the occurance in Array (eg: [1,2,4,4,1] => [1,2,4,_,_])
  - [code](https://github.com/TsitouhRanjafy/Algorithme-/blob/main/remove_duplicate_in_sorted_1.py) Remove duplicate from sorted Array
  - [code](https://github.com/TsitouhRanjafy/Algorithme-/blob/main/remove_duplicate_in_sorted_2.py) Remove duplicate from sorted Array, with max_duplicate = 2 (eg: [0,0,1,2,2,2,3] => [0,0,1,2,2,3,_])
  


## 🚀 Features
- Written in Python 3.12.6, Typescript, Java, ... 
- Focus on core algorithms, recursion, and backtracking
- Clean, easy-to-understand code, optimized for performance
