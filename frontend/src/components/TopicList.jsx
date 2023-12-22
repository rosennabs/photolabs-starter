import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

//Container holds all topics
const TopicList = () => {
  const renderTopics = sampleDataForTopicList.map((topic) => {
    return (
      
      <TopicListItem key={topic.id} slug={topic.slug} title={topic.title} />
      
      
    )
  });
    
  return (
    <div className="top-nav-bar__topic-list">
      {renderTopics}
    </div>
  )
  
  
  
};

export default TopicList;
