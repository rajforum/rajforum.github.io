import math

print " I've just drawn a triangle where all the angles are squares. No, I don't mean right angles or 90 degree, that's impossible! What I do mean is that each angle, measured in degrees, is a square number. Can you tell me how many degrees each of the angles is? \n ---------------------------------------------------------------------"
n = 180
nroot = int(math.sqrt(180))
for i in range(nroot, 0,-1):
	a = n - i**2
	aroot = int(math.sqrt(a))
	for j in range(1, aroot+1, 1):
		for k in range(1, aroot+1,1):
			if(i*i + j*j + k*k) == 180:
				print i,j,k
				print
	
