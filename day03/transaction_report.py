customers = {}

try:
    file = open("transactions.txt", "r")

    for line in file:
        line = line.strip()

        if line == "":
            continue

        name, amount = line.split(",")

        amount = float(amount)

        if name in customers:
            customers[name] += amount
        else:
            customers[name] = amount

    file.close()

except FileNotFoundError:
    print("Error: transactions.txt file not found.")
    exit()


sorted_customers = sorted(customers.items(), key=lambda item: item[1], reverse=True)


report = "Customer Summary\n"
report += "-" * 25 + "\n"

for name, total in sorted_customers:
    print(f"{name}: {total}")

    report += f"{name}: {total}\n"

report_file = open("report.txt", "w")
report_file.write(report)
report_file.close()

