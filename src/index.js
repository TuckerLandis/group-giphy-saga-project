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
    
    return state;

}
const favoritesList = (state = [], action) => {
    

    return state;
    
}
const categories = (state = [], action) => {

    return state;

}

function* setResults () {

    //yield axios.get('')
}


function* watcherSaga () {
// for every type: 'SEARCH_GIFS' ->> setResults (generator func)' 


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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
