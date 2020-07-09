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
      .then( 
        response =>
        this.state.NebularData.map((result, index) =>
        {
          id: result.id,
          date: result.date,
          description: result.description,
          apod_site: result.apod_site,
          url: result.url
          }
        )
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
            </div>
            ))}
        </div>

      </div>
      )
  };

}

export default Galaxies