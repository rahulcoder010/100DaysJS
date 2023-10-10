```python
# JSDay2.md

# Flat Array Algorithm

## Introduction
In this algorithm, we will write a function to flatten a given nested array. The function will take an array as input and return a new array with all the elements flattened.

## Approach
To flatten the array, we will use recursion. We will iterate over each element of the input array and if an element is an array, we will recursively call the same function to flatten it. If an element is not an array, we will add it to the result array.

## Algorithm
1. Create an empty result array.
2. Iterate over each element `elem` in the input array.
   a. If `elem` is an array, recursively call the flatten function on `elem` and concatenate the returned result with the result array.
   b. If `elem` is not an array, add it to the result array.
3. Return the result array.

## Code Implementation
```python
def flatten_array(arr):
    result = []
    for elem in arr:
        if isinstance(elem, list):
            result.extend(flatten_array(elem))
        else:
            result.append(elem)
    return result
```

## Example
```python
arr = [1, [2, [3, 4], 5], [6, [7, 8]], 9]
result = flatten_array(arr)
print(result)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Time Complexity Analysis
The time complexity of this algorithm is O(N), where N is the total number of elements in the input array. This is because we iterate over each element of the array exactly once.

## Space Complexity Analysis
The space complexity of this algorithm is O(N), where N is the total number of elements in the input array. This is because we create a new result array to store the flattened elements.

## Conclusion
In this algorithm, we have successfully written a function to flatten a given nested array. The function uses recursion to flatten the array and has a time complexity of O(N) and space complexity of O(N).
```
```