import React from 'react';

interface TimelineItemTitleProps {
  title: string,
  position: string,
  startDate: string,
  endDate?: string,
  url: string,
  location: string
}

function TimelineItemTitle(props: TimelineItemTitleProps) {
  return (
    <div className="timeline-item-title flex left column">
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="timeline-item-organization">
        {props.title}
      </a>
      <div className="timeline-item-position">
        {props.position},
        {props.endDate ? 
        <i>
          {` ${props.startDate} - ${props.endDate}`}
        </i>:        
        <i>
           {' Since ' + props.startDate}
        </i>}
      </div>
      <div className="timeline-item-location">
        {props.location}
      </div>
    </div>
  );
}

export default TimelineItemTitle;
