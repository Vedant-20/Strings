// Longest Substring Without Repeating Characters (Moderate):
// Given a string, find the length of the longest substring without repeating characters.


function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLength = 0;
    let left = 0;
    const charIndexMap = new Map();
  
    for (let right = 0; right < n; right++) {
      const currentChar = s[right];
  
      if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
        left = charIndexMap.get(currentChar) + 1;
      }
  
      charIndexMap.set(currentChar, right);
      const currentLength = right - left + 1;
      maxLength = Math.max(maxLength, currentLength);
    }
  
    return maxLength;
  }
  
  // Example usage:
  const s = "abcabcbb";
  const longestLength = lengthOfLongestSubstring(s);
  console.log(longestLength); // Output: 3 (the longest substring without repeating characters is "abc")
  