let dsaTask = `// DSA Task: Array Rotation
// Given an array of integers and a positive integer 'k', rotate the array to the right 'k' times.
// Example:
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

// Function to rotate the array to the right 'k' times
function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n;
  
  // Reverse the entire array
  reverse(nums, 0, n - 1);
  
  // Reverse the first 'k' elements
  reverse(nums, 0, k - 1);
  
  // Reverse the remaining elements
  reverse(nums, k, n - 1);
  
  return nums;
}

// Function to reverse an array within the given range
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// Test case
const nums = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(nums, k));`;

dsaTask;