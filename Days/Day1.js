Here is the updated code with flatArray method implementation, explanations and test cases:

```js
// flatArray method
// Flattens a nested array of any depth into a single level array

// Explanation:
// 1. Initialize a result array that will contain the flattened items
// 2. Create a flatten function that takes the array and result array parameters
// 3. Use recursion to loop through the array 
// 4. Check if the current element is an array, if yes call flatten on that element to flatten further 
// 5. Else push the element to the result array
// 6. Return the result array after reaching end of recursion

const flatArray = (arr) => {
  let result = [];

  const flatten = (array, result) => {
    array.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element, result);  
      } else {
        result.push(element); 
      }
    });
  }

  flatten(arr, result);

  return result; 
}

// Test cases

// Basic case  
let array = [1, 2, [3, 4], 5, [6]];
console.log(flatArray(array)); // [1, 2, 3, 4, 5, 6]

// Empty array
array = []; 
console.log(flatArray(array)); // []

// Array with no nesting
array = [1, 2, 3];
console.log(flatArray(array)); // [1, 2, 3] 

// Array with multiple levels of nesting
array = [1, [2, [3, [4]]], 5, [[6]]]; 
console.log(flatArray(array)); // [1, 2, 3, 4, 5, 6]
```

The key aspects are:

- Use recursion to flatten arrays of any depth 
- Check if element is array before pushing to result array
- Flatten inner arrays before pushing elements  

Let me know if you have any other questions!