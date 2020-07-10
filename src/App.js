import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Component} from 'react';
import Navibar from "./Components/Navibar";

// import Galaxies from "./Components/Galaxies";
// import Galaxy from "./Components/Galaxy";
// import About from "./Components/About";
// import Navigation from './Components/Navigation';

import Header from './Components/Header';
import Footer from './Components/Footer';

import ElevatorDoor from './Components/Floors/ElevatorDoor';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import FloorOne from "./Components/Floors/FloorOne";
// import FloorTwo from "./Components/Floors/FloorTwo";
// import FloorThree from "./Components/Floors/FloorThree";
// import FloorFour from "./Components/Floors/FloorFour";
// import FloorFive from "./Components/Floors/FloorFive";
// import FloorSix from "./Components/Floors/FloorSix";
// import FloorSeven from "./Components/Floors/FloorSeven";
// import FloorEight from "./Components/Floors/FloorEight";
// import FloorNine from "./Components/Floors/FloorNine";
// import FloorTen from "./Components/Floors/FloorTen";
// import Penthouse from "./Components/Floors/Penthouse";
// import Rooftop from "./Components/Floors/Rooftop";
// import Basement from "./Components/Floors/Basement";

class App extends Component {

  state = {
    NebularData: [],
    currentFloor: 0,
    result: {
      url: "https://apod.nasa.gov/apod/image/0702/helix_spitzer_720.jpg"
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch("https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10")
    .then(response => response.json())
    .then(response => this.setState({
      NebularData: response
    }))
  }

  handleFloorChange = (floor) => {
    if (floor === "P") {
      this.setState({
        result: {url: "https://i.dailymail.co.uk/1s/2020/01/02/21/22924692-7846445-image-a-8_1577999656704.jpg"
          }
        })
        return
      } else if (floor === "R") {
        this.setState({
          result: {
            url: "https://static.scientificamerican.com/blogs/assets/Image/DES_zoom_offcenter.png" 
          }
        })
        return 
      } else if (floor === "B") {
        this.setState({
          result: {
            url: "https://i0.wp.com/thescuttlefish.com/wp-content/uploads/2015/07/waitomo-glowworm-cave-new-zealand-joseph-michael-12__880.jpg"
          }
        })
        return
      } else if (floor === "L") {
        this.setState({
          result: {
            url: "https://media.wired.com/photos/5b6cc26261743303b6869f59/master/pass/perseid-591937528.jpg"
          }
        })
        return 
      } else if (floor === "?") {
        this.setState({
          result: {
            url: "myphoto.jpg"
          }
        })
        return 
      };
    console.log(floor);
    this.setState({
      result: this.state.NebularData[floor]
    })
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

// <BrowserRouter>
//         <Navigation />
//         <Switch>
          
//           <Route 
//             exact path={"/galaxy-index"} component={GalaxyIndex} 
//           />

//           <Route 
//             exact path={"/galaxy-show"} component={GalaxyShow} 
//           />

//           <Route 
//             exact path={"/about"} component={About} 
//           />
//         </Switch>
//       </BrowserRouter>

// <BrowserRouter>
//   <div>
//     <Navigation />
//       <Switch>
//         <Route path="/" component={Lobby} exact/>

//         <Route path="/basement" component={Basement}/>
//         <Route path="/penthouse" component={Penthouse}/>
//         <Route path="/rooftop" component={Rooftop}/>

//         <Route path="/floor-one" component={FloorOne}/>
//         <Route path="/floor-two" component={FloorTwo}/>
//         <Route path="/floor-three" component={FloorThree}/>
//         <Route path="/floor-four" component={FloorFour}/>
//         <Route path="/floor-five" component={FloorFive}/>
//         <Route path="/floor-six" component={FloorSix}/>
//         <Route path="/floor-seven" component={FloorSeven}/>
//         <Route path="/floor-eight" component={FloorEight}/>
//         <Route path="/floor-nine" component={FloorNine}/>
//         <Route path="/floor-ten" component={FloorTen}/>
//         <Route component={Error}/>
//      </Switch>
//      {/*/ <IdeasContainer /> /*/}
//   </div> 
// </BrowserRouter>

// <header className="App-header">
//         This is my elevator app!
//       </header>

//       <ElevatorDoor />

// <BrowserRouter>
//    <div>
//      <Navigation />
//        <Switch>
//          <Route path="/" component={Lobby} exact/>

//          <Route path="/basement" component={Basement}/>
//          <Route path="/penthouse" component={Penthouse}/>
//          <Route path="/rooftop" component={Rooftop}/>

//          <Route path="/floor-one" component={FloorOne}/>
//          <Route path="/floor-two" component={FloorTwo}/>
//          <Route path="/floor-three" component={FloorThree}/>
//          <Route path="/floor-four" component={FloorFour}/>
//          <Route path="/floor-five" component={FloorFive}/>
//          <Route path="/floor-six" component={FloorSix}/>
//          <Route path="/floor-seven" component={FloorSeven}/>
//          <Route path="/floor-eight" component={FloorEight}/>
//          <Route path="/floor-nine" component={FloorNine}/>
//          <Route path="/floor-ten" component={FloorTen}/>
//          <Route component={Error}/>
//       </Switch>
//    </div> 
//  </BrowserRouter>

// <div>
//        <BrowserRouter>
//         <div>
//           <Navigation />
//             <Switch>
//               <Route path="/floor-one" component={FloorOne}/>
//               <Route path="/floor-two" component={FloorTwo}/>
//               <Route path="/floor-three" component={FloorThree}/>
//               <Route path="/floor-four" component={FloorFour}/>
//               <Route path="/floor-five" component={FloorFive}/>
//               <Route path="/floor-six" component={FloorSix}/>
//               <Route path="/floor-seven" component={FloorSeven}/>
//               <Route path="/floor-eight" component={FloorEight}/>
//               <Route path="/floor-nine" component={FloorNine}/>
//               <Route path="/floor-ten" component={FloorTen}/>
//               <Route path="/penthouse" component={Penthouse}/>
//               <Route path="/rooftop" component={Rooftop}/>
//               <Route component={Error}/>
//            </Switch>
//         </div>
//       </BrowserRouter>
//       </div>

//       <div>
//       <Navibar/>
//       </div>



//       <ElevatorDoor />

//     </div>

// <div>

// <div>
//   <Navibar />
// </div>

// <div>
//   <ElevatorDoor />
// </div>

// <div>
// <Galaxies />
// </div>

// </div>

      // <div>

      //   <div>
      //     <Navibar />
      //   </div>

      //   <div>
      //     <ElevatorDoor />
      //   </div>

      //   <div>
      //   <Galaxies />
      //   </div>

      // </div>

      // <div>
      //   <Navibar />
      // </div>

      // <div>
      //   <ElevatorDoor />
      // </div>

      // <div>
      //   <Galaxies />
      // </div>