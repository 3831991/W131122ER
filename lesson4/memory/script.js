const amount = 15;
const numbers = [];
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
    numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
    // אינדקס רנדומלי מהמערך
    const rand = Math.floor(Math.random() * numbers.length);
    
    const div = document.createElement("div");
    div.innerHTML = `<span>${numbers[rand]}</span>`;
    board.appendChild(div);

    // בכדי שלא יהיו כפילויות, לאחר שהשתמשנו במיקום מסויים, הסרנו אותו מהמערך
    numbers.splice(rand, 1);

    div.addEventListener("click", ev => {
        if (board.querySelectorAll(".showing").length == 2) {
            return;
        }

        ev.target.classList.add("showing");
        check();
    });
}

function check() {
    const cards = board.querySelectorAll(".showing");

    if (cards.length == 2) {
        const first = cards[0];
        const last = cards[1];

        if (first.innerText == last.innerText) {
            // התאמה
        } else {
            setTimeout(() => {
                first.classList.remove("showing");
                last.classList.remove("showing");
            }, 1500);
        }
    }
}