function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  const choiceSelected = choice[Math.floor(Math.random() * choice.length)];
  // do something with the selected value
  return choiceSelected;
}

function playRound() {
  let playerSelection = prompt("What's your selection?");
  const choiceSelected = computerPlay();
  let result;
  let scoreBoard =
    "Player Score: " + playerScore + " Computer Score: " + computerScore;

  if (playerSelection.toLowerCase() == "rock" && choiceSelected == "Paper") {
    result = "You Lose! Paper beats Rock";
    computerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    choiceSelected == "Rock"
  ) {
    result = "You Win! Paper beats Rock";
    playerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    choiceSelected == "Scissors"
  ) {
    result = "You Win! Rock beats Scissors";
    playerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    choiceSelected == "Rock"
  ) {
    result = "You Lose! Rock beats Scissors";
    computerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    choiceSelected == "Paper"
  ) {
    result = "You Win! Scissors beats Paper";
    playerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    choiceSelected == "Scissors"
  ) {
    result = "You Lose! Scissors beats Paper";
    computerScore += parseInt("1");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    choiceSelected == "Paper"
  ) {
    result = "Fair";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    choiceSelected == "Scissors"
  ) {
    result = "Fair";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    choiceSelected == "Rock"
  ) {
    result = "Fair";
  } else {
    result = "Apa Lanjiao?";
  }
  console.log(result);
  console.log(scoreBoard);
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  finalResult();
}

function finalResult() {
  if (playerScore > computerScore) {
    console.log("Human Wins!");
  } else if (playerScore == computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("Computer Wins :(");
  }
}

let playerScore = 0;
let computerScore = 0;

game();
