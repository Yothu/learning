import sys
import modexa

if __name__ == "__main__":
	print("Soy el main!")
else:
	print("Soy el modulo!")


for p in sys.path:
	print(p)


sys.path.append("C:\\Users\\Shiya\\Desktop")

import modulofuera

