const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let obj = (JSON.parse(xhr.responseText)).response.Valute;
        loader.classList.remove('loader_active')
        for (key in obj) {
            items.insertAdjacentHTML('beforeend',
                `<div class="item">
                    <div class="item__code">${obj[key].CharCode}</div>
                    <div class="item__value">${obj[key].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>`
            )
        }

    }
})