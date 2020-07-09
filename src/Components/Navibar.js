import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Navigation from '../Components/Navigation';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FloorOne from "./Floors/FloorOne";
import FloorTwo from "./Floors/FloorTwo";
import FloorThree from "./Floors/FloorThree";
import FloorFour from "./Floors/FloorFour";
import FloorFive from "./Floors/FloorFive";
import FloorSix from "./Floors/FloorSix";
import FloorSeven from "./Floors/FloorSeven";
import FloorEight from "./Floors/FloorEight";
import FloorNine from "./Floors/FloorNine";
import FloorTen from "./Floors/FloorTen";
import Lobby from "./Floors/Lobby";
import Penthouse from "./Floors/Penthouse"
import Rooftop from "./Floors/Rooftop";
import Basement from "./Floors/Basement";

class Navibar extends Component {
  render() {
  return (
    <div className="Navbar">

      <div>
          <BrowserRouter>
           <div>
             <Navigation />
               <Switch>
                 <Route className="NavRoute" path="/floor-one" component={FloorOne}/>

                 <Route className="NavRoute" path="/basement" component={Basement}/>
                 <Route className="NavRoute" path="/penthouse" component={Penthouse}/>
                 <Route className="NavRoute" path="/rooftop" component={Rooftop}/>
                 <Route className="NavRoute" path="/lobby" component={Lobby}/>

                 <Route className="NavRoute" path="/floor-one" component={FloorOne}/>
                 <Route className="NavRoute" path="/floor-two" component={FloorTwo}/>
                 <Route className="NavRoute" path="/floor-three" component={FloorThree}/>
                 <Route className="NavRoute" path="/floor-four" component={FloorFour}/>
                 <Route className="NavRoute" path="/floor-five" component={FloorFive}/>
                 <Route className="NavRoute" path="/floor-six" component={FloorSix}/>
                 <Route className="NavRoute" path="/floor-seven" component={FloorSeven}/>
                 <Route className="NavRoute" path="/floor-eight" component={FloorEight}/>
                 <Route className="NavRoute" path="/floor-nine" component={FloorNine}/>
                 <Route className="NavRoute" path="/floor-ten" component={FloorTen}/>
              </Switch>
           </div>
          </BrowserRouter>
      </div>

    </div>
  );
}
}

export default Navibar;

// <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-one">FloorOne</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-two">FloorTwo</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-three">FloorThree</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-four">FloorFour</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-five">FloorFive</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-six">FloorSix</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-seven">FloorSeven</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-eight">FloorEight</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-nine">FloorNine</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/floor-ten">FloorTen</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/penthouse">FloorTen</Nav.Link>
//             <Nav.Link style={{color: "white"}} className="navbar-brand" to="/rooftop">Rooftop</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       </div>