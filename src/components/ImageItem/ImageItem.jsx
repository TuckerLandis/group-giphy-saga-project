import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button'

function ImageItem( {imageData }) {
    const dispatch = useDispatch();
    // save image URL
    const imageUrl = imageData.images.original.url;
    
    // on click of a favorite button, send the image URL to the watcher saga
    const handleClick = () => {
        dispatch({type: 'POST_FAVORITE', payload: imageUrl})
    }


    return (
        <div>
            <img src={imageUrl} alt="searched GIF"></img>
            <Button
                color="primary"
                variant="contained"
                onClick={handleClick}
            >
                Add to Favorites
            </Button>
        </div>
    )
}

export default ImageItem;

// needs button to favorite, 