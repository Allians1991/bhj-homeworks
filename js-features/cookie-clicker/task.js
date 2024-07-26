const cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
const min = 200;
const max = 250;


cookie.onclick = function() {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    clickerCounter.textContent++;
    cookie.style.width = `${randomNum}px`;
}

