count = 1;
function getRandomNumber(){
	
	 for(i = 1; i < 16; i++) {
		rnd = Math.floor(Math.random()*15+1);
		c = document.getElementById(i);
		c.innerHTML = rnd;
		
	 }
		
	 for(j = 1; j < 16; j++) {
		for(k = 1; k < 16; k++) {
			if(j != k){
				//console.log("j="+j+",k="+k+" element-j ="+document.getElementById(j).innerHTML);
				//console.log("j="+j+",k="+k+" element-k ="+document.getElementById(k).innerHTML);
				
				if(document.getElementById(j).innerHTML == document.getElementById(k).innerHTML) {
					//console.log("true");
					
					document.getElementById(j).innerHTML = Math.floor(Math.random()*15+1);
					//console.log("after true in j: "+document.getElementById(j).innerHTML);
					k = 0; 
				}
			}	
		}
	}
}
	 

getRandomNumber();
console.log(document.getElementById(15).innerHTML);
console.log(document.getElementById(15));
var emptyTile = 16;
/*function getMove(obj){
	console.log(obj)
	document.getElementById(emptyTile).innerHTML = obj.innerHTML;
	document.getElementById(obj.id).innerHTML = "-";
	emptyTile = obj.id;
}*/

function getMove(value){
	console.log(count++);
	if(value.id == 16) {
		if(document.getElementById(15).innerHTML == "_"){
			document.getElementById(15).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(12).innerHTML == "_"){
			document.getElementById(12).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		
	}else if(value.id == 15) {
	
		if(document.getElementById(16).innerHTML == "_"){
			document.getElementById(16).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(14).innerHTML == "_"){
			document.getElementById(14).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(11).innerHTML == "_"){
			document.getElementById(11).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}else if(value.id == 14) {
		if(document.getElementById(15).innerHTML == "_"){
			document.getElementById(15).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(13).innerHTML == "_"){
			document.getElementById(13).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(10).innerHTML == "_"){
			document.getElementById(10).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 13) {
		if(document.getElementById(14).innerHTML == "_"){
			document.getElementById(14).innerHTML = value.innerHTML;
			value.innerHTML = "_";
			
		}else if(document.getElementById(9).innerHTML == "_"){
			document.getElementById(9).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
				
	}
	else if(value.id == 12) {
		if(document.getElementById(11).innerHTML == "_"){
			document.getElementById(11).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(16).innerHTML == "_"){
			document.getElementById(16).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(8).innerHTML == "_"){
			document.getElementById(8).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 11) {
		if(document.getElementById(10).innerHTML == "_"){
			
			document.getElementById(10).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(12).innerHTML == "_"){
			document.getElementById(12).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(7).innerHTML == "_"){
			document.getElementById(7).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(15).innerHTML == "_"){
			document.getElementById(15).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 10) {
		if(document.getElementById(9).innerHTML == "_"){
			
			document.getElementById(9).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(11).innerHTML == "_"){
			document.getElementById(11).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(6).innerHTML == "_"){
			document.getElementById(6).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(14).innerHTML == "_"){
			document.getElementById(14).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 9) {
		if(document.getElementById(10).innerHTML == "_"){
			
			document.getElementById(10).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(5).innerHTML == "_"){
			document.getElementById(5).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(13).innerHTML == "_"){
			document.getElementById(13).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 8) {
		if(document.getElementById(7).innerHTML == "_"){
			
			document.getElementById(7).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(4).innerHTML == "_"){
			document.getElementById(4).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(12).innerHTML == "_"){
			document.getElementById(12).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 7) {
		if(document.getElementById(8).innerHTML == "_"){
			
			document.getElementById(8).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(6).innerHTML == "_"){
			document.getElementById(6).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(3).innerHTML == "_"){
			document.getElementById(3).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(11).innerHTML == "_"){
			document.getElementById(11).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 6) {
		if(document.getElementById(5).innerHTML == "_"){
			
			document.getElementById(5).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(7).innerHTML == "_"){
			document.getElementById(7).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(2).innerHTML == "_"){
			document.getElementById(2).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(10).innerHTML == "_"){
			document.getElementById(10).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
	}
	else if(value.id == 5) {
		if(document.getElementById(6).innerHTML == "_"){
			
			document.getElementById(6).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(1).innerHTML == "_"){
			document.getElementById(1).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(9).innerHTML == "_"){
			document.getElementById(9).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		
	}
	else if(value.id == 4) {
		if(document.getElementById(3).innerHTML == "_"){
			
			document.getElementById(3).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(8).innerHTML == "_"){
			document.getElementById(8).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		
	}
	else if(value.id == 3) {
		if(document.getElementById(2).innerHTML == "_"){
			
			document.getElementById(2).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(4).innerHTML == "_"){
			document.getElementById(4).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(7).innerHTML == "_"){
			document.getElementById(7).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		
	}
	else if(value.id == 2) {
		if(document.getElementById(1).innerHTML == "_"){
			
			document.getElementById(1).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(3).innerHTML == "_"){
			document.getElementById(3).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		else if(document.getElementById(6).innerHTML == "_"){
			document.getElementById(6).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		
	}
	else if(value.id == 1) {
		if(document.getElementById(2).innerHTML == "_"){
			
			document.getElementById(2).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}
		else if(document.getElementById(5).innerHTML == "_"){
			document.getElementById(5).innerHTML = value.innerHTML;
			value.innerHTML = "_";
		}		
		
	}
	
	/*if(console.log(value) != null){
		count++;
		console.log(count);
	}*/
	getValidation();
	
	
}

function getValidation(){
	var result = true;
	for(i = 1; i < 16; i++){
		var element = document.getElementById(i);
		if(element.id != element.value){
		 	result = false;
		 	break;
		 } 
	}
	if(result == true){
			alert("Conguratulation!!! you win");		 
		 }
}

