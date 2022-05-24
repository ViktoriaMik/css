const board = document.getElementById('board')
const squares_number = 500


for (let i = 0; i < squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', (event) => {
        setColor(square, event.x, event.y)
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

function setColor(el, x, y) {
    el.style.backgroundColor = `rgb(${x},${y},${y})`

}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}
