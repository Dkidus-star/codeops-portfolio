class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance
        self._observers = []

    @property
    def balance(self):
        return self.__balance

    def subscribe(self, observer):
        self._observers.append(observer)

    def _notify(self, message):
        for observer in self._observers:
            observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.__balance += amount
        print(f"{amount} ETB deposited successfully.")

        self._notify(f"{amount} ETB deposited.")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self._Account__balance -= amount
        self.__balance -= amount
        print(f"{amount} ETB withdrawn successfully.")

        self._notify(f"{amount} ETB withdrawn.")

    def statement(self):
        print("\n     Account Statement     ")
        print("\n     Account Statement")
        print("Owner:", self.owner)
        print("Account Number:", self.account_number)
        print("Balance:", self.__balance, "ETB")