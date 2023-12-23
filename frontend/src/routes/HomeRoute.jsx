import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favourites, setFavourites] = useState([]);

  

  const addToFavourites = (photoId) => {//update the list of favourites with new likes
    return setFavourites(favourites => [...favourites, photoId]) //use the spread operator ... to add new elements to the current favourite array
  }
  
  const removePhotoFromFavourites = (photoId) => {//remove and update the list of favourites 
   setFavourites(favourites => favourites.filter(photo => photo !== photoId))
  }

  const toggleFavourite = (photoId) => {
    favourites.includes(photoId) ? removePhotoFromFavourites(photoId) : addToFavourites(photoId);
    
  }
   
  return (
    <div className="home-route">
     <TopNavigationBar topics={props.topics} favourites={favourites}/> 
      <PhotoList photos={props.photos} favourites={favourites} toggleFavourite={toggleFavourite} setDisplayMode={props.setDisplayMode}/>
      
      
    </div>
  );
};

export default HomeRoute;
