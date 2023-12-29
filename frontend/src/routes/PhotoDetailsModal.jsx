import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  const { id, location, similar_photos, urls, user } = props.singlePhotoDetail
  
  const similar_photosArray = Object.values(similar_photos) //Change similar photos object into an array
  
  return (
    <div className="photo-details-modal">
      <button onClick={() => props.setDisplayMode(false)} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Pass the single photo details to the photolist item component to display the clicked photo in focus mode */}

        <PhotoListItem 
          key={id}
          id={id}
          city={location.city}
          country={location.country}
          image={urls.regular}
          username={user.username}
          profile={user.profile}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          setDisplayMode={props.setDisplayMode}
          photo={[props.singlePhotoDetail]}
          isOpenInModal={props.isOpenInModal} />
      
      {/* Pass the similar photos to the photolist component to render similar photos */}

      <section className='photo-details-modal__images'>

        <div className='photo-details-modal__header'>Similar Photos</div>

        <PhotoList
        photos={similar_photosArray}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        setDisplayMode={props.setDisplayMode} />
        
      </section>

      
      
      

    </div>
  )
};

export default PhotoDetailsModal;
