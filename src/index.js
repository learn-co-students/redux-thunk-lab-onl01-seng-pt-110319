import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer.js'


const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

// We pass this reducer into createStore, 
// assigning the return value to store. Then, 
// we'll wrap the App component in Provider and
//  pass store to it: