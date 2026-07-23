from account import Account


def binary_search(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left <= right:
        mid = (left + right) // 2

        if numbers[mid] == target:
            return mid

        elif numbers[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return -1


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
        accounts = []

        for number in self.order:
            account = self.by_number[number]
            print(account.owner, "-", account.account_number)
            accounts.append(self.by_number[number])

        return accounts

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
            print(f"Undo successful: {amount} ETB deposit reversed.")

        elif action == "withdraw":
            account._Account__balance += amount
            print("Last withdrawal undone.")
            print(f"Undo successful: {amount} ETB withdrawal reversed.")

 

    def top_by_balance(self, n=5):

        accounts = sorted(
            self.by_number.values(),
            key=lambda a: a.balance,
            reverse=True
        )

        return accounts[:n]

    def find_by_number(self, number):

        numbers = sorted(self.by_number.keys())

        index = binary_search(numbers, number)

        if index == -1:
            return None

        return self.by_number[numbers[index]]

    def total_transactions(self, number):

        account = self.find(number)

        if account is None:
            return 0

        return self._recursive_total(account.history, 0)

    def _recursive_total(self, history, index):

        if index == len(history):
            return 0

        action, amount = history[index]

        return amount + self._recursive_total(history, index + 1)