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
        <div>
          <h1>About Ascension</h1>
          <p>

          This project was created in response to a technical challenge: "Build a virtual elevator." We were encouraged to be creative, and to build a fully-realized project, so I decided to create a React app with the floors as React components. When I received this challenge, I was reviewing third-party API requests in React, so I decided to integrate that work into my project.

          I started by digging around in this list of third-party APIs, and decided to work with this one, which was built as a supplement for NASA's Astronomy Photo of the Day (APOD) API, since the programmer wasn't satisfied with NASA's setup. The photographs are gorgeous, but also because it's extremely well-organized and consistent and includes a lot of query options for playing around with data. 

          I decided that I wanted to figure out how to render images from the API as "floors" in the elevator, so that when you clicked on a button, you'd be routed to a different floor. The "buttons" would be routes in a navigation bar, and the floors would be components set up as routes using React router. 

          First I built my data component with the API call, mapping the results into an array similar to the one below. 

          Then I built my floor components, along with a main page and header element. 

          Then I set up React router and built a navigation bar for the router links. 

          Then I spent like two days making an elevator door component and some super sweet glowy buttons. I used this free background image site to make everything look like the set of Star Trek: Insurrection, the best Star Trek movie and the non pareil of space opera art design. 

          Finally, it was time to program in the core functionality of the app! 

          This is what the APOD API data looks like:


          I added logic in the router that passes in an array index (0-9) for each Navlink in the Navigation bar, so that when you click on a "button," you're routed to a "Floor" that pulls data from a corresponding object in the data array. The "url" value in each object is rendered as the background image source for the Elevator Door component's Sliding Door Element background panel. 

          The Basement, Lobby, Penthouse, and Rooftop floors are hard-coded with images outside of the array, and the About page is a separate link altogether. 

          </p>

          <h1>First APOD API Call: "Most Recent"</h1>
          <h1>{this.state.APOData.title}</h1>
          <img style={{width: "700px", height: "500px"}}
            src={this.state.APOData.url} alt=""></img>
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