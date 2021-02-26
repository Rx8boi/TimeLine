//react-redux, redux, thunk libraries

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//need to create a store for redux => createStore 1. reducer 2. dev tools 