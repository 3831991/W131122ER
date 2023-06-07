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