// Easy level task
// Task 1: Write a function that takes two numbers as parameters and returns their sum

function sum(a, b) {
  return a + b;
}


// Medium level task
// Task 2: Write a function that takes an array of numbers as a parameter and returns the average value of the numbers

function average(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}


// Hard level task
// Task 3: Write a function that takes a string as a parameter and returns the reversed version of the string

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}