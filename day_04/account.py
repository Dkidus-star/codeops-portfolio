class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance

    @property
    def balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.__balance += amount
        print(f"{amount} ETB deposited successfully.")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        print(f"{amount} ETB withdrawn successfully.")

    def statement(self):
        print("\n     Account Statement     ")
        print("Owner:", self.owner)
        print("Account Number:", self.account_number)
        print("Balance:", self.__balance, "ETB")