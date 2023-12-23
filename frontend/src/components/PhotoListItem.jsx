import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {
  
  return (
    
    <div  className="photo-list__item">
      <PhotoFavButton isFavourite={props.favourites.includes(props.id)} toggleFavourite={props.toggleFavourite} id={props.id} />
      
      <img onClick={()=> props.setDisplayMode(true)} className="photo-list__image" src={props.image} alt="A regular image" />
      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="A person's headshot" />

        <div className="photo-list__user-info"> 
          <p>{props.username}</p>
          <span className="photo-list__user-location">{props.city}, {props.country}</span> 
        </div>

      </div>
      
    </div>
   
  )
};

export default PhotoListItem;
