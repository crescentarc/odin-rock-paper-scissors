// Function for computer to make choice
function cpuPlay() {
    const cpuChoices = ['Rock', 'Paper', 'Scissors'];
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
};

// function for player to start game via buttons
function game() {
    // Div that appears when 1 round is played and displays result
    const container = document.querySelector('#container');
    const resultsDisplay = document.createElement('div');
    resultsDisplay.style.marginTop = '30px'
    container.appendChild(resultsDisplay);

    // counter which keeps tracks of number of rounds played in a game
    let roundCounter = 0;
    const roundDisplay = document.createElement('div');
    roundDisplay.style.marginTop = '30px';
    container.appendChild(roundDisplay);

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
            roundDisplay.textContent = 'Rounds played: ' + roundCounter;
            scoreDisplay.textContent = 'Player Score: ' + playerScore + ' / CPU Score: ' + cpuScore;
            endGame();
        });

        //function to judge round outcome
        function playRound (playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                roundCounter++;
                return 'Tie! Try again!';
            } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
                playerScore++;
                roundCounter++;
                return 'You win! Rock beats Scissors!';
            } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
                playerScore++;
                roundCounter++;
                return 'You win! Paper Beats Rock!';
            } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
                playerScore++;
                roundCounter++;
                return 'You win! Scissors Beats Paper!';
            } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
                cpuScore++;
                roundCounter++;
                return 'You Lose. Rock Beats Scissors.';
            } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
                cpuScore++;
                roundCounter++;
                return 'You Lose. Paper Beats Rock.';
            } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
                cpuScore++;
                roundCounter++;
                return 'You Lose. Scissors Beats Paper'
            };
        };
    });

    // function which determines who won out of 5 rounds + displays play again button
    const winnerDisplay = document.createElement('div');
    winnerDisplay.style.marginTop = '30px';
    container.appendChild(winnerDisplay);
    function endGame() {
    if (playerScore == 5) {
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = true;

        winnerDisplay.style.color = 'green';
        winnerDisplay.textContent = 'You have 5 points; You\'ve won this game!';

        const playAgainButton = document.createElement('button');
        playAgainButton.style.marginTop = '30px';
        playAgainButton.textContent = 'Play Again';
        
        container.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            window.location.reload();
        });

    } else if (cpuScore == 5) {
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = true;

        winnerDisplay.style.color = 'red';
        winnerDisplay.textContent = 'The computer has 5 points; You\'ve lost this game.'
        
        const playAgainButton = document.createElement('button');
        playAgainButton.style.marginTop = '30px';
        playAgainButton.textContent = 'Play Again';
        
        container.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            window.location.reload();
        });
    };
    };
};

game();
    



