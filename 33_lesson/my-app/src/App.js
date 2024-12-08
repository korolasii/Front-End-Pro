import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    } else {
      alert('Поле не може бути порожнім');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Log todos whenever the state changes
  useEffect(() => {
    console.log(todos); // Logs the updated todos after each change
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>TODO</h1>
      <div>
        <input
          type="text"
          placeholder="Введіть завдання"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Додати</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
