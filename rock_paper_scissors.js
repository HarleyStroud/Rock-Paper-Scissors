function computerPlay() {
    let min = Math.ceil(1);
    let max = Math.floor(4);

    const numberSelected = Math.floor(Math.random() * (max - min) + min);

    if(numberSelected === 1) {
        return "Rock";
    }
    else if(numberSelected == 2) {
        return "Paper";
    }
    else if(numberSelected == 3) {
        return "Scissors";
    }
}

const playerSelection = prompt("Please enter Rock Paper or Scissors").toLocaleLowerCase();
const computerSelection = computerPlay().toLocaleLowerCase();

let playerScore = 0;
let computerScore = 0;
let winner;


if(playerSelection == "rock" && computerSelection == "scissors") {
    winner = "Player Won";
    playerScore++;
}
else if(playerSelection == "paper" && computerSelection == "rock") {
    winner = "Player Won";
    playerScore++;
}
else if(playerSelection == "scissors" && computerSelection == "paper") {
    winner = "Player Won";
    playerScore++;
}

else if(computerSelection == "rock" && playerSelection == "scissors") {
    winner = "CPU Won";
    computerScore++;
}
else if(computerSelection == "paper" && playerSelection == "rock") {
    winner = "CPU Won";
    computerScore++;
}
else if(computerSelection == "scissors" && playerSelection == "paper") {
    winner = "CPU Won"
    computerScore++;
}
else if(playerSelection == computerSelection) {
    winner = "Tie"
    computerScore++;
}

console.log(winner);