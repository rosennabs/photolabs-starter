import React from "react";


import "../styles/TopicListItem.scss";



const TopicListItem = ({id, title, setCategory}) => {
  return (
    <div onClick={()=>setCategory(id)} className="topic-list__item">
      <span className="topic-list__item span"> {title} </span>
    </div>
  );
};

export default TopicListItem;
