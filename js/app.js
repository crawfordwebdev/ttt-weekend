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

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let turn, winner, board

// For Player Names ability
let playerO, playerX

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square') // Selecting all the board's square's by class
console.log(typeof squareEls)

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
  let idx = parseInt(evt.target.id.slice(2))

  if (board[idx] === null && winner === null) {

    board[idx] = turn 

    winner = getWinner()
    // Turn over
    turn *= -1

    // Only need to render when there is a change.
    render()
  }
}

function render() {
  // Always Render the Board
  squareEls.forEach(function (e, idx) {
    if (board[idx] === 1) {
      e.textContent = "x"
    } else if (board[idx] === -1) {
      e.textContent = "o"
    } else if (board[idx] === null) {
      e.textContent = ""
    }
  })

  // Check if game ended
  if (winner === null) {
    renderMessage(`${(turn > 0 ? playerX : playerO)}'s turn`)
  } else if (winner === 0) {
    renderMessage("It was a tie!")
  } else {
    renderMessage(`${(winner > 0 ? playerX : playerO)} won`)
  }
}

function renderMessage(msg) {
  messageEl.textContent = msg
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] +
      board[winningCombos[i][2]]
    console.log(sum)

    if (sum === 3) {
      return 1
    } else if (sum === -3) {
      return -1
    }
  }
  // Check if board does not include any nulls - board is full
  if (!board.includes(null)) {
    return 0
  } else {
    return null
  }
}