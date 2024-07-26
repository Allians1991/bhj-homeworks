const holes = document.querySelectorAll('.hole');
const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');


document.addEventListener('click', element => {
    element.preventDefault();
    if(element.target.classList.contains('hole_has-mole')) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }
    if(dead.textContent == 20) {
        alert('Победа!!!');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if(lost.textContent == 5) {
        alert('Проигрыш :-пше(')
        dead.textContent = 0;
        lost.textContent = 0;
    }
})
