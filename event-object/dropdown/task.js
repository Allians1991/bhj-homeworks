// Удаляет у всех списков dropdown__list_active при наличии
function closeMenuList() {
    const dropdownList = document.querySelectorAll('.dropdown__list');
    dropdownList.forEach(list => {
        if(list.classList.contains('dropdown__list_active')) {
            list.classList.remove('dropdown__list_active');
        }
    })
}

// Устанавливаем новое значение в элемент с классом *dropdown__value*
function innerTextLink(list, links, btn) {
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            list.classList.remove('dropdown__list_active');
            btn.textContent = e.target.innerHTML
        })
    });
}

// Открытие закрытие списка
document.addEventListener('click', e => {
    e.preventDefault(); 

    if(!e.target.classList.contains('dropdown__value')) {
        closeMenuList();
    } else {
        closeMenuList();
        const btn = e.target;
        const listMenu = btn.parentElement.querySelector('.dropdown__list');
        const menuLinks = listMenu.querySelectorAll('.dropdown__link');
        listMenu.classList.add('dropdown__list_active');
        innerTextLink(listMenu, menuLinks, btn);
    }
})


