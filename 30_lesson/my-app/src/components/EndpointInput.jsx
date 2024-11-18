import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiData } from '../store/apiActions';
import ClearButton from './ClearButton'; // Импортируем новый компонент

const EndpointInput = () => {
    const [endpoint, setEndpoint] = React.useState('');
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
        <div style={{ marginBottom: '10px' }}>
            <label>Endpoint: </label>
            <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="Наприклад, people/1/"
                style={{
                    width: '100%',
                    padding: '10px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
            />
            <button
                onClick={handleFetch}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                }}
            >
                Get Data
            </button>
            <ClearButton setEndpoint={setEndpoint} /> {/* Добавляем кнопку очистки */}
        </div>
    );
};

export default EndpointInput;
