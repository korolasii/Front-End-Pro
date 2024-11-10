import React, { useState } from 'react';
import AddTodoForm from '../Component/AddTodoForm';
import TodoListDisplay from '../Component/TodoListDisplay';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (task) => {
        setTodos([...todos, task]);
    };

    return (
        <div>
            <h1>TODO List</h1>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <TodoListDisplay todos={todos} />
        </div>
    );
};

export default TodoList;
