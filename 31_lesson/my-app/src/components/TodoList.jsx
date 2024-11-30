import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../store/actions";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const [newTask, setNewTask] = useState("");

    const handleAdd = () => {
        if (newTask.trim()) {
            dispatch(addTodo({ id: Date.now(), text: newTask, completed: false }));
            setNewTask("");
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
