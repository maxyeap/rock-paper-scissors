// Style Code
const body = document.querySelector("body");
body.style.backgroundColor = "#add8e6";
body.style.fontFamily = "'Oswald', sans-serif";
body.style.fontWeight = "bold";
body.style.fontSize = "30px";

const headingDiv = document.createElement("div");
body.appendChild(headingDiv);
const heading = document.createElement("h1");
const headingText = document.createTextNode(
  "Ultimate Rock Paper Scissors By Max"
);
heading.style.textAlign = "center";
heading.style.color = "#2f2f2f";
heading.style.textDecoration = "underline";
heading.appendChild(headingText);
headingDiv.appendChild(heading);

// Score Div
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("scoreDiv");
body.appendChild(scoreDiv);
scoreDiv.style.margin = "20px auto";
scoreDiv.style.textAlign = "center";
scoreDiv.style.display = "flex";
scoreDiv.style.flex = "1";
scoreDiv.style.justifyContent = "space-between";
scoreDiv.style.width = "60%";

// Score Board
let playerScore = 0;
let computerScore = 0;

let scoreBoard1 = "Player Score: " + playerScore;
let scoreBoard2 = "Computer Score: " + computerScore;
const playerScoreDisplay = document.createElement("p");
scoreDiv.appendChild(playerScoreDisplay);
playerScoreDisplay.innerHTML = scoreBoard1;
const computerScoreDisplay = document.createElement("p");
scoreDiv.appendChild(computerScoreDisplay);
computerScoreDisplay.innerHTML = scoreBoard2;

// Result Div
const selectionDiv = document.createElement("div");
selectionDiv.classList.add("selectionDiv");
body.appendChild(selectionDiv);
selectionDiv.style.margin = "20px auto";
selectionDiv.style.display = "flex";
selectionDiv.style.flex = "1";
selectionDiv.style.justifyContent = "space-between";
selectionDiv.style.width = "70%";

const playerSelect = document.createElement("p");
selectionDiv.appendChild(playerSelect);

const computerSelect = document.createElement("p");
selectionDiv.appendChild(computerSelect);

let playerSelection = "";
let choiceSelected = "";
playerSelect.innerHTML = "Player Selection: " + playerSelection;

computerSelect.innerHTML = "Computer Selection: " + choiceSelected;

// Button Div
const rpsDiv = document.createElement("div");
rpsDiv.classList.add("rpsDiv");
body.appendChild(rpsDiv);
rpsDiv.style.width = "70%";
rpsDiv.style.margin = "20px auto";
rpsDiv.style.display = "grid";
rpsDiv.style.columnGap = "100px";
rpsDiv.style.gridAutoColumns = "minmax(0, 1fr)";
rpsDiv.style.gridAutoFlow = "column";

// Add Button
const rockButton = document.createElement("button");
rockButton.classList.add("rockButton");
const rockButtonText = document.createTextNode("Rock");
rockButton.appendChild(rockButtonText);
rpsDiv.appendChild(rockButton);
rockButton.style.fontSize = "30px";
rockButton.style.padding = "20px 10px";
rockButton.style.gridColumnStart = "1";
rockButton.style.gridColumnEnd = "2";

const paperButton = document.createElement("button");
paperButton.classList.add("paperButton");
const paperButtonText = document.createTextNode("Paper");
paperButton.appendChild(paperButtonText);
rpsDiv.appendChild(paperButton);
paperButton.style.fontSize = "30px";
paperButton.style.padding = "20px 10px";
paperButton.style.gridColumnStart = "2";
paperButton.style.gridColumnEnd = "3";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissorsButton");
const scissorsButtonText = document.createTextNode("Scissors");
scissorsButton.appendChild(scissorsButtonText);
rpsDiv.appendChild(scissorsButton);
scissorsButton.style.fontSize = "30px";
scissorsButton.style.padding = "20px 10px";
scissorsButton.style.gridColumnStart = "3";
scissorsButton.style.gridColumnEnd = "4";

// Add event listener to the buttons
const rockEvent = document.querySelector(".rockButton");
rockEvent.addEventListener("click", () => {
  playRound("Rock");
});

const paperEvent = document.querySelector(".paperButton");
paperEvent.addEventListener("click", () => {
  playRound("Paper");
});

const scissorsEvent = document.querySelector(".scissorsButton");
scissorsEvent.addEventListener("click", () => {
  playRound("Scissors");
});

const resultDiv = document.createElement("div");
resultDiv.classList.add("resultDiv");
body.appendChild(resultDiv);
resultDiv.style.margin = "40px auto";
resultDiv.style.textAlign = "center";

const restartDiv = document.createElement("div");
body.appendChild(restartDiv);
restartDiv.style.textAlign = "center";
const restartButton = document.createElement("button");
restartButton.classList.add("restartButton");
const restartButtonText = document.createTextNode("Restart");
restartButton.appendChild(restartButtonText);
restartButton.style.fontSize = "30px";
restartButton.style.padding = "20px 10px";
restartDiv.appendChild(restartButton);
restartDiv.style.display = "none";

restartButton.addEventListener("click", () => {
  location.reload();
});

// Game Functions
function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  const choiceSelected = choice[Math.floor(Math.random() * choice.length)];
  // do something with the selected value
  return choiceSelected;
}

function playRound(playerSelection) {
  let result;

  const choiceSelected = computerPlay();

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

  let scoreBoard1 = "Player Score: " + playerScore;
  let scoreBoard2 = "Computer Score: " + computerScore;

  playerScoreDisplay.innerHTML = scoreBoard1;

  computerScoreDisplay.innerHTML = scoreBoard2;

  playerSelect.innerHTML = "Player Selection: " + playerSelection;

  computerSelect.innerHTML = "Computer Selection: " + choiceSelected;

  resultDiv.innerHTML = result;

  if (playerScore == 5) {
    resultDiv.innerHTML = "Player Wins!";
    resultDiv.style.border = "5px solid red";
    resultDiv.style.width = "50%";
    resultDiv.style.padding = "50px 50px";
    resultDiv.style.fontSize = "50px";
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    restartDiv.style.display = "block";
  } else if (computerScore == 5) {
    resultDiv.innerHTML = "Computer Wins!";
    resultDiv.style.border = "5px solid red";
    resultDiv.style.width = "50%";
    resultDiv.style.padding = "50px 50px";
    resultDiv.style.fontSize = "50px";
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    restartDiv.style.display = "block";
  }
}
