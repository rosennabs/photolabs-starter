import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourites={props.toggleFavourites} photoId={props.id} favourites={props.favourites} />
      
      <img onClick={() => props.openModal(props.singlePhotoDetails)}
        className={`${props.photoIsClicked ? 'photo-details-modal__image' : 'photo-list__image'}`} src={props.image} alt="Regular random image" />

      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="Regular random image" />

        <div className="photo-list__user-info">
          <span> {props.name} </span>
          <br/>
          <span className="photo-list__user-location"> {props.city}, {props.country}</span>
        </div>

      </section>
       
    </div>
  )
};

export default PhotoListItem;
