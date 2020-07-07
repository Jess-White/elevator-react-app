import React from 'react';
import logo from './logo.svg';
import Galaxies from "./Components/Galaxies";
// import Galaxy from "./Components/Galaxy";
import About from "./Components/About";
// import Navigation from './Components/Navigation';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is my elevator app!
      </header>
      <div>
        <Galaxies />
      </div>
    </div>
  );
}

export default App;


// <BrowserRouter>
//         <Navigation />
//         <Switch>
          
//           <Route 
//             exact path={"/galaxy-index"} component={GalaxyIndex} 
//           />

//           <Route 
//             exact path={"/galaxy-show"} component={GalaxyShow} 
//           />

//           <Route 
//             exact path={"/about"} component={About} 
//           />
//         </Switch>
//       </BrowserRouter>