class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance

    @property
    def balance(self):
        """Read-only access to the account balance."""
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
        print("\n------ Addis Bank Account Statement ------")
        print(f"Owner          : {self.owner}")
        print(f"Account Number : {self.account_number}")
        print(f"Balance        : ETB {self.__balance:.2f}")
        print("------------------------------------------")


# --------------------------
# Test the Account class
# --------------------------

acc1 = Account("Kidus Girma", "100001")
acc2 = Account("Abebe Kebede", "100002", 500)

# Deposit
acc1.deposit(1000)
acc2.deposit(250)

# Withdraw
acc1.withdraw(300)
acc2.withdraw(100)

# Print statements
acc1.statement()
acc2.statement()

# Read-only balance
print("\nBalance of Account 1:", acc1.balance)

# Uncomment these one at a time to test the validation

# acc1.deposit(-100)          # Raises ValueError
# acc1.withdraw(-50)          # Raises ValueError
# acc1.withdraw(5000)         # Raises ValueError (Overdraft)
# acc1.balance = 10000        # Raises AttributeError (read-only property)