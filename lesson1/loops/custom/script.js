const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

const sum = () => {
    // אופציה 1
    // let res = 0;
    
    // for (const g of grades) {
    //     res += g;
    // }

    // אופציה 2
    // let res = 0;

    // grades.forEach(g => res += g);

    const res = grades.reduce((res, g) => res += g, 0);
    document.querySelector("#output1").innerHTML = res;
}

const showAsterisks = () => {
    // const arr = [];

    // for (let i = 0; i < 10; i++) {
    //     arr.push("*");
    // }

    const arr = new Array(10).fill("*");
    document.querySelector("#output2").innerHTML = arr.join("<br>");
}

const avg = () => {
    const sum = grades.reduce((total, grade) => total += grade, 0);

    document.querySelector("#output6").innerHTML = Math.round(sum / grades.length);
}

const colors = () => {
    const elem = document.querySelector("#output7");
    elem.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.style.height = "20px";
        div.style.width = "20px";
        div.style.display = "inline-block";
        div.style.backgroundColor = `hsl(${i * 5} 100% 44%)`;

        elem.appendChild(div);
    }
}

const showSpecialAsterisks = () => {
    const elem = document.querySelector("#output8");
    elem.innerHTML = "";

    // for (let i = 1; i <= 10; i++) {
    //     for (let x = 0; x < i; x++) {
    //         elem.innerHTML += "*";
    //     }

    //     elem.innerHTML += "<br>";
    // }

    for (let i = 1; i <= 10; i++) {
        elem.innerHTML += new Array(i).fill("*").join("");
        elem.innerHTML += "<br>";
    }
}

const showSpecialAsterisks10 = () => {
    const elem = document.querySelector("#output9");
    elem.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        elem.innerHTML += new Array(10).fill("*").join("");
        elem.innerHTML += "<br>";
    }
}

const multiBoard = () => {
    
}