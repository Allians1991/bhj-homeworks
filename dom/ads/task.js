const rotatorCase = document.querySelectorAll('.rotator__case');

let idElement = 0;
let interval = 1000;

function randomText(rotator) {
    rotator.forEach(element => {
        element.classList.remove('rotator__case_active');
    });
    if (idElement != rotator.length - 1) {
        idElement += 1;
    } else {
        idElement = 0;
    }
    const colorText = rotator[idElement].getAttribute('data-color');

    interval = +rotator[idElement].getAttribute('data-speed');
    rotator[idElement].style.color = colorText;
    rotator[idElement].classList.add('rotator__case_active');
}

const qwe = setInterval(() => {
    randomText(rotatorCase);
}, interval);


