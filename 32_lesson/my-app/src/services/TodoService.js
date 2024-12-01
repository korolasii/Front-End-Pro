const API_URL = 'http://localhost:3000/api/task/';

export const getTasks = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке задач');
    }
    return response.json();
};

export const createTask = async (task, completed) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, completed }),
    });
    if (!response.ok) {
        throw new Error('Ошибка при создании задачи');
    }
    return response.json();
};

export const updateTask = async (id, task, completed) => {
    const response = await fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, completed }),
    });
    if (!response.ok) {
        throw new Error('Ошибка при обновлении задачи');
    }
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Ошибка при удалении задачи');
    }
    return response.json();
};
