// Palindrome Pairs (Difficult):
// Given a list of words, find all pairs of distinct indices (i, j) such that the concatenation of words[i] and words[j] forms a palindrome.


class TrieNode {
    constructor() {
      this.children = new Map();
      this.wordIndex = -1; // Stores the index of the word in the words array
      this.palindromeSuffixes = []; // Stores the indices of the suffixes that are palindromes
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word, index) {
      let node = this.root;
      for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i];
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
  
        if (isPalindrome(word, 0, i)) {
          node.palindromeSuffixes.push(index);
        }
  
        node = node.children.get(char);
      }
  
      node.wordIndex = index;
      node.palindromeSuffixes.push(index);
    }
  
    findPalindromes(word, index) {
      const result = [];
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        if (node.wordIndex !== -1 && node.wordIndex !== index && isPalindrome(word, i, word.length - 1)) {
          result.push([index, node.wordIndex]);
        }
  
        const char = word[i];
        node = node.children.get(char);
        if (!node) return result;
      }
  
      for (const palindromeIndex of node.palindromeSuffixes) {
        if (palindromeIndex !== index) {
          result.push([index, palindromeIndex]);
        }
      }
  
      return result;
    }
  }
  
  function isPalindrome(word, left, right) {
    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  
  function palindromePairs(words) {
    const trie = new Trie();
    const result = [];
  
    // Build the Trie with reverse of each word
    for (let i = 0; i < words.length; i++) {
      trie.insert(words[i], i);
    }
  
    // Find palindrome pairs
    for (let i = 0; i < words.length; i++) {
      result.push(...trie.findPalindromes(words[i], i));
    }
  
    return result;
  }
  
  // Example usage:
  const words = ["abcd", "dcba", "lls", "s", "sssll"];
  console.log(palindromePairs(words));
  // Output: [ [ 0, 1 ], [ 1, 0 ], [ 3, 2 ], [ 2, 4 ] ]
  