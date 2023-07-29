// Valid Palindrome (Moderate):
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases and non-alphanumeric characters.


function isPalindrome(s) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the cleanedString is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;
  
  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Example usage:
const string1 = "A man, a plan, a canal: Panama";
const string2 = "race a car";
console.log(isPalindrome(string1)); // Output: true
console.log(isPalindrome(string2)); // Output: false
