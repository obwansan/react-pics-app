import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  // loop over each image object in the images array (retrived from the api 
  // and set on the state images proerty)
  const images = props.images.map((image) => {
    // Access the regular URL on the image object (which you can view 
    // for a query in Console > Network > Preview )
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;