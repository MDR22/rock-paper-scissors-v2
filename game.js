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
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase === computerSelection) {
        return `It's a tie - you both chose ${playerSelectionLowerCase}`;
    } else if (playerSelectionLowerCase === "rock" && computerSelection === "scissors" || playerSelectionLowerCase === "paper" && computerSelection === "rock" || playerSelectionLowerCase === "scissors" && computerSelection === "paper") {
        return `You win - ${playerSelectionLowerCase} beats ${computerSelection}`;
    } else {
        return `You lose - ${computerSelection} beats ${playerSelectionLowerCase}`;
    }
}

//Console log test to make sure function is working properly
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));