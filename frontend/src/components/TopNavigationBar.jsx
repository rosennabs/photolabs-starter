import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBar from './SearchBar'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span onClick={()=>props.refreshHomepage()} className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topics={props.topics} topicCategoryClicked={props.topicCategoryClicked} />
      <SearchBar cityInput={props.cityInput} setCityInput={props.setCityInput} handleFilterInput={props.handleFilterInput}/>
      <FavBadge isFavPhotoExist={props.favourites.length > 0}/>
    </div>
  )
}

export default TopNavigation;