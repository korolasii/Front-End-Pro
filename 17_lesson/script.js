let todoInput = document.getElementById('todo-input');
let todoForm = document.getElementById('todo-form');
let todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function displayTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.textContent = todo.completed ? 'Невиконано' : 'Виконано';
        if (todo.completed) {
            completeButton.classList.add('completed');
        }

        completeButton.addEventListener('click', () => toggleComplete(index));

        const taskText = document.createElement('span');
        taskText.textContent = todo.text;

        if (todo.completed) {
            taskText.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', () => deleteTodo(index));
        
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTodoText = todoInput.value.trim();
    if (newTodoText !== '') {
        todos.push({ text: newTodoText, completed: false });
        todoInput.value = '';
        saveTodos();
        displayTodos();
    }
});

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    displayTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    displayTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

displayTodos();
