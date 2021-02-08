let rand;
let stop = 0;
let guessCounter = 0;
let seconds = 0;
const userGuess = document.getElementById("guess");
const feedbackText = document.getElementById("feedback");
const triesText = document.getElementById("tries");
const timerText = document.getElementById("timer");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");

guessButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

       
        
        //========== FUNCTIONS ==========

function startGame() {
    rand = Math.floor(Math.random() * 100) + 1;
    console.log(rand);
    guessButton.textContent = "Guess";

    guessButton.removeEventListener("click", startGame);
    guessButton.addEventListener("click", test);
}

function test() {
    if (stop === 0) {
        playGame(userGuess.value);
    }
}

function playGame() {
    while (stop == 0) {
        if (userGuess === "quit") {
            stop = 1;
        
        } else if (isNaN(userGuess) || userGuess>100 || userGuess<1) {
            feedbackText.textContent = "You did not enter an integer numeral between 1 and 100.";  
        }
        else if(userGuess<rand) {
            guessCounter++;
            feedbackText.textContent = "Too low. Guess again!";
        }
        else if(userGuess>rand) { 
            guessCounter++
            feedbackText.textContent = "Too high. Guess again!";
        }
        else {
            feedbackText.textContent = "THAT'S IT!\n\nThe number was " + rand + ". You got it in " + guessCounter + " tries.\nThanks for playing!";
            stop = 1;
        }
        }
}