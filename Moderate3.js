// String to Integer (atoi) (Moderate):
// Implement the atoi function that converts a string to an integer, handling leading whitespace, sign, and overflow.


function myAtoi(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    let num = 0;
    let sign = 1;
    let i = 0;
  
    // Remove leading whitespace
    while (i < s.length && s[i] === ' ') {
      i++;
    }
  
    // Check for optional sign
    if (s[i] === '+' || s[i] === '-') {
      sign = s[i] === '+' ? 1 : -1;
      i++;
    }
  
    // Process digits until non-digit or end of string
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
      const digit = s[i] - '0';
  
      // Check for overflow
      if (num > Math.floor((INT_MAX - digit) / 10)) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }
  
      num = num * 10 + digit;
      i++;
    }
  
    return num * sign;
  }
  
  // Example usage:
  const str1 = "42";
  const str2 = "   -42";
  const str3 = "4193 with words";
  console.log(myAtoi(str1)); // Output: 42
  console.log(myAtoi(str2)); // Output: -42
  console.log(myAtoi(str3)); // Output: 4193
  