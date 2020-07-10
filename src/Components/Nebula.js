import React, {Component} from 'react';

class Nebula extends Component {
  constructor(props) {
        super(props);
  }

    render() {

      return (
          <div className="nebula">
              <div>
                <img style={{width: "700px", height: "500px"}}
                src={this.props.result.url}></img>
              </div>
          </div>
      )
  }

};

export default Nebula