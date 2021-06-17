import { useDispatch } from "react-redux";
import Button from '@material-ui/core'

function ImageItem( {imageData }) {
    const dispatch = useDispatch();
    // save image URL
    const imageUrl = imageData.data?.images.original.url;



    return (
        <div>
            <img src={imageUrl} alt="searched GIF"></img>
        </div>
    )
}

export default ImageItem;

// needs button to favorite, 