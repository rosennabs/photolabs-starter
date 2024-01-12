import { React, useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

//Destructure the useApplicationData function
  const { state, topicCategoryClicked, refreshHomepage, openModal, toggleFavourites} = useApplicationData();
//console.log("this is state:", state);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        topicCategoryClicked={topicCategoryClicked}
        refreshHomepage={refreshHomepage}
        photos={state.photoData}
        openModal={openModal}
        favourites={state.favourites}
        toggleFavourites={toggleFavourites}
        /> 
      
      {state.photoDetailsModal && <PhotoDetailsModal
        openModal={openModal}
        photoIsClicked={state.photoDetailsModal}
        favourites={state.favourites}
        toggleFavourites={toggleFavourites}/>}
    </div>
  );
};

export default App;
