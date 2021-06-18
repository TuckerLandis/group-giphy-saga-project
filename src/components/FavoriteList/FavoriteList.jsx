import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";

function FavoriteList() {
  const dispatch = useDispatch();
  const favoritesList = useSelector((store) => store.favoritesList);
  
  console.log(favoritesList)
  return (
    <>
      <h3>In FavoriteList</h3>
      {/* // Map into FavoriteItem here */}
      {favoritesList.map((imageData, index) => {
        <FavoriteItem key={index} imageData={imageData} />;
      })}
    </>
  );
}

export default FavoriteList;
