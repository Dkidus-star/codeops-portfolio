from bank import AccountFactory
from observer import SMSAlert, AuditLog
from registry import AccountRegistry


def test_account_functionality():

    registry = AccountRegistry()

    # Create accounts
    account1 = AccountFactory.create("account", "Kidus", "1000224080786", 3000)
    savings = AccountFactory.create("savings", "Almaz", "1000224080787", 5000)
    current = AccountFactory.create("current", "Sara", "1000224080788", 2000)

    # Create observers
    sms = SMSAlert()
    log = AuditLog()

    # Subscribe observers
    account1.subscribe(sms)
    account1.subscribe(log)

    savings.subscribe(sms)
    savings.subscribe(log)

    current.subscribe(sms)
    current.subscribe(log)

    # Add accounts to registry
    registry.add(account1)
    registry.add(savings)
    registry.add(current)

    # List all accounts
    registry.list_all()

    print()

    # Perform transactions
    account1.deposit(2000)
    savings.add_interest()
    current.withdraw(2500)

    print()

    # Print statements for all accounts
    accounts = [account1, savings, current]

    for account in accounts:
        account.statement()
        print()

    # Undo the last transaction on Kidus's account
    registry.undo_last("1000224080786")

    print()

    # Display the updated statement
    account1.statement()


test_account_functionality()