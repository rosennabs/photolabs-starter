import React from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import HomeRoute from "routes/HomeRoute";

import "../styles/PhotoList.scss";



//This container houses photolistitems

export const PhotoList = (props) => {

  
  

  const renderPhotos = props.photos.map((photo) => {
    const { id, location, urls, user } = photo;

    return (
      <div  key={`photo_${id}`}>
        
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
          setDisplayMode={props.setDisplayMode}/>
      </div>
    )
  });
    

  return (
    <ul className="photo-list">     
      {renderPhotos}
    </ul>
  );
};

export default PhotoList;