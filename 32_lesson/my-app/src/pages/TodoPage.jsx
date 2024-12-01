import React, { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../services/TodoService';
import Header from '../components/Header'
import Footer from '../components/Footer'
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

import style from '../css/TodoPage.module.css'

export default function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            setError('Ошибка при загрузке задач.');
            console.error('Ошибка при загрузке задач:', error);
        }
    };

    const handleCreateTask = async () => {
        if (newTask.trim()) {
            try {
                await createTask(newTask, false);
                setNewTask('');
                fetchTasks();
            } catch (error) {
                setError('Ошибка при создании задачи.');
                console.error('Ошибка при создании задачи:', error);
            }
        }
    };

    const handleUpdateTask = async (id, task, completed) => {
        try {
            await updateTask(id, task, !completed);
            fetchTasks();
        } catch (error) {
            setError('Ошибка при обновлении задачи.');
            console.error('Ошибка при обновлении задачи:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            setError('Ошибка при удалении задачи.');
            console.error('Ошибка при удалении задачи:', error);
        }
    };

    return (
        <div className="page">
            <Header />
            <div className={style.container}>
                <div className={style.todo}>
                    <h1>Todo List Manager</h1>
                    {error && <div className="error">{error}</div>}
                    <TodoInput
                        newTask={newTask}
                        setNewTask={setNewTask}
                        onCreateTask={handleCreateTask}
                    />
                    <ul>
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <TodoItem
                                    key={task.id}
                                    task={task}
                                    onUpdateTask={handleUpdateTask}
                                    onDeleteTask={handleDeleteTask}
                                />
                            ))
                        ) : (
                            <p>Нет задач</p>
                        )}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
