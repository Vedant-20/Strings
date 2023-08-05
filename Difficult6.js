// Decode String (Difficult):
// Given an encoded string, decode it based on the following rules: k[encoded_string], where k is a positive integer, and encoded_string is repeated exactly k times.

function decodeString(s) {
    const numStack = [];
    const strStack = [];
    let currentNum = 0;
    let currentStr = '';
  
    for (const char of s) {
      if (!isNaN(char)) {
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === '[') {
        numStack.push(currentNum);
        strStack.push(currentStr);
        currentNum = 0;
        currentStr = '';
      } else if (char === ']') {
        const prevStr = strStack.pop();
        const repeatTimes = numStack.pop();
        currentStr = prevStr + currentStr.repeat(repeatTimes);
      } else {
        currentStr += char;
      }
    }
  
    return currentStr;
  }
  
  // Example usage:
  const encodedString = "3[a]2[bc]";
  console.log(decodeString(encodedString)); // Output: "aaabcbc"
  
  const encodedString2 = "3[a2[c]]";
  console.log(decodeString(encodedString2)); // Output: "accaccacc"
  
  const encodedString3 = "2[abc]3[cd]ef";
  console.log(decodeString(encodedString3)); // Output: "abcabccdcdcdef"
  