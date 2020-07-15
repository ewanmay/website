import React from 'react';
import TimelineItemTitle from './TimelineItemTitle';

interface TimelineItemProps {
  children?: any,
  title: string,
  position: string,
  startDate: string,
  endDate?: string,
  location: string,
  url: string,
  img: string
}

function TimelineItem(props: TimelineItemProps) {
  return (
    <div className="timeline-item center-item flex row">
      <div className="fit column center-item flex mr-3">
        <img src={props.img} alt="" height={100} width={100}></img>
        <div className="fill column flex center-item">
          <div className="timeline-item-image col-6 fill"></div>
        </div>
      </div>
      <div className="flex column pl-3">
        <TimelineItemTitle endDate={props.endDate} url={props.url} title={props.title} position={props.position} startDate={props.startDate} location={props.location} />
        <div className="timeline-item-body">
          {props.children}
        </div>

      </div>
    </div>
  );
}

export default TimelineItem;
