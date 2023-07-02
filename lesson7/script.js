// פונקציה הבודקת בהפעל האתר האם היוזר מחובר 
function loginStatus() {
    fetch("https://api.shipap.co.il/login", {
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
    })
    .then(res => res.json())
    .then(data => {
        if (data.status == 'success') {
            handelUserData(data.user);
        } else {
            handelUserData();
        }
    });
}

// פונקציה של התחברות יוזר לשרת
function login() {
    const obj = {
        userName: document.querySelector('#userName').value,
        password: document.querySelector('input[type=password]').value,
    };

    // שליחה לשרת
    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json', // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
    // קבלה מהשרת וטיפול בנתונים
    .then(res => res.json())
    // התוכן שהתקבל מהפונקציה הקודמת
    .then(data => {
        if (data.status == 'success') {
            handelUserData(data.user);
        } else {
            handelUserData();
            alert(data.message);
        }
    });
}

function handelUserData(user = null) {
    const divLogin = document.querySelector(".login");
    const divUser = document.querySelector(".user");

    if (user) {
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.innerHTML = `${user.fullName} מחובר!`;
    } else {
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
    }
}