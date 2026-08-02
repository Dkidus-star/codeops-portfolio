# -------------------------------
# Singleton Pattern
# -------------------------------

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
        self._notify(
            f"{self.owner} withdrew ETB {amount:.2f}. "
            f"Balance: ETB {self.balance:.2f}"
        )

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
# Testing
# -------------------------------

# Singleton
config1 = BankConfig()
config2 = BankConfig()

print("Singleton Test:", config1 is config2)
print()

# Create observers
sms = SMSAlert()
audit = AuditLog()

# Create accounts using Factory
acc1 = AccountFactory.create(
    "savings",
    "Kidus Girma",
    "1001",
    2000
)

acc2 = AccountFactory.create(
    "current",
    "1002",
    "Abebe Kebede",
    1000
)

# Subscribe observers
acc1.subscribe(sms)
acc1.subscribe(audit)

acc2.subscribe(sms)
acc2.subscribe(audit)

# Transactions
acc1.deposit(500)
acc1.add_interest()
acc1.withdraw(300)

print()

acc2.withdraw(1500)

print()

# Statements
accounts = [acc1, acc2]

for account in accounts:
    account.statement()