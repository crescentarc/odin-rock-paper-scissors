// Function for computer to make choice
function cpuPlay() {
    const cpuChoices = ['Rock', 'Paper', 'Scissors'];
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
}

// function for player to start game via buttons
function game() {
    // Div that appears when 1 round is played and displays result
    const container = document.querySelector('#container');
    const resultsDisplay = document.createElement('div');
    resultsDisplay.style.marginTop = '30px'
    container.appendChild(resultsDisplay);

    // constants for both sides' scores
    let playerScore = 0;
    let cpuScore = 0;
    const scoreDisplay = document.createElement('div');
    scoreDisplay.style.marginTop = '30px';
    container.appendChild(scoreDisplay);

    //create event listener for 3 buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>  {
        button.addEventListener('click', () => {
            playerSelection = button.innerText;
            computerSelection = cpuPlay(); 
            resultsDisplay.textContent = playRound(playerSelection, computerSelection);
            scoreDisplay.textContent = 'Player Score: ' + playerScore + ' / CPU Score: ' + cpuScore;
        })

        //function to judge round outcome
        function playRound (playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return 'Tie! Try again!';
            } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
                playerScore++;
                return 'You win! Rock beats Scissors!';
            } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
                playerScore++;
                return 'You win! Paper Beats Rock!';
            } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
                playerScore++;
                return 'You win! Scissors Beats Paper!';
            } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
                cpuScore++;
                return 'You Lose. Rock Beats Scissors.';
            } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
                cpuScore++;
                return 'You Lose. Paper Beats Rock.';
            } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
                cpuScore++;
                return 'You Lose. Scissors Beats Paper'
            };
        }
    })
}

game();
    



