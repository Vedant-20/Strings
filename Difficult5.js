// One Edit Distance (Difficult):
// Given two strings s and t, determine if they are both one edit distance apart.

function isOneEditDistance(s, t) {
    const m = s.length;
    const n = t.length;
  
    if (Math.abs(m - n) > 1) {
      return false;
    }
  
    let count = 0;
    let i = 0;
    let j = 0;
  
    while (i < m && j < n) {
      if (s[i] !== t[j]) {
        count++;
        if (count > 1) {
          return false;
        }
  
        if (m > n) {
          i++;
        } else if (m < n) {
          j++;
        } else {
          i++;
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
  
    if (i < m || j < n) {
      count++;
    }
  
    return count === 1;
  }
  
  // Example usage:
  const s1 = "ab";
  const t1 = "acb";
  console.log(isOneEditDistance(s1, t1)); // Output: true
  
  const s2 = "1203";
  const t2 = "1213";
  console.log(isOneEditDistance(s2, t2)); // Output: true
  
  const s3 = "abcd";
  const t3 = "abcde";
  console.log(isOneEditDistance(s3, t3)); // Output: true
  
  const s4 = "abc";
  const t4 = "ab";
  console.log(isOneEditDistance(s4, t4)); // Output: true
  
  const s5 = "abc";
  const t5 = "abf";
  console.log(isOneEditDistance(s5, t5)); // Output: false
  