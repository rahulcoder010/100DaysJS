// Day 5: DSA Tasks

// Easy Task: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Medium Task: Check for Palindromes
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Hard Task: Capitalize Letters
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');
}

// Export the functions
module.exports = {
  reverseString,
  isPalindrome,
  capitalizeLetters
};