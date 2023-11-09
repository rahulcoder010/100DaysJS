    File Contents: "Days/day5Task.js"

    // Task 1: Reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Task 2: Check if a number is prime
    function isPrime(num) {
        if (num === 1) {
            return false;
        } else if (num === 2) {
            return true;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    // Task 3: Another task...
    // Write your task 3 code here...

    // Task 4: Another task...
    // Write your task 4 code here...

    module.exports = {
        reverseString,
        isPrime
    };