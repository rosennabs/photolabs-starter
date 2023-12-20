import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.image} alt="A regular image" />
      
      <div className="photo-list__user-details">

        <div className="photo-list__user-info">
          <img className="photo-list__user-profile" src={props.profile} alt="A person's headshot" />
          <p>{props.username}</p>
          <span className="photo-list__user-location">{props.city} {props.country}</span> 
        </div>
        
      </div>
      
    </div>
   
  )
};

export default PhotoListItem;
