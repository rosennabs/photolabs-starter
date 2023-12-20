import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    
    <div>
      <img src={props.image} alt="A regular image" />
      <img src={props.profile} alt="A person's headshot" />
      <p>{props.username}</p>
     <span>{props.city} {props.country}</span> 
    </div>
   
  )
};

export default PhotoListItem;
