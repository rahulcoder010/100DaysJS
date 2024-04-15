// Given a nested array, write a function to flatten it into a single array.

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Test cases
console.log(flattenArray([1, 2, [3, 4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([])); // []
console.log(flattenArray([1, 2, 3])); // [1, 2, 3]