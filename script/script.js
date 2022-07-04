// literal values of the computer/player choices (1-3) and global variables
const choices = ["paper", "scissors", "rock"]
let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;


// Start the game asking the user for an input from the ones available. Call for the other functions.

function startTheGame() {
    let rounds = 0;
    while (rounds < totalRounds) {
        let playerInput = prompt("Enter your choice: rock(3), scissors(2) or paper(1): ");
        playerInput = playerInput.toLowerCase();
        if (playerInput != "rock" && playerInput != "scissors" && playerInput != "paper") {
            console.log("Please enter a valid text.")
        } else {
            playRound(computerPlay(), playerPlay(playerInput))
            rounds += 1;
        }
        console.log(`COMPUTER: ${computerScore} PLAYER: ${playerScore}`)
    }
    // States the final result and declare the winner
    console.log(`Game Over, final result: User ${playerScore} | Computer ${computerScore}`)
    switch (true) {
        case computerScore > playerScore:
            console.log("Computer wins!")
            break;
        case computerScore < playerScore:
            console.log("Player wins!")
            break;
        default:
            console.log("It's a draw!")
    }
}


// ----------------------------------------------------------------
// the computer chose a random number (1-3) and return it
// return -> int value 1-3
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

// base on the user input assign a number value to the user choice and returning it
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
    computerScore += 1
}

function playerWin() {
    console.log("Player wins")
    playerScore += 1
}

function draw() {
    console.log("It's a draw")
    playerScore += 1
    computerScore +=1
}
// ----------------------------------------------------------------



startTheGame()