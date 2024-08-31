const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskAddBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


taskForm.addEventListener('submit', (e) => {
    addTask(e)
})

let id = 0;
// Add Task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value.trim()) {
        
        id++;
        taskList.insertAdjacentHTML(
            'beforeend',
            `<div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove" id="remove-${id}">&times;</a>
            </div>`);
        taskForm.reset();
    }
    // removeTask();
    document.getElementById(`remove-${id}`).addEventListener('click', e => {
        e.preventDefault();
        e.target.closest('.task').remove();
        id--;
    })
}

// Delete Task
function removeTask() {

    
    // const removeTackBtns = taskList.querySelectorAll('.task__remove');
    // removeTackBtns.forEach(removeBtn => {
    //     removeBtn.addEventListener('click', e => {
    //         e.preventDefault();
    //         removeBtn.parentElement.remove();
    //     })
    // });
}









