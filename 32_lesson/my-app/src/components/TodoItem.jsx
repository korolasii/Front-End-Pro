import React from 'react';

const TodoItem = ({ task, onUpdateTask, onDeleteTask }) => {
    if (!task) {
        return null;
    }

    return (
        <li>
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={() => onUpdateTask(task.id, task.task, task.completed)}
            >
                {task.task}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
        </li>
    );
};

export default TodoItem;
