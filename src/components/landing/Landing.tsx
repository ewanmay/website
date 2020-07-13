import React from 'react';
import './LandingName';
import './LandingPicture';
import LandingName from './LandingName';
import LandingPicture from './LandingPicture';
import './styles.css';

const Landing = () => {
  return (
    <div className="landing flex center-item">
      <LandingName/>
      <LandingPicture/>
    </div>
  );
}

export default Landing;
