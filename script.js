let humanScore = 0;
let computerScore = 0;

const choiceContainer = document.querySelector('#choice-container');

choiceContainer.addEventListener('click', (event) => {
  if(event.target.tagName !== 'BUTTON'){
    return;
  }
  // Grab both human choice and computer choice
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  // Play a round to see who wins
  playRound(humanChoice, computerChoice);
})


function playRound(humanChoice, computerChoice){
  // Determine the winner and store into the result variable
  let result = determineWinner(humanChoice, computerChoice);

  // Update the score and update DOM elements accordingly
  if(result === 'human'){
    humanScore += 1;
    document.querySelector('#human').textContent = `Human Score: ${humanScore}`;
  } else if (result === 'computer'){
    computerScore += 1;
    document.querySelector('#computer').textContent = `Computer Score: ${computerScore}`
  }

  // Check score after determining winner to see if anyone has won yet.
  if(humanScore >= 5){
    alert('Hooray! You\'ve defeated the computer!');
    window.location.reload();
  } else if(computerScore >= 5) {
    alert('It seems like the computer has beaten you!');
    window.location.reload();
  }
}


function getComputerChoice(){
  // Generate a random number by multiplying by 3 and then rounding down to get three options - 0, 1 or 2.
  let randomNumber = Math.floor(Math.random() * 3);
  
  // Write a conditional to assign each choice to a number
  if(randomNumber === 0){
    return "paper";
  } else if(randomNumber === 1){
    return "rock"
  } else if(randomNumber === 2){
    return "scissors"
  }
}

function determineWinner(humanChoice, computerChoice){
  const result = document.querySelector('#result');
  const roundResult = document.querySelector('#round-result');

  roundResult.classList.remove('win', 'lose', 'neutral');

  // Rock Beats Scissors
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
    roundResult.classList.toggle('win');
    result.textContent = `Hooray, You win! Rock beats Scissors.`;
    return 'human';
  } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    roundResult.classList.toggle('lose');
    result.textContent = `Aw, You lose; Scissors loses aganist Rock.`
    return 'computer';
  }

  // Scissors Beats Paper
  if(humanChoice === 'scissors' && computerChoice === 'paper'){
    roundResult.classList.toggle('win');
    result.textContent = `Hooray, You win! Scissors beats Paper.`
    return 'human';
  } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    roundResult.classList.toggle('lose');
    result.textContent = `Aw, You lose; Paper loses aganist Scissors.`
    return 'computer'
  }

  // Paper Beats Rock
  if(humanChoice === 'paper' && computerChoice === 'rock'){
    roundResult.classList.toggle('win');
    result.textContent = `Hooray, You win! Paper beats Rock.`
    return 'human';
  } else if(humanChoice === 'rock' && computerChoice === 'paper'){
    roundResult.classList.toggle('lose');
    result.textContent = `Aw, You lose; Rock loses aganist Paper.`
    return 'computer';
  }

  // If it's a tie
  if(humanChoice === computerChoice){
    roundResult.classList.toggle('neutral');
    result.textContent = 'Looks like it\'s a draw! No points!'
    return 'no points';
  }
}