import React from 'react';

const BaseUrlField = () => (
    <div style={{ marginBottom: '10px' }}>
        <label>Base URL: </label>
        <input
            type="text"
            value="http://swapi.py4e.com/api/"
            readOnly
            style={{
                padding: '10px',
                width: '100%',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }}
        />
    </div>
);

export default BaseUrlField;
