/*  
    General Notes
    Player X : 1
    Player O : -1

    Change Turns
    Turn *= -1

    winner
    Player O : -1
    Tie : 0
    Player X : 1
*/


/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let turnTracker, winner, board


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board')
const messageEl = document.querySelector('#message')
const gameBoard = document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/
gameBoard.addEventListener('click', playerChoice)


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  turnTracker = 1
  winner = null
  board = [
    null, null, null,
    null, null, null,
    null, null, null]
  render()
}

function playerChoice(evt) {
  console.log(evt.target)

}


function turn(evt) {
  // is the square playable?
  // place correct icon based on choice
  // Was this a winning choice?

  // Render the board
  render()
}


function render() {
  // check win condition
  if (winner !== null) {
    renderWin()
  } else {
    squareEls.forEach(function(e) {
      console.log(e)
    })
    // for (let square in squareEls) {
    //   console.log(square.textContent)
    // }



    board.forEach((square, index) => {
      //squareEls.querySelector("#sq${index}")

    });

  }

}

function renderWin() {
  // Display Replay button, maybe have it come after
  // h1 tic tac toe
  console.log("There was a winner!")
}





// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button





// 3) Upon loading, the app should:
// 	3.1) Call an initialize function to initialize the state variables
// 	3.2) Render those values to the page
// 	3.3) Wait for the user to click a square

