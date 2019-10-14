
function getComputerChoice() {
    "use strict";

    var computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    window.console.log("Computer's choice is " + computerChoice);
    return computerChoice;
}

function getUserChoice(){
    "use strict";
    var validChoices = ["rock", "paper", "scissors"];
    var userChoice = window.prompt("Enter your choice (rock, paper, scissors)");
    userChoice = userChoice.toLowerCase();
    if(!validChoices.includes(userChoice)){
        window.alert("Please enter one of the choices (rock, paper, scissors)");
        window.console.log("invalid entry");      
        return "invalid";
        
    }
    else{
        window.console.log("User's choice is "+ userChoice);
        return userChoice;
    }
}

function playAgain(){
    var choice = window.prompt("Press y to play again or any key to quit:");
    if(choice === "y" )
        return true;
    else{
        window.alert("Thanks for playing the game!");
        return false;
    }
}

function startGame(userChoice, computerChoice) {
    "use strict";
    var win = "YOU WIN!";
    var lose = "YOU LOSE!";
    var tie = "IT's A TIE";
    if (computerChoice === "rock") {
        if (userChoice === "paper") {
            window.alert("Paper covers rock!\n" + win);
        } else if (userChoice === "scissors") {
            window.alert("Rock destroys scissors!\n" + lose);
        } else {
            window.alert("Both players have selected rock!\n" + tie);
        }
    } else if (computerChoice === "scissors") {
        if (userChoice === "rock") {
            window.alert("Rock destroys scissors!\n" + win);
        } else if (userChoice === "paper") {
            window.alert("Scissors cuts paper!\n" + lose);
        } else {
            window.alert("Both players have selected scissors!\n" + tie);
        }
    } else if (computerChoice === "paper") {
        if (userChoice === "scissors") {
            window.alert("Scissors cuts paper!\n" + win);
        } else if (userChoice === "rock") {
            window.alert("Paper covers rock!\n" + lose);
        } else {
            window.alert("Both users selected paper!\n" + tie);
        }
    }
}


function main() {
    "use strict";
    while(true){
        var userChoice = getUserChoice();
        var choice = null;
        if(userChoice === "invalid"){
            choice = playAgain();
            if(choice)
                continue;
            else
                break;
        }
        else{
            var computerChoice = getComputerChoice(); 
            startGame(userChoice,computerChoice);
        }
        choice = playAgain();
        if(choice)
            continue;
        else
            break;
    }       
}

main();