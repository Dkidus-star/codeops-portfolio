customers = [
    ("kidus", 1200),
    ("sara", 850),
    ("yared", 450),
    ("dawit", 1500),
    ("marta", 300)]

def tier(balance):
    if balance >= 1000:
         return "Premium"
    elif balance >= 500:
        return "Standard"
    else:
        return "Basic"

premium_count = 0
standard_count = 0
basic_count = 0


for name, balance in customers:
    customer_tier = tier(balance)

    print(f"Name: {name}  Tier: {customer_tier}  Balance: {balance} ETB")

    if customer_tier == "Premium":
        premium_count += 1
    elif customer_tier == "Standard":
        standard_count += 1
    else:
        basic_count += 1



print(f"Premium Customers : {premium_count}")
print(f"Standard Customers: {standard_count}")
print(f"Basic Customers   : {basic_count}")
