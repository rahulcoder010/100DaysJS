// DSA Tasks
// Task 1: Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Task 2: Sum of Two Numbers
function sum(a, b) {
  return a + b;
}

// Task 3: Find the Longest Word
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}