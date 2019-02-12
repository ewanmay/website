import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./components/containers/contact-page";
import HomePage from "./components/containers/home-page";
import TimelinePage from "./components/containers/timeline-page";
import NavBar from './components/nav-bar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>         
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/timeline" component={TimelinePage} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
