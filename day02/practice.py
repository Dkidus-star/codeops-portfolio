
temperature=int(input("Enter the temperature in Celsius: "))
if temperature < 15:
    print("cold")
elif temperature <= 28:
    print("warm")
else:
    print("hot")

for number in range(1, 11):
    print(number)

for number in range (1,21):
    if number % 2 ==0:
        print(number,"is even")

def apply_discount(price, percent=10):
    discount=price*(percent/100)
    final_price=price-discount
    return final_price

print(apply_discount(1000))
print (apply_discount(1000, 20))

count=5
while count >=1:
    print (count)
    count=count-1

print("Lift 0ff")


