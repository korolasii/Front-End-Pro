import React from 'react';
import { useSelector } from 'react-redux';
import style from '../css/ResponseDisplay.module.css';

const ResponseDisplay = () => {
    const { loading, data, error } = useSelector((state) => state.SWAPI);

    return (
        <div className={style.container}>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <pre className={style.response}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default ResponseDisplay;
