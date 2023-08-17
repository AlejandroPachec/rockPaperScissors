'use strict';

let userScoreCounter = 0;
let machineScoreCounter = 0;
function randomNumberGenerator (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function userOption (option) {
  const machineOption = generateMachineOption();
  playRound(option, machineOption);
};
function generateMachineOption () {
  const machineNumber = randomNumberGenerator(1, 3);
  if (machineNumber === 3) {
    return 'rock';
  } else if (machineNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

function playRound (userOption, machineOption) {
  if (
    (machineOption === 'paper' && userOption === 'rock') ||
    (machineOption === 'scissors' && userOption === 'paper') ||
    (machineOption === 'rock' && userOption === 'scissors')
  ) {
    alert(`You lose! ${machineOption} beats ${userOption}!`);
    machineScoreCounter++;
  } else if (machineOption === userOption) {
    alert('It\'s a tie!');
  } else {
    alert(`You win! ${userOption} beats ${machineOption}!`);
    userScoreCounter++;
  }

  alert(`Your score: ${userScoreCounter} points; Skynet: ${machineScoreCounter}`);

  if (machineScoreCounter === 3) {
    alert('Skynet has won!! I hope you were kind enough to your Roomba...');
    resetScores();
  } else if (userScoreCounter === 3) {
    alert('You have won!! Rise of the Machines is one day further away...');
    resetScores();
  }
};
function resetScores () {
  userScoreCounter = 0;
  machineScoreCounter = 0;
};

