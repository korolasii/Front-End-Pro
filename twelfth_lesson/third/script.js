const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');


addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        taskList.appendChild(li);
        newTaskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});
