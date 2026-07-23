#1 this is a simple implementation of a binary search algorithm. The `binary_search` function takes a sorted list and a target value as input and returns the index of the target value if found, or -1 if not found. The algorithm works by repeatedly dividing the search interval in half, comparing the middle element with the target value, and adjusting the search boundaries accordingly.
import time
from collections import deque

numbers = [10, 20, 30, 40, 50]

# O(1) - Accessing an item by index takes the same time.
print(numbers[2])

# O(n) - Visits every item once.
for num in numbers:
    print(num)

# O(n²) - Nested loops over the same list.
for a in numbers:
    for b in numbers:
        pass

# O(1) - Dictionary lookup.
accounts = {"1001": "Alice", "1002": "Bob"}
print(accounts["1001"])

# O(log n) - Binary Search
def binary_search(lst, target):
    left = 0
    right = len(lst) - 1

    while left <= right:
        middle = (left + right) // 2

        if lst[middle] == target:
            return middle
        elif lst[middle] < target:
            left = middle + 1
        else:
            right = middle - 1

    return -1

sorted_numbers = list(range(1, 101))
print(binary_search(sorted_numbers, 75))


#2 this is a simple implementation of a performance comparison between list and dictionary lookups in Python. The code creates a list and a dictionary with 100,000 elements each, then measures the time taken to check for the existence of a target element in both data structures. The results are printed to show the difference in lookup times.
account_list = [f"ACC{i}" for i in range(100000)]
account_dict = {f"ACC{i}": i for i in range(100000)}

target = "ACC99999"

start = time.time()
found = target in account_list
end = time.time()

print("List lookup time:")
print(end - start)

start = time.time()
found = target in account_dict
end = time.time()

print("Dictionary lookup time:")
print(end - start)

#3 this is a simple implementation of a stack data structure . A stack follows the Last In First Out (LIFO) principle, meaning the last item added to the stack is the first one to be removed. The `Stack` class has methods to push items onto the stack, pop items off the stack, and peek at the top item without removing it.
class Stack:

    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.items:
            return self.items.pop()

    def peek(self):
        if self.items:
            return self.items[-1]


names = ["Alice", "Bob", "Charlie", "David"]

stack = Stack()

for name in names:
    stack.push(name)

reversed_names = []

while stack.items:
    reversed_names.append(stack.pop())

print("Original:")
print(names)

print("Reversed:")
print(reversed_names)

#4 this is a simple implementation of a queue data structure using the `deque` class from the `collections` module. A queue follows the First In First Out (FIFO) principle, meaning the first item added to the queue is the first one to be removed. The code demonstrates adding customers to the queue and serving them in order.
queue = deque()

customers = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma"
]

for customer in customers:
    queue.append(customer)

print("Serving Customers")

while queue:
    print(queue.popleft())

#5 this is a simple implementation of a linked list data structure . A linked list consists of nodes, where each node contains data and a reference to the next node in the sequence. The `Node` class represents an individual node, while the `LinkedList` class manages the collection of nodes. The code demonstrates adding nodes to the front of the linked list and printing all the elements in the list.
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:

    def __init__(self):
        self.head = None

    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def print_all(self):
        current = self.head

        while current:
            print(current.data)
            current = current.next

linked = LinkedList()

linked.push_front("Emma")
linked.push_front("David")
linked.push_front("Charlie")
linked.push_front("Bob")
linked.push_front("Alice")

print("Linked List")

linked.print_all()
