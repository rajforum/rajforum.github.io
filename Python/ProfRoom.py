def ProfRoom():
	n = 100
	cond = True
	while((n < 1000) and cond == True):
		tempRoom = n
		sum1 = tempRoom*(tempRoom+1)/2
		sum2 = 0
		while(sum2 <= sum1 ):
			sum2 = sum2 + (tempRoom)
			if(sum2 == sum1):
				print "Total Room : ",tempRoom,"\tProf's Room : ",n
				cond = False
				break
			tempRoom = tempRoom + 1
		n += 1
ProfRoom()

'''
Given input 1,2,3,4,5
Expected output 1,2,3,4,5; 2,3,4,5,1; 3,4,5,1,2; 4,5,1,2,3; 5,1,2,3,4
'''
def pattern():
	n = [1,2,3,4,5]
	l = len(n)
	a = n
	for i in range(0,l):
		print a
		start = a[0]
		for j in range(0,l):
			if(j == (l-1)):
				a[j] = start
			else:
				a[j] = a[j+1]

pattern()	
		
		


