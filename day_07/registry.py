class AccountRegistry:

    def __init__(self):
        self.by_number = {}
        self.order = []

    def add(self, account):
        self.by_number[account.account_number] = account
        self.order.append(account.account_number)

    def find(self, number):
        return self.by_number.get(number)

    def list_all(self):
        print("\nAccounts")

        for number in self.order:
            account = self.by_number[number]
            print(account.owner, "-", account.account_number)

    def undo_last(self, number):

        account = self.find(number)

        if account is None:
            print("Account not found.")
            return

        if len(account.history) == 0:
            print("No transaction to undo.")
            return

        action, amount = account.history.pop()

        if action == "deposit":
            account._Account__balance -= amount
            print("Last deposit undone.")

        elif action == "withdraw":
            account._Account__balance += amount
            print("Last withdrawal undone.")