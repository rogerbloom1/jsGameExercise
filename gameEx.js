
let rand;
let stop = false;
let guessCounter = 0;
let seconds = 0;
let minutes = 0;
const userGuess = document.getElementById("guess");
const feedbackText = document.getElementById("feedback");
const guessesText = document.getElementById("guesses");
const timerText = document.getElementById("timer");
const guessButton = document.getElementById("guessBtn");
const resetButton = document.getElementById("resetBtn");

guessButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

function resetGame(){
    console.log("reset")
}
    
function startGame() {
    guessButton.removeEventListener("click", startGame);
    guessButton.addEventListener("click", test);
    guessButton.textContent = "Guess";

    rand = Math.floor(Math.random() * 100) + 1;
    console.log(rand); 

    const tickTock = setInterval(clock, 1000);

    function clock() {
        if(!stop) {
            seconds++
        }
        if(seconds > 59) {
            clearInterval(tickTock);
            feedbackText.textContent = "**Time limit exceeded**\nThanks for playing!"
        } 

        timerText.textContent = `0:${seconds.toString().padStart(2, "0")}`
    }
}

function test() {
    if (!stop) {
        playGame(userGuess.value);
    }else {
        feedbackText.textContent = "Thanks for playing!"
    }
}

function playGame(guess) {
        
        guessCounter++;
        guessesText.textContent = `Guesses: ${guessCounter}`
        if (guessCounter > 10){
            feedbackText.textContent = "**Guess limit exceeded** \nThanks for playing!"
        }
        else if (isNaN(guess) || guess>100 || guess<1) {
            feedbackText.textContent = "You did not enter an integer numeral between 1 and 100.";  
        }
        else if(guess<rand) {
            feedbackText.textContent = "Too low. Guess again!";
        }
        else if(guess>rand) { 
            feedbackText.textContent = "Too high. Guess again!";
        }
        else if(guessCounter === 1) {
            feedbackText.textContent = "THAT'S IT!\n\nThe number was " + rand + ". You got it on the FIRST TRY!!\nThanks for playing!";
            stop = true;
        } else {
            feedbackText.textContent = "THAT'S IT!\n\nThe number was " + rand + ". You got it in " + guessCounter + " guesses.\nThanks for playing!";
            stop = true; 
        }
        input.value = "";
        input.focus();
}

