import React, { Component } from "react";
import NavBar from '../nav-bar';
import Intro from '../intro';
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Intro />
      </div>
    );
  }
}

export default HomePage;
