# 100DaysJS
100 Days to JS Master

## JS16 Concept: Higher Order Functions

A higher-order function is a function that can accept other functions as arguments or return other functions as its result. In JavaScript, higher-order functions are an essential concept for functional programming.

One common example of a higher-order function is the `map()` method. It takes an array and a callback function as arguments and returns a new array with the results of applying the callback function to each element of the original array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const square = (num) => num * num;

const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

In the example above, the `map()` method accepts the `square` function as a callback and applies it to each element of the `numbers` array, returning a new array with the squared numbers.

Other examples of higher-order functions include `filter()`, `reduce()`, and `forEach()`. Each of these functions takes a callback function as an argument and performs a specific operation on the elements of an array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => num % 2 === 0;

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4]
```

In this example, the `filter()` method accepts the `isEven` function as a callback and creates a new array with only the even numbers from the original array.

Higher-order functions provide a powerful way to manipulate data and perform complex operations in a concise and reusable manner. They encourage code modularity and allow for the composition of smaller functions to create more complex behavior.

By understanding and using higher-order functions, developers can write cleaner and more efficient code, resulting in improved application performance and maintainability. They are an essential concept for any JavaScript developer looking to master functional programming.