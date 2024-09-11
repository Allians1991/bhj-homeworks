
const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

getCookie('showModal');

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + "="));
    if(!cookie) {
        return;
    }

    if(cookie.substring(name.length + 1) != 'true') {
        return;
    }

    modal.classList.add('modal_active');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('showModal', 'false');
    })
};


function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}