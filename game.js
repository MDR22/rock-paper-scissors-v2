//Create function for computer to randomly return rock, paper, or scissors
function getComputerChoice() {
    const computerChoiceArray = ["rock",
        "paper",
        "scissors"];
    const computerChoiceSelector = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
    return computerChoiceSelector;
}

//Play round of rock-paper-scissors, compare random computer choice against player choice to determine winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie - you both chose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}