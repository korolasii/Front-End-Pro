import './Nav.css';

function Nav({ handleNavClick }) {
    return (
        <div className="nav">
            {['People', 'Planets', 'Starships'].map((category) => (
                <div key={category} className="navContent" onClick={() => handleNavClick(category)}>
                {category}
                </div>
            ))}
        </div>
    );
}

export default Nav;
