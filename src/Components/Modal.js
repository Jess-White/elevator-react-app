import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import NavLink from "react-bootstrap/NavLink";
// import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

const customStyles = {
  overlay: {zIndex: 1000},
  color: "white",
  background: "black"
};

function Modal() {
  return (
    <div className="modal-blurb" style={customStyles}>
        <div>
        <a class="close" href="/">x</a>
        <div>
        <h1>About Ascension</h1>
        <h3>This app is my answer to the Virtual Elevator technical challenge. I created a React app with the floors as React components. I started by digging around in this list of third-party APIs, and decided to work with this one, which was built as a supplement for NASA's Astronomy Photo of the Day (APOD) API. I used React router and CSS styling to turn the navigation bar into an elevator panel that routes to all "floor" components. The images are pulled in from the API and then rendered as a background image in the Elevator Door component, along with a function that yokes each value in the data array to a given floor.</h3>
      </div>

     </div>
     </div>
    
    )
}

export default Modal;

// <div className="header-buttons">
// <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
// <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
// <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
// </div>