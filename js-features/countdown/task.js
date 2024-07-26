let startTimer = document.getElementById('timer');
const intervalId = setInterval(timer, 1000);

function timer() {
    let timerVal = startTimer.textContent - 1;
    if(timerVal < 10) {
        startTimer.textContent = timerVal
    } else {
        startTimer.textContent = timerVal
    }
    if(timerVal === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!')
    }
}

