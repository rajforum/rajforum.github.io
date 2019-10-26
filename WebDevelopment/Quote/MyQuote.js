
	var i = -1;
	var t ;
	var cond = 0;

	
	QuoteSlidePlayer()

	//	#to slide Quotes and Authors at interval of 1s.
	function QuoteSlidePlayer() {
		t = setInterval(getData,1000);
	}
	
	//to get data from Quote.js 
	function getData() {
		++i;
		document.querySelector(".container").innerText = QUOTES.data[i].quotes;
		document.querySelector("#name").innerText = QUOTES.data[i].name;		
	}	

	// #to set author link to wikipedia 
	function authorWiki() {
		var lnk = "https://en.wikipedia.org/wiki/"+QUOTES.data[i].name;
		window.location = lnk;
	}

	// #to play or resume onclick on wrapper. 
	function doPause_play(){
		++cond;
		if(cond % 2 == 0) {
			QuoteSlidePlayer();
		} else{
			clearInterval(t);
		}
	}
	