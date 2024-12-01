import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiData } from '../store/SWAPIActions';
import style from '../css/EndpointInput.module.css';

const EndpointInput = () => {
  const [endpoint, setEndpoint] = useState('');
  const dispatch = useDispatch();
  const baseUrl = 'http://swapi.py4e.com/api/';

  const handleFetch = () => {
    if (!endpoint) {
      alert('Будь ласка, введіть частину запиту!');
      return;
    }
    dispatch(fetchApiData(baseUrl + endpoint));
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Наприклад, people/1/"
        className={style.input}
      />
      <button onClick={handleFetch} className={style.btn}>
        Get Data
      </button>
    </div>
  );
};

export default EndpointInput;
