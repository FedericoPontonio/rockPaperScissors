

//First goal:create randomly generated rock, paper or scissors. (moved to second goal)
//declare array of choices
let possibleSelections = ["rock", "paper", "scissors"];


//Second goal:function that plays a single round of the game. The function should take two parameters - the playerSelection and computerSelection
    //and then return a string that declares the winner of the round like so: "You Lose! paper beats rock".
//Additional notes:
    //Make your function’s playerSelection parameter case-insensitive (so users can input rock, rock, rock or any other variation),Account for TIES by re-playing the round.

//LET counter win = 0
let winCounter = 0
//LET counter lose = 0
let loseCounter = 0

//Check if a score is =5 - if so => RESET - if not show scores
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

//function INCREMENT counter
function increment(counter) {
    counter = ++counter
    return counter
}


let startButton = document.getElementById("startGame");
startButton.addEventListener("click", matchEvaluation);

//declare function matchEvaluation
function matchEvaluation() {
    //declare computer selection
    let computerSelection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];

    //create random selector for players' default prompt value.
    let defaultPromptValue = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
    //declare player selection
    let playerSelection = prompt("Enter your selection", defaultPromptValue);
    //convert it to lowercase to make it cap-agnostic in practice
    playerSelection = playerSelection.toLowerCase();

    //debug and control logs
    alert("opponent choice: " + computerSelection); 
    alert("your choice: " + playerSelection);       
    
    //start conditional statements
    //if computerSelection == "rock"
    if (computerSelection == "rock") {

        //if playerSelection == "rock" THEN tie
        if (playerSelection == "rock") {
            alert("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "paper" THEN win
        else if (playerSelection == "paper") {
            alert("You won! Lucky you!");
            winCounter = increment(winCounter);
            scoreStatus();
            return winCounter;
        }
        //if playerSelection == "Scissors" THEN lose
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
    //if computerSelection == "paper"
    else if (computerSelection == "paper") {

        //if playerSelection == "rock"
        if (playerSelection =="rock") {
            alert("You lost. Better luck next time :'(");
            loseCounter = increment(loseCounter);
            scoreStatus();
            return loseCounter
        }
        //if playerSelection == "paper"
        else if (playerSelection == "paper") {
            alert("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "Scissors"
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
    //if computerSelection == "Scissors"
    else if (computerSelection == "scissors"){

        //if playerSelection == "rock"
        if (playerSelection == "rock") {
            alert("You won! You rock!!!");
            winCounter = increment(winCounter);
            scoreStatus();
            return winCounter;
        }
        //if playerSelection == "paper"
        else if (playerSelection == "paper") {
            alert("You lost. Better luck next time :'(");
            loseCounter = increment(loseCounter);
            scoreStatus();
            return loseCounter
        }
        //if playerSelection == "Scissors"
        else if (playerSelection == "scissors") {
            alert("It's a tie! C'mon, try again!");
        }
        else {
            alert("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }
};