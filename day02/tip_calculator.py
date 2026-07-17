bill_total=1200
people = 4

names = ["kidus", "Sara", "yared", "Marta"]

def split_bill(total, people, tip_rate=0.10):
    total_with_tip = total + (total * tip_rate)
    per_person = total_with_tip / people
    return per_person

amount_per_person = split_bill(bill_total, people)

for X in names:
    print(f"{X} should pay: {amount_per_person} ETB")
