// TASK 1: Write a function to check if a number is prime or not. Return true if it is prime, false otherwise.
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

// TASK 2: Write a function to find the factorial of a number. Return the factorial.
function factorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// TASK 3: Write a function to reverse a string. Return the reversed string.
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// TASK 4: Write a function to check if two strings are anagrams. Return true if they are anagrams, false otherwise.
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// TASK 5: Write a function to find the maximum and minimum elements in an array. Return the maximum and minimum as an object.
function findMaxMin(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}