import React from 'react';

const BaseUrlField = () => (
  <div>
    <label>URL: </label>
    <input
      type="text"
      value="http://swapi.py4e.com/api/"
      readOnly
      style={{
        userSelect: "none",
        padding: '10px',
        width: '200px',
        margin: '0',
        border: '1px solid #ccc',
        borderRadius: '5px 0px 0px 5px',
      }}
    />
  </div>
);

export default BaseUrlField;
