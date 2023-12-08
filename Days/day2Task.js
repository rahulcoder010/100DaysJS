// Day 2 Task

// Easy level task
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Medium level task
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Hard level task
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let totalSum = arr.reduce((acc, curr) => acc + curr);
  return sum - totalSum;
}