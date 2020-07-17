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
        <nav className="vertical-nav" style={{backgroundColor: "#2d343a"}} >
          <div className="container">
             <div> 
                <NavLink onClick={() => this.props.handleFloorChange("P")} className="navbar-brand" to="/penthouse">P</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange("R")} className="navbar-brand" to="/rooftop">R</NavLink>


                <NavLink onClick={() => this.props.handleFloorChange(9)} className="navbar-brand" to="/floor-nine">9</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(0)} className="navbar-brand" to="/floor-ten">10</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(7)} className="navbar-brand" to="/floor-seven">7</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(8)} className="navbar-brand" to="/floor-eight">8</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(5)} className="navbar-brand" to="/floor-five">5</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(6)} className="navbar-brand" to="/floor-six">6</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(3)} className="navbar-brand" to="/floor-three">3</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(4)} className="navbar-brand" to="/floor-four">4</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(1)} className="navbar-brand" to="/floor-one">1</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>


                <NavLink onClick={() => this.props.handleFloorChange("B")} className="navbar-brand" to="/basement">B</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange("L")} className="navbar-brand" to="/">L</NavLink>
             </div>
          </div>
        </nav>
      </div>
    );
  }
}
 
export default Navigation;