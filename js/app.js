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

let turn, winner, board

// For Player Names ability
let playerO, playerX

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board')
const messageEl = document.querySelector('#message')
const gameBoard = document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/
gameBoard.addEventListener('click', playerChoice)


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
  console.dir(evt.target)

  // let index = new RegExp('[0-9]', evt.target.id)
  // console.log(index)

  render()
}

function takeTurn(evt) {
  // is the square playable?
  // place correct icon based on choice
  // Was this a winning choice?

  // Render the board

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
        // e.textContent = " "
      } else {
        renderMessage(`Board square ${idx} is set to ${board[idx]}`)
      }
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
  // messageEl
  console.log(msg)
}