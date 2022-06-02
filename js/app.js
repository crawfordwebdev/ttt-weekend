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


/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let turn, winner, board

// For Player Names ability
let playerO, playerX

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square') // Selecting all the board's square's by class

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
  console.log("playerChoice triggered")
  let idx = parseInt(evt.target.id.slice(2))
  // is it blank?
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
        // e.textContent = ""
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