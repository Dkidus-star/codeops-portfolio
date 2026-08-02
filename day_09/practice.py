# 1 the code illustrates the implementation of a binary search tree (BST). It defines a Node class to represent each node in the tree, and provides functions to insert values into the tree and perform an in-order traversal.

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    
    if root is None:
        return Node(value)

    
    if value < root.value:
        root.left = insert(root.left, value)

    
    else:
        root.right = insert(root.right, value)

    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.value)
        inorder(root.right)

numbers = [50, 30, 70, 20, 40, 60, 80]

root = None

for number in numbers:
    root = insert(root, number)

print("In-order traversal:")
inorder(root)

# 2:the code demonstrates how to calculate the height of a binary tree. The height of a tree is defined as the number of edges on the longest path from the root node to a leaf node. The code defines a Node class to represent each node in the tree and a function to calculate the height of the tree recursively.

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def height(node):
    
    if node is None:
        return 0

    left_height = height(node.left)
    right_height = height(node.right)

    return max(left_height, right_height) + 1

root = Node(50)

root.left = Node(30)
root.right = Node(70)

root.left.left = Node(20)
root.left.right = Node(40)

root.right.left = Node(60)
root.right.right = Node(80)

print("Tree height:", height(root))


# 3:the code implements a breadth-first search (BFS) algorithm to traverse a graph. It uses a queue to explore the graph level by level, starting from a specified vertex. The BFS function returns a set of all reachable vertices from the starting vertex.

from collections import deque


def bfs(graph, start):
    visited = set()
    queue = deque([start])

    while queue:
        vertex = queue.popleft()

        if vertex not in visited:
            visited.add(vertex)

            
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)

    return visited

graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

result = bfs(graph, "A")

print("Reachable vertices:")
print(result)

#4 the code implements a depth-first search (DFS) algorithm to traverse a graph. It uses recursion to explore as far as possible along each branch before backtracking. The DFS function prints the order of visited vertices and returns a set of all visited vertices.
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()

    visited.add(start)

    print(start, end=" ")

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

    return visited

graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

print("DFS visit order:")
dfs(graph, "A")

#5 the code demonstrates the use of a priority queue to manage drawing tasks based on their priority. It uses the `heapq` module to maintain a min-heap, where tasks with lower priority values are processed first. The tasks are added to the priority queue, and then they are retrieved and printed in order of priority.

import heapq

drawing_tasks = []

heapq.heappush(drawing_tasks, (3, "Sketch a house"))
heapq.heappush(drawing_tasks, (1, "Draw a logo"))
heapq.heappush(drawing_tasks, (5, "Color a landscape"))
heapq.heappush(drawing_tasks, (2, "Create a character design"))
heapq.heappush(drawing_tasks, (4, "Draw a poster"))

print("Drawing tasks by priority:")

while drawing_tasks:
    priority, task = heapq.heappop(drawing_tasks)
    print(priority, "-", task)
