//Create function for computer to randomly return rock, paper, or scissors
function getComputerChoice () {
    const computerChoiceArray = ["rock",
        "paper",
        "scissors"];
    const computerChoiceSelector = (Math.floor(Math.Random) * computerChoiceArray.length);
    return computerChoiceSelector;
}