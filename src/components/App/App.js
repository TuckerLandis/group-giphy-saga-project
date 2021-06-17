import React from 'react';

// components
import SearchForm from '../SearchForm/SearchForm.jsx';
import ImageList from '../ImageList/ImageList.jsx';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';

function App(props) {
  return (
    <div>
      {/* Route */}
      <h1>Giphy Search!</h1>
      <SearchForm />
      <ImageList />
      {/* Route */}
      {/* Route */}
      <FavoriteList />
      {/* Route */}
    </div>
  );
}

export default App;
