// DSA Tasks

// TASK 1:

// Write a program to print "Hello, World!" to the console.

console.log("Hello, World!");

// TASK 2:

// Write a program to print all the elements in an array.

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// TASK 3:

// Write a program to find the sum of all the numbers in an array.

const array = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("Sum:", sum);

// TASK 4:

// Write a program to find the maximum number in an array.

const array = [1, 2, 3, 4, 5];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("Max:", max);

// TASK 5:

// Write a program to reverse a string.

function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseString("Hello"));