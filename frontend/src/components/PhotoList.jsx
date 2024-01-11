import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos, openModal, favourites, toggleFavourites, photoIsClicked}) => {

  const renderPhotos = photos.map((photo) => {
    const { id, location, urls, user } = photo;
  
    return (
      
      <div key={`photo_${id}`}>
       
        < PhotoListItem
          key={id}
          id={id}
          city={location.city}
          country={location.country}
          image={urls.regular}
          username={user.username}
          name={user.name}
          profile={user.profile}
          openModal={openModal}
          singlePhotoDetails={photo}
          favourites={favourites}
          toggleFavourites={toggleFavourites}/>
        
      </div>
    );
    
  })

  return (
    <div className={`${photoIsClicked? 'photo-list-modal' : 'photo-list'}`}>
      {renderPhotos}
    </div>
  )
};

export default PhotoList;
