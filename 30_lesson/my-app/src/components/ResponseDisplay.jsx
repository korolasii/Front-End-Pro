import React from 'react';
import { useSelector } from 'react-redux';

const ResponseDisplay = () => {
    const { loading, data, error } = useSelector((state) => state.api);

    return (
        <div style={{ marginTop: '20px' }}>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <pre
                    style={{
                        textAlign: 'left',
                        backgroundColor: '#f9f9f9',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        overflowX: 'auto',
                    }}
                >
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default ResponseDisplay;
