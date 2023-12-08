// DSA Tasks for beginners

// Task 1: Find the maximum element in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Task 2: Find the sum of all elements in an array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Task 3: Check if a given number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Task 4: Count the number of occurrences of a given element in an array
function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}