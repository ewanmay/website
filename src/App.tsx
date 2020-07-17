import React from 'react';
import { Transition } from 'react-transition-group';
import './App.css';
import { Contact, Landing, Navbar, Projects, Timeline, Values } from './components';

function App() {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const Fade = ({ in: inProp }: any) => {
    return (
      <Transition in={inProp} timeout={duration}>
        {(state: any) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition!
          </div>
        )}
      </Transition>
    );
  };

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
