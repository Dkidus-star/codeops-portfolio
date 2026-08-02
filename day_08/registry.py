# ==========================================
# Addis Bank - Day 8 Account Registry
# ==========================================


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

        # Stack (LIFO)
        self.history = []


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

        # Save transaction
        self.history.append(("deposit", amount))


        self._notify(
            f"{self.owner} deposited ETB {amount:.2f}"
        )


    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Amount must be positive.")


        if amount > self.balance:
            raise ValueError("Insufficient funds.")


        self._balance -= amount

        # Save transaction
        self.history.append(("withdraw", amount))


        self._notify(
            f"{self.owner} withdrew ETB {amount:.2f}"
        )


    def undo_last(self):

        if len(self.history) == 0:
            print("No transaction available.")
            return


        action, amount = self.history.pop()


        if action == "deposit":
            self._balance -= amount


        elif action == "withdraw":
            self._balance += amount


        print(
            f"Undo: {action} ETB {amount:.2f}"
        )


    def statement(self):

        print("-------------------------")
        print("Account")
        print(f"Owner: {self.owner}")
        print(f"Number: {self.account_number}")
        print(f"Balance: ETB {self.balance:.2f}")
        print("-------------------------")



class SavingsAccount(Account):

    def __init__(self, owner, number, balance=0):

        super().__init__(owner, number, balance)

        self.rate = BankConfig().interest_rate



    def add_interest(self):

        interest = self.balance * self.rate

        self.deposit(interest)



    def statement(self):

        print("-------------------------")
        print("Savings Account")
        print(f"Owner: {self.owner}")
        print(f"Number: {self.account_number}")
        print(f"Balance: ETB {self.balance:.2f}")
        print(f"Rate: {self.rate * 100}%")
        print("-------------------------")



class CurrentAccount(Account):

    def __init__(self, owner, number, balance=0):

        super().__init__(owner, number, balance)

        self.overdraft = BankConfig().overdraft_limit



    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Amount must be positive.")


        if amount > self.balance + self.overdraft:
            raise ValueError("Overdraft exceeded.")


        self._balance -= amount


        self.history.append(
            ("withdraw", amount)
        )


        self._notify(
            f"{self.owner} withdrew ETB {amount:.2f}"
        )



    def statement(self):

        print("-------------------------")
        print("Current Account")
        print(f"Owner: {self.owner}")
        print(f"Number: {self.account_number}")
        print(f"Balance: ETB {self.balance:.2f}")
        print(f"Overdraft: ETB {self.overdraft}")
        print("-------------------------")



# -------------------------------
# Factory Pattern
# -------------------------------

class AccountFactory:


    @staticmethod
    def create(kind, owner, number, balance=0):

        if kind.lower() == "savings":

            return SavingsAccount(
                owner,
                number,
                balance
            )


        elif kind.lower() == "current":

            return CurrentAccount(
                owner,
                number,
                balance
            )


        else:

            raise ValueError(
                "Invalid account type."
            )



# -------------------------------
# Binary Search Algorithm
# -------------------------------

def binary_search(numbers, target):

    left = 0
    right = len(numbers) - 1


    while left <= right:

        middle = (left + right) // 2


        if numbers[middle] == target:

            return middle


        elif numbers[middle] < target:

            left = middle + 1


        else:

            right = middle - 1



    return -1



# -------------------------------
# Account Registry
# -------------------------------

class AccountRegistry:


    def __init__(self):

        # O(1) lookup
        self.by_number = {}

        # insertion order
        self.order = []



    def add(self, account):

        self.by_number[
            account.account_number
        ] = account


        self.order.append(
            account.account_number
        )



    def find(self, number):

        return self.by_number.get(number)



    def list_all(self):

        return [
            self.by_number[number]
            for number in self.order
        ]



    # ---------------------------
    # Leaderboard
    # ---------------------------

    def top_by_balance(self, n=5):

        accounts = sorted(
            self.by_number.values(),
            key=lambda account: account.balance,
            reverse=True
        )

        return accounts[:n]



    # ---------------------------
    # Binary Search Lookup
    # ---------------------------

    def find_by_number(self, number):

        numbers = sorted(
            self.by_number.keys()
        )


        index = binary_search(
            numbers,
            number
        )


        if index == -1:

            return None


        return self.by_number[
            numbers[index]
        ]



    # ---------------------------
    # Recursive Transaction Total
    # ---------------------------

    def total_transactions(self, number):

        account = self.find(number)


        if account is None:

            return 0



        def calculate(history):

            if len(history) == 0:

                return 0



            transaction, amount = history[0]


            return amount + calculate(
                history[1:]
            )



        return calculate(
            account.history
        )



# ==================================
# Testing
# ==================================

if __name__ == "__main__":


    registry = AccountRegistry()


    sms = SMSAlert()

    audit = AuditLog()



    acc1 = AccountFactory.create(
        "savings",
        "Kidus Girma",
        "1001",
        5000
    )


    acc2 = AccountFactory.create(
        "current",
        "Abebe Kebede",
        "1002",
        3000
    )


    acc3 = AccountFactory.create(
        "savings",
        "Hana Tesfaye",
        "1003",
        8000
    )



    acc1.subscribe(sms)
    acc1.subscribe(audit)

    acc2.subscribe(sms)
    acc2.subscribe(audit)



    registry.add(acc1)

    registry.add(acc2)

    registry.add(acc3)



    acc1.deposit(500)

    acc1.withdraw(300)


    acc2.deposit(1000)


    acc3.deposit(2000)



    print("\n===== TOP ACCOUNTS =====")

    for account in registry.top_by_balance(3):

        account.statement()



    print("\n===== BINARY SEARCH =====")

    result = registry.find_by_number("1002")


    if result:

        result.statement()

    else:

        print("Account not found")



    print("\n===== TRANSACTION TOTAL =====")

    print(
        "Total transactions:",
        registry.total_transactions("1001")
    )



    print("\n===== UNDO =====")

    acc1.undo_last()

    acc1.statement()