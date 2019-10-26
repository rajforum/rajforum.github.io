import sys

'''
	Display of all factor of 2 upto given number.
	as eg : input > 12, output > 1,2,4,8
'''
def ShowPowerOfTwo():
	n = int(sys.argv[1])
	for i in range(1,n+1):
		if(i & (i-1) == 0):
			print i

ShowPowerOfTwo()


'''
	To check whether given number is power if 2.
	as eg : input > 12, output > False; input > 16, Output > True
'''
def IsPowerOfTwo():
	x = int(sys.argv[1])
	return (x & -x) == x
	
print IsPowerOfTwo()


def IsPowerOfTwo2():
	x = int(sys.argv[1])
	return x & (x-1) == 0

print IsPowerOfTwo2()
