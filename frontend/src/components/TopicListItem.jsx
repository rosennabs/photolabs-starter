import React from "react";


import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {`Topic ${props.id}`}
    </div>
  );
};

export default TopicListItem;
