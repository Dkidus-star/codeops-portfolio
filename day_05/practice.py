from abc import ABC, abstractmethod

# 1
class Vehicle(ABC):
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def describe(self):
        print("Make:", self.make)
        print("Model:", self.model)

    # 5
    @abstractmethod
    def wheels(self):
        pass

class Car(Vehicle):
    def wheels(self):
        return 4

class Truck(Vehicle):
    # 2
    def __init__(self, make, model, capacity):
        super().__init__(make, model)
        self.capacity = capacity

    # 3
    def describe(self):
        super().describe()
        print("Capacity:", self.capacity, "tons")

    # 5
    def wheels(self):
        return 6

car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")
truck1 = Truck("Volvo", "FH16", 25)

print("Car Information")
car1.describe()
print("Wheels:", car1.wheels())

print()

print("Truck Information")
truck1.describe()
print("Wheels:", truck1.wheels())

print()

# 4 
print("All Vehicles")
vehicles = [car1, car2, truck1]

for vehicle in vehicles:
    vehicle.describe()
    print("Wheels:", vehicle.wheels())
    print()