// TODO LIST
// reset btn
// max score problem

// GLOBAL SELECTORS 

const player = document.querySelector("#playerName");
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const symbols = document.querySelectorAll(".symbol")
const roundChoicesDisplay = document.querySelector("#roundChoicesDisplay");
const roundWinnerDisplay = document.querySelector("#roundWinnerDisplay");
const playAgainDisplay = document.querySelector("#playAgainDisplay");
const playAgainBtn = document.querySelector("#playAgainBtn");

let maxScore = 5;

let playerScore = 0;
let computerScore = 0;


// GAME FUNCTIONS

symbols.forEach((symbol) => symbol.addEventListener("click", startGame))

// sets the initial values and coordinates the other functions
function startGame(e) {
    if (playerScore == maxScore - 1 || computerScore == maxScore - 1) {
        gameOver()
    } else {
        playAgainDisplay.style.display = "none"
        roundChoicesDisplay.textContent = ""
        roundWinnerDisplay.textContent = ""
        compareChoices(userSelection(e), computerSelection())
        playerScoreDisplay.textContent = playerScore
        computerScoreDisplay.textContent = computerScore
    }
}

// let the user select his/her choice
function userSelection(e) {
    playerChoiceDisplay.textContent = e.target.textContent
    roundChoicesDisplay.textContent += `You choose ${e.target.getAttribute("Id")}`
    // returns a numeric value between 1 and 3 depending on the user choice
    return e.target.getAttribute("data-value")
}

// random choice 
function computerSelection() {
    let computerChoice = symbols[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    computerChoiceDisplay.textContent = computerChoice.textContent
    roundChoicesDisplay.textContent += `, computer choose ${computerChoice.getAttribute("Id")}`
    // returns a numeric value between 1 and 3 depending on the generated random number
    return computerChoice.getAttribute("data-value")
}

// compares the user and computer choices and determines the winner
function compareChoices(playerScore, computerScore) {
    if (playerScore == computerScore) draw()
    else if (playerScore == 1 && computerScore == 3) playerWins()
    else if (playerScore == 3 && computerScore == 1) computerWins()
    else if (playerScore > computerScore) playerWins() 
    else computerWins()
}

function playerWins() {
    playerScore += 1
    roundWinnerDisplay.textContent = "Player wins the round!"
}

function computerWins() {
    computerScore += 1
    roundWinnerDisplay.textContent = "Computer wins the round!"
}

function draw() {
    roundWinnerDisplay.textContent = "It's a draw!"
}

// called when the game reach the maximum score allowed
function gameOver() {
    roundWinnerDisplay.textContent = playerScore > computerScore ? "Player wins the game!" : "The computer wins the game!"
    computerChoiceDisplay.textContent = "";
    playerChoiceDisplay.textContent = "";
    playAgainDisplay.style.display = "block"
}



startGame()