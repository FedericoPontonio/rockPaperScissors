

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

    console.log("opponent choice: " + computerSelection); 
    console.log("your choice: " + playerSelection);       
    
    if (computerSelection == "rock") {

        if (playerSelection == "rock") {
            alert("It's a tie! C'mon, try again!");
        }
        else if (playerSelection == "paper") {
            alert("You won! Lucky you!");
            winCounter = increment(winCounter);
            scoreStatus();
            return winCounter;
        }
        else if (playerSelection == "scissors") {
            alert("You lost. Better luck next time :'(");
            loseCounter = increment(loseCounter);
            scoreStatus();
            return loseCounter
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.");
        }
    }    
    else if (computerSelection == "paper") {

        if (playerSelection =="rock") {
            alert("You lost. Better luck next time :'(");
            loseCounter = increment(loseCounter);
            scoreStatus();
            return loseCounter
        }
        else if (playerSelection == "paper") {
            alert("It's a tie! C'mon, try again!");
        }
        else if (playerSelection == "scissors") {
            alert("You won! Lucky you!");
            winCounter = increment(winCounter);
            scoreStatus();
            return winCounter;
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }    
    else if (computerSelection == "scissors"){

        if (playerSelection == "rock") {
            alert("You won! You rock!!!");
            winCounter = increment(winCounter);
            scoreStatus();
            return winCounter;
        }
        else if (playerSelection == "paper") {
            alert("You lost. Better luck next time :'(");
            loseCounter = increment(loseCounter);
            scoreStatus();
            return loseCounter
        }
        else if (playerSelection == "scissors") {
            alert("It's a tie! C'mon, try again!");
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
    else {
        alert("win = " + winCounter);
        alert("lose = " + loseCounter);
    };
};

function increment(counter) {
    counter = ++counter
    return counter
}

