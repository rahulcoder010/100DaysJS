/* 
  File: Days/day4Task.js
  Author: your_name
  Date: yyyy/mm/dd
  Description: DSA tasks for easy to hard level task in JavaScript.
*/

// DSA Tasks for easy level

// Task 1: Find the sum of all elements in an array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Task 2: Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Task 3: Check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Task 4: Check if a string is a palindrome
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


// DSA Tasks for medium level

// Task 5: Find the first non-repeated element in an array
function findNonRepeated(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === 1) {
      return arr[i];
    }
  }
  return null;
}

// Task 6: Find the maximum sum of a subarray
function maxSubarraySum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Task 7: Sort an array of integers in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Task 8: Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// DSA Tasks for hard level

// Task 9: Find the longest substring with unique characters
function longestUniqueSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap.has(char)) {
      start = Math.max(start, charMap.get(char) + 1);
    }
    charMap.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

// Task 10: Find the kth smallest element in an array
function findKthSmallest(arr, k) {
  return arr.sort((a, b) => a - b)[k - 1];
}

// Task 11: Reverse words in a string
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Task 12: Implement a stack with push, pop, and getMinimum operations
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  
  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    let value = this.stack.pop();
    if (value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return value;
  }

  getMinimum() {
    return this.minStack[this.minStack.length - 1];
  }
}