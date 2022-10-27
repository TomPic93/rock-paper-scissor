// TODO LIST
// focus on round winner display
// try to center the symbols not by another div but a single div + padding top/bottom + text-align: center
// select with querySelector("data-value") es  const button = document.querySelector(`.key[data-key="${e.keyCode}"]`)

// GLOBAL SELECTORS 

const player = document.querySelector("#playerName");
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const symbolContainer = document.querySelectorAll(".symbolContainer");
const symbols = document.querySelectorAll(".symbol")
const roundChoicesDisplay = document.querySelector("#roundChoicesDisplay");
const roundWinnerDisplay = document.querySelector("#roundWinnerDisplay");
const playAgainDisplay = document.querySelector("#playAgainDisplay");
const playAgainBtn = document.querySelector("#playAgainBtn");

let maxScore = 5;
let playerScore = 0;
let computerScore = 0;

// ----------------
startGame()
// ----------------

// GAME FUNCTIONS

// sets the initial values and turns on the click event
function startGame() {
    symbols.forEach(symbol => symbol.addEventListener("click", round))
    choices.forEach(choice => choice.classList.remove("focus"))
    computerScoreDisplay.textContent = computerScore
    playerScoreDisplay.textContent = playerScore
    computerChoiceDisplay.textContent = "❔"
    playerChoiceDisplay.textContent = "❔"
    playAgainDisplay.style.display = "none"
    roundChoicesDisplay.textContent = ""
    roundWinnerDisplay.textContent = ""
}

// manages the single round and calls the other game functions
function round(e) {
    choices.forEach(choice => choice.classList.remove("focus"))
    roundChoicesDisplay.textContent = ""
    compareChoices(userSelection(e), computerSelection())
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
    if (playerScore == maxScore || computerScore == maxScore) gameOver()
}

// gets the value of the user selection
function userSelection(e) {
    playerChoiceDisplay.textContent = e.target.textContent
    roundChoicesDisplay.textContent += `Player chooses ${e.target.getAttribute("Id")}`
    symbolContainer.forEach(container => container.classList.remove("focus"))
    e.target.parentNode.classList.add("focus")
    // returns a numeric value between 1 and 3 depending on the user choice
    return e.target.getAttribute("data-value")
}

// random choice for the computer
function computerSelection() {
    let computerChoice = symbols[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    computerChoiceDisplay.textContent = computerChoice.textContent
    roundChoicesDisplay.textContent += `, computer chooses ${computerChoice.getAttribute("Id")}:`
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
    roundWinnerDisplay.textContent = `Player wins the round!`
    playerChoiceDisplay.classList.add("focus")
}

function computerWins() {
    computerScore += 1
    roundWinnerDisplay.textContent = "Computer wins the round!"
    computerChoiceDisplay.classList.add("focus")
}

function draw() {
    roundWinnerDisplay.textContent = "It's a draw!"
}

// called when the game reach the maximum score allowed
function gameOver() {
    symbols.forEach((symbol) => symbol.removeEventListener("click", round))
    if (playerScore > computerScore) {
        roundWinnerDisplay.textContent = `Player wins the game!`
        computerChoiceDisplay.textContent = "😔";
        playerChoiceDisplay.textContent = "🏆";
    } else {
        roundWinnerDisplay.textContent = "Computer wins the game!"
        computerChoiceDisplay.textContent = "🏆";
        playerChoiceDisplay.textContent = "😔";
    }
    symbolContainer.forEach(container => container.classList.remove("focus"))
    playerScore = 0
    computerScore = 0
    playAgainDisplay.style.display = "block"
    playAgainBtn.addEventListener("click", startGame)
}