const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskAddBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


taskForm.addEventListener('submit', addTask);

// Add Task
function addTask(e) {
    e.preventDefault();
    if (!taskInput.value.trim()) {
        return;
    }
    taskList.insertAdjacentHTML(
        'beforeend',
        `<div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    taskForm.reset();
}

document.addEventListener('click', e => {
    if(e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
})









