let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const random = Math.floor(Math.random() * 9 + 1);

const generateTarget = (randomNumber) => {
return random;
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
   const howCloseHuman = targetNumber - humanGuess;
   const howCloseComputer = targetNumber - computerGuess;

   if (humanGuess < 0 || humanGuess > 9) {
     return;
   }

  else if (howCloseHuman <= howCloseComputer) {
  return true;
}
  else {return false;}
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

updateScore('human');
console.log(humanScore);



console.log(compareGuesses(4,4,9));




console.log(generateTarget());
