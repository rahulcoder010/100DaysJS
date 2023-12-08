// DSA Task 1: Write a function to reverse a string.
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// DSA Task 2: Write a function to check if a string is a palindrome.
function isPalindrome(str) {
  return str === reverseString(str);
}

// DSA Task 3: Write a function to find the maximum number in an array.
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// DSA Task 4: Write a function to calculate the factorial of a number.
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}