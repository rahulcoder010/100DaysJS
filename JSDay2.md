```python
def flatten_array(arr):
    """
    Flattens a nested array into a flat array.
    
    Args:
        arr (list): The nested array to flatten.
    
    Returns:
        list: The flat array.
    """
    result = []
    for item in arr:
        if isinstance(item, list):
            result.extend(flatten_array(item))
        else:
            result.append(item)
    return result

# Example usage
nested_array = [[1, 2, [3]], 4]
flat_array = flatten_array(nested_array)
```