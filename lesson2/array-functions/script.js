const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

document.querySelector("#numbers div").innerHTML = numbers.join(", ");

// {
//     "id": 9124,
//     "firstName": "נתנאל",
//     "lastName": "אדלר",
//     "phone": "059-6506877",
//     "email": "abc776@gmail.com",
//     "birthday": "2004-04-14",
//     "city": "חיפה"
// },

// תרגיל 1
document.querySelector("#task1 p").innerHTML = students.map(s => `${s.firstName} ${s.lastName}`).join(", ");