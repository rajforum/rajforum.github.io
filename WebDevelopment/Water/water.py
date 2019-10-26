def measure():
	
	print "\n!!! jug_a is larger than jug_b !!!\n"
	
	a = input("Enter size of jug_a : ")
	b = input("Enter size of jug_b : ")
	# a > b.
	capOf_A = a
	capOf_B = b

	current_A = a
	current_B = 0
	print
	print "jug_A\tjug_B"
	print "----------------"
	print " ",current_A,"\t ",current_B
	print "----------------"
	count = 1;
	cond = 1
	while(cond):
		
		history_A = current_A		
		
		if(history_A > capOf_B ):
			current_A = current_A - (capOf_B - current_B)
			current_B = current_B + (history_A - current_A)
		else:
			current_B = history_A
			current_A = 0
			
		
		print " ",current_A,"\t ",current_B
		print "----------------"
		count += 1
		
		if(current_A == capOf_A-1):
			print "Number of steps : ",count
			cond = 0
			break
			
		if(current_B == capOf_B):
			current_B = 0
			print " ",current_A,"\t ",current_B
			print "----------------"
			count += 1
			
		if(current_A == 0):
			current_A = capOf_A
			print " ",current_A,"\t ",current_B
			print "----------------"
			count += 1
		
		
measure()			



