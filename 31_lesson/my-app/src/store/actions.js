export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo });
export const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: id });
export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", payload: id });
export const loadTodosSuccess = (todos) => ({ type: "LOAD_TODOS_SUCCESS", payload: todos });
