import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import SWAPIReducer from './SWAPIReducer';

const store = configureStore({
    reducer: {
        SWAPI: SWAPIReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
