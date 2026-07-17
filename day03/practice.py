 
# 1 This program demonstrates the use of sets to find unique cities from a list.
cities = [
    "Addis Ababa",
    "Jimma",
    "Adama",
    "Jimma",
    "Bahir Dar",
    "Adama",
    "Mekelle",
    "Addis Ababa"
]

unique_cities = set(cities)

print("Unique cities:")
print(unique_cities)

print("\nNumber of unique cities:", len(unique_cities))

 #2 
grocery_prices = {
    "Bread": 25,
    "Milk": 90,
    "Sugar": 85,
    "Rice": 120,
    "Eggs": 18
}

print("Grocery Price Report")

for item, price in grocery_prices.items():
    print(f"{item}: {price} ETB")

# 3 

prices = [100, 250, 400, 80]

prices_with_tax = [price * 1.15 for price in prices]

print("Original prices:", prices)
print("Prices with 15% tax:", prices_with_tax)

#4 

prices = [100, 250, 400, 80]

cheap_prices = [price for price in prices if price < 200]

print("Original prices:", prices)
print("Prices under 200:", cheap_prices)

#5
with open("names.txt", "w") as file:
    file.write("Kidus\n")
    file.write("dawit\n")
    file.write("Yared\n")

with open("names.txt", "r") as file:
    print("Customer Names:")
    for name in file:
        print(name.strip())

#6 
try:
    number = float(input("Enter a number: "))
    result = 1000 / number
    print("Result:", result)

except ValueError:
    print("Error: Please enter a valid number.")

except ZeroDivisionError:
    print("Error: You cannot divide by zero.")