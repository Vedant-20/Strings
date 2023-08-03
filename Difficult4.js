// Longest Palindromic Substring (Difficult):
// Given a string, find the longest palindromic substring in it.


function longestPalindrome(s) {
    let longest = '';
  
    for (let i = 0; i < s.length; i++) {
      const oddPalindrome = expandAroundCenter(s, i, i);
      const evenPalindrome = expandAroundCenter(s, i, i + 1);
  
      const currentLongest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
  
      if (currentLongest.length > longest.length) {
        longest = currentLongest;
      }
    }
  
    return longest;
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
  
    // When the while loop breaks, s[left] and s[right] are not equal (or pointers are out of bounds)
    // So, we need to slice from left + 1 to right - 1 to get the correct palindrome substring.
    return s.slice(left + 1, right);
  }
  
  // Example usage:
  const s = "babad";
  console.log(longestPalindrome(s)); // Output: "bab" or "aba"
  