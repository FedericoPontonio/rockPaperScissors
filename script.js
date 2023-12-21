

let playerSelection

let icons = document.querySelector('.icons');
icons.addEventListener('click', (x) => {
    switch(x.target.id) {
        case 'rock':
            playerSelection = "rock";
            matchEvaluation(playerSelection);
            break;
        case 'paper':
            playerSelection = "paper";
            matchEvaluation(playerSelection);
            break;
        case 'scissors':
            playerSelection = "scissors";
            matchEvaluation(playerSelection);
            break;
    };
});

function matchEvaluation(playerSelection) {

    let possibleSelections = ["rock", "paper", "scissors"];
    let computerSelection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];

    let yourChoice = document.querySelector('#yourChoice');
    yourChoice.textContent = playerSelection;
    let opponentChoice = document.querySelector('#opponentChoice');
    opponentChoice.textContent = computerSelection;
    let matchOutcome = document.querySelector('#matchOutcome');


    
    if (computerSelection == "rock") {

        if (playerSelection == "rock") {
            matchOutcome.textContent = "It's a tie! C'mon, try again!";
        }
        else if (playerSelection == "paper") {
            matchOutcome.textContent = 'You won! Lucky you!';
            winCounter = increment(winCounter);
            displayWinCounter.textContent = winCounter       
            scoreStatus();
            return winCounter;
        }
        else if (playerSelection == "scissors") {
            matchOutcome.textContent = "You lost. Better luck next time :'(";
            loseCounter = increment(loseCounter);
            displayLoseCounter.textContent = loseCounter
            scoreStatus();
            return loseCounter
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.");
        }
    }    
    else if (computerSelection == "paper") {

        if (playerSelection =="rock") {
            matchOutcome.textContent = "You lost. Better luck next time :'(";
            loseCounter = increment(loseCounter);
            displayLoseCounter.textContent = loseCounter
            scoreStatus();
            return loseCounter
        }
        else if (playerSelection == "paper") {
            matchOutcome.textContent = "It's a tie! C'mon, try again!";
        }
        else if (playerSelection == "scissors") {
            matchOutcome.textContent = "You won! Lucky you!";
            winCounter = increment(winCounter);
            displayWinCounter.textContent = winCounter       
            scoreStatus();
            return winCounter;
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }    
    else if (computerSelection == "scissors"){

        if (playerSelection == "rock") {
            matchOutcome.textContent = "You won! You rock!!!";
            winCounter = increment(winCounter);
            displayWinCounter.textContent = winCounter       
            scoreStatus();
            return winCounter;
        }
        else if (playerSelection == "paper") {
            matchOutcome.textContent = "You lost. Better luck next time :'(";
            loseCounter = increment(loseCounter);
            displayLoseCounter.textContent = loseCounter
            scoreStatus();
            return loseCounter
        }
        else if (playerSelection == "scissors") {
            matchOutcome.textContent = "It's a tie! C'mon, try again!";
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }
};

let winCounter = 0
let loseCounter = 0


function scoreStatus() {
    if(winCounter == 5) {
        if(alert("You won the game!!! Want to play again?")){}
        else    window.location.reload(); 
    }
    else if(loseCounter == 5) {
        if(alert("You lost the game. Want the rematch?")){}
        else    window.location.reload();
    }
};


    let displayWinCounter = document.querySelector('#displayWinCounter');
    let displayLoseCounter = document.querySelector('#displayLoseCounter');


function increment(counter) {
    counter = ++counter;
    return counter;
};
