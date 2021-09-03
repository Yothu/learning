class Itera:
    def __init__(self, n):
        print("Itera__init__")
        self.__n = n
        self.__i = 0
    
    def __iter__(self):
        print("Itera__iter__")
        return self

    def __next__(self):
        if self.__i < self.__n:
            self.__i += 1
            print("Itera__next__:", self.__i)
        else:
            raise StopIteration



class Pen:
    def __init__(self, a):
        print("Pen__init__")
        self.__iter = Itera(a)

    def __iter__(self):
        print("Pen__iter__")
        return self.__iter


for i in Pen(15):
    i


