import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../store/apiActions'; // Import actions

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(fetchDataStart());
    dispatch(fetchDataSuccess(null));
    dispatch(fetchDataError(null));
  };

  return (
    <button
      onClick={handleClear}
      style={{
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
      }}
    >
      Clear
    </button>
    );
};

export default ClearButton;
