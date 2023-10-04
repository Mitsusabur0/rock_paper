let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = choices[0]
    console.log(choice)
}


let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playGame("rock");
            break;
        case "paper":
            playGame("paper");
            break;
        case "scissors":
            playGame("scissors");
            break;
    }
})


let selections = document.querySelector("#selections");
let result = document.querySelector("#result");
let currentPlayerScore = document.querySelector("#playerScore");
let currentComputerScore = document.querySelector("#computerScore");
let finalResult = document.querySelector("#finalResult");
playerCounter = 0;
computerCounter = 0;

function playGame(playerSelection) {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    selections.innerText = `you: ${playerSelection.toUpperCase()} vs computer: ${computerSelection.toUpperCase() }`;

    if (playerSelection === computerSelection) {
        result.innerText = "No one wins";

    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"))  {
        result.innerText = "Player wins!";
        playerCounter++;
        currentPlayerScore.innerText = `Player score: ${playerCounter}`;

    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper"))  {
        result.innerText =  "Computer wins!";
        computerCounter++;
        currentComputerScore.innerText = `Computer score: ${computerCounter}`;


    } else {
        result.innerText =  "no winners here";
    }

    if (playerCounter === 5) {
        finalResult.innerText = "PLAYER WINSSSSSSS THE GAMEEEEEEEEEEE";
    } else if (computerCounter === 5) {
        finalResult.innerText = "COMPUTER WINSSSSSS THE GAMEEEEEEEEEE";
    }
}

    
