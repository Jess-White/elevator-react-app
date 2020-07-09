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
        <nav className="vertical-nav fixed-top navbar-fixed-right" style={{backgroundColor: "#2d343a"}} >
          <div className="container">
             <div> 
                <NavLink className="navbar-brand" to="/">L</NavLink>
                <NavLink className="navbar-brand" to="/floor-one">1</NavLink>
                <NavLink className="navbar-brand" to="/floor-two">2</NavLink>
                <NavLink className="navbar-brand" to="/floor-three">3</NavLink>
                <NavLink className="navbar-brand" to="/floor-four">4</NavLink>
                <NavLink className="navbar-brand" to="/floor-five">5</NavLink>
                <NavLink className="navbar-brand" to="/floor-six">6</NavLink>
                <NavLink className="navbar-brand" to="/floor-seven">7</NavLink>
                <NavLink className="navbar-brand" to="/floor-eight">8</NavLink>
                <NavLink className="navbar-brand" to="/floor-nine">9</NavLink>
                <NavLink className="navbar-brand" to="/floor-ten">10</NavLink>
                <NavLink className="navbar-brand" to="/penthouse">P</NavLink>
                <NavLink className="navbar-brand" to="/basement">B</NavLink>
                <NavLink className="navbar-brand" to="/rooftop">R</NavLink>
             </div>
          </div>
        </nav>
      </div>
    );
  }
}
 
export default Navigation;