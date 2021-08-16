class Animals:
	def __init__(self):
		self.__id_number = 0
		self.__first_name = ""
		self.__last_name = ""
		self.__legs = 0

#	def set_ident(self,ide):
#		self.__ident = ide
#
#	def set_name(self,nam):
#		self.__name = nam

	def setAnimalsData(self,ident,fname, lname, leg):
		if ident:
			self.__id_number = ident
		if fname:
			self.__first_name = fname
		if lname:
			self.__last_name = lname
		if leg:
			self.__legs = leg

	def getFname(self):
		return self.__first_name

	def p_data(self):
		print("ID:", self.__id_number)
		print("First Name:", self.__first_name)
		print("Last Name:", self.__last_name)
		print("Legs:", self.__legs)



class Mammals(Animals):
	def __init__(self):
		Animals.__init__(self)
		self.__bra = 0
		self.__cap = ""

	def setMammalData(self, ide, fname, lname, leg, bra, cap):
		Animals.setAnimalsData(self, ide, fname, lname, leg)
		self.__bra = bra
		self.__cap = cap

	def p_data(self):
		Animals.p_data(self)
		print("Bra:", self.__bra)
		print("Cap:", self.__cap)

	def getFname(self):
		return Animals.getFname(self)


num = 35
fname = "Rah"
lname = "Fhaet"
leg = 3
bra = 67
cap = "WEA"


b = Mammals()
b.setMammalData(num, fname,lname,leg,bra,cap)
b.p_data()





print("BRUH", b.getFname())




