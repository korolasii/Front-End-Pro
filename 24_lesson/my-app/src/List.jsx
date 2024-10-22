import DetailsWindow from './DetailsWindow';
import React, { useState } from 'react';
import './List.css';


function List({ listResult }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeDetailsWindow = () => {
        setSelectedItem(null);
    };

    return (
        <div className="content">
            <ol className="list">
                {listResult.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>{item.name}</li>
                ))}
            </ol>
            {selectedItem && <DetailsWindow item={selectedItem} onClose={closeDetailsWindow} />}
        </div>
    );
}

export default List;
