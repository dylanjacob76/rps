const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "It's a tie!";
  } else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
    return "You win!";
  } else {
    return "You lost!";
  }

}

const playerChoice = "Rock";
console.log(playRound(playerChoice, getComputerChoice()))