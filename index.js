// create DOM references for the buttons
const buttons = document.querySelectorAll(".pick");
const scoreText = document.getElementById("score");
const compText = document.getElementById("comp-score");
// DOM refs to hide main and selections
const main = document.getElementById("main");
const selection = document.getElementById("on-selection");
const userSelection = document.getElementById("user-selection");
const compSelection = document.getElementById("comp-selection");
const resultText = document.getElementById("win");
const reset = document.getElementById("btn-reset");

// start the game by using the saved local storage score
const savedLocalPlayerScore = localStorage.getItem("playerScore");
const savedLocalCompScore = localStorage.getItem("compScore");
console.log(savedLocalPlayerScore, savedLocalCompScore);

if (savedLocalPlayerScore && savedLocalCompScore) {
  scoreText.textContent = savedLocalPlayerScore;
  compText.textContent = savedLocalCompScore;
}

// function which holds the game moves, in an array
function getRandomGuess() {
  // array containing rock, paper, scissors
  let rockPaperScissorsMoves = ["rock", "paper", "scissors"];
  // generate random element based on the length of the rock, paper, scissors array
  let randomNumber = Math.floor(Math.random() * rockPaperScissorsMoves.length);
  // variable called random guess puts the random number value into the index of the rock paper scissors array
  let randomGuess = rockPaperScissorsMoves[randomNumber];
  return randomGuess;
}

// set the initial value of score to 0
let score = 0;
let compScore = 0;
// get the user choice and set it to undefined
// this will be assigned a value once the user clicks, by getting the data-attribute
let userChoice = undefined;

// loop over all of the buttons with a for loop
// add event listner which listens for a click
// get the users choice from the data-choice attribute
// console.log the the userchoice - it should return the correct choice
buttons.forEach((button) => {
  console.log(buttons);
  button.addEventListener("click", (event) => {
    userChoice = button.getAttribute("data-choice");
    // call findWinner to visually see the scoreboard update in the DOM
    findWinner();
    console.log(userChoice);
    updateLocalStorage("playerScore", scoreText.textContent);
    updateLocalStorage("compScore", compText.textContent);
  });
});

reset.addEventListener("click", (evt) => {
  main.style.display = "flex";
  selection.style.display = "none";
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyR") {
    userChoice = "rock";
    console.log(userChoice, findWinner(), " user pressed R");
  }
  if (event.code === "KeyP") {
    userChoice = "paper";
    console.log(userChoice, findWinner(), " user pressed P");
  }
  if (event.code === "KeyS") {
    userChoice = "scissors";
    console.log(userChoice, findWinner(), " user pressed S");
  }
  updateLocalStorage("playerScore", scoreText.textContent);
  updateLocalStorage("compScore", compText.textContent);
});

// find winner function, which compares the main winning values and updates the score in the DOM
function findWinner() {
  const computerChoice = getRandomGuess();

  //switch DOM to show the user selection
  // show the selection and hide the main html elements
  // updateOnSelection(userSelection, userChoice);
  // updateOnSelection(compSelection, computerChoice);

  // main.style.display = "none";
  // selection.style.display = "flex";

  if (userChoice === computerChoice) {
    resultText.textContent = "Draw";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    updateScore("player");
    resultText.textContent = "You Win";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    updateScore("player");
    resultText.textContent = "You Win";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    updateScore("player");
    resultText.textContent = "You Win";
  } else {
    resultText.textContent = "You Lose";
    updateScore("comp");
  }
}

// update the score //
// this will increment in the findWinner function
function updateScore(user) {
  if (user === "player") {
    score++;
    scoreText.textContent = score;
  }
  if (user === "comp") {
    compScore++;
    compText.textContent = compScore;
  }
}

function updateOnSelection(selectEl, choice) {
  // first we reset the classes
  selectEl.classList.remove("btn-paper");
  selectEl.classList.remove("btn-rock");
  selectEl.classList.remove("btn-scissors");

  // change the imagery inside
  const img = selectEl.querySelector("img");
  img.src = `./icon-${choice}.svg`;
  selectEl.classList.add(`btn-${choice}`);
}

// function to set local storage on an item
function updateLocalStorage(item, value) {
  localStorage.setItem(item, value);
}

// create a reset button - get DOM reference
const resetScores = document.getElementById("clear_score_button");

// try a function which clears local storage
function clearlocalStorage() {
  return localStorage.clear();
}

// function to refresh page
function refreshPage() {
  window.location.reload();
}

// call local storage function as a result of the button being clicked, this should clear the score
resetScores.addEventListener("click", (evt) => {
  clearlocalStorage();
  refreshPage();
});
