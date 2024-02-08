
/**
 * This helper function is used to handle the recursion in the flatArray function.
 * @param {Array} nestedArray - The nested array to be flattened.
 * @param {Array} result - The flattened array.
 * @throws {TypeError} - Throws error if array contains non-integer values.
 */
function helper(nestedArray, result) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            helper(nestedArray[i], result);
        } else if (typeof nestedArray[i] === 'number') {
            result.push(nestedArray[i]);
        } else {
            throw new TypeError('Array should only contain integers');
        }
    }
}

/**
 * This function takes a nested array and returns a flattened array.
 * @param {Array} arr - The nested array to be flattened.
 * @returns {Array} - The flattened array.
 * @throws {TypeError} - Throws error if input is not an array.
 */
function flatArray(arr) {
    // Check if input is an array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input should be an array');
    }

    let result = [];
    helper(arr, result);

    return result;
}

// Test cases:

console.log(flatArray([1, 2, [3, 4, [5, 6]]])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(flatArray([1, [2, [3, [4, [5]]]]])); // Expected output: [1, 2, 3, 4, 5]
console.log(flatArray([[1, 2, 3], [4, 5], [6]])); // Expected output: [1, 2, 3, 4, 5, 6]

// Edge cases:

console.log(flatArray([])); // Expected output: []
console.log(flatArray([1])); // Expected output: [1]
try {
    console.log(flatArray([1, '2', [3, 4]])); // Expected output: Error
} catch (e) {
    console.error(e.message);
}
try {
    console.log(flatArray('1, 2, 3')); // Expected output: Error
} catch (e) {
    console.error(e.message);
}
