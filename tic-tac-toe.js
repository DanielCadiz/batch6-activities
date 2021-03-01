const xclass = 'x'
const oclass = 'o'
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const boxElements = document.querySelectorAll('.box')
const board = document.getElementById('board')
const winningMessage = document.getElementById('message-box')
const restart = document.getElementById('restart')
const winMessage = document.getElementById('message')
let whoseTurn
startGame()

restart.addEventListener('click', startGame)

function startGame() {
    whoseTurn = false
    boxElements.forEach(box => {
        box.classList.remove(xclass)
        box.classList.remove(oclass)
        box.removeEventListener('click', handleClick)
        box.addEventListener('click', handleClick, {once: true})
    })
    hoverBoard()
    winningMessage.classList.remove('show')
}

function handleClick(e) {
    const box = e.target
    const currentClass = whoseTurn ? oclass : xclass
    placeMark(box, currentClass)
    if (checkWin(currentClass)){
        console.log('winner')
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurn()
        hoverBoard()
    }
}

function endGame(draw) {
    if (draw) {
        winMessage.innerText = 'Draw!'
    } else {
        winMessage.innerText = `Winner: ${whoseTurn ? "O" : "X"}`
    }
    winningMessage.classList.add('show')
}

function isDraw() {
    return [...boxElements].every(box => {
        return box.classList.contains(xclass) || box.classList.contains(oclass)
    })
}

function placeMark(box, currentClass) {
    box.classList.add(currentClass)
}

function swapTurn() {
    whoseTurn = !whoseTurn
}

function hoverBoard() {
    board.classList.remove(xclass)
    board.classList.remove(oclass)
    if (whoseTurn) {
        board.classList.add(oclass)
    } else {
        board.classList.add(xclass)
    }
}

function checkWin(currentClass) {
    return win.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentClass)
        })
    })
}