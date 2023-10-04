let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = choices[0]
    console.log(choice)
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("No one wins");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"))  {
        console.log("Player wins!");
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper"))  {
        console.log("Computer wins!");
    } else {
        console.log("Invalid input");
    }
}

for (let  i = 0; i < 5; i++) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = prompt("Rock, paper, scissors? ").toLowerCase();
    console.log(`Player: ${playerChoice} - Computer: ${computerChoice}`);
    playGame(playerChoice, computerChoice);
}
    
