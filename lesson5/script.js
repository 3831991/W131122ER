const height = 30
const width = 30;

const snake = [6, 5, 4, 3, 2, 1, 0];
let head = snake[0];

const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
        div.innerHTML = i;
    }

    color();
}

function color() {
    const divs = board.querySelectorAll("div");

    divs.forEach(el => el.classList.remove('snake', 'head'));

    snake.forEach(num => divs[num].classList.add('snake'));

    divs[head].classList.add('head');
}

function move(dir) {
    if (dir === 'up') {

    } else if (dir === 'right') {

    } else if (dir === 'down') {

    } else if (dir === 'left') {
        head++;
    }

    snake.unshift(head);
    snake.pop();

    color();
}

window.addEventListener("keydown", ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
    }
});