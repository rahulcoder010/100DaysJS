// Please update this file and add DSA tasks for easy to hard level tasks in JavaScript.

// Task 1: Print the elements of an array in reverse order.
function printArrayInReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// Task 2: Find the maximum element in an array.
function findMaximumElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Task 3: Count the number of occurrences of a specific element in an array.
function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}