function getComputerChoice() {
  const choices = ["rock+", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function game() {
  let playerWins = 0, playerLosses = 0, playerTies = 0;
  let computerWins = 0, computerLosses = 0, computerTies = 0;

  function playRound(playerChoice, computerChoice = getComputerChoice()) {
    playerChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    if (playerChoice == computerChoice) {
      console.log("Player Choice: " + playerChoice);
      console.log("Computer Choice: " + computerChoice);
      playerTies++;
      computerTies++;
      alert("This round's a tie!");
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
      console.log("Player Choice: " + playerChoice);
      console.log("Computer Choice: " + computerChoice);
      playerWins++;
      computerLosses++;
      alert("You won this round!");
    } else {
      console.log("Player Choice: " + playerChoice);
      console.log("Computer Choice: " + computerChoice);
      playerLosses++
      computerWins++
      alert("You lost this round.");
    }
  }

  function loopRounds() {
    for (let i = 0; i < 5; i++) {
      playRound();
    }
  }

  loopRounds();

  function calculateWinner() {
    if (playerWins === computerWins) {
      alert("There is no winner, The games a draw!")
    } else if (playerWins > computerWins) {
      alert("You won the game!")
    } else {
      alert("GAME OVER \n \n Computer: I have bested you at this game pathetic human... \n \n Player: ... ... \n \n Computer: Rock, Paper, Scissor Supremacy IS MINE!")
    }
  }

  calculateWinner();
}

game();