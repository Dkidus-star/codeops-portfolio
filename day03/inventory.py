import os

stock = {}


file_path = os.path.join(os.path.dirname(__file__), "stock.txt")

try:
    with open(file_path) as f:
        for line in f:
            item, qty = line.strip().split(",")
            stock[item] = int(qty)

except FileNotFoundError:
    print("No stock file yet — starting empty")


def adjust(item, amount):
    stock[item] = stock.get(item, 0) + amount



print("Current Stock")
for item, qty in stock.items():
    print(f"{item}: {qty}")



item = input("\nEnter item to update: ")
amount = int(input("Enter quantity change (+ or -): "))


adjust(item, amount)



print("\nUpdated Stock")
for item, qty in stock.items():
    print(f"{item}: {qty}")



low = [item for item, qty in stock.items() if qty < 10]

print("\nLow stock:")
if low:
    for item in low:
        print(item)
else:
    print("No low-stock items.")



with open(file_path, "w") as f:
    for item, qty in stock.items():
        f.write(f"{item},{qty}\n")

print("\nStock saved successfully.")