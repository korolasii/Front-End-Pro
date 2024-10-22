import React, { useState } from 'react';
import Nav from './Nav';
import List from './List';
import ButtonAdd from './ButtonAdd';
import './App.css';
import starWarsImage from './starWars.png';

const mockData = {
    'People': [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' },
        { name: 'Leia Organa' }
    ],
    'Planets': [
        { name: 'Tatooine' },
        { name: 'Alderaan' },
        { name: 'Endor' }
    ],
    'Starships': [
        { name: 'Millennium Falcon' },
        { name: 'X-Wing' },
        { name: 'TIE Fighter' }
    ]
};

// const urlDefault = {
//     'People': 'https://swapi.dev/api/people',
//     'Planets': 'https://swapi.dev/api/planets',
//     'Starships': 'https://swapi.dev/api/starships'
// };

function App() {
    // const [category, setCategory] = useState('People');
    const [listResult, setListResult] = useState(mockData['People']);

    const handleNavClick = (newCategory) => {
        // setCategory(newCategory);
        setListResult(mockData[newCategory]);
    };

    return (
        <div className="page">
            <div className="preview">
                <img src={starWarsImage} alt="Star Wars" />
            </div>
            <div className="container">
                <Nav handleNavClick={handleNavClick} />
                <List listResult={listResult} />
                <ButtonAdd />
            </div>
        </div>
    );
}

export default App;
