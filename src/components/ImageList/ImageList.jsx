
// components
import { useSelector } from 'react-redux';
import ImageItem from '../ImageItem/ImageItem.jsx'

function ImageList() {
    // get data from reducer for searched images
    const searchResults = useSelector(store => store.searchResults);
    



    return (
        <div>
            <h3>In ImageList</h3>
            {searchResults.map( (imageData, index) => (
                <ImageList key={index} imageData={imageData}/>
            ))}
        </div>
    )
}

export default ImageList;