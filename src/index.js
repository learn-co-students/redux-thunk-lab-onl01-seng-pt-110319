import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createstore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import catsReducer from '../reducers/CatsReducer'


let store = createstore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
