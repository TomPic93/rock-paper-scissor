// literal values of the computer/player choices (1-3)
const choices = ["Paper", "Scissor", "Rock"]

// function that make the computer chose a random number (1-3) and return it
// return -> int value 1-3
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

// function to let the player chose, assigning a int value to the choice and returning it
// return -> int value 1-3
function playerPlay() {
    // playerChoice = parseInt(prompt("Enter your choice (3: rock, 2: scissor or 1: paper): "));
    playerChoice = 2
    return playerChoice;
}

// compare the computer and player choice and call the winFunction  ----  to add: call for another function/s to take the score, etc
function letsPlay(computerSelection, playerSelection) {
    console.log(`Computer: ${choices[computerSelection - 1]} (${computerSelection}) | Player: ${choices[playerSelection - 1]} (${playerSelection})`)
    
    if (playerSelection == 1 && computerSelection == 3) {
        playerWin()
    }
    else if(playerSelection == 3 && computerSelection == 1) {
        computerWin()
    }
    else if (playerSelection > computerSelection) {
        playerWin()
    }
    else if (playerSelection == computerSelection) {
        draw()
    } else {
        computerWin()
    }
}



// ----------------------------------------------------------------
// functions called in case of victory (computer or player) or draw
function computerWin() {
    console.log("Computer wins")
}

function playerWin() {
    console.log("Player wins")
}

function draw() {
    console.log("It's a draw")
}
// ----------------------------------------------------------------

for (let i = 0; i < 20; i++) {
    letsPlay(computerPlay(), playerPlay())
}