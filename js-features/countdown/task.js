let startTimer = document.getElementById('timer');
const intervalId = setInterval(timer, 1000);

function timer() {
    let timerVal = startTimer.innerHTML - 1;
    if(timerVal < 10) {
        startTimer.innerHTML = timerVal
    } else {
        startTimer.innerHTML = timerVal;
    }
    if(timerVal === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!')
    }
}

