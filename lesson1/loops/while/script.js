const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

const sum = () => {
    let i = 0;
    let total = 0;

    while (i < grades.length) {
        total += grades[i];

        i++;
    }

    document.querySelector("#output1").innerHTML = total;
}

const showAsterisks = () => {
    let i = 0;
    const elem = document.querySelector("#output2");
    elem.innerHTML = "";

    while (i < 10) {
        elem.innerHTML += "*<br>";

        i++;
    }
}

const showNumbers = () => {
    let i = 1;
    const elem = document.querySelector("#output3");
    elem.innerHTML = "";

    while (i <= 15) {
        elem.innerHTML += `${i++}<br>`;
    }
}

const showRange = () => {
    let i = 10;
    const arr = [];

    while (i <= 30) {
        arr.push(i++);
    }

    document.querySelector("#output4").innerHTML = arr.join();
}

const showSizeNumber = () => {
    let i = 1;
    const elem = document.querySelector("#output5");
    elem.innerHTML = "";

    while (i <= 100) {
        const span = document.createElement('span');
        span.innerHTML = i + ', ';
        span.style.fontSize = `${i}px`;
        span.style.color = `hsl(${i * 20} 100% 44%)`;

        elem.appendChild(span);

        i++;
    }
}