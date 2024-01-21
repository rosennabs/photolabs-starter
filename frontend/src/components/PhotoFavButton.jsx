import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({favourites, toggleFavourites, photoId}) {
  
  return (
    <div onClick={()=>toggleFavourites(photoId)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites.includes(photoId)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;