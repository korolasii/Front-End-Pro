import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiData } from '../store/apiActions';
import ClearButton from './ClearButton'; 

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
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Наприклад, people/1/"
        style={{
          padding: '10px',
          margin: '0px',
          border: '1px solid #ccc',
          borderRadius: '0px 5px 5px 0px',
          width: '200px',
        }}
      />
      <button
        onClick={handleFetch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '0px 5px 5px 0px',
          cursor: 'pointer',
        }}
      >
        Get Data
      </button>
    </div>
  );
};

export default EndpointInput;
