// Please write your code here.


//DSA Tasks for easy to hard level task

//EASY LEVEL TASKS

//Task 1: Write a function that takes in a string and returns the length of the string.
function getLength(str) {
  return str.length;
}

//Task 2: Write a function that takes in an array of numbers and returns the sum of all the numbers.
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//Task 3: Write a function that takes in a number and returns true if the number is even, and false otherwise.
function isEven(num) {
  return num % 2 === 0;
}

//Task 4: Write a function that takes in a string and returns a new string with all the vowels removed.
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}


//MEDIUM LEVEL TASKS

//Task 5: Write a function that takes in an array of numbers and returns the largest number in the array.
function getMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

//Task 6: Write a function that takes in a string and returns true if the string is a palindrome, and false otherwise.
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

//Task 7: Write a function that takes in an array of numbers and returns a new array with only the unique numbers.
function getUnique(numbers) {
  return Array.from(new Set(numbers));
}


//HARD LEVEL TASKS

//Task 8: Write a function that takes in a string and returns the first non-repeated character in the string.
function getFirstNonRepeatedChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

//Task 9: Write a function that takes in an array of numbers and returns a new array with only the prime numbers.
function getPrimeNumbers(numbers) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return numbers.filter(isPrime);
}

//Task 10: Write a function that takes in a string and returns the most common character in the string.
function getMostCommonChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let maxCount = 0;
  let mostCommonChar;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostCommonChar = char;
    }
  }
  return mostCommonChar;
}