let cities = [];
let students = [];

if (localStorage.cities) {
    cities = JSON.parse(localStorage.cities);
} else {
    fetch("./server/cities.json")
        .then(response => response.json())
        .then(data => {
            cities = data;
            localStorage.cities = JSON.stringify(cities);
        });
}
