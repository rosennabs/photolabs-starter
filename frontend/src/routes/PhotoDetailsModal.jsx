import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ openModal, photoIsClicked, favourites, toggleFavourites }) => {
  
  const { id, location, urls, user, similar_photos } = photoIsClicked;
  

  return (
    <div className="photo-details-modal">
      <button onClick={()=>openModal(false)} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoListItem
        id={id}
        city={location.city}
        country={location.country}
        image={urls.regular}
        username={user.username}
        name={user.name}
        profile={user.profile}
        openModal={openModal}
        toggleFavourites={toggleFavourites}
        favourites={favourites}
        photoIsClicked={photoIsClicked}/>

      <div className='photo-details-modal__images'>
        <header className='photo-details-modal__header'>Similar Photos</header>

        <PhotoList
          photos={similar_photos}
          favourites={favourites}
          toggleFavourites={toggleFavourites} 
          photoIsClicked={photoIsClicked} />




      </div>
    </div>
  )
};

export default PhotoDetailsModal;
