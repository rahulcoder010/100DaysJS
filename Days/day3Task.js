// My tasks for Day 3:

// Easy Level Task: 
// Create a function to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Medium Level Task:
// Create a function to check if a word is a palindrome. 
function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word.toLowerCase());
}

// Hard Level Task:
// Create a function to calculate the factorial of a number.
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = {
  reverseString,
  isPalindrome,
  factorial
};