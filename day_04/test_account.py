from account import Account

def test_account_functionality():
    
    account1 = Account("kidus", "1000224080786", 3000)
    account1.deposit(2000)
    account1.withdraw(500)
    account1.statement()
    print("\nCurrent Balance:", account1.balance, "ETB")

test_account_functionality()