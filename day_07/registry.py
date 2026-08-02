class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance


# -------------------------------
# Observer Pattern
# -------------------------------

class SMSAlert:
    def update(self, message):
        print(f"[SMS ALERT] {message}")


class AuditLog:
    def update(self, message):
        print(f"[AUDIT LOG] {message}")


# -------------------------------
# Account Classes
# -------------------------------

class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self._balance = balance
        self._observers = []
        self.history = []  # Transaction history stack

    @property
    def balance(self):
        return self._balance

    def subscribe(self, observer):
        self._observers.append(observer)

    def _notify(self, message):
        for observer in self._observers:
            observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")

        self._balance += amount
        self.history.append(("deposit", amount))

        self._notify(
            f"{self.owner} deposited ETB {amount:.2f}. "
            f"Balance: ETB {self.balance:.2f}"
        )

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")

        if amount > self.balance:
            raise ValueError("Insufficient funds.")

        self._balance -= amount
        self.history.append(("withdraw", amount))

        self._notify(
            f"{self.owner} withdrew ETB {amount:.2f}. "
            f"Balance: ETB {self.balance:.2f}"
        )

    def undo_last(self):
        if not self.history:
            print("No transaction to undo.")
            return

        transaction, amount = self.history.pop()

        if transaction == "deposit":
            self._balance -= amount
        elif transaction == "withdraw":
            self._balance += amount

        print(f"Undid {transaction} of ETB {amount:.2f}")

    def statement(self):
        print("------ Account ------")
        print(f"Owner          : {self.owner}")
        print(f"Account Number : {self.account_number}")
        print(f"Balance        : ETB {self.balance:.2f}")
        print()


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.rate = BankConfig().interest_rate

    def add_interest(self):
        self.deposit(self.balance * self.rate)

    def statement(self):
        print("------ Savings Account ------")
        print(f"Owner          : {self.owner}")
        print(f"Account Number : {self.account_number}")
        print(f"Balance        : ETB {self.balance:.2f}")
        print(f"Interest Rate  : {self.rate * 100:.0f}%")
        print()


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.overdraft = BankConfig().overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")

        if amount > self.balance + self.overdraft:
            raise ValueError("Overdraft limit exceeded.")

        self._balance -= amount
        self.history.append(("withdraw", amount))

        self._notify(
            f"{self.owner} withdrew ETB {amount:.2f}. "
            f"Balance: ETB {self.balance:.2f}"
        )

    def statement(self):
        print("------ Current Account ------")
        print(f"Owner           : {self.owner}")
        print(f"Account Number  : {self.account_number}")
        print(f"Balance         : ETB {self.balance:.2f}")
        print(f"Overdraft Limit : ETB {self.overdraft:.2f}")
        print()


# -------------------------------
# Factory Pattern
# -------------------------------

class AccountFactory:

    @staticmethod
    def create(kind, owner, number, balance=0):

        if kind.lower() == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind.lower() == "current":
            return CurrentAccount(owner, number, balance)

        else:
            raise ValueError("Unknown account type.")


# -------------------------------
# Account Registry
# -------------------------------

class AccountRegistry:

    def __init__(self):
        self.by_number = {}   # O(1) lookup
        self.order = []       # Insertion order

    def add(self, account):
        self.by_number[account.account_number] = account
        self.order.append(account.account_number)

    def find(self, number):
        return self.by_number.get(number)

    def list_all(self):
        return [self.by_number[number] for number in self.order]


# -------------------------------
# Testing
# -------------------------------

if __name__ == "__main__":

    sms = SMSAlert()
    audit = AuditLog()

    registry = AccountRegistry()

    acc1 = AccountFactory.create(
        "savings",
        "Kidus Girma",
        "1001",
        2000
    )

    acc2 = AccountFactory.create(
        "current",
        "Abebe Kebede",
        "1002",
        1000
    )

    acc1.subscribe(sms)
    acc1.subscribe(audit)

    acc2.subscribe(sms)
    acc2.subscribe(audit)

    registry.add(acc1)
    registry.add(acc2)

    acc1.deposit(500)
    acc1.withdraw(300)
    acc1.add_interest()

    acc2.withdraw(1500)

    print("\nFinding account 1001:\n")
    registry.find("1001").statement()

    print("Undoing last transaction...\n")
    acc1.undo_last()
    acc1.statement()

    print("All Accounts:\n")
    for account in registry.list_all():
        account.statement()