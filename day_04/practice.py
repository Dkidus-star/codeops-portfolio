#1
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def describe(self):
        print(f'"{self.title}" by {self.author} - {self.pages} pages')

book1 = Book("The Alchemist", "kidus girma", 180)
book2 = Book("Atomic Habits", "yared james", 200)

book1.describe()
book2.describe()

#2
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price      
        self.quantity = quantity

    def restock(self, n):
        self.quantity += n
        print(f"Restocked {n} {self.name}(s).")

    def sell(self, n):
        self.quantity -= n
        print(f"Sold {n} {self.name}(s).")

product1 = Product("Notebook", 150, 20)

product1.restock(10)
product1.sell(5)

print("Current Quantity:", product1.quantity)

#3
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price      # ETB
        self.__quantity = quantity

    @property
    def quantity(self):
        return self.__quantity

    def restock(self, n):
        self.__quantity += n
        print(f"Restocked {n} {self.name}(s).")

    def sell(self, n):
        self.__quantity -= n
        print(f"Sold {n} {self.name}(s).")

product1 = Product("Notebook", 150, 20)

product1.restock(10)
product1.sell(5)

print("Current Quantity:", product1.quantity)

#4
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price      # ETB
        self.__quantity = quantity

    @property
    def quantity(self):
        return self.__quantity

    def restock(self, n):
        self.__quantity += n
        print(f"Restocked {n} {self.name}(s).")

    def sell(self, n):
        if n <= self.quantity:
            self.__quantity -= n
            print(f"Sold {n} {self.name}(s).")
        else:
            print("Not enough stock.")

product1 = Product("Notebook", 150, 20)

product1.restock(10)
product1.sell(5)
product1.sell(30)  

print("Current Quantity:", product1.quantity)

#5
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity

    @property
    def quantity(self):
        return self.__quantity

    @quantity.setter
    def quantity(self, value):
        if value >= 0:
            self.__quantity = value
        else:
            print("Quantity cannot be less than zero.")

    def restock(self, n):
        self.quantity = self.quantity + n

    def sell(self, n):
        if n <= self.quantity:
            self.quantity = self.quantity - n
        else:
            print("Not enough stock.")

product1 = Product("Notebook", 150, 20)
product2 = Product("Pen", 20, 50)
product3 = Product("Pencil", 10, 100)

product1.sell(5)

print(product1.name, "Quantity:", product1.quantity)
print(product2.name, "Quantity:", product2.quantity)
print(product3.name, "Quantity:", product3.quantity)
