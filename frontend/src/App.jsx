import React from 'react';
import { useState, useReducer} from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayMode, setDisplayMode] = useState(false);

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
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayMode={setDisplayMode} favourites={favourites} toggleFavourite={toggleFavourite} singlePhotoDetail={displayMode}/> 

      {displayMode && <PhotoDetailsModal setDisplayMode={setDisplayMode} singlePhotoDetail={displayMode} favourites={favourites} toggleFavourite={toggleFavourite} isOpenInModal={true}/>} 
      
    </div>

    
  );
};

export default App;
