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
      .then(
        response => 
        console.log(this.state.NebularData))
        };

  render() {

    if (!this.state.returnedData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      <div className="container">
        <div>
        
          <h1>First APOD API Call: "Most Recent"</h1>
          <h1>{this.state.APOData.title}</h1>
          <img style={{width: "700px", height: "500px"}}
            src={this.state.APOData.url}></img>
          <ol>
          <li>{this.state.APOData.date}</li>
          <li>{this.state.APOData.description}</li>
          <li>{this.state.APOData.apod_site}</li>
          </ol>
        </div>

      </div>
      )
  };

}

export default About