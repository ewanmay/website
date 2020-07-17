import React from 'react';
import TimelineIcon from '../../assets/TimelineIcon.svg';
import Loader from '../shared/Loader';

function TimelineTitle() {
  return (
    <Loader>
      <div className="timeline-title flex center-item column">
        Here's my timeline
      <img src={TimelineIcon} className="timeline-icon" alt="" height="30px"></img>
      </div>
    </Loader>
  );
}

export default TimelineTitle;
