// Please add or update the code as needed
// Write DSA Tasks for easy to hard level task in js. and write task in each file.

// Easy Level Task:
// File: Days/day5Task.js
// Task: Write a function that takes in a string and returns the reverse of that string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Medium Level Task:
// File: Days/day5Task.js
// Task: Write a function that takes in a number and returns true if the number is prime, false otherwise.

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

// Hard Level Task:
// File: Days/day5Task.js
// Task: Implement a function that counts the number of occurrences of each element in an array and returns an object with the element as the key and the count as the value.

function countOccurrences(arr) {
  let countObj = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]]++;
    } else {
      countObj[arr[i]] = 1;
    }
  }
  
  return countObj;
}