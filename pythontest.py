# Even Odd Program

def even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

num = 5
result = even_odd(num)
print(result)