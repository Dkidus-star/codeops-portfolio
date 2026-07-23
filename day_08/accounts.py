from account import Account
from config import BankConfig


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)

        config = BankConfig()
        self.rate = config.interest_rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("\n     Savings Account")
        super().statement()
        print("Interest Rate:", self.rate)


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)

        config = BankConfig()
        self.overdraft = config.overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if self.balance - amount < -self.overdraft:
            raise ValueError("Overdraft limit exceeded")

        self._Account__balance -= amount

        print(f"{amount} ETB withdrawn successfully.")

        self._notify(f"{amount} ETB withdrawn.")

    def statement(self):
        print("\n     Current Account")
        super().statement()
        print("Overdraft Limit:", self.overdraft, "ETB")