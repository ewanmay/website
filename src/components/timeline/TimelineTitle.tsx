import React from 'react';
import TimelineIcon from '../../assets/TimelineIcon.svg';

function TimelineTitle() {
  return (
    <div className="timeline-title flex center-item column">
      Here's my timeline      
      <img src={TimelineIcon} className="timeline-icon" height="30px"></img>
    </div>
  );
}

export default TimelineTitle;
