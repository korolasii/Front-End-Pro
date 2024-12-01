import React from 'react';
import style from '../css/TodoInput.module.css'

const TodoInput = ({ newTask, setNewTask, onCreateTask }) => {
    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Введите задачу" 
                className={style.input}
            />
            <button onClick={onCreateTask} className={style.btn}>Добавить</button>
        </div>
    );
};

export default TodoInput;
