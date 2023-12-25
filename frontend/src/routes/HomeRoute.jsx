import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';


import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
     <TopNavigationBar topics={props.topics} favourites={props.favourites}/> 
      <PhotoList photos={props.photos} favourites={props.favourites} toggleFavourite={props.toggleFavourite} setDisplayMode={props.setDisplayMode}/>
      
      
    </div>
  );
};

export default HomeRoute;
