// rock paper scissors function game

// function which holds the game moves, in an array
function gameMoves() {
  // array containing rock, paper, scissors
  let rockPaperScissorsMoves = ["rock", "paper", "scissors"];
  // generate random element based on the length of the rock, paper, scissors array
  let randomNumber = Math.floor(Math.random() * rockPaperScissorsMoves.length);
  // variable called random guess puts the random number value into the index of the rock paper scissors array
  let randomGuess = rockPaperScissorsMoves[randomNumber];
  return randomGuess;
}

// generate random computer guess using the game moves function
function computerMove() {
  return gameMoves();
}

// find winner function, which compares the main winning values and returns 1
// returns 0 if playerguess is equal to computerguess
function findWinner(playerGuess, computerGuess) {
  if (playerGuess === computerGuess) return 0;
  if (playerGuess === "paper" && computerGuess === "rock") return 1;
  if (playerGuess === "scissors" && computerGuess === "paper") return 1;
  if (playerGuess === "rock" && computerGuess === "scissors") return 1;
}

// result -
// finderwinner function is stored in a variable
// prints "you drawed" if result is = 0
// prints "you won" if your result is = 1
// else, well the computer won (damn!)
const result = findWinner("paper", computerMove());
const text =
  result === 0
    ? "you drawed"
    : result === 1
    ? `you won`
    : `the computer won with: ${computerMove()}`;

console.log(text);
