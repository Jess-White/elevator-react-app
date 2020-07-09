import React, {Component} from 'react';
import NebulaData from "./NebulaData";

class Nebula extends Component {
  constructor(props) {
        super(props);
        this.state = 
          { 
            url: ""
          }
    }

    render() {

    return (
        <div className="nebula">
            <div>
            <img style={{width: "700px", height: "500px"}}
            src={this.props.url}></img>
            </div>
        </div>
    )
  }

};

export default Nebula