import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../store/todoSlice';

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [currentText, setCurrentText] = useState('');

    const handleEdit = (id, text) => {
        setIsEditing(id);
        setCurrentText(text);
    };

    const handleSave = (id) => {
        dispatch(editTodo({ id, text: currentText }));
        setIsEditing(null);
        setCurrentText('');
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {isEditing === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={currentText}
                                onChange={(e) => setCurrentText(e.target.value)}
                            />
                            <button onClick={() => handleSave(todo.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            {todo.text}
                            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
