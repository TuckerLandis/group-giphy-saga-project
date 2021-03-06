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
  // console.log(categories);
  return (
    <div className="images-display">
      {/* // Map into FavoriteItem here */}
      {favoritesList.map((imageData, index) => (
        <FavoriteItem key={index} imageData={imageData} />
      ))}
    </div>
  );
}

export default FavoriteList;
