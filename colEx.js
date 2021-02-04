let guess = prompt("input an rgb value of three numbers between 0 and 255 separated by a space");
guess = guess.replace(/ /g, "");
let redGuess = guess.substr(0, 3) * 1;
let greenGuess = guess.substr(3, 3) * 1;
let blueGuess = guess.substr(6, 3) * 1;
