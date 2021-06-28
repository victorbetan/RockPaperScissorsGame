/* 
this function will create a random number from 0 to 2. It will
assign a choice of "Rock, Scissors, or Paper" to a variable which will be
the "computer" part of the game. This is what the user will play against.  
*/

function computerPlay() {
    //creates random number from 0 to 2
    let rndmNum = Math.floor(Math.random() * 3);

    //declared variable which will later be assigned a value depending on the random number
    let compChoice;

    if (rndmNum === 0) {
        return compChoice = "rock";
    } else if (rndmNum === 1) {
        return compChoice = "scissors";
    } else {
        return compChoice = "paper";
    }
}

/*
This function will take the player selection and the computer selection, compares them and 
returns a winner depending on the games rules. Paper > rock, rock > scissors, scissors > paper. 
*/

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    if (playerSelection === "paper" && computerSelection === "rock") {
        return `The computer chose ${computerSelection}. Paper beats rock, you win!`;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return `The computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}. Sorry you lost!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `The computer chose ${computerSelection}. ${playerSelection} beats ${computerSelection}, you win!`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `The computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}. Sorry you lost!`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `The computer chose ${computerSelection}. ${playerSelection} beats ${computerSelection}, you win!`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `The computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}. Sorry you lost!`;
    } else {
        return  "is this a tie? ENGARD!";
    }
}
//this will change to prompt the user for a choice, and it will need to be case-insensitive
const playerSelection = "scissors";

//this calls the computerPlay() to assign the returned value of "rock, paper, or scissor" to computerSelection
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);