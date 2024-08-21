const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskAddBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
let tasks = [];




renderTasks();

taskForm.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addTask(e);
    }
})

taskForm.addEventListener('submit', (e) => {
    addTask(e)
})

function addTask(e) {
    e.preventDefault();
    if (taskInput.value != '') {
        tasks.unshift({ task: taskInput.value });
        taskForm.reset();
        renderTasks();
        removeTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskEl = document.createElement('div');
        taskEl.classList.add('task');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.innerText = task.task;
        const taskRemoveBtn = document.createElement('a');
        taskRemoveBtn.classList.add('task__remove');
        taskRemoveBtn.innerHTML = '&times';
        taskEl.appendChild(taskTitle);
        taskEl.appendChild(taskRemoveBtn);
        taskList.appendChild(taskEl);
    });
}

function removeTasks() {
    const removeTackBtns = taskList.querySelectorAll('.task__remove');
    
    removeTackBtns.forEach((btn, index) => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            tasks.splice(index , 1);
            btn.parentElement.remove();
        })
    });
}

removeTasks();








