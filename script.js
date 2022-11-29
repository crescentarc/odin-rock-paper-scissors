// create list of choices for computer and player
const choices = [`rock`, `paper`, `scissors`];

// create function which randomly chooses from list of rock, paper and scissors 
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

// create variables for player and computer score
let playerScore = 0
let cpuScore = 0 

// create function that plays single round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == `rock` && computerSelection == `scissors`) {
        return `You Win! Rock beats Scissors!`
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        return `You Win! Paper beats Scissors!`
    } else if (playerSelection == 'scissors' && computerSelection == `paper`) {
        return `You Win! Scissors beats Paper!`
    } else if(computerSelection == 'rock' && computerSelection == `scissors`) {
        return `You Lose! Rock beats Scissors!`
    } else if(computerSelection == `paper` && playerSelection == `rock`) {
        return `You Lose! Paper beats Rock!`
    }  else if(computerSelection == `scissors` && playerSelection == `paper`) {
        return `You Lose! Scissors beats Paper!`
    } else if(playerSelection == `rock` && computerSelection == `rock` || playerSelection == `paper` && computerSelection == `paper` || playerSelection == `scissors` && computerSelection == `scissors`) {
        return 'Draw!';
    }
}

// create function prompt choice input from player and check validity
function getPlayerChoice() {
    validatedInput = false
    while(validatedInput == false) {
        const playerInput = prompt(`(If this the first time the page has loaded on your browser, please press cancel and refresh once so that the messages display on the console. Please choose rock, paper or Scissors.`);
        if(choices == null) {
            continue;
        }
        const makeChoiceLower = playerInput.toLowerCase();
        if(choices.includes(makeChoiceLower)) {
            validatedInput = true;
            return makeChoiceLower;
        }
    }
} 


// create 5 round game function 
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if ((playerSelection == `rock` && computerSelection == `scissors`) ||
        (playerSelection == `paper` && computerSelection == `rock`) ||
        (playerSelection == `scissors` && computerSelection == `paper`)) {
            playerScore++
        } else {
            cpuScore++
        }
    }
    if(playerScore > cpuScore) {
        console.log(`You won the game! Congratulations!`)
    } else if(cpuScore > playerScore) {
        console.log('You lost the game.');
    }
    console.log(`____________`);
    const playAgainPrompt = confirm(`Game over. Would you like to play again?`);
    if (playAgainPrompt) {
        game();
    } else {
        alert(`Please refresh page if you would like to play again.`)
    }
}

// start game upon opening page
game();
