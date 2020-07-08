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
          <h1>About This Elevator</h1>
          <p>I started working on this project when I was reviewing third-party APIs in React. I had created a Frankenapp and Github repo to play around with third-party API calls, using several from this list of third-party APIs. 

            One of the APIs I found was this one: 

            which pulls data from NASA's APOD (Astronomy Photo Of the Day) website. You can see a sample image, the most recent, below. I decided to use the nebula images for this project, since they look cool, and since they would be a fun way to add visual interest and explore presentation and container elements in React.

              My second-favorite third-party API is this one, which shows you random pictures of foxes. I've been trying to come up with an organic way to integrate it into a project for a while, but nothing so far. If you have a use for a random fox, I recommend it!</p>

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