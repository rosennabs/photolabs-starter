import { React, useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBar from './SearchBar';


const TopNavigation = (props) => {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  }

  


  return (
    <div className={`top-nav-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <span onClick={()=>props.refreshHomepage()} className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topics={props.topics} topicCategoryClicked={props.topicCategoryClicked} />
      <SearchBar cityInput={props.cityInput} setCityInput={props.setCityInput} handleFilterInput={props.handleFilterInput}/>
      <FavBadge isFavPhotoExist={props.favourites.length > 0} displayFavourites={props.displayFavourites} />
      <span onClick= {()=> toggleMode()} className={`gear-icon ${isDarkMode ? 'dark-gear' : 'light-gear'}`}> ⚙ </span>
      

    </div>
  )
}

export default TopNavigation;