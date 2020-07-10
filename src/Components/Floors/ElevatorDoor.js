import React, {Component} from 'react';
import NebulaData from "../NebulaData";

class ElevatorDoor extends Component {
  constructor(props) {
        super(props);
  }
    
  render() {

    return (
      
      <div className="nebula">
      <container>
        <div className="sliding-doors" style={{backgroundImage: `url(${this.props.result.url})`}}></div>
      </container>
      </div>
      
      )
  }

};

export default ElevatorDoor


// function ElevatorDoor() {

//     return (
      
//       <div class="curtain">

//         <div class="curtain__wrapper">

//           <input type="checkbox" checked></input>

//           <div class="curtain__panel curtain__panel--left">
//           </div>
          
//           <div class="curtain__prize">
//           </div>
          
//           <div class="curtain__panel curtain__panel--right">
//           </div>

//           </div>

//       </div>
//       )
//   };

// <div className="sliding-doors" style={{backgroundImage: `url(${"https://apod.nasa.gov/apod/image/0702/helix_spitzer_720.jpg"})`}}></div>