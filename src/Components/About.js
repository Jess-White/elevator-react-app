import React, {Component} from 'react';

const urls = [
                "https://apodapi.herokuapp.com/api/"
              ]

class About extends Component {
  constructor(props) {
        super(props);
        this.state = 
          { 
            APOData: [], 
            returnedData: []
          }
    }

  componentDidMount() {
    Promise.all(urls.map(url => 
      fetch(url)
        .then(response => response.json())
        .then(response => this.state.returnedData.push(response))
          ))
      .then(console.log(this.state.returnedData))
      .then(response => 
        this.setState({
          APOData: this.state.returnedData[0]
        }))
      .then(response => 
        console.log(this.state.APOData))
        };

  render() {

    if (!this.state.returnedData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      <div className="container">
        <div className="about-section">
          
          <div>

          </div>

      </div>
      </div>
      )
  };

}
