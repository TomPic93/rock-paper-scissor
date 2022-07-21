// _________________________________________________________

// global variables 
const choices = ["paper", "scissors", "rock"]
let playerTotalScore = 0;
let computerTotalScore = 0;
let totalRounds = 5;

// variables from DOM
const output = document.querySelector("#output");
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const roundScore = document.querySelector("#round-score");
const roundWinner = document.querySelector("#round-winner");
const buttons = document.querySelectorAll(".btn");
const totalScore = document.querySelector("#total-score");
const playAgain = document.querySelector("#play-again");
const winner = document.querySelector("#winner");
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again";

// _________________________________________________________

// event listeners (click) 
// activates the game
buttons.forEach((button) => {
    button.addEventListener("click", playGame)
});

// gets the player's round value
buttons.forEach((button) => {
    button.addEventListener("click", playerPlay)
});

// restarts the game
playAgainBtn.addEventListener("click", restart)

// _________________________________________________________

// main game functions

function playGame(e) {
    if (totalRounds) {
        // displays the output text
        display();
        // Calling the single match functions
        compareScore(computerPlay(), playerPlay(e))
        // returning the total score 
        totalScore.textContent = "Player " + playerTotalScore + " | " + computerTotalScore + " Computer";
        totalRounds -= 1;
    } else {
        // hide the output text
        notDisplay();
        // displays the game winner
        winner.textContent = "End of the game, final result: Player " + playerTotalScore + " Computer " + computerTotalScore;
        winner.style.display = "block";
        // displays the restart button
        output.appendChild(playAgainBtn);
    };
    
};


// restarts the game
function restart() {
    computerTotalScore = 0;
    playerTotalScore = 0;
    totalRounds = 5;
    // hides the restart button
    output.removeChild(playAgainBtn);
    // hides the previous game winner
    winner.style.display = "none";
};

// _________________________________________________________

// displays the output nodes in the DOM
function display() {
    computer.style.display = "block";
    player.style.display = "block";
    roundWinner.style.display = "block";
    totalScore.style.display = "block";
};

// hides the output nodes in the DOM
function notDisplay() {
    computer.style.display = "none";
    player.style.display = "none";
    roundWinner.style.display = "none";
    totalScore.style.display = "none";  
};

// _________________________________________________________

// returns player input (1-3) based on button's data-value attribute
function playerPlay(e) {
    let playerOutput = e.target.getAttribute("data-value");
    // text output of the player choice (rock, scissors or paper)
    player.textContent = `Player: ${choices[playerOutput - 1]}`;
    return playerOutput;
};

// returns computer input with random number generator (1-3)
function computerPlay() {
    let computerOutput = Math.floor(Math.random() * 3) + 1;
    // text output of the computer choice (rock, scissors or paper)
    computer.textContent = `Computer: ${choices[computerOutput - 1]}`;
    return computerOutput;
};

// _________________________________________________________

// confronts the computer - player input and calls the winner function
function compareScore(computerScore, playerScore) {
    if (playerScore == 1 && computerScore == 3) {
        playerWin();
    }
    else if (playerScore == 3 && computerScore == 1) {
        computerWin();
    }
    else if (playerScore > computerScore) {
        playerWin();
    }
    else if (playerScore == computerScore) {
        draw();
    } else {
        computerWin();
    };
};

// _________________________________________________________

// victory/draw functions called after the confront
function computerWin() {
    // text output ofd the match result
    roundWinner.textContent = "Computer wins!";
    computerTotalScore += 1
}

function playerWin() {
    // text output ofd the match result
    roundWinner.textContent = "Player wins!";
    playerTotalScore += 1
}

function draw() {
    // text output ofd the match result
    roundWinner.textContent = "It's a draw!";
    playerTotalScore += 1
    computerTotalScore += 1
}

// _________________________________________________________