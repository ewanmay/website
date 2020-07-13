import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineTitle from './TimelineTitle';
import SeroTrackerIcon from '../../assets/SeroTrackerIcon.svg';
import './styles.css'

function Timeline() {
  return (
    <div className="timeline-container flex center-item">
      <div className="timeline col-lg-6">
        <TimelineTitle />
        <TimelineItem
          url="https://serotracker.com/"
          img={SeroTrackerIcon} date="April 2020" title="SeroTracker" position="Frontend Developer" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              My team and I designed and built the frontend for SeroTracker, a website displaying COVID-19 antibody data from around the world.
          </div>
            <br />
            <div className="">
              My role was to develop the aesthetic, layout, and functionality of the front end components. Analytics told us that our website was being used in over 48 different countries with a few thousand sessions a week.
          </div>
          </div>
        </TimelineItem>
        <TimelineItem img={SeroTrackerIcon} date="March 2020"
          url="https://essucalgary.com/"
          title="Engineering Students' Society"
          position="President" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              My team and I designed and built the frontend for SeroTracker, a website displaying COVID-19 antibody data from around the world.
          </div>
          </div>
        </TimelineItem>
      </div>
    </div >
  );
}

export default Timeline;
