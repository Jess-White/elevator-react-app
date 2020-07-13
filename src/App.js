import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Component} from 'react';
import Navibar from "./Components/Navibar";

import Header from './Components/Header';
import Footer from './Components/Footer';

import ElevatorDoor from './Components/Floors/ElevatorDoor';

class App extends Component {

  state = {
    NebularData: [],
    currentFloor: 0,
    result: {
      url: "https://apod.nasa.gov/apod/image/0702/helix_spitzer_720.jpg"
    }
  }

  // const navbarSlidyElements = document.querySelectorAll(‘.navbar-brand-slidy’)

  componentDidMount() {
    console.log(this.props)
    fetch("https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10")
    .then(response => response.json())
    .then(response => this.setState({
      NebularData: response
    }))
  }

  handleFloorChange = (floor) => {
    if (floor === false) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }
    if (floor === "P") {
      this.setState({
        result: {url: "https://i.dailymail.co.uk/1s/2020/01/02/21/22924692-7846445-image-a-8_1577999656704.jpg"
          }
        })
       document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
        document.getElementById('slidy-penthouse').classList.add('indicate-floor')
        return
      } else if (floor === "R") {
        this.setState({
          result: {
            url: "https://static.scientificamerican.com/blogs/assets/Image/DES_zoom_offcenter.png" 
          }
        })
        document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
        document.getElementById('slidy-rooftop').classList.add('indicate-floor')
        return 
      } else if (floor === "B") {
        this.setState({
          result: {
            url: "https://i0.wp.com/thescuttlefish.com/wp-content/uploads/2015/07/waitomo-glowworm-cave-new-zealand-joseph-michael-12__880.jpg"
          }
        })
        document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
        document.getElementById('slidy-basement').classList.add('indicate-floor')
        return
      } else if (floor === "L") {
        this.setState({
          result: {
            url: "https://media.wired.com/photos/5b6cc26261743303b6869f59/master/pass/perseid-591937528.jpg"
          }
        })
        document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
        document.getElementById('slidy-lobby').classList.add('indicate-floor')
        return 
      };
    console.log(floor);
    this.setState({
      result: this.state.NebularData[floor]
    })
     document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
     document.getElementById(floor).classList.add('indicate-floor')
  }

  render() {

  return (

      <div>
      <div>
        <Header />
      </div>
      <container className="container flex">

      <div>
      <div>
        <div>
        <section className="buttons middle">
          <div>
            <Navibar handleFloorChange={this.handleFloorChange}/>
          </div>
        </section>
      </div>

      <div>
        <section className="elevator middle">
          <div> 
            <ElevatorDoor result={this.state.result}/>
          </div>
        </section>
        </div>
      </div>

        <div>
          <Footer />
        </div>
        </div>

      </container>
      </div>
  );
}
}

export default App;