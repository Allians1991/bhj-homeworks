const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

let index = 0;

tabs.forEach((tab, idx) => {
   tab.addEventListener('click', e => {
    e.preventDefault();
    index = idx;
    removeActiveTab();
    removeActiveTabContent();
    addActive(index);
   }) 
});

// Удаляем класс tab_active у всех tab
function removeActiveTab() {
    tabs.forEach(tab => {
        tab.classList.remove('tab_active')
    })
}
// Удаляем класс tab__content_active у всех tab__content
function removeActiveTabContent() {
    tabsContent.forEach(tabContent => {
        tabContent.classList.remove('tab__content_active')
    })
}

// Показываем активный таб
function addActive(index) {
    tabs[index].classList.add('tab_active')
    tabsContent[index].classList.add('tab__content_active')
}

addActive(index);