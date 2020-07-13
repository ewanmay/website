import React from 'react';

interface TimelineItemTitleProps {
  title: string,
  position: string,
  date: string,
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
        <i>
           {' Since ' + props.date}
        </i>
      </div>
      <div className="timeline-item-date">
        {props.location}
      </div>
    </div>
  );
}

export default TimelineItemTitle;
