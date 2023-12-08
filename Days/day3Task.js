// DSA Tasks - Day 3

// Task 1: Reverse a string

// Given a string, write a function to reverse it.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Task 2: Find the maximum number in an array

// Given an array of numbers, write a function to find the maximum number.

function findMax(arr) {
  return Math.max(...arr);
}

// Task 3: Find the sum of all numbers in an array

// Given an array of numbers, write a function to find the sum of all numbers.

function findSum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Task 4: Check if a string is a palindrome

// Given a string, write a function to check if it is a palindrome.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}