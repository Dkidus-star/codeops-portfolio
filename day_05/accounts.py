from account import Account


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0, rate=0.05):
        super().__init__(owner, number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("\n   Savings Account   ")
        super().statement()
        print("Interest Rate:", self.rate)


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0, overdraft=1000):
        super().__init__(owner, number, balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if self.balance - amount < -self.overdraft:
            raise ValueError("Overdraft limit exceeded")

        self._Account__balance -= amount

        print(f"{amount} ETB withdrawn successfully.")

    def statement(self):
        print("\n     Current Account    ")
        super().statement()
        print("Overdraft Limit:", self.overdraft, "ETB")