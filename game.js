//Create function for computer to randomly return rock, paper, or scissors
function getComputerChoice () {
    const computerChoiceArray = ["rock",
        "paper",
        "scissors"];
    const computerChoiceSelector = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
    return computerChoiceSelector;
}