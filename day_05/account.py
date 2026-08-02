class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance

    @property
    def balance(self):
        """Read-only balance."""
        return self.__balance

    def deposit(self, amount):
        """Deposit money into the account."""
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.__balance += amount

    def withdraw(self, amount):
        """Withdraw money from the account."""
        if amount <= 0:
            raise ValueError("Amount must be positive.")

        if amount > self.__balance:
            raise ValueError("Insufficient funds.")

        self.__balance -= amount

    def statement(self):
        """Display account information."""
        print("------ Account ------")
        print(f"Owner          : {self.owner}")
        print(f"Account Number : {self.account_number}")
        print(f"Balance        : ETB {self.balance:.2f}")
        print()


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0, rate=0.05):
        super().__init__(owner, number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("------ Savings Account ------")
        print(f"Owner          : {self.owner}")
        print(f"Account Number : {self.account_number}")
        print(f"Balance        : ETB {self.balance:.2f}")
        print(f"Interest Rate  : {self.rate * 100:.0f}%")
        print()


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0, overdraft=1000):
        super().__init__(owner, number, balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")

        if amount > self.balance + self.overdraft:
            raise ValueError("Overdraft limit exceeded.")

        # Access the parent's private balance
        self._Account__balance -= amount

    def statement(self):
        print("------ Current Account ------")
        print(f"Owner           : {self.owner}")
        print(f"Account Number  : {self.account_number}")
        print(f"Balance         : ETB {self.balance:.2f}")
        print(f"Overdraft Limit : ETB {self.overdraft:.2f}")
        print()


# ----------------------------
# Testing the Account Family
# ----------------------------

acc1 = Account("Kidus Girma", "100001", 1000)

acc2 = SavingsAccount(
    "Abebe Kebede",
    "200001",
    2000,
    rate=0.10
)

acc3 = CurrentAccount(
    "Hana Tesfaye",
    "300001",
    500,
    overdraft=1000
)

# Perform transactions
acc1.deposit(500)
acc1.withdraw(300)

acc2.add_interest()

acc3.withdraw(1200)   # Allowed because of overdraft

# Polymorphism
accounts = [acc1, acc2, acc3]

for account in accounts:
    account.statement()