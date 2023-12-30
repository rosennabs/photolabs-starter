import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, toggleFavourite, setDisplayMode, setCategory } = useApplicationData();

  return (
    <div className="App">
       <HomeRoute photos={state.photoData} topics={state.topicData} setDisplayMode={setDisplayMode} favourites={state.favourites} toggleFavourite={toggleFavourite} setCategory={setCategory}/> 

      {state.displayMode && <PhotoDetailsModal setDisplayMode={setDisplayMode} singlePhotoDetail={state.displayMode} favourites={state.favourites} toggleFavourite={toggleFavourite} isOpenInModal={true}/>} 

    </div>

    
  );
};

export default App;
