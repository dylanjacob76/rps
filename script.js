const containerEl = document.querySelector("#container");
const results = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const playAgainBtn = document.createElement("button");
const playerChoiceBtns = [rockBtn, paperBtn, scissorsBtn];

function init() {
  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";
  containerEl.appendChild(results);
  containerEl.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
  results.setAttribute("style", "margin-bottom: 20px; font-size: 24px")

  playerChoiceBtns.forEach(button => {
    containerEl.appendChild(button);
    button.setAttribute("style", "margin: 4px; border-style: none; background-color: lightBlue; padding: 4px; width: 75px;");
  });

  startGame();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playAgain() {
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.setAttribute("style", "margin: 4px; border-style: none; background-color: lightGreen; font-weight: bold; padding: 4px;")
  containerEl.appendChild(playAgainBtn);
  playAgainBtn.addEventListener("click", startGame);
}

function startGame() {
  playAgainBtn.setAttribute("style", "display: none;");
  rockBtn.removeAttribute("disabled");
  paperBtn.removeAttribute("disabled");
  scissorsBtn.removeAttribute("disabled");
  let playerWins = 0, playerLosses = 0, playerTies = 0;
  let computerWins = 0, computerLosses = 0, computerTies = 0;
  results.textContent = `Player Wins: ${playerWins} - Player Losses: ${playerLosses} - Player Ties: ${playerTies}`

  function playerSelection() {
    rockBtn.addEventListener("click", function () {
      playRound("rock");
    });
    paperBtn.addEventListener("click", function () {
      playRound("paper");
    });
    scissorsBtn.addEventListener("click", function () {
      playRound("scissors");
    });
  }

  playerSelection();

  function playRound(playerChoice, computerChoice = getComputerChoice()) {

    function declareWinner() {
      if (playerWins === 5) {
        results.textContent = "You Won the Game! The evil machines have been vanquished!";
        endGame();
      } else if (playerLosses === 5) {
        results.textContent = "You Lost. The machines have won and declare world domination!";
        endGame();
      } else if (playerTies === 5) {
        results.textContent = "it's a Tie! How boring...";
        endGame();
      }
    }

    function endGame() {
      rockBtn.setAttribute("disabled", 1);
      paperBtn.setAttribute("disabled", 1);
      scissorsBtn.setAttribute("disabled", 1);
      playAgain();
    }

    if (playerChoice == computerChoice) {
      playerTies++;
      computerTies++;
    } else if (
      playerChoice === "rock" && computerChoice === "scissors" ||
      playerChoice === "paper" && computerChoice === "rock" ||
      playerChoice === "scissors" && computerChoice === "paper"
    ) {
      playerWins++;
      computerLosses++;
    } else {
      playerLosses++
      computerWins++
    }

    results.textContent = `Player Wins: ${playerWins} || Player Losses: ${playerLosses} || Player Ties: ${playerTies}`;

    declareWinner();
  }
}

init();