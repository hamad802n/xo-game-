/*-------------------------------- Constants --------------------------------*/
const winningCombos = [

      [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

    [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

    [0, 4, 8],
  [2, 4, 6]
  
]

/*---------------------------- Variables (state) ----------------------------*/
let board 
let turn
let winner
let tie 



/*------------------------ Cached Element References ------------------------*/
const sqauresEl = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

console.log(sqauresEl)
 console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
function init(){


board = ["","","","","","","","",""]
turn = 'X'
winner = false
tie = false
render()

}

function render () {
updateBoard()
updateMessage()
}

function updateBoard () {
for (let i =0 ; i < board.length; i++){
    sqauresEl[i].textContent = board[i]
}
}

function updateMessage() {

    if (!winner && !tie) {
        messageEl.textContent = 'o wins'
    }




    else if (!winner && tie) 
        
        {
        messageEl.textContent = "its a tie"
    }
    else {
        messageEl.textContent = 'x wins'
    }
}

function handleClick(event) {
    const sqaureIndex = Number(event.target.id)
if (board[sqaureIndex] === 'X' || board[sqaureIndex] === 'O' || winner === true) {

    return
}

placePiece(sqaureIndex)

checkForWinner()

checkForTie()
switchPlayerTurn()
render()

}
function placePiece(squareIndex) {

    board[squareIndex] = turn
}

function checkForWinner() {

    for (let combo of winningCombos)
        
  
   if (board[combo[0]] !== "") 
            
  if      
  
  (board[combo[0]] === board[combo[1]]



  ) 
  
  
                if (board[combo[0]] === board[combo[2]]) {
                    winner = true }
    






    
   }


function checkForTie() {

    if (winner === true) {
        return


 }

 tie = true

    for  (let cell of board) {
      
      
  if (cell === "") {
            tie = false
        }
    }
}

function switchPlayerTurn() {

    if (winner === true) {
        return
    }

    if (turn === 'X') {
                turn = 'O'
    }
        else {
     
        turn = 'X'
    }
}

/*----------------------------- Event Listeners -----------------------------*/

for (let oneSquare of sqauresEl){

    oneSquare.addEventListener('click',handleClick)
}

init()