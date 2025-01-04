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
  if(userAnswer === 'Rock' || userAnswer === 'Paper' || userAnswer === 'Scissors'){
    return userAnswer;
  }

  return console.error('It looks like you gave an invalid answer');
}

