import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

function ImageItem({ imageData }) {
  const dispatch = useDispatch();
  // save image URL
  const imageUrl = imageData.images.original.url;

  return (
    <div className="card">
      <div className="image-div">
        <img src={imageUrl} alt="searched GIF" width="300px"></img>
      </div>
      <div className="button-div">
        <Button color="primary" variant="contained">
          Add to Favorites
        </Button>
      </div>
    </div>
  );
}

export default ImageItem;

// needs button to favorite,
