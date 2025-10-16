const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const restartBtn = document.querySelector('.restart');

let gameActive = true;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice) {
    if (!gameActive) return;

    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        result.textContent = `Draw! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function restartGame() {
    result.textContent = 'Make your choice!';
    gameActive = true;
}

choices.forEach(choice => choice.addEventListener('click', e => playRound(e.target.dataset.choice)));
restartBtn.addEventListener('click', restartGame);
