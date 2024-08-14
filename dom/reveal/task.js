const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    reveal.forEach(element => {
        if(element.getBoundingClientRect().top < 400) {
            element.classList.add('reveal_active');
        }
    });
})