// Day 2 Task

// Easy Level Task

// Write a function to find the sum of two numbers.
function sum(a, b) {
  return a + b;
}

// Medium Level Task

// Write a function to check if a given number is even or odd.
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Hard Level Task

// Write a function to check if a given number is a prime number or not.
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}