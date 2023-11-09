// Write your code here

// DSA Task 1: Reverse a string
function reverseString(str) {
  // Step 1: Split the string into an array of characters
  let charArray = str.split("");

  // Step 2: Reverse the array of characters
  let reversedArray = charArray.reverse();

  // Step 3: Join the array of characters back into a string
  let reversedString = reversedArray.join("");

  // Step 4: Return the reversed string
  return reversedString;
}