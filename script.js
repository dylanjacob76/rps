// Create a function to generate the computerChoice
// Create a function that plays a round and takes in the playerChoice as well as the computerChoice
// Compare the two choices
// Return (alert winner)
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

