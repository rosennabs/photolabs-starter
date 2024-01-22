import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBar from './SearchBar'
import ToggleMode from './ToggleMode';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar" >
      <span onClick={()=>props.refreshHomepage()} className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topics={props.topics} topicCategoryClicked={props.topicCategoryClicked} />
      <SearchBar cityInput={props.cityInput} setCityInput={props.setCityInput} handleFilterInput={props.handleFilterInput} />
      <FavBadge isFavPhotoExist={props.favourites.length > 0} displayFavourites={props.displayFavourites} />
      <ToggleMode toggleMode={props.toggleMode} mode={props.mode}/>
    </div>
  )
}

export default TopNavigation;