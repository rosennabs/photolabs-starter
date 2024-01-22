import { React} from 'react';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

//Destructure the useApplicationData function
  const { state, topicCategoryClicked, refreshHomepage, openModal, toggleFavourites, setCityInput, handleFilterInput, displayFavourites, toggleMode} = useApplicationData();


  return (
    <div className={`App ${state.mode === 'dark' ? 'dark-mode' : ''}`}>
      <HomeRoute
        topics={state.topicData}
        topicCategoryClicked={topicCategoryClicked}
        refreshHomepage={refreshHomepage}
        photos={state.photoData}
        openModal={openModal}
        favourites={state.favourites}
        toggleFavourites={toggleFavourites}
        cityInput={state.cityInput}
        setCityInput={setCityInput}
        handleFilterInput={handleFilterInput}
        displayFavourites={displayFavourites}
        toggleMode={toggleMode}
        mode={state.mode}
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
