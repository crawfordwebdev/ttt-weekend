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

  if (board[idx] === null) {

    board[idx] = turn // not necessary > 0 ? 1 : -1

    winner = getWinner()
    // Turn over
    turn *= -1

    // Only need to render when there is a change.
    render()
  }
}

function render() {
  // FIX Render method here so it doesn't check winner right away?
  
  if (winner === null) {
    // Render Message for player's turn

    squareEls.forEach(function (e, idx) {
      if (board[idx] === 1) {
        e.textContent = "x"
      } else if (board[idx] === -1) {
        e.textContent = "o"
      } else if (board[idx] === null) {
        e.textContent = ""
        // Showing up as undefined
        // console.log(`Null: ${console.dir(board[idx])}`)
        // console.log(`Element: ${console.log(e.textContent)}`)
      } else {
        renderMessage(`Board square ${idx} is set to ${board[idx]}`)
      }
    })
  } else {
    renderWin()
  }
}

function renderWin() {
  console.log(`Render Win...Winner is ${winner}`)
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

function getWinner() {
  // Loop through each of the winning combination arrays defined in the winningComboss array. Total up the three board positions using the three indexes in the current combo. Convert the total to an absolute value (convert any negative total to positive). If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

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


  return null

    // if (isBoardFull) {
  //   return 0
  // }

  // for (let combo of winningCombos) {
  //   let comboTotal = 0
  //   combo.forEach(num => {
  //     console.log(`Current Combo Num: ${num}`)
  //     console.log(`board num: ${board[num]}`)
  //     comboTotal += board[num]
  //     console.log(board[num])
  //     console.log(comboTotal)
  //   })
  //   console.log(`comboTotal: ${comboTotal}`)
  //   //need to return who won if any
  //   if (Math.abs(comboTotal) === 3) {
  //     return comboTotal > 0 ? 1 : -1
  //   }
  // }
  // // check for tie
  // if (winner === null) {
  //   winner = isBoardFull() ? 0 : null

  //   // winner = board.every(square => square !== null) ? 0 : null


  //   // let temp
  //   // temp  = board.every(function(square) {
  //   //   return square !== null
  //   // })
  //   // if (temp) {
  //   //   winner = 0 // This is a tie
  //   // } else {
  //   //   winner = null
  //   // }

}

function isBoardFull() {
  board.forEach(function (square) {
    if (square === null) {
      return false
    }
  })
  return true
}