//generate random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  //get computer choice 
  
  function getComputerChoice() {
    randomNum = generateRandomNumber(1,3);
    
  let getComputerChoice;
  
  if (randomNum == 1) {
    getComputerChoice = "Rock";
  }
  
    else if (randomNum == 2) {
      getComputerChoice = "Paper";
    }
  
      else {
      getComputerChoice = "Scissors";
    }
  
  return getComputerChoice; 
    
  }
  
  
  function playRound() {
    // prompt the user for their selection
    const playerSelection = prompt("Rock, paper, or scissors?");
    
    // get the computer's selection
    const computerSelection = getComputerChoice();
  
    let computerScore;
    let playerScore;
    
    // compare the selections and determine the winner
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
      console.log("Tie");
    } 
    else if (playerSelection == 'rock') {
      if (computerSelection == 'paper') {
        console.log("The computer won!");
        computerScore++;
      }
      else {
        console.log("The player won");
        playerScore++;
      }
    }
    else if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        console.log("The computer won");
        computerScore++;
      }
      else {
        console.log("The player won");
        playerScore++;
      }
    }
    else if (playerSelection == 'paper') {
      if (computerSelection == 'scissors') {
        console.log("The computer won");
        computerScore++;
      } 
      else {
        console.log("The player won");
        playerScore++;
      }
    }
  }
  
  
  
  function playGame() {
    let playerScore;
   let computerScore;
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
  }
  
  
  playGame();
  