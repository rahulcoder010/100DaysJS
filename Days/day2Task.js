/**
 * This file contains the solution to the problem - "Reverse a string"
 * The problem is to reverse a given string.
 * 
 * Example:
 * Input: "hello"
 * Output: "olleh"
 */

function reverseString(str) {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}