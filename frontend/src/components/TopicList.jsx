import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, topicCategoryClicked }) => {
  const renderTopics = topics.map((topic) => {
    return (
      <div key={topic.slug}>
        <TopicListItem id={topic.id} title={topic.title} topicCategoryClicked={topicCategoryClicked}/>

      </div>
    )
  });

  return (
    <div className="top-nav-bar__topic-list">
      {renderTopics}
    </div>
  );
};

export default TopicList;
