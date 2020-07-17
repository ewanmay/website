import React from 'react';
import './App.css';
import { Contact, Landing, Navbar, Projects, Timeline, Values } from './components';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Timeline />
      <Projects />
      <Values />
      <Contact />
    </div>
  );
}

export default App;
