import React from 'react';

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
        <h3>This app is my answer to the Virtual Elevator technical challenge. I created a React app with the floors as React components. I started by digging around in <a href="https://github.com/public-apis/public-apis">this list</a> of public APIs, and decided to work with <a href="https://apodapi.herokuapp.com">this one</a>, which was built as a supplement for NASA's Astronomy Photo of the Day (APOD) API. I used React router and CSS styling to turn the navigation bar into an elevator panel that routes to all "floor" components. The images are pulled in from the API and then rendered as a background image in the Elevator Door component, along with a function that yokes each value in the data array to a given floor. Click on the elevator buttons to see how it works!</h3>
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