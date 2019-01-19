import React from 'react';

const ImageList = props => {
  // loop over each image object in the images array (retrived from the api 
  // and set on the state images proerty)
  const images = props.images.map((image) => {
    // Access the regular URL on the image object (which you can view 
    // for a query in Console > Network > Preview )
    return <img key={image.id} src={image.urls.regular} alt={image.description} />
  });

  return <div>{images}</div>;
};

export default ImageList;