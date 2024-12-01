import React from 'react';
import style from '../css/BaseUrlField.module.css';

const BaseUrlField = () => (
  <div>
    <label>URL: </label>
    <input
      type="text"
      value="http://swapi.py4e.com/api/"
      readOnly
      className={style.input}
    />
  </div>
);

export default BaseUrlField;
