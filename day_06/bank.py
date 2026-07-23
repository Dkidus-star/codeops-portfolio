from account import Account
from accounts import SavingsAccount, CurrentAccount


class AccountFactory:

    @staticmethod
    def create(kind, owner, number, balance=0):

        if kind == "account":
            return Account(owner, number, balance)

        elif kind == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind == "current":
            return CurrentAccount(owner, number, balance)

        else:
            raise ValueError("Unknown account type")