var inquirer = require("inquirer");
var wordsArray = ["Dominos","Pizza Hut","Lou Malnatis","Giordanos","Peqouds","Pizanos"];
var lettersGuessed = [];
var wordInForm = "";
var numBlanks = 0;
var blanks = [];
var chosenWord = "";
var count = 9;


function Hangman(){
	this.word = function(){
	
	lettersGuessed = [];
	wordInForm = "";
	numBlanks = 0;
	blanks = [];
	chosenWord = "";
	count = 9;

	chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	game.createBlanks(chosenWord);

	
};
	
this.createBlanks = function(word){

	var split = word.split('');
	console.log(split);
	numBlanks = split.length;
	for( var i = 0; i < numBlanks; i++){
	 blanks.push("_");	
	}
console.log(blanks);
game.runPrompt();
	
};


this.checkLetter = function(letter){
for ( var i = 0; i < numBlanks; i++){
	
};	
if (chosenWord[i] === letter) {
		numBlanks[i] = letter;
		game.runPrompt();
	}else{
		console.log("Sorry try again!" + "\n Guesses Remaining: "+ count);
		count--;
		game.runPrompt();

	}
};
this.runPrompt = function(){
	if (count > 0) {
inquirer.prompt([
      {
        name: "letter",
        message: "Pick a letter!",
       validate: function(value) {
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
      game.checkLetter(answers.letter);
      

  });
}else {
	console.log("Sorry no more guesses remaining!" + "\n The word was : " + chosenWord + "\n New game has begun maybe this time you'll get it!");
	game.word();	
}
};


};

var game = new Hangman();

game.word();





