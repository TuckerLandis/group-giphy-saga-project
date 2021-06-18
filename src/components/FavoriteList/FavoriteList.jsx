import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// components
import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";

function FavoriteList() {
  const dispatch = useDispatch();
  const favoritesList = useSelector((store) => store.favoritesList);

  const getFavs = () => {
    dispatch({ type: "FETCH_FAVORITES" });
  };

  useEffect(() => {
    getFavs();
  }, []);
  console.log(favoritesList);
  return (
    <>
      <h3>In FavoriteList</h3>
      {/* // Map into FavoriteItem here */}
      {favoritesList.map((imageData, index) => (
        <FavoriteItem key={index} imageData={imageData} />
      ))}
    </>
  );
}

export default FavoriteList;
