import React from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoList.scss";



//This container houses photolistitems

export const PhotoList = (props) => {

  const renderPhotos = props.photos.map((photo) => {
    const { id, location, urls, user } = photo;

    return (
      <div key={`photo_${id}`}>
        <PhotoFavButton />
        <PhotoListItem
          key={id}
          city={location.city}
          country={location.country}
          image={urls.regular}
          username={user.username}
          profile={user.profile} />
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