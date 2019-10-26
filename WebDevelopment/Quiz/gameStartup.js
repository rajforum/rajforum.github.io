startGame();

function getPlay() {
	//show game.
	//alert("Welcome to game.");
	window.location = "quiz.html	";

}
function getExit() {
	window.location = "https://www.google.com/";
}

function startGame() {
	setTimeout(madeWith, 1000);


	//setTimeout("disp_userName",1000);

}





function madeWith() {

	document.getElementById("made_with").style.visibility = "visible";
	setTimeout(teamLogo, 3000);
}
function teamLogo() {
	document.getElementById("made_with").style.visibility = "hidden";

	document.getElementById("logo").style.visibility = "visible";
	setTimeout(userName, 3000);

}
function userName() {
	document.getElementById("logo").style.visibility = "hidden";
	document.getElementById("user_name").style.visibility = "visible";

}
function disp_userName() {

	var name = document.getElementById("user_text").value;

	document.getElementById("user_name").innerHTML = "<h1>Hello! <span style = 'color:#4DDB00'>" + name + "</span>, \n<hr>Get ready for Buzzzz...</h1>";
	setTimeout(gameMenu, 5000);												//?? \n is not working. 
}

function gameMenu() {
	document.getElementById("user_name").style.visibility = "hidden";
	document.getElementById("game_menu").style.visibility = "visible";


}

