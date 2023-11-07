// DSA Tasks

// Easy Level Task
// Task: Given an array of integers, find the sum of all elements.
const sumOfArrayElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Medium Level Task
// Task: Given a string, reverse the string without using any built-in functions or methods.
const reverseString = (str) => {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Hard Level Task
// Task: Given two arrays, find the common elements between the two arrays.
const findCommonElements = (arr1, arr2) => {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}