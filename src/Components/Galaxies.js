import React, {Component} from 'react';

const urls = [
                "https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10"
              ]

class Galaxies extends Component {
  constructor(props) {
        super(props);
        this.state = 
          {
            NebularData: [], 
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
          NebularData: this.state.returnedData[0]
        }))
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
          <h1>Second APOD API Call: Last Ten Search Results "Planetary Nebula"</h1>
          {this.state.NebularData.map((result, index) => (
            <div>
            <img style={{width: "700px", height: "500px"}}
            src={result.url}></img>
            <ol>
            <li>{result.title}</li>
            <li>{result.date}</li>
            <li>{result.description}</li>
            <li>{result.apod_site}</li>
            </ol>
            </div>
            ))}
        </div>

      </div>
      )
  };

}

export default Galaxies