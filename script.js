// create list of choices for computer
let cpuChoices = [`rock`, `paper`, `scissors`];

// create function which randomly chooses from list of rock, paper and scissors 
function getComputerChoice(cpuChoices) {
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)]
};

// create input for player
let playerChoice = prompt(`Please choose rock, paper or scissors.`);

// convert computer and player inputs to lower case for use in function below
let playerSelection = playerChoice.toLowerCase();

let computerSelection = getComputerChoice(cpuChoices).toLowerCase();

// create function that plays single round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == `rock` && computerSelection == `scissors`) {
        return `You Win! Rock beats Scissors!`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        return `You Win! Paper beats Scissors!`;
    } else if (playerSelection == 'scissors' && computerSelection == `paper`) {
        return `You Win! Scissors beats Paper!`;
    } else if(computerSelection == 'rock' && computerSelection == `scissors`) {
        return `You Lose! Rock beats Scissors!`;
    } else if(computerSelection == `paper` && playerSelection == `rock`) {
        return `You Lose! Paper beats Rock!`; 
    }  else if(computerSelection == `scissors` && playerSelection == `paper`) {
        return `You Lose! Scissors beats Paper!`;
    } else if(playerSelection == `rock` && computerSelection == `rock` || playerSelection == `paper` && computerSelection == `paper` || playerSelection == `scissors` && computerSelection == `scissors`) {
        return 'Draw!';
    } else {
        return `Invalid input; Please try again.`
    }
}

console.log(playRound(playerSelection, computerSelection));


