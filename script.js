// Create variables to keep track of scores for both the person and the computer
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
  // Generate a random number by multiplying by 3 and then rounding down to get three options - 0, 1 or 2.
  let randomNumber = Math.floor(Math.random() * 3);
  
  // Write a conditional to assign each choice to a number
  if(randomNumber === 0){
    return "Paper";
  } else if(randomNumber === 1){
    return "Rock"
  } else if(randomNumber === 2){
    return "Scissors"
  }
}

function getHumanChoice(){
  //Grab the user's choice using prompt
  let userAnswer = prompt('Please Make A Choice: Rock, Paper or Scissors?');

  // If the user's input falls into one of three choices, return the choice
  if(userAnswer.toLowerCase() === 'rock' || userAnswer.toLowerCase() === 'paper' || userAnswer.toLowerCase === 'scissors'){
    return userAnswer;
  }

  return console.error('It looks like you gave an invalid answer');
}

function determineWinner(humanChoice, computerChoice){
  // Rock Beats Scissors
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
    humanScore += 1;
    return `Hooray, You win! Rock beats Scissors. You have ${humanScore} points and the computer has ${computerScore} points.`;
  } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    computerScore += 1;
    return `Aw, You lose; Scissors loses aganist Rock. You have ${humanScore} points and the computer has ${computerScore} points.`;
  }

  // Scissors Beats Paper
  if(humanChoice === 'scissors' && computerChoice === 'paper'){
    humanScore += 1;
    return `Hooray, You win! Scissors beats Paper. You have ${humanScore} points and the computer has ${computerScore} points.`;
  } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    computerScore += 1;
    return `Aw, You lose; Paper loses aganist Scissors. You have ${humanScore} points and the computer has ${computerScore} points.`;
  }

  // Paper Beats Rock
  if(humanChoice === 'paper' && computerChoice === 'rock'){
    humanScore += 1;
    return `Hooray, You win! Paper beats Rock. You have ${humanScore} points and the computer has ${computerScore} points.`;
  } else if(humanChoice === 'rock' && computerChoice === 'paper'){
    computerScore += 1;
    return `Aw, You lose; Rock loses aganist Paper. You have ${humanScore} points and the computer has ${computerScore} points.`;
  }

  // If it's a tie
  if(humanChoice === computerChoice){
    return 'Looks like it\'s a draw! No points!'
  }
}

function playRound(humanChoice, computerChoice){
  // Make the choices lowercase for case insensitive comparisons
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // Determine the winner and store into the result variable
  let result = determineWinner(humanChoice, computerChoice);
  // Console log the result
  console.log(result);
}