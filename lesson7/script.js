function loginStatus() {
    fetch("https://api.shipap.co.il/login")
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                handelUserData(data.user);
            } else {
                handelUserData();
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