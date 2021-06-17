import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";


/***** REDUCERS ******/

const searchResults = (state = [], action) => {
    switch(action.type) {
        case "SET_SEARCH_IMAGES":
            return action.payload
        default:
            return state;
    }
    return state;

}
const favoritesList = (state = [], action) => {
    

    return state;
    
}
const categories = (state = [], action) => {

    return state;

}

/***** SAGA WORKERS *****/

function* fetchResults (action) {
    try {
        yield axios.get('/api/category/search', {
            params: {
                searchTag: action.payload
            }
        })
        console.log('fetching search results', response);
        yield put({
            type: 'SET_SEARCH_IMAGES',
            payload: response.data
        })
    } catch (error) {
        console.error('error with Results GET request', error);
    } 
    
}

// function* fetchFavorites ()


function* watcherSaga () {
// for every type: 'FETCH_RESULTS' ->> fetchResults (generator func)' 
    yield takeEvery('FETCH_RESULTS', fetchResults);
    // looks for client GET requests on the favorites view
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    // looks for client POST requests when adding an image to favorites
    yield takeEvery('POST_FAVORITE', postFavorite);
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
