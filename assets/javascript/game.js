var xList = ["magnetism", "phoenix", "brotherhood", "mutation", "adamantium", "cerebro", "telepath", "gifted", "juggernaut", "apocalypse"];
var chosenWordArray =[];
var templateArray =[];
var	remainingGuesses =9;
var gamesWon =0;
var gamesLost =0;
var lettersGuessed =[];
var gameOver = false;
var userWon = false;
var userLost = false;

function hangmanSelector() {
	chosenWordArray =[];
	templateArray =[];
	var selector = Math.floor(Math.random()* xList.length);
	var hangmanIndex = xList[selector];

	for (var i =0 ; i < hangmanIndex.length ; i++ ){
		 chosenWordArray.push(hangmanIndex.charAt(i));
		 templateArray.push(hangmanIndex.charAt(i));

	}

    var targetDiv = document.getElementById("letterBlock");

    for(var i = 0 ; i < chosenWordArray.length; i++){
      var currentLetter = chosenWordArray[i];
      var newDiv = document.createElement("div");
      newDiv.innerHTML = "_";
      targetDiv.appendChild(newDiv);
      newDiv.setAttribute("class", "letterDiv");
    }
   }

hangmanSelector();

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var isAlreadyTyped = lettersGuessed.indexOf(userGuess);
	if(isAlreadyTyped >= 0){
		alert(" you already typed that letter");
		return;

	} else {
	}
	lettersGuessed.push(userGuess);
    var newLetterDiv = document.getElementById("lettersGuessed");
    newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";

	var isPartOfWord = chosenWordArray.indexOf(userGuess);


	   	var chosenWordDivs = document.getElementsByClassName("letterDiv");

	    var count = 0;
	    for (var i = 0; i < chosenWordArray.length; i++) {
	        if (chosenWordArray[i] === userGuess) {
	            count++;
	            chosenWordDivs[i].innerHTML = "<p>"+ chosenWordArray[i] + "</p>";
	        }


	    }

		if(isPartOfWord >= 0){
			for (var i =0; i < count; i++){
			templateArray.pop();
			}
		} else {
			remainingGuesses--;
			var remainGuessDiv = document.getElementById("remainingGuesses");
    		remainGuessDiv.innerHTML = "<p>" + remainingGuesses + "</p>";
		}

	if (remainingGuesses === 0) {
		userWon = true;
		gameOver = true;
		gamesLost++;
		var newLoseDiv = document.getElementById("loseScore");
    	newLoseDiv.innerHTML = "<p>" + gamesLost + "</p>";
	}

	if (templateArray.length === 0) {
		userLost = true;
		gameOver = true;
		gamesWon++;
		var newWinDiv = document.getElementById("winScore");
    	newWinDiv.innerHTML = "<p>" + gamesWon + "</p>";
	}

	if (gameOver === true && userWon === true) {
    alert('You lost! Mystique has enacted her plan and the school now belongs to the Brotherhood of Mutants!');
    return;
		lettersGuessed =[];
		var newLetterDiv = document.getElementById("lettersGuessed");
    	newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";
		var newResetDiv = document.getElementById("letterBlock");
    	newResetDiv.innerHTML = " ";
    	var newResetRemainingDiv = document.getElementById("remainingGuesses");
    	newResetRemainingDiv.innerHTML = "<p>" + 9 + "</p>";
		hangmanSelector();
		remainingGuesses =9;
		userLost = false;
		gameOver = false;



	} else if (gameOver === true && userLost === true) {
    alert('You Won! You You have defeated Mystique and saved the school!');
    return;
		lettersGuessed =[];
		var newLetterDiv = document.getElementById("lettersGuessed");
    	newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";
		var newResetDiv = document.getElementById("letterBlock");
    	newResetDiv.innerHTML = " ";
    	var newResetRemainingDiv = document.getElementById("remainingGuesses");
    	newResetRemainingDiv.innerHTML = "<p>" + 9 + "</p>";
		hangmanSelector();
		remainingGuesses =9;
		userLost = false;
		gameOver = false;
	}
	else {

	}

};
