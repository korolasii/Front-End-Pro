import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BaseUrlField from './components/BaseUrlField';
import EndpointInput from './components/EndpointInput';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>SWAPI Request with Redux-Thunk</h1>
        <BaseUrlField />
        <EndpointInput />
        <ResponseDisplay />
      </div>
    </Provider>
  );
};

export default App;
