import React, {Component} from 'react';

class ElevatorDoor extends Component {
    
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