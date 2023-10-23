```
# odd-even.py

def even_odd(arr):
    even = []
    odd = []
    
    for num in arr:
        if num % 2 == 0:
            even.append(num)
        else:
            odd.append(num)
    
    return even, odd

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = even_odd(numbers)
print(f"Even numbers: {result[0]}")
print(f"Odd numbers: {result[1]}")
```