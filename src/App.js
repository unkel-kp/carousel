import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey there! I'm <code>KP</code>.
          <br /> 
          Find out my work here.
        </p>
        <a
          className="App-link"
          href="https://frames.oyorooms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          OYO Frames
        </a>
      </header>
    </div>
  );
}

export default App;
