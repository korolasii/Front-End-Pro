import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/store';
import './Counter.css';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">Value: {count}</h1>
      <div className="button-container">
        <button
          onClick={() => dispatch(increment())}
          className="counter-button"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="counter-button"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
