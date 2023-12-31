import React from 'react';
import TopicList from './TopicList';
import FavBadge from 'components/FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span onClick={()=>props.refreshHomepage()} className="top-nav-bar__logo">PhotoLabs</span>
     
      <TopicList topics={props.topics} setCategory={props.setCategory}/>
      <FavBadge isFavPhotoExist={props.favourites.length>0}/>
      
      
    </div>
  )
}

export default TopNavigation;