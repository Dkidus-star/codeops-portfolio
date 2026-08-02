# ==========================================
# Addis Bank - Day 9 Bank Model
# Tree + Graph Structures
# ==========================================


# -------------------------------
# Branch Tree
# -------------------------------

class Branch:

    def __init__(self, name):
        self.name = name
        self.children = []
        self.accounts = []


    def add_child(self, branch):
        self.children.append(branch)


    def add_account(self, account):
        self.accounts.append(account)


    def total_balance(self):

        # Add balances of accounts in this branch
        total = sum(
            account.balance
            for account in self.accounts
        )


        # Add balances from child branches
        for child in self.children:
            total += child.total_balance()


        return total



# -------------------------------
# Transfer Graph
# -------------------------------

def bfs(transfers, start):

    visited = set()

    queue = [start]

    reachable = []


    while queue:

        current = queue.pop(0)


        if current not in visited:

            visited.add(current)

            reachable.append(current)


            for account in transfers.get(current, []):

                if account not in visited:

                    queue.append(account)


    return reachable



# -------------------------------
# Simple Account Class
# (from previous days)
# -------------------------------

class Account:

    def __init__(self, owner, number, balance):

        self.owner = owner
        self.account_number = number
        self._balance = balance


    @property
    def balance(self):

        return self._balance



# ==================================
# Testing Branch Tree
# ==================================

if __name__ == "__main__":


    # Accounts

    acc1 = Account(
        "Kidus Girma",
        "1001",
        5000
    )


    acc2 = Account(
        "Abebe Kebede",
        "1002",
        3000
    )


    acc3 = Account(
        "Hana Tesfaye",
        "1003",
        7000
    )


    acc4 = Account(
        "Sara Alemu",
        "1004",
        2000
    )


    # -------------------------------
    # Create Branch Tree
    # -------------------------------

    head_office = Branch(
        "Head Office"
    )


    addis_region = Branch(
        "Addis Region"
    )


    bole_branch = Branch(
        "Bole Branch"
    )


    kazanchis_branch = Branch(
        "Kazanchis Branch"
    )


    # Three levels:
    #
    # Head Office
    #    |
    # Addis Region
    #    |
    # Bole Branch


    head_office.add_child(
        addis_region
    )


    addis_region.add_child(
        bole_branch
    )


    addis_region.add_child(
        kazanchis_branch
    )


    # Add accounts

    head_office.add_account(acc1)

    addis_region.add_account(acc2)

    bole_branch.add_account(acc3)

    kazanchis_branch.add_account(acc4)



    print("===== BRANCH TREE BALANCE =====")

    print(
        "Total Bank Balance:",
        head_office.total_balance()
    )



    # -------------------------------
    # Transfer Graph
    # -------------------------------

    transfers = {

        "1001": [
            "1002",
            "1003"
        ],

        "1002": [
            "1004"
        ],

        "1003": [
            "1004"
        ],

        "1004": []

    }



    print("\n===== TRANSFER GRAPH BFS =====")


    reachable = bfs(
        transfers,
        "1001"
    )


    print(
        "Accounts reachable from 1001:",
        reachable
    )