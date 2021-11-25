let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const random = Math.floor(Math.random() * 9 + 1);

const generateTarget = (randomNumber) => {
return random;
};
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDistance = Math.abs(targetNumber - humanGuess);
  const computerDistance = Math.abs(targetNumber - computerGuess);

  if (humanDistance <= computerDistance) {
    return true;
  }
  else {
    return false;
  }

};

const updateScore = winner => {

  if (winner === 'human') {
    humanScore++;
  }
  else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = advance => {
  currentRoundNumber++;
}
