// Regular Expression Matching (Difficult):
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.


function isMatch(s, p) {
    const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
    dp[0][0] = true;
  
    // Initialize first row of dp array
    for (let i = 1; i <= p.length; i++) {
      if (p[i - 1] === '*') {
        dp[0][i] = dp[0][i - 2];
      }
    }
  
    // Fill the dp array
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p[j - 1] === '*') {
          dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
        }
      }
    }
  
    return dp[s.length][p.length];
  }
  
  // Example usage:
  const s = "aa";
  const p = "a*";
  console.log(isMatch(s, p)); // Output: true
  