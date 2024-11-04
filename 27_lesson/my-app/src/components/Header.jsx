import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../css/Header.css'


export default function Header() {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <Link to="/">Головна</Link>
                <Link to="/contacts">Контакти</Link>
                <Link to="/about">Про нас</Link>
                <ThemeToggle />
            </nav>
        </header>
    );
}


