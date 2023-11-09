// File: Days/day3Task.js

// Easy Level Task

// Task 1: Find the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Task 2: Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Medium Level Task

// Task 3: Find the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Task 4: Check if a number is prime or not
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

// Hard Level Task

// Task 5: Implement a binary search algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Task 6: Implement a sorting algorithm (e.g. bubble sort, selection sort, insertion sort, merge sort, quick sort, etc.)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}