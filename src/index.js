import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const understandingReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'UNDERSTANDING') {
        return [...state, action.payload];
    }
    return state;
};

const feelingReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'FEELING') {
        return [...state, action.payload];
    }
    return state;
};

const supportReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'SUPPORT') {
        return [...state, action.payload];
    }
    return state;
};

const commentReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'COMMENT') {
        return [...state, action.payload];
    }
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),  
    applyMiddleware(logger)  
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
