import {createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import createRootReducer from "./rootReducer"

const middleware = [thunk]
const initialState = {}


const composedEnch = compose(applyMiddleware(...middleware))

const store = createStore(createRootReducer(), initialState, composedEnch)