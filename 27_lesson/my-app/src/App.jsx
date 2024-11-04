// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import './css/App.css'
import Page404 from './pages/Page404';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
