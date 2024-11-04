import React, { useState, useEffect } from 'react';
import '../css/Theme.css'

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return <button className='themeButton' onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'} Mode</button>;
}


