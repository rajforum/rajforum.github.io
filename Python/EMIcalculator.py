l = input("Enter loan amount : ")
n = input("Enter time(month) to pay loan : ")
rate = input("Enter interest rate : ")
r = (1 + (rate/1200.0))
EMI = (l*(r**n)*(r-1)) / ((r**n)-1)*1.0

print "--------------------------------------------\n"

print "your EMI per month : ",round(EMI)

print "your total interest : ",round(EMI*n - l)

print "your total amount paid : ",round(EMI*n)

#print "r ",r

print "--------------------------------------------\n"
#print "Actual result : \nEMI ",EMI,"\tEMI*n-l ",EMI*n-l,"\tEMI*n ",EMI*n,"\tAmt ",(EMI*n) + (EMI*n-l)

	
''' To get Monthally Amt, principal '''
loan = l 
#Amt = 0
for n in range(1,n+1):
	SI = loan*rate/1200.0
	
	Amt = SI + loan
	
	loan = Amt - EMI
	
	pom = EMI - SI #pom ~ principal of Month. 

	''' #percentage of loan paid w.r.t loanAmount. '''
	per = ((l - loan)*100)/l
	
	print n,". || p : ",round(pom),"|| interest : ",round(SI),"|| Total : ",round(EMI)," || balance : ",round(loan),"|| per% :",round(per,2)
	print"-----------------------------------------------------------------------------"
	
	

