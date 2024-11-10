import React, { useState, useEffect } from 'react';
import '../css/Home.css'

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const storedTodos = sessionStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = () => {
        if (newTodo.trim()) {
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            setNewTodo('');
            sessionStorage.setItem('todos', JSON.stringify(updatedTodos));
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        sessionStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div className='homeContainer'>
            <h1>TODO List</h1>
            <div className='formTodo'>
                <input className='inputTodo' 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="Введите задачу"
                />
                <button className='btnDelete' onClick={addTodo}>Add</button>
            </div>
            <ul className='ulTodo'>
                {todos.map((todo, index) => (
                    <li key={index} className='itemTodo'>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
