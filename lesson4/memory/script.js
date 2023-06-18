const amount = 15;
const numbers = [];
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
    numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
    const rand = Math.floor(Math.random() * numbers.length);
    
    const div = document.createElement("div");
    div.innerHTML = numbers[rand];
    board.appendChild(div);

    numbers.splice(rand, 1);
}