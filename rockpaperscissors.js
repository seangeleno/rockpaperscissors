////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    // console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.", "Type in your answer here");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    if (move !== null) {

        return move;

    }
    else
        {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */ 
    return getInput();
    }
}
function getComputerMove(move) {
if (move !== null){
return move;
}
else if (move === null){
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return  /* Your Expression */randomPlay();
    }
}
var playerWins = 0;
var computerWins = 0;

function getWinner(playerMove,computerMove) {
    // var winner = ;
    if (playerMove === computerMove){
        return "Tie! Nobody Wins, Try Again";
    }
    //the tie value automatically assigns a third outcome, so only 2 are needed for the other else/if statements

    else if (playerMove === "rock"){
        if (computerMove === "scissors"){
            return "rock wins";
            playerWins = playerWins++;
        }
        else {
            return "paper wins";
            computerWins = computerWins++;
        }
    }
    //player has rock first, paper second, and scissors last, just like the name of the game

    else if (playerMove === "paper") {
            if (computerMove === "rock") {
                return "paper wins";
                playerWins = playerWins++;
            }
            else {
                return "scissors wins";
                computerWins = computerWins++;
            }
    }

    //used outcome where player wins with if

            else if (playerMove === "scissors"){
                if (computerMove === "paper"){
                    return "scissors wins";
                    playerWins = playerWins ++;
                }
                else {
                    return "rock wins";
                    computerWins = computerWins++;
                }
            }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // return winner;
}

getWinner(getInput(), randomPlay());
console.log("Computer Score: " + computerWins + " Human Score: " + playerWins);

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  // getWinner();

  //by placing the playerWins var in the playToFive function, it becomes a local variable
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 6 || computerWins < 6) {
    getWinner(getInput(), randomPlay());
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

  }

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  // return [playerWins, computerWins];
};

playToFive();


