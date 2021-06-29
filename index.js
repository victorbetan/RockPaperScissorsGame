function game() {
    for(let i = 0; i < 5; i++) {

        //this will change to prompt the user for a choice, and it will need to be case-insensitive
        let playerSelection = prompt("Give me a letter").toLowerCase();

        //this calls the computerPlay() to assign the returned value of "rock, paper, or scissor" to computerSelection
        const computerSelection = computerPlay();

        if (playerSelection === "") {
            alert("Please enter a value");
        } else {
            console.log(`You picked: ${playerSelection}`);
            console.log(`The computer picked ${computerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
        } 
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
                return  `The computer chose ${computerSelection} is this a tie? ENGARD!`;
            }
        }
    }
}

game();