import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
 
 class Navigation extends Component {
   state = {
  };

  logout = () => {
    localStorage.clear("token");
    
  };
  render() {
    return (

      <div className="App" > 
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "#350350"}} >
          <div className="container">
             <div> 
                <NavLink style={{color: "white"}} className="navbar-brand" to="/">Lobby</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-one">FloorOne</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-two">FloorTwo</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-three">FloorThree</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-four">FloorFour</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-five">FloorFive</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-six">FloorSix</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-seven">FloorSeven</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-eight">FloorEight</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-nine">FloorNine</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/floor-ten">FloorTen</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/penthouse">FloorTen</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/basement">Basement</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/rooftop">Rooftop</NavLink>
             </div>
          </div>
        </nav>
      </div>
    );
  }
}
 
export default Navigation;