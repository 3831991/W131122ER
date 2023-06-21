const height = 30
const width = 30;

const snake = [6, 5, 4, 3, 2, 1, 0];
let head = snake[0];

let direction = 'left';
let interval;

const rightBoundaries = [];
const leftBoundaries = [];

// גבולות ימין
for (let i = 0; i < height; i++) {
    rightBoundaries.push(i * width - 1);
}

// גבולות שמאל
for (let i = 0; i < height; i++) {
    leftBoundaries.push(i * width);
}

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

    divs.forEach(el => el.classList.remove('snake', 'head', 'up', 'right', 'down', 'left'));

    snake.forEach(num => divs[num].classList.add('snake'));

    divs[head].classList.add('head', direction);
}

window.addEventListener("keydown", ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'Escape': clearInterval(interval); break;
    }
});

function move(dir) {
    const divs = board.querySelectorAll("div");

    if (dir == 'up') {
        if (direction == 'down') {
            return;
        }

        head -= width;

        if (!divs[head]) {
            alert("Game over");
            return;
        }
    } else if (dir == 'right') {
        if (direction == 'left') {
            return;
        }

        head--;

        if (rightBoundaries.includes(head)) {
            alert("Game over");
            return;
        }
    } else if (dir == 'down') {
        if (direction == 'up') {
            return;
        }

        head += width;

        if (!divs[head]) {
            alert("Game over");
            return;
        }
    } else if (dir == 'left') {
        if (direction == 'right') {
            return;
        }

        head++;

        if (leftBoundaries.includes(head)) {
            alert("Game over");
            return;
        }
    }

    direction = dir;
    snake.unshift(head);
    snake.pop();

    color();
    startAuto();
}

function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}