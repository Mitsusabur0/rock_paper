let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = choices[0]
    console.log(choice)
}

let computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);






