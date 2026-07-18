from account import Account
from accounts import SavingsAccount, CurrentAccount

def test_account_functionality():
    
    account1 = Account("kidus", "1000224080786", 3000)

    account1 = Account("Kidus", "1000224080786", 3000)
    savings = SavingsAccount("Almaz", "1000224080787", 5000)
    current = CurrentAccount("Sara", "1000224080788", 2000)

    account1.deposit(2000)
    account1.withdraw(500)
    account1.statement()
    print("\nCurrent Balance:", account1.balance, "ETB")
    savings.add_interest()
    current.withdraw(2500)

    accounts = [account1, savings, current]

    for account in accounts:
        account.statement()
        print()

test_account_functionality()