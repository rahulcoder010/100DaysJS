/*Please update the code in the file path "Days/day5Task.js" with the following contents:*/

// Task 1: Reverse a String
const reverseString = (str) => {
  return str.split("").reverse().join("");
}

// Task 2: Check if a String is a Palindrome
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Task 3: Count the Number of Vowels in a String
const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Task 4: Find the Maximum Number in an Array
const findMaxNumber = (arr) => {
  return Math.max(...arr);
}

// Task 5: Calculate the Factorial of a Number
const calculateFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}