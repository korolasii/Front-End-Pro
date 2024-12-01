import './App.css';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import SWAPI from './pages/SWAPI';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TodoList" element={<TodoPage />} />
          <Route path="/SWAPI" element={<SWAPI />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
