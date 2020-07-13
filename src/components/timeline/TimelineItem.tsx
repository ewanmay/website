import React from 'react';
import TimelineItemBody from './TimelineItemBody';
import TimelineItemTitle from './TimelineItemTitle';

function TimelineItem() {
  return (
    <div className="TimelineItem">
      TimelineItem
      <TimelineItemTitle/>
      <TimelineItemBody/>
    </div>
  );
}

export default TimelineItem;
