import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button'

function ImageItem( {imageData }) {
    const dispatch = useDispatch();
    // save image URL
    const imageUrl = imageData.images.original.url;
    



    return (
        <div>
            <img src={imageUrl} alt="searched GIF"></img>
            <Button
                color="primary"
                variant="contained"
            >
                Add to Favorites
            </Button>
        </div>
    )
}

export default ImageItem;

// needs button to favorite, 