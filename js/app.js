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

// FIXME Refactor this in after workin
const players = {
  '1': {
    name: 'Player X',
    symbol: 'x',
    score: 0
  },
  '-1': {
    name: 'Player O',
    symbol: 'o',
    score: 0
  }
};


// ## Step 5 - Define the required constants

// a) In a constant called `winningCombos` define the eight possible winning combinations as an array of arrays.

// 🧠 Each array will contain three indices of the board that make a winner if they hold the same player value (`1` or `-1`). If you are having trouble with this step, feel free to check out the `winningCombos` array in the solution code.


const winningCombos = [
  [
    1, 1, 1, 
    0, 0, 0,
    0, 0, 0
  ],[
    0, 0, 0, 
    1, 1, 1,
    0, 0, 0
  ],[
    0, 0, 0, 
    0, 0, 0,
    1, 1, 1
  ],[
    1, 0, 0, 
    1, 0, 0,
    1, 0, 0
  ],[
    0, 1, 0, 
    0, 1, 0,
    0, 1, 0
  ],[
    0, 0, 1, 
    0, 0, 1,
    0, 0, 1
  ],[
    1, 0, 0, 
    0, 1, 0,
    0, 0, 1
  ],[
    0, 0, 1, 
    0, 1, 0,
    1, 0, 0
  ],
]

/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let turn, winner, board

// For Player Names ability
let playerO, playerX

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square') // Selecting all the board's square's by class

const messageEl = document.querySelector('#message')
const gameBoard = document.querySelector('.board')

const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
gameBoard.addEventListener('click', playerChoice)
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  turn = 1
  winner = null
  board = [
    null, null, null,
    null, null, null,
    null, null, null]
  playerX = "Player X"
  playerO = "Player O"
  render()
}

function playerChoice(evt) {
  console.log("playerChoice triggered")
  let idx = parseInt(evt.target.id.slice(2))

  if (board[idx] === null) {
    board[idx] = turn > 0 ? 1 : -1
    console.log(board[idx])
    console.log(board)

    // Turn over
    turn *= -1

    // Only need to render when there is a change.
    render()
  }
}

function render() {
  if (winner === null) {
    // Render Message for player's turn
    renderMessage(`${(turn > 0 ? playerX : playerO)}'s turn`)

    squareEls.forEach(function (e, idx) {
      if (board[idx] === 1) {
        e.textContent = "x"
      } else if (board[idx] === -1) {
        e.textContent = "o"
      } else if (board[idx] === null) {
        e.textContent = ""
        console.log(`Null: ${console.dir(board[idx])}`)
        console.log(`Element: ${console.dir(e)}`)
      } else {
        renderMessage(`Board square ${idx} is set to ${board[idx]}`)
      }
      console.log(`Index: ${idx}`)
      console.log(e)
    })
  } else {
    renderWin()
  }
}

function renderWin() {
  // FIXME
  // Display Replay button, maybe have it come after
  // h1 tic tac toe
  if (winner === 0) {
    renderMessage("It was a tie!")
  } else {
    renderMessage(`${(winner > 0 ? playerX : playerO)} won`)
  }
}

function renderMessage(msg) {
  messageEl.textContent = msg
}

function checkForWinner() {

  // new array copy of board to see if one player has one and then another array to see if other has one
  // should be able to compare this array to each in the winningCombos array to see if any match

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

  // Check if board is filled
  if (board.every(e => e !== null)) {
    

  }


}

function equalArrayCompare(a, b) {
  if (a.length !== b.length) {
    return false
  } else  {
    a.forEach(function(el, idx) {
      console.log(`el: ${el}`)
      console.log(`b[idx] ${b[idx]}`)
      if (el != b[idx]) {
        return false
      }
    })
  }
  return true
}


let testArray = [
  null, null, null,
  null, 1, null,
  null, null, null]
console.log(`Comparing Array: ${equalArrayCompare(testArray,board)}`)