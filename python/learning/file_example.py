from os import strerror
import errno
import random

byte = bytearray(255)

for i in range(len(byte)):
	byte[i] = random.randint(0, 255)

print(byte)

folder_address = "D:\\Documentos\\Trabajo\\Python\\Learning\\Files_Examples"
file_name = "\\binary_file"
file_type = ".bin"

file_path = folder_address + file_name + file_type

try:
	file = open(file_path, "wb")
	file.write(byte)
	file.close()
except IOError as exc:
	print("No se pudo crear archivo:", strerror(exc.errno))
