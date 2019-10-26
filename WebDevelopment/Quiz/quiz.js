//module = [[Q[O[A]]]];
Q = [
	 "1. Identify the position of alphabet \"R\"",
	 "2. Which weighs more - a kilo feathers or a kilo bricks",
	 "3. What is in the middle of \"Chennai\"",
	 "4. Which word looks same from upside to down ?",
	 "5. What is at the end of rainbow ?",
	 "6. Which side of cat has more fur ?",
	 "7. My words may be true or false, but result will be always _ _ _ ",
	 "8. The first Indian who got novel prize in mathematics.",
	 "9. A farmer cultivate a field in 5 days, in how many days farmer's two sons cultivate same field",
	 "10. Which line is greater <br>A)____________________<br>B)_______________________________"
	];

O = [
	 [10,12,18,20],
	 ["Feathers","Neither","Don't know","Bricks"],
	 ["Madurai","MAS","n","Vellore"],
	 ["PAPA","RACECAR","SWIMS","MAMA"],
	 ["sky","red","blue","w"],
	 ["top side","outside","bottom-side","left-side"],
	 ["true", "false","undetermine","both true or false"],
	 ["S.Ramanujam", "Satyendra Nath(S.N) Bose", "None","Shakuntala Devi"],
	 ["10 days", "2.5 days", "3 days","0 day"],
	 ["A","B","Don't know","line"]
	];

A = [18,"Neither","n","SWIMS","w","outside","true","None","0 day","B"];



var currentPosition = 0, correct = 0, incorrect = 0, time, sec , userAns;

showQues();

function showQues(){
	resetColor();
	clearInterval(time);
	sec = 15;
	time = setInterval(getTimer,1000);
	
	
	// to show question
	document.getElementById("ques").innerHTML = Q[currentPosition];
	
	//to show option
	disableButtons(false);
	for(var i = 0; i < 4; i++) {
		document.getElementById("op"+i).value = O[currentPosition][i];
	}
	
}

function nextQues() {
	storeInPreviewBox();
	currentPosition++;

	(currentPosition < Q.length) ? showQues() : (clearInterval(time),getScore());	
}


function getTimer() {
	
	if(sec < 0) {
		clearInterval(time);
		userAns = "";
		getAns();
		incorrect++;
		setTimeout(nextQues,1000);
	}
	else{
		document.getElementById("timer").innerHTML = sec;
		sec -= 1;
	}			
}


function userInput(obj) {
		userAns = obj.value;
	
	//console.log(obj.value+" * "+A[currentPosition]);
	
	if(obj.value == A[currentPosition]) {
		//obj.style.backgroundColor = "green";
		document.getElementById(obj.id).style.backgroundColor = "green";
		disableButtons(true);
		correct++; 
		setTimeout(nextQues,1000);
	}
	else{
	 
		document.getElementById(obj.id).style.backgroundColor = "red";
		setTimeout(getAns,500);
		disableButtons(true);
		incorrect++;
		setTimeout(nextQues,1000);
	}
}

function resetColor() {
	for(var i = 0; i < 4; i++) {
		document.getElementById("op"+i).style.backgroundColor = "#BB8FCE";
	}
}


function getScore() {
	var points = 10*correct - 5*incorrect;
	document.getElementById("gameOver").style.display = "block";
	//document.getElementById("gameOver").style.visibility = "visible";
	document.getElementById("result").innerHTML = correct+"/"+(incorrect+correct);
	document.getElementById("points").innerHTML = points;
	setTimeout(shadowHover,1000);
}

function restart(){
	resetGame();
	showQues();
	//setTimeout(showQues,3000);
}


function shadowHover() {
	document.getElementById("h1").style.textShadow = " 13px -10px 5px  red";
}

function getAns() {
	for(var i = 0; i < 4; i++){
		if(document.getElementById("op"+i).value == A[currentPosition]){
			document.getElementById("op"+i).style.backgroundColor = "green";
			 
		}
	}
	disableButtons(true);
}

function resetGame() {
	currentPosition = 0, correct = 0 , incorrect = 0;
	document.getElementById("gameOver").style.display = "none";
	//document.getElementById("gameOver").style.visibility = "hidden";
	//document.getElementById("h1").style.textShadow = " -13px -10px 5px  red";


}
function disableButtons(cond) {
	if(cond == true){
		for(var i = 0; i < 4; i++){
			document.getElementById("op"+i).disabled = true;	 
		}
	}else{
		for(var i = 0; i < 4; i++){
			document.getElementById("op"+i).disabled = false;	 
		}
	}
}

function storeInPreviewBox() {

	var b = document.getElementById("preview_box");
	
	b.innerHTML += "<ul>"
						+"<li>"+document.getElementById("ques").innerHTML+"</li>" 
							+"<ul>"
								+"<li>"+document.getElementById("op0").value+"</li>"
								+"<li>"+document.getElementById("op1").value+"</li>"
								+"<li>"+document.getElementById("op2").value+"</li>"
								+"<li>"+document.getElementById("op3").value+"</li>"
							+"</ul>"

					+"</ul>"
					+"<p>Your response : "+userAns+"</p>"
					+"<p>Admin response : "+A[currentPosition]+"</p>"
					+"<hr>";
	
}
function showPreviewBox(){
	document.getElementById("preview_box").style.display = "block";
}
function cancel_PreviewBox(){
	document.getElementById("preview_box").style.display = "none";
}

