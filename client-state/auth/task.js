const form = document.getElementById('signin__form');
const logOutBtn = document.getElementById('logout__btn');

const id = localStorage.getItem('id');

if(id) {
    showWelcome(id);
    
}

form.addEventListener('submit' , e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        if(xhr.status != 400) {
            const responce = JSON.parse(xhr.response);
            if(responce.success) {
                showWelcome(responce.user_id);
                localStorage.setItem('id', responce.user_id); 
            } else {
                alert('Неверный логин/пароль')
            };
        }
    })
    
})

logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    logOut(id);
})

function showWelcome(id) {
    document.getElementById('signin').classList.remove('signin_active');
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('user_id').textContent = id;
}

function logOut() {
    document.getElementById('signin').classList.add('signin_active');
    document.getElementById('welcome').classList.remove('welcome_active');
    form.reset();
    localStorage.removeItem('id');
}

