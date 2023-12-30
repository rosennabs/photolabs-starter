import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



//Container holds all topics
const TopicList = (props) => {
  const renderTopics = props.topics.map((topic) => {
    return (
      
      <TopicListItem key={topic.id} id={topic.id} title={topic.title} setCategory={props.setCategory} />
      
      
    )
  });
    
  return (
    <div className="top-nav-bar__topic-list">
      {renderTopics}
    </div>
  )
  
  
  
};

export default TopicList;
