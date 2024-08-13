const book = document.getElementById('book');
const controlLinks = document.querySelectorAll('.font-size');
const controlColorText = document.querySelectorAll('.book__control_color a');
const controlColorBackground = document.querySelectorAll('.book__control_background a');

// Переключение размера текста
controlLinks.forEach(bookControlLink => {
    bookControlLink.addEventListener('click', e => {
        e.preventDefault();
        removeActive(controlLinks, 'font-size', 'fs');
        bookControlLink.classList.add('font-size_active');
        const textSize = e.target.dataset.size;
        book.classList.add(`book_fs-${textSize}`);

    })
});

// Переключение цвета текста
controlColorText.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        removeActive(controlColorText, 'color', 'color');
        const textColor = link.dataset.textColor;
        book.classList.add(`book_color-${textColor}`)
        link.classList.add('color_active');
    })
});

// Переключение фона текста
controlColorBackground.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        removeActive(controlColorBackground, 'color', 'bg');
        const bgColor = link.dataset.bgColor;
        book.classList.add(`book_bg-${bgColor}`);
        link.classList.add('color_active');
    })
});


// Удаление классов
function removeActive(arr, activeClass, className) {
    // Удаление активного класса у всех элементов
    arr.forEach(link => {
        link.classList.remove(`${activeClass}_active`);
    })
    // Удаление предыдущего класса (цвет текста, цвет фона)
    const result = Array.from(book.classList).find(element => element.includes(className));
    book.classList.remove(result);
}

