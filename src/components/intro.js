import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="intro-container row">
        <div className="col-sm">
          <img
            className="intro-picture "
            src="/images/background.jpg"
            alt="unable to load"
          />
        </div>

        <div className="intro col-sm">
          <div className="intro-title">Hello there! </div>
          <div className="intro-summary">My name's Ewan, I'm a third year electrical engineering student with a specialization in energy and environment. I love to play with ideas and be creative with problem solving.</div>
        </div>
      </div>
    );
  }
}

export default Intro;
