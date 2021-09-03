"""

class Timer:
    def __init__(self, hours = 0, mins = 0, secs = 0):
        self.__hours = hours
        self.__minutes = mins
        self.__seconds = secs

    def __str__(self):
        strHour = str(self.__hours)
        strMins = str(self.__minutes)
        strSecs = str(self.__seconds)

        zero = "0"

        if self.__hours < 10:
            strHour = zero + strHour
        if self.__minutes < 10:
            strMins = zero + strMins
        if self.__seconds < 10:
            strSecs = zero + strSecs

        return strHour + ":" + strMins + ":" + strSecs

    def next_second(self):
        self.__seconds += 1
        if self.__seconds > 59:
            self.__seconds = 0
            self.__minutes += 1
            if self.__minutes > 59:
                self.__minutes = 0
                self.__hours += 1
                if self.__hours > 23:
                    self.__hours = 0

    def prev_second(self):
        self.__seconds -= 1
        if self.__seconds < 0:
            self.__seconds = 59
            self.__minutes -= 1
            if self.__minutes < 0:
                self.__minutes = 59
                self.__hours -= 1
                if self.__hours < 0:
                    self.__hours = 23


timer = Timer(23, 59, 59)
print(timer)
timer.next_second()
print(timer)
timer.prev_second()
print(timer)


#--------------------------------------------------------------------------------

class WeekDayError(Exception):
    pass
    

class Weeker:
    allowedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]


    def __init__(self, day):
        if day in Weeker.allowedDays:
            self.__day = day
            self.__num = Weeker.allowedDays.index(day)
        else:
            raise WeekDayError


    def __str__(self):
        return self.__day

    def add_days(self, n):
        while n > 6:
            n -=7
        if (self.__num + n) > 6:
            self.__num = (self.__num + n) - 7
        else:
            self.__num += n
        self.__day = Weeker.allowedDays[self.__num]

    def subtract_days(self, n):
        while n > 6:
            n -=7
        if (self.__num - n) < 0 :
            self.__num = (self.__num - n) + 7
        else:
            self.__num -= n
        self.__day = Weeker.allowedDays[self.__num]
try:
    weekday = Weeker('Mon')
    print(weekday)
    weekday.add_days(15)
    print(weekday)
    weekday.subtract_days(23)
    print(weekday)
    weekday = Weeker('Monday')
except WeekDayError:
    print("Sorry, I can't serve your request.")

#---------------------------------------------------------
"""
"""
class Super:
    def __init__(self,a):
        self.a = a
    def __str__(self):
        return "I am " + str(self.a)
    def get_a(self):
        return self.a

class Sub(Super):
    def __init__(self, a, b):
        Super.__init__(self, a)
        self.b = b
    def get_b(self):
        return self.b

obj = Sub("Casa", 2)
print(obj)
print(obj.get_a())
print(obj.get_b())


"""
"""
class Level1:
    classVar1 = 101
    def __init__(self):
        self.instanceVar1 = 102
    def function1(self):
        return 103

class Level2(Level1):
    classVar2 = 201
    def __init__(self):
        Level1.__init__(self)
        self.instanceVar2 = 202
    def function2(self):
        return 203

class Level3(Level2):
    classVar3 = 301
    def __init__(self):
        Level2.__init__(self)
        self.instanceVar3 = 302
    def function3(self):
        return 303

obj = Level3()

print("classVar1:", obj.classVar1)
print("instanceVar1:", obj.instanceVar1)
print("function1:", obj.function1(), end = "\n\n")
print("classVar2:", obj.classVar2)
print("instanceVar2:", obj.instanceVar2)
print("function2:", obj.function2(), end = "\n\n")
print("classVar3:", obj.classVar3)
print("instanceVar3:", obj.instanceVar3)
print("function3:", obj.function3(), end = "\n\n")

"""

"""

class Level1:
    classVar1 = 101
    def __init__(self):
        self.instanceVar1 = 102
    def function1(self):
        return 103

class Level2:
    classVar2 = 201
    def __init__(self):
        self.instanceVar2 = 202
    def function2(self):
        return 203

class Level3(Level2, Level1):
    classVar3 = 301
    def __init__(self):
        Level1.__init__(self)
        Level2.__init__(self)
        self.instanceVar3 = 302
    def function3(self):
        return 303

obj = Level3()

print("classVar1:", obj.classVar1)
print("instanceVar1:", obj.instanceVar1)
print("function1:", obj.function1(), end = "\n\n")

print("classVar2:", obj.classVar2)
print("instanceVar2:", obj.instanceVar2)
print("function2:", obj.function2(), end = "\n\n")

print("classVar3:", obj.classVar3)
print("instanceVar3:", obj.instanceVar3)
print("function3:", obj.function3(), end = "\n\n")

"""


"""
class AirVehicle:
    def __init__(self, pilot):
        self.pilot = pilot

    def turn_on(self):
        print("Preparing!")
        self.start_engine()

    def start_engine(self):
        pass


class Jet(AirVehicle):
    def __init__(self, model, pilot):
        AirVehicle.__init__(self, pilot)
        self.model = model

    def start_engine(self):
        print("Spiting Fire!")

class Helicopter(AirVehicle):
    def __init__(self, model, pilot):
        AirVehicle.__init__(self, pilot)
        self.model = model

    def start_engine(self):
        print("Propeller at max!")

#print("AirVehicle.__dict__", AirVehicle.__dict__)
#print("Jet.__dict__", Jet.__dict__)
#print("Helicopter.__dict__", Helicopter.__dict__)


v0 = AirVehicle("Dorta")
v1 = Jet("F-16", "Max Fery")
v2 = Helicopter("Apache", "Green Tad")

print("v0.__dict__", v0.__dict__)
print("v1.__dict__", v1.__dict__)
print("v2.__dict__", v2.__dict__)


print("v0.start_engine()", end = "")
v0.start_engine()
print("v0.turn_on()", end = "")
v0.turn_on()

print("v1.start_engine()", end = "")
v1.start_engine()
print("v1.turn_on()", end = "")
v1.turn_on()

print("v2.start_engine()", end = "")
v2.start_engine()
print("v2.turn_on()", end = "")
v2.turn_on()
"""

