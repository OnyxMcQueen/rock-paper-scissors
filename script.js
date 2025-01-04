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
  if(userAnswer.toLowerCase() === 'rock' || userAnswer.toLowerCase() === 'paper' || userAnswer.toLowerCase() === 'scissors'){
    return userAnswer;
  } else {
    getHumanChoice();
  }
}

function determineWinner(humanChoice, computerChoice){
  // Rock Beats Scissors
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
     console.log(`Hooray, You win! Rock beats Scissors.`);
     return 'human';
  } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    console.log(`Aw, You lose; Scissors loses aganist Rock.`);
    return 'computer';
  }

  // Scissors Beats Paper
  if(humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log(`Hooray, You win! Scissors beats Paper.`);
    return 'human';
  } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    console.log(`Aw, You lose; Paper loses aganist Scissors.`);
    return 'computer'
  }

  // Paper Beats Rock
  if(humanChoice === 'paper' && computerChoice === 'rock'){
    console.log(`Hooray, You win! Paper beats Rock.`);
    return 'human';
  } else if(humanChoice === 'rock' && computerChoice === 'paper'){
    console.log(`Aw, You lose; Rock loses aganist Paper.`);
    return 'computer';
  }

  // If it's a tie
  if(humanChoice === computerChoice){
    console.log('Looks like it\'s a draw! No points!');
    return 'no points';
  }
}

function playRound(humanChoice, computerChoice){
  // Determine the winner and store into the result variable
  let result = determineWinner(humanChoice, computerChoice);
  // return the result
  return result;
}

function playGame(){
// Create variables to keep track of scores for both the person and the computer
let humanScore = 0;
let computerScore = 0;

// Play for 5 rounds
for(let i = 1; i <= 5; i++){
  let humanSelection = getHumanChoice().toLowerCase();
  let computerSelection = getComputerChoice().toLowerCase();

  let result = playRound(humanSelection, computerSelection);

  // Update the score depending on who the winner is from the playRound function
  if(result === 'human'){
    humanScore += 1;
  } else if(result === 'computer'){
    computerScore += 1;
  }
}

// Determine who has the most points and is the winner
  if(humanScore > computerScore){
    console.log('Congratulations!! You\'ve won the game!');
  } else {
    console.log('It looks like you\'ve been defeated. Try Again!');
  }
}

playGame();