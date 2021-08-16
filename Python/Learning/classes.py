class Thing():
    __id = 1
    def __init__(self, name, quantity = 0):
        self.__name = name
        self.__quantity = quantity

    def setSize(self, size):
        self.__size = size


#print("Thing.__dict__:", Thing.__dict__, end = "\n\n")

a = Thing("Pera")
print("a.__dict__:", a.__dict__)

print("a.name:", a._Thing__name)
a._Thing__name = "Uva"
print("a.name:", a._Thing__name)
print("a.name:", a.__name)






if hasattr(version_2,"constrictor"):