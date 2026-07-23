#1 Spot the SRP violation
class ReportBuilder:
    def build(self):
        return "Monthly Sales Report"


class ReportSaver:
    def save(self, report):
        print(f"Saving report: {report}")


class ReportEmailer:
    def email(self, report):
        print(f"Emailing report: {report}")


builder = ReportBuilder()
report = builder.build()

saver = ReportSaver()
emailer = ReportEmailer()

saver.save(report)
emailer.email(report)

#2 Refactor to OCP
class Shape:
    def area(self):
        pass


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2


class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2


class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return 0.5 * self.base * self.height


shapes = [
    Circle(5),
    Square(4),
    Triangle(6, 3)
]

for shape in shapes:
    print(f"Area = {shape.area()}")

#3 Write a Singleton
class AppSettings:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.currency = "ETB"
        return cls._instance


settings1 = AppSettings()
settings2 = AppSettings()

print(settings1.currency)
print(settings2.currency)

print(settings1 is settings2)

#4 Write a Factory
class Circle:
    def draw(self):
        print("Drawing Circle")


class Square:
    def draw(self):
        print("Drawing Square")


class Triangle:
    def draw(self):
        print("Drawing Triangle")


class ShapeFactory:

    @staticmethod
    def create(kind):
        kind = kind.lower()

        if kind == "circle":
            return Circle()

        elif kind == "square":
            return Square()

        elif kind == "triangle":
            return Triangle()

        else:
            raise ValueError("Unknown shape")


shape1 = ShapeFactory.create("circle")
shape2 = ShapeFactory.create("square")
shape3 = ShapeFactory.create("triangle")

shape1.draw()
shape2.draw()
shape3.draw()

#5 Write an Observer pair
class NewsAgency:

    def __init__(self):
        self.subscribers = []

    def subscribe(self, subscriber):
        self.subscribers.append(subscriber)

    def notify(self, news):
        for subscriber in self.subscribers:
            subscriber.update(news)


class EmailSubscriber:

    def update(self, news):
        print(f"Email Subscriber received: {news}")


class SMSSubscriber:

    def update(self, news):
        print(f"SMS Subscriber received: {news}")


agency = NewsAgency()

email = EmailSubscriber()
sms = SMSSubscriber()

agency.subscribe(email)
agency.subscribe(sms)

agency.notify("Hello Subscribers!")