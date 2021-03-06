import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

/***** REDUCERS ******/
const searchResults = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_IMAGES":
      return action.payload.data;
    default:
      return state;
  }
};
const favoritesList = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
const categories = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

/***** SAGA WORKERS *****/

function* fetchResults(action) {
  try {
    const response = yield axios.get("/api/category/search", {
      params: {
        searchTag: action.payload,
      },
    });
    yield console.log("fetching search results", response);
    yield put({
      type: "SET_SEARCH_IMAGES",
      payload: response.data,
    });
  } catch (error) {
    console.error("error with Results GET request", error);
  }
}

function* fetchFavorites() {
  try {
    const response = yield axios.get("/api/favorite");
    yield put({ type: "SET_FAVORITE_IMAGES", payload: response.data });
  } catch (error) {
    console.log(`We have a GET favorites error... ${error}`);
  }
}

function* postFavorite(action) {
  try {
    yield axios.post("/api/favorite", { url: action.payload });
    // could do a yield PUT here to set reducer state, but it's
    // probably unnecessary
  } catch (error) {
    console.log(`We have a POST favorites error... ${error}`);
  }
}

function* fetchCategories() {
  try {
    const response = yield axios.get("/api/category");
    yield put({ type: "SET_CATEGORIES", payload: response.data });
  } catch {
    console.log(`We have a GET categories error... ${error}`);
  }
}

function* removeFavorite(action) {

    try {
        yield axios.delete(`/api/favorite/${action.payload}`)
        yield put ({
            type: 'FETCH_FAVORITES'
        })
    } catch (error) {
        console.log('error when removing favorite..', error);
    }

}

function* updateFavoriteCategory(action) {
  const id = action.payload.id;
  const data = action.payload;
  try {
    yield axios.put(`/api/favorite/${id}`, data);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.log(`We have a PUT favorites error... ${error}`);
  }

}

function* watcherSaga() {
  // for every type: 'FETCH_RESULTS' ->> fetchResults (generator func)'
  yield takeEvery("FETCH_RESULTS", fetchResults);
  // looks for client GET requests on the favorites view
  yield takeEvery("FETCH_FAVORITES", fetchFavorites);
  // looks for client POST requests when adding an image to favorites
  yield takeEvery("POST_FAVORITE", postFavorite);
  // removes favorite from favorite table
  yield takeEvery("REMOVE_FAVORITE", removeFavorite);
  // looks for requests to GET all of the categories from the DB
  yield takeEvery("FETCH_CATEGORIES", fetchCategories);
  // Update the category for our Giphy Image
  yield takeEvery("UPDATE_FAVORITE_CATEGORY", updateFavoriteCategory);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    searchResults,
    favoritesList,
    categories,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
