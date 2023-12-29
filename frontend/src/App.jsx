import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, toggleFavourite, setDisplayMode } = useApplicationData();

  return (
    <div className="App">
       <HomeRoute photos={photos} topics={topics} setDisplayMode={setDisplayMode} favourites={state.favourites} toggleFavourite={toggleFavourite}/> 

      {state.displayMode && <PhotoDetailsModal setDisplayMode={setDisplayMode} singlePhotoDetail={state.displayMode} favourites={state.favourites} toggleFavourite={toggleFavourite} isOpenInModal={true}/>} 

    </div>

    
  );
};

export default App;
