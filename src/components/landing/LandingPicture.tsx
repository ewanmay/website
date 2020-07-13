import React from 'react';
import LandingPage from '../../assets/LandingPhoto.svg';

function LandingPicture() {
  return (
    <div className="px-3">
      <img src={LandingPage} className="landing-picture"></img>
    </div>
  );
}

export default LandingPicture;