import React from 'react';
import TimelineItemTitle from './TimelineItemTitle';

interface TimelineItemProps {
  children?: any,
  title: string,
  position: string,
  date: string,
  location: string,
  url: string,
  img: string
}

function TimelineItem(props: TimelineItemProps) {
  return (
    <div className="timeline-item center-item flex row">
      <div className="fit mr-3 timeline-item-image">
        <img src={props.img} alt="" height={100}></img>
      </div>
      <div className="flex column pl-3">
        <TimelineItemTitle url={props.url} title={props.title} position={props.position} date={props.date} location={props.location} />
        <div className="timeline-item-body">
          {props.children}
        </div>

      </div>
    </div>
  );
}

export default TimelineItem;
