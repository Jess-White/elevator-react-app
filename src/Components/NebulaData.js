import React, {Component} from 'react';

const urls = [
                "https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10"
              ]

class NebulaData; extends Component {
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


          {this.state.NebularData.map((result, index) => (
           {result.url}
           {result.title}
           {result.date}
           {result.description}
           {result.apod_site}
            ))}
      
        <div> 
          {this.state.NebularData.map((result, index) => (
            <div>
            <img style={{width: "75%", height: "50%"}}
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

export default NebulaData;