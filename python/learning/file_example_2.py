from os import strerror
import errno

try:
	file = open(file = "D:\\Documentos\\Trabajo\\Python\\Learning\\Files_Examples\\binary_file.bin", mode = "rb")
	a = bytearray(60000)
	file.readinto(a)
	file.close()
	for i in a:
		print(a[i])
except Exception as exc:
	print("No se pudo leer archivo:", strerror(exc.errno))