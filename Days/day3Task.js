// Day 3 Task

// Easy Task

// Write a function to find the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Medium Task

// Write a function to check if a number is prime or not
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Hard Task

// Write a function to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}