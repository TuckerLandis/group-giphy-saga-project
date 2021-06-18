import React from 'react';
import { Route, HashRouter as Router } from "react-router-dom";

// components
import Header from '../Header/Header.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import ImageList from '../ImageList/ImageList.jsx';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';

//style
import './App.css'

function App(props) {
  return (
    <Router>
    <div>
      <Header />
      <Route path="/" exact>
        <SearchForm />
        <ImageList />
      </Route>
      <Route path="/favorite">
        <FavoriteList />
      </Route>
    </div>
    </Router>
  );
}

export default App;
