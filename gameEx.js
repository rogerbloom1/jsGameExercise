let rand = Math.floor(Math.random() * 100) + 1;
let stop = 0
let guess = (prompt("Input a whole number between 1 and 100 as a numeral:\n(To exit type 'quit'.)"));
let guessCounter = 0
    
        playGame(guess);
       
        
        //========== FUNCTIONS ==========
        
function playGame(guess) {
    while (stop == 0) {
        if (guess === "quit") {
            stop = 1;

        } else if (isNaN(guess) === true || guess>100 || guess<1) {
            guess = (prompt("You did not enter an integer numeral between 1 and 100."));  
        }
        else if(guess<rand) {
            guessCounter += 1;
            guess = (prompt("Too low. Guess again!"));
        }
        else if(guess>rand) { 
            guessCounter += 1
            guess = (prompt("Too high. Guess again!"));
        }
        else {
            alert("THAT'S IT!\n\nThe number was " + rand + ". You got it in " + guessCounter + " tries.\nThanks for playing!");
            stop = 1;
        }
        }
}