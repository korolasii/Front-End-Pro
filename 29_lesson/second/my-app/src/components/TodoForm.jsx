import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export default function TodoForm() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Додати завдання..."
            required
        />
        <button type="submit">Додати</button>
        </form>
    );
}
