import React from 'react';
import './LandingName';
import './LandingPicture';
import LandingName from './LandingName';
import LandingPicture from './LandingPicture';
import './styles.css';
import Loader from '../shared/Loader';

const Landing = () => {
  return (
    <div className="landing flex center-item">
      <Loader>
        <LandingName />
      </Loader>
      <Loader>
        <LandingPicture />
      </Loader>
    </div>
  );
}

export default Landing;
