from os import strerror
import errno

sourcFileName = input("Nombre del primer archivo de origen:")

folderAdress = "D:\\Documentos\\Trabajo\\Python\\Learning\\Files_Examples\\"

try:
	src = open(folderAdress + sourcFileName, "rb")
except IOError as ioe:
	print("No se pudo abrir archivo de origen:", strerror(ioe.errno))
	exit(ioe.errno)

destiFileName = input("Nombre del segundo archivo de destino:")

try:
	dst = open(folderAdress + destiFileName, "wb")
except IOError as ioe:
	print("No se pudo crear archivo de destino:", strerror(ioe.errno))
	sourceFile.close()
	exit(ioe.errno)

buffer = bytearray(5)
total = 0

try:
	readin = src.readinto(buffer)
	print("readin:", readin)
	while readin > 0:
		print("buffer:", buffer)
		print("buffer[:readin]:", buffer[:readin])
		written = dst.write(buffer[:readin])
		print("written:", written)
		total += written
		readin = src.readinto(buffer)
		print("READIN:", readin)
except IOError as ioe:
	print("No se pudo crear archivo de destino-2:", strerror(ioe.errno))
	exit(ioe.errno)

print(total,"byte(s) succesfully written.")
src.close()
dst.close()

