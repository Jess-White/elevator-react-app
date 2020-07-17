import React, {Component} from 'react';
import SlidyBar from '../SlidyBar';

class ElevatorDoor extends Component {
    
  render() {

    return (
      <div className="nebula">
      <container>
        <div className="column">
          <SlidyBar />
        </div>
      <container className="row">
        <div className="sliding-doors" style={{backgroundImage: `url(${this.props.result.url})`}}></div>
      </container>
      </container>
      </div>
      
      )
  }
};

export default ElevatorDoor