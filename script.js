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