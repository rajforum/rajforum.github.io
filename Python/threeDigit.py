print "I am thinking of a three digit number. The product of the digits in my number is 14, and the last digit is twice as big as the first digit.What number am I thinking of?\n------------------------------"
for num in range(100,1000,1):
	tempNum = num
	digit = []
	while(tempNum != 0):
		rem = tempNum % 10
		digit.append(rem)
		tempNum /= 10

	if((digit[0]*digit[1]*digit[2] == 14) and digit[0] == 2*digit[2]):
		print "Let me guess!\nIs it ",num
		
		
