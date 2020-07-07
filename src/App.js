import React from 'react';
import logo from './logo.svg';
import GalaxyData from "./Components/GalaxyData"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is my elevator app!
      </header>
      <div>
        <GalaxyData />
      </div>
    </div>
  );
}

export default App;
