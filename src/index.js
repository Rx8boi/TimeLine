//react-redux, redux, thunk libraries

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'; //window._Redux_devtools replacement
import reactDom from 'react-dom'

import App from './components/App'

//need to create a store for redux => createStore 1. reducer 2. dev tools 

const store = createStore{
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
}

reactDom.render{
    <Provider store={store}>
        <App />

    </Provider>
    document.getElementById('root')
}