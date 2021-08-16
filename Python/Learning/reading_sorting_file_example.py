from os import strerror
import errno

fileName = input("Name of the file?")

folderAdress = "D:\\Documentos\\Trabajo\\Python\\Learning\\Files_Examples\\"

try:
    file = open(file = folderAdress + fileName, mode = "rt")
    readin = file.read()
    his = []
    num = []
    i = 0
    for char in readin:
        if char.isalpha():
            if char.lower() not in his:
                his.append(char.lower())
                num.append(1)
                #i += 1
            else:
                num[his.index(char.lower())] += 1
    file.close()

    for i in range(len(his)):
        print(his[i], "->", num[i])
        
except IOError as ioe:
    print("File could not be created:", strerror(ioe.errno))
    exit()

