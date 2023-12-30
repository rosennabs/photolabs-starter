import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  
  return (

    <div className="photo-list__item">
      
      <PhotoFavButton isFavourite={props.favourites.includes(props.id)} toggleFavourite={props.toggleFavourite} id={props.id} />
      
      <img onClick={()=> props.setDisplayMode(props.photo)} className={`${props.isOpenInModal ? 'photo-details-modal__image' : 'photo-list__image'}`} src={props.image} alt="A regular image" />
      
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="A person's headshot" />

        <div className="photo-list__user-info"> 
         
          {props.name}
          <br/>
          <span className="photo-list__user-location">{props.city}, {props.country}</span>

          
        </div>
      </section>

      

      
    </div>

    
   
  )
};

export default PhotoListItem;
