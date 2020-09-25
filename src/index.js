import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createstore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import catsReducer from '../reducers/CatsReducer'
import thunk from "redux-thunk";


let store = createstore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
