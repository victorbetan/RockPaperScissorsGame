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
        compChoice = "rock";
    } else if (rndmNum === 1) {
        compChoice = "scissors";
    } else {
        compChoice = "paper";
    }
    //need to delete this later, this is just to see output of random choice.
    console.log(compChoice);
}

computerPlay();