import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// components
import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";

function FavoriteList() {
  const dispatch = useDispatch();
  const favoritesList = useSelector((store) => store.favoritesList);
  const categories = useSelector((store) => store.categories)

  const getFavs = () => {
    dispatch({ type: "FETCH_FAVORITES" });
    dispatch({ type: 'FETCH_CATEGORIES'});
  };

  useEffect(() => {
    getFavs();
  }, []);
  console.log(favoritesList);
  // console.log(categories);
  return (
    <>
      {/* // Map into FavoriteItem here */}
      {favoritesList.map((imageData, index) => (
        <FavoriteItem key={index} imageData={imageData} />
      ))}
    </>
  );
}

export default FavoriteList;
