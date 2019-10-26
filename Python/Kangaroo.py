import sys
'''
There are two kangaroos on an x-axis ready to jump in the positive direction (i.e, toward positive infinity).
    1. The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
    2. The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
    3. Given the starting locations and movement rates for each kangaroo, can you determine if they’ll ever land at the same location at the same time?
'''


def Kangaroo():
	print "Enter each Kangaroo location and speed respectively "	
	k1,j1 = int(sys.argv[1]),int(sys.argv[2])
	k2,j2 = int(sys.argv[3]),int(sys.argv[4])
		
	c1 = 0
	c2 = 0
	
	while(True):
		c1 += 1
		c2 += 1
		if((c1 == c2) and (k1+j1*c1 == k2+j2*c2) ):
			print "No of jump : ",c1," Meeting point : ", k1+j1*c1
			return "Yes"
	
print Kangaroo()	
	
