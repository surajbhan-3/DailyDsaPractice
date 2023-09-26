#*  Given two prime numbers m,n   if both numbers are prime print true else print false;
def check_prime_numbers(a, b):
    def is_prime(s):
        if s <= 1:
            return False
        else:
            count = 0
            for i in range(2, s + 1):
                if s % i == 0:
                    count += 1
            if count < 2:
                return True
            else:
                return False

    number_a = is_prime(a)
    number_b = is_prime(b)

    if number_a == True and number_b == True:
        return True
    else:
        return False

# Test the function
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

result = check_prime_numbers(a, b)
print(result)

