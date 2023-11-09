// Write your code here

//task1 - Easy level - Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

//task2 - Medium level - Count vowels in a string
function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//task3 - Hard level - Find the first non-repeating character in a string
function findFirstNonRepeatingChar(str) {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  for (let char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}