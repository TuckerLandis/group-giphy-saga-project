
// components
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageItem from '../ImageItem/ImageItem.jsx'

function ImageList() {
    // get data from reducer for searched images
  
    const searchResults = useSelector(store => store.searchResults);
    
    // console.log(searchResults);



    return (
        <div className="images-display">
            <h3>In ImageList</h3>
            {searchResults.map( (imageData, index) => (
            <ImageItem key={index} imageData={imageData}/>
             ))}
        </div>
    )
}

export default ImageList;