import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        topicCategoryClicked={props.topicCategoryClicked}
        refreshHomepage={props.refreshHomepage}
        favourites={props.favourites}
        cityInput={props.cityInput}
        setCityInput={props.setCityInput}
        handleFilterInput={props.handleFilterInput}
        displayFavourites={props.displayFavourites}/>
      
      <PhotoList
        photos={props.photos}
        openModal={props.openModal}
        favourites={props.favourites}
        toggleFavourites={props.toggleFavourites} />
    </div>
  );
};

export default HomeRoute;
