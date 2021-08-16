from os import strerror
import errno

class StudentsDataException(Exception):
    def __init__(self,message):
    	Exception.__init__(message)


class BadLine(StudentsDataException):
    def __init__(self, line):
    	StudentsDataException.__init__(self, "Formato de Linea Incorrecto")
    	self.line = line


class FileEmpty(StudentsDataException):
    def __init__(self):
    	StudentsDataException.__init__(self, "Archivo Vacio")

class File:
	def __init__(self, name, tipo):
		self.name = name
		self.tipo = tipo

	def __str__(self):
		return self.name + self.tipo

folderAddress = "D:\\Documentos\\Trabajo\\Python\\Learning\\Files_Examples\\"

fileName = File(input("Nombre del Archivo?"),input("Tipo de archivo?"))
try:
	file = open(file = folderAddress + fileName.name + fileName.tipo, mode = "rt")
	line = file.readline()

	fnames = []
	lnames = []
	scores = []
	while line != "":
		aux = line.split()
		if not isalpha(aux[0]) or not isalpha(aux[1]) or not isinstace(float(aux[2]), float) or len(aux) != 3:
			raise BadLine
		fnames.append(aux[0])
		lnames.append(aux[1])
		scores.append(float(aux[2]))
		line = file.readline()
	file.close()
except IOError as e:
	print("No se puede abrir archivo", strerror(e.errno))
	exit(e.errno)
except BadLine as bl:
	print(bl)


for i in range(len(fnames)):
	print(fnames[i], lnames[i], scores[i])

