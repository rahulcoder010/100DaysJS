// Tasks for Day 1

// 1. Write a program to find the factorial of a number.

function factorial(num) {
  let fact = 1;
  
  for(let i = 1; i <= num; i++) {
    fact *= i;
  }
  
  return fact;
}

// 2. Write a program to check if a number is prime or not.

function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// 3. Write a program to check if two strings are anagrams of each other.

function isAnagram(str1, str2) {
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");
  
  return sortedStr1 === sortedStr2;
}

// 4. Write a program to reverse a string.

function reverseString(str) {
  let reversedStr = "";
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return reversedStr;
}

// 5. Write a program to find the Fibonacci series up to a certain number of terms.

function fibonacciSeries(numTerms) {
  let series = [];
  
  if(numTerms >= 1) {
    series.push(0);
  }
  
  if(numTerms >= 2) {
    series.push(1);
  }
  
  for(let i = 2; i < numTerms; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  
  return series;
}