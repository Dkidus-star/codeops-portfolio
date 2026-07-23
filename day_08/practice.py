# 1 the following code is a simple implementation of recursion. It includes two functions: `total` which calculates the sum of a list of numbers, and `count_down` which prints numbers from n down to 1.
def total(nums):
    
    if len(nums) == 0:
        return 0

    return nums[0] + total(nums[1:])

def count_down(n):
    
    if n == 0:
        return

    print(n)

    
    count_down(n - 1)

numbers = [10, 20, 30, 40, 50]

print("Numbers:", numbers)
print("Total:", total(numbers))

print("\nCountdown:")
count_down(5)

# 2 the following code is a simple implementation of binary search. It includes a function `binary_search` which takes a sorted list of items and a target value, and returns the index of the target if found, or -1 if not found.
def binary_search(items, target):
    left = 0
    right = len(items) - 1

    while left <= right:
        middle = (left + right) // 2

        if items[middle] == target:
            return middle

        elif items[middle] < target:
            left = middle + 1

        else:
            right = middle - 1

    return -1


balances = [500, 1200, 1800, 2500, 3200, 5000]

print("\nBalances:", balances)

print("Index of 2500:", binary_search(balances, 2500))

print("Index of 1000:", binary_search(balances, 1000))


#3 the following code is a simple implementation of merge sort. It includes two functions: `merge` which merges two sorted lists into one sorted list, and `merge_sort` which recursively divides the list into halves and sorts them using the `merge` function.

def merge(left, right):
    result = []

    i = 0
    j = 0

    # Compare values from both lists
    while i < len(left) and j < len(right):

        if left[i] < right[j]:
            result.append(left[i])
            i += 1

        else:
            result.append(right[j])
            j += 1

    # Add remaining values
    result.extend(left[i:])
    result.extend(right[j:])

    return result


def merge_sort(items):

    # Base case
    if len(items) <= 1:
        return items

    # Divide the list
    middle = len(items) // 2

    left = merge_sort(items[:middle])
    right = merge_sort(items[middle:])

    # Combine sorted halves
    return merge(left, right)


# Testing merge_sort()

numbers = [34, 8, 92, 11, 67, 4, 55, 71, 19, 25]

print("\nOriginal list:", numbers)

my_result = merge_sort(numbers)

python_result = sorted(numbers)

print("Merge sort:", my_result)

print("sorted():  ", python_result)

print("Same result:", my_result == python_result)


#4 the following code is a simple implementation of sorting a list of tuples based on the second element of each tuple. It uses the `sorted()` function with a custom key defined by a lambda function.

accounts = [
    ("Kidus", 3000),
    ("Abel", 4500),
    ("Sara", 2000),
    ("John", 5200)
]

sorted_accounts = sorted(
    accounts,
    key=lambda account: account[1],
    reverse=True
)

print("\nSorted accounts by balance:")

for account in sorted_accounts:
    print(account)

#5 the following code is a simple implementation of finding if there exists a pair of numbers in a sorted list that adds up to a given target value. It uses a two-pointer technique to efficiently find the pair.

def has_pair(nums, target):

    left = 0
    right = len(nums) - 1

    while left < right:

        total = nums[left] + nums[right]

        if total == target:
            return True

        elif total < target:
            
            left += 1

        else:
            
            right -= 1

    return False


numbers = [2, 4, 6, 8, 10, 12, 14]

print("\nNumbers:", numbers)

print("Target 16:", has_pair(numbers, 16))

print("Target 25:", has_pair(numbers, 25))    