import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../store/SWAPIActions'; 
import style from '../css/ClearButton.module.css';

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(fetchDataStart());
    dispatch(fetchDataSuccess(null));
    dispatch(fetchDataError(null));
  };

  return (
    <button onClick={handleClear} className={style.btn}>
      Clear
    </button>
  );
};

export default ClearButton;
