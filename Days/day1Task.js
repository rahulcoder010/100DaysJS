/*

Write your DSA Tasks for easy to hard lavel task in js in this file.

Task 1:
Write a function to reverse a string.

Task 2:
Write a function to check if a number is prime.

Task 3:
Write a function to find the maximum element in an array.

Task 4:
Write a function to check if two strings are anagrams.

*/

// Task 1: function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Task 2: function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Task 3: function to find the maximum element in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Task 4: function to check if two strings are anagrams
function isAnagram(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}