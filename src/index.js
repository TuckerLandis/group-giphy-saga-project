import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const searchResults = (state = [], action) => {
    

    
}
const favoritesList = (state = [], action) => {
    

    
}
const categories = (state = [], action) => {


}


function* watcherSaga () {

}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
combineReducers({
    searchResults,
    favoritesList,
    categories
}),
applyMiddleware(sagaMiddleware, logger)
)



sagaMiddleware.run(watcherSaga); 

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
