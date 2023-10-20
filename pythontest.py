```
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

def is_odd(num):
    if num % 2 != 0:
        return True
    else:
        return False

def main():
    num = int(input("Enter a number: "))
    
    if is_even(num):
        print(f"{num} is even")
    else:
        print(f"{num} is odd")

if __name__ == "__main__":
    main()

```