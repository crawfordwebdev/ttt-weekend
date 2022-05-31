/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let turnTracker, isWinner, whoWon, boardXOs


/*------------------------ Cached Element References ------------------------*/
const gameboard = document.querySelector('.board')
console.log(gameboard)

/*----------------------------- Event Listeners -----------------------------*/
gameboard.addEventListener('click', board)


/*-------------------------------- Functions --------------------------------*/

init()

function init () {
  turnTracker = 1
  isWinner = false;
  whoWon = 0
  boardXOs = []
  render()
}

function board (evt) {
  console.log(evt.target)

}


function turn (evt) {
  // is the square playable?
  // place correct icon based on choice
  // Was this a winning choice?

  // Render the board
  render()
}


function render() {
  // check win condition
  if (isWinner == true) {
    renderWin()
  } else {

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

