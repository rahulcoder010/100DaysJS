// Day 2 Task

// TASK 1: Easy Level Task
// Create a function that takes in a string and returns the reverse of that string.
// Example:
// reverseString("hello") -> "olleh"

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


// TASK 2: Medium Level Task
// Create a function that takes in an array of numbers and returns an array with each number squared.
// Example:
// squareNumbers([1, 2, 3, 4]) -> [1, 4, 9, 16]

function squareNumbers(numbers) {
  let squared = [];
  for (let i = 0; i < numbers.length; i++) {
    squared.push(numbers[i] ** 2);
  }
  return squared;
}


// TASK 3: Hard Level Task
// Create a function that takes in an array of strings and returns an array with the strings sorted in alphabetical order.
// Example:
// sortStrings(["banana", "apple", "grape"]) -> ["apple", "banana", "grape"]

function sortStrings(strings) {
  return strings.sort();
}