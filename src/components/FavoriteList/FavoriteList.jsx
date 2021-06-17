import { useDispatch, useSelector } from "react-redux";

// components
// import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";

function FavoriteList() {
  const dispatch = useDispatch();
  const favoritesList = useSelector((store) => store.favoritesList);

  // Dispatch to get our Favorite Images from the redux store
  const getFavoriteImages = () => {
    dispatch({ type: "FETCH_FAVORITES" });
  };
  // use effect for fetch favorites - from DB
  useEffect(() => {
    getFavoriteImages();
  }, []);

  return (
    <>
      <h3>In FavoriteList</h3>
      {/* // Map into FavoriteItem here */}
      {/* {favoritesList.map((images, i) => {
        <FavoriteItem key={images.id} images={images} />;
      })} */}
    </>
  );
}

export default FavoriteList;
