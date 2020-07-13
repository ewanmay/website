import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineTitle from './TimelineTitle';
import './styles.css'

function Timeline() {
  return (
    <div className="timeline">
      <TimelineTitle/>
      <TimelineItem/>
    </div>
  );
}

export default Timeline;
