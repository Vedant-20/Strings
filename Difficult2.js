// Minimum Window Substring (Difficult):
// Given two strings s and t, find the minimum window in s that contains all the characters in t.



function minWindow(s, t) {
    const charFrequency = new Map();
    let requiredChars = t.length;
    let left = 0;
    let minLength = Infinity;
    let minSubstring = "";
  
    // Store the frequency of characters in string t
    for (const char of t) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  
    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
  
      if (charFrequency.has(rightChar)) {
        charFrequency.set(rightChar, charFrequency.get(rightChar) - 1);
        if (charFrequency.get(rightChar) >= 0) {
          requiredChars--;
        }
      }
  
      while (requiredChars === 0) {
        const currentLength = right - left + 1;
        if (currentLength < minLength) {
          minLength = currentLength;
          minSubstring = s.substring(left, right + 1);
        }
  
        const leftChar = s[left];
        if (charFrequency.has(leftChar)) {
          charFrequency.set(leftChar, charFrequency.get(leftChar) + 1);
          if (charFrequency.get(leftChar) > 0) {
            requiredChars++;
          }
        }
  
        left++;
      }
    }
  
    return minSubstring;
  }
  
  // Example usage:
  const s = "ADOBECODEBANC";
  const t = "ABC";
  const result = minWindow(s, t);
  console.log(result); // Output: "BANC"
  