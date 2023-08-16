'use strict';

function randomNumberGenerator (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function play () {
  let userScoreCounter = 0;
  let machineScoreCounter = 0;
  do {
    let machineOption;
    const machineNumber = randomNumberGenerator(1, 3);
    if (machineNumber === 3) {
      machineOption = 'rock';
    } else if (machineNumber === 1) {
      machineOption = 'paper';
    } else {
      machineOption = 'scissors';
    }
    const opcionUsuario = prompt('Rock, paper or scissors?').toLowerCase();

    if ((machineOption === 'paper' && opcionUsuario === 'rock') ||
    (machineOption === 'scissors' && opcionUsuario === 'paper') ||
    (machineOption === 'rock' && opcionUsuario === 'scissors')) {
      alert(`You lose! ${machineOption} beats ${opcionUsuario}!`);
      machineScoreCounter++;
      alert(`Your score: ${userScoreCounter} points; Skynet: ${machineScoreCounter}`);
    }
    if ((machineOption === 'paper' && opcionUsuario === 'paper') ||
      (machineOption === 'scissors' && opcionUsuario === 'scissors') ||
      (machineOption === 'rock' && opcionUsuario === 'rock')) {
      alert('Its a tie!');
      alert(`Your score: ${userScoreCounter} points; Skynet: ${machineScoreCounter}`);
    }
    if ((machineOption === 'paper' && opcionUsuario === 'scissors') ||
      (machineOption === 'scissors' && opcionUsuario === 'rock') ||
      (machineOption === 'rock' && opcionUsuario === 'paper')) {
      alert(`You win! ${opcionUsuario} beats ${machineOption}!`);
      userScoreCounter++;
      alert(`Your score: ${userScoreCounter} points; Skynet: ${machineScoreCounter}`);
    }
    if (machineScoreCounter === 3) {
      alert('Skynet has won!! I hope you were kind enough to your Roomba...');
    }
    if (userScoreCounter === 3) {
      alert('You have won!! Rise of the Machines is one day further away...');
    }
  } while (machineScoreCounter < 3 && userScoreCounter < 3);
}

