import platform
import os

lp = []
def find(path = '', dir = ''):
    if isinstance(path, str) or isinstance(dir, str):
        listdir = os.listdir(path)
        if len(listdir) != 0:
            for fol in listdir:
                if fol == dir:
                	lp.append(path + "/" + fol)
                find(path + '/' + fol, dir)
    else:
        print("Path or Directory name not string")
        return None

find("./tree", "python")

print(lp)