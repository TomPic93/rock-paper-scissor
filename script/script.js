// literal values of the computer/player choices (1-3)
const choices = ["paper", "scissors", "rock"]


// Start the game asking the user for an input from the ones available. Call for the other functions.
function startTheGame() {
    let playerInput = prompt("Enter your choice: rock(3), scissors(2) or paper(1): ");
    playerInput = playerInput.toLowerCase();
    if (playerInput != "rock" && playerInput != "scissors" && playerInput != "paper") {
        console.log("Please enter a valid text.")
    } else {
        playRound(computerPlay(), playerPlay(playerInput))
    }
}


// ----------------------------------------------------------------
// the computer chose a random number (1-3) and return it
// return -> int value 1-3
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

// assigning a number value to the user choice and returning it
// return -> int value 1-3
function playerPlay(inputString) {
    return choices.indexOf(inputString) + 1
}
// ----------------------------------------------------------------



// compare the computer and player choice and call the winFunction  ----  to add: call for another function/s to take the score, etc
function playRound(computerSelection, playerSelection) {
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



startTheGame()