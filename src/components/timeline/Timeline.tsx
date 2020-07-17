import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineTitle from './TimelineTitle';
import SeroTrackerIcon from '../../assets/SeroTrackerIcon.svg';
import ESSIcon from '../../assets/ESSLogo.svg';
import RepliconLogo from '../../assets/RepliconLogo.svg';
import ArcurveIcon from '../../assets/ArcurveIcon.svg';
import UniversityOfCalgary from '../../assets/UniversityOfCalgaryLogo.svg';
import './styles.css'

function Timeline() {
  return (
    <div className="timeline-container flex center-item">
      <div className="timeline flex column center-item col-lg-6">
        <TimelineTitle />
        <TimelineItem
          url="https://serotracker.com/"
          img={SeroTrackerIcon} startDate="April 2020" title="SeroTracker" position="Frontend Developer" location="Calgary, AB">
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
        <TimelineItem img={ESSIcon} startDate="March 2020"
          url="https://essucalgary.com/"
          title="Engineering Students' Society"
          position="President" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              As President, I am overseeing 24 incredible council members in a wide array of portfolios. At the Engineering Students' Society (ESS) we run events, services, sell merchandise, and provide support for almost every aspect of the student experience.
          </div>
            <br />
            <div className="">
              Currently we are working on creating a podcast, revamping our social media, and planning a week of online and socially distanced events just to name a few. I have never learned so much so quickly, and I am so excited to see where this year takes us.
          </div>
          </div>
        </TimelineItem>
        <TimelineItem img={ArcurveIcon} startDate="May 2019"
          url="https://arcurve.com/"
          title="Arcurve Inc"
          position="Software Developer Intern" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              I have spent the last 14 moonths working on an Angular application, with a C# (.Net) backend. In that time I have implemented security roles, a data tracking system to keep track of state over time, rebuilt the dashboard, and implemented a new major screen that I designed. I have so much appreciation for everyone on my team who has put up with my bad jokes, and been patient with me as I made the mistakes I needed to learn properly.
            </div>
            <br />
          </div>
        </TimelineItem>
        <TimelineItem img={ESSIcon} startDate="March 2018" endDate="March 2019"
          url="https://essucalgary.com/"
          title="Engineering Students' Society"
          position="Vice President Student Life" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              My first major volunteering commitment was one I would gladly do again. Our student life team raised over $6000 for charity amd held social events for hundreds of students. Practice in teamwork, planning, communication while demonstrating accountability was all new, and I loved it.
            </div>
            <br />
          </div>
        </TimelineItem>
        <TimelineItem img={RepliconLogo} startDate="May 2018" endDate="August 2018"
          url="https://replicon.com/"
          title="Replicon"
          position="Software Developer Intern" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              In my second summer with Replicon, I worked mostly on our AWS Codepipelines along with some frameworks test results, creating a lot of automation tooling. Some of the tooling I created was around modifying release candidates for hotfixes in production, which reduced processing time by around 60% whenever we needed to deploy a hotfix. 
            </div>
            <br />
          </div>
        </TimelineItem>
        <TimelineItem img={RepliconLogo} startDate="May 2017" endDate="August 2017"
          url="https://replicon.com/"
          title="Replicon"
          position="Software Developer Intern" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              My first summer at Replicon was full of learning. I began at such a beginner level, learning Ember JS and writing small frontend changes. Bouncing around doing testing architecture to deploy custom instances of our products, I landed on a project to rewrite one of our internal tools from an Ember JS product to a React application as an exploratory task. I'll always appreciate how Replicon invested time in me, and helped me learn when I was just starting out. 
            </div>
            <br />
          </div>
        </TimelineItem>
        <TimelineItem img={UniversityOfCalgary} startDate="September 2016"
          url="https://schulich.ucalgary.ca/"
          title="University of Calgary"
          position="Bachelors of Electrical Engineering" location="Calgary, AB">
          <div className="fill flex left column pt-3">
            <div className="">
              After 4 years at the University of Calgary, I already look back fondly. Late nights spent battling assignments in the lab, ski trips with friends, and a new appreciation for dedication. Along the way I fortunately confirmed that I was in the right degree, and I fell in love with building important projects. 
            </div>
            <br />
          </div>
        </TimelineItem>
      </div>
    </div >
  );
}

export default Timeline;
