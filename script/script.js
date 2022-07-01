// function that make the computer chose a random number (1-3) and convert it in strings Rock, Paper or Scissor
function computerPlay() {
    let computerChoice = "";
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            computerChoice += "Rock";
            break;
        case 2:
            computerChoice += "Paper";
            break;
        case 3:
            computerChoice += "Scissor";
    }
    return computerChoice;
}

console.log(computerPlay());

