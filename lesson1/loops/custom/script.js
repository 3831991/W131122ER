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
    for (let i = 0; i < 30; i++) {
        const div = document.createElement("div");
        div.style.height = "20px";
        div.style.width = "20px";
        div.style.backgroundColor = `hsl(${i * 5} 100% 44%)`;

    }
}