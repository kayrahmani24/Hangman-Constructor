var inquirer = require("inquirer");
var wordsArray = ["ginos east","coalfire","lou malnatis","giordanos","peqouds","pizanos"];
	var lettersGuessed = [];
	var wordInForm = "";
	var numBlanks = 0;
	var blanks = [];
	var chosenWord = "";
	var count = 10;
	var blanksAndSuccesses = [];
	var split = "";

//constructor function
function Hangman(){
	this.word = function(){
	 //to reset global varibles
	 lettersGuessed = [];
	 wordInForm = "";
	 numBlanks = 0;
	 blanks = [];
	 chosenWord = "";
	 count = 10;
	 blanksAndSuccesses = [];
	 split = "";
//chosing random word
	chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	game.createBlanks(chosenWord);
	
};
	
this.createBlanks = function(word){
//method to creat blanks for chosen word
	split = word.split('');
	//console.log(split);
	numBlanks = split.length;
	for( var i = 0; i < numBlanks; i++){
	 blanksAndSuccesses.push("_");	
	}
console.log(blanksAndSuccesses);
game.runPrompt();
	
};

this.complete = function(){
	//method to check if user has guessed all the letters
	 var checkWord = blanksAndSuccesses.join('');
	 if (checkWord === chosenWord) {
	 	console.log("Congratulations you win!!!");
	 	game.word();
	 }else {
	 	game.runPrompt();
	 }
}

this.checkLetter = function(letter){
	//method to check if the letter guessed is in the chosen word code used from previous assignment
	//console.log(split);
var letterInWord = false;

for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {

   
    for (var j = 0; j < numBlanks; j++) {

    
      if (chosenWord[j] === letter) {

        blanksAndSuccesses[j] = letter;
        numBlanks[i] = letter;
         
         	console.log("CORRECT!");
          console.log(blanksAndSuccesses);   
          lettersGuessed.push(letter);  
          console.log("Letters you've already guessed: " + lettersGuessed);
		 console.log("Guesses Remaining: "+ count);
     		
      }

    }     	

    game.complete();
  }else{
  	//if letter was wrong count decrements by one user is prompt again
		lettersGuessed.push(letter);
		
		count--;
		console.log("Sorry try again!");
		
		 console.log(blanksAndSuccesses);
		 console.log("Letters you've already guessed: " + lettersGuessed);
		 console.log("Guesses Remaining: "+ count);
		 game.runPrompt();
	}
};
this.runPrompt = function(){
	//method to get the users input/letter they elect
	if (count > 0) {
inquirer.prompt([
      {
        name: "letter",
        message: "Try to figure out the Chicago pizza joint I have in mind, pick a letter!",
       validate: function(value) {
       	//validating if they are chosing a legitate leter of the alphabet
          if (isNaN(value) === true && value.length === 1) {
                   return true;
          }else {         
          console.log("-- is not a valid entry. Input must only be one leter of the english alpahbet!---");
          return false;
        }
      }
  }
    ])
 .then(function(answers) {
//if letter is legimate we then run through check letter method aboce
 	console.log(answers.letter);
 	
      game.checkLetter(answers.letter);
    

  });
}else {
	//if user has no more attempts we push this message and restart the game
	console.log("Sorry no more guesses remaining!" + "\n The pizza joint was : " + chosenWord + "\n New game has begun maybe this time you'll get it!");
	game.word();	
}
};

};
//Hangman object
var game = new Hangman();
//intializing the game
game.word();




