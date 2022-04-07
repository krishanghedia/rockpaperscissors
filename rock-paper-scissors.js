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

// bring it all together - create game function
// it takes two arguments - playerMove and computerMove
// create two variables which contain playMove and computerMove using gameMoves func
// conditional statement which checks for all specific moves and returns the result

// currently uses if statements - refactor using switch / ternarys

// function rockPaperScissorsGame(playerGuess) {
//   var playerGuess = playerGuess;
//   var computerGuess = computerMove();

// WHAT NOT TO DO

//   if (playerGuess === computerGuess) {
//     console.log(playerGuess + " - " + computerGuess, "- the game is a draw");
//   } else if (playerGuess === "rock" && computerGuess === "paper") {
//     console.log(playerGuess + " - " + computerGuess, "- sorry, you lose");
//   } else if (playerGuess === "rock" && computerGuess === "scissors") {
//     console.log(playerGuess + " - " + computerGuess, "- you win!");
//   } else if (playerGuess === "paper" && computerGuess === "scissors") {
//     console.log(playerGuess + " - " + computerGuess, "- sorry, you lose");
//   } else if (playerGuess === "paper" && computerGuess === "rock") {
//     console.log(playerGuess + " - " + computerGuess, "- you win!");
//   } else if (playerGuess === "scissors" && computerGuess === "rock") {
//     console.log(playerGuess + " - " + computerGuess, "- sorry, you lose");
//   } else if (playerGuess === "scissors" && computerGuess === "paper") {
//     console.log(playerGuess + " - " + computerGuess, "- you win!");
//   } else {
//     console.log("no guess entered, game is void - computer wins");
//   }
// }
// console.log(rockPaperScissorsGame("rock"));

function findWinner(playerGuess, computerGuess) {
  if (playerGuess === computerGuess) return 0;

  if (playerGuess === "paper" && computerGuess === "rock") return 1;
  if (playerGuess === "scissors" && computerGuess === "paper") return 1;
  if (playerGuess === "rock" && computerGuess === "scissors") return 1;
}

const result = findWinner("paper2", computerMove());
const text =
  result === 0 ? "you drawed" : result === 1 ? "you won" : "the computer won";

console.log(text);
