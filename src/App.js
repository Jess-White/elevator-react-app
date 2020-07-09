import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Component} from 'react';
import Navibar from "./Components/Navibar";

import Galaxies from "./Components/Galaxies";
import Galaxy from "./Components/Galaxy";
import About from "./Components/About";
import Navigation from './Components/Navigation';

import ElevatorDoor from './Components/Floors/ElevatorDoor';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FloorOne from "./Components/Floors/FloorOne";
import FloorTwo from "./Components/Floors/FloorTwo";
import FloorThree from "./Components/Floors/FloorThree";
import FloorFour from "./Components/Floors/FloorFour";
import FloorFive from "./Components/Floors/FloorFive";
import FloorSix from "./Components/Floors/FloorSix";
import FloorSeven from "./Components/Floors/FloorSeven";
import FloorEight from "./Components/Floors/FloorEight";
import FloorNine from "./Components/Floors/FloorNine";
import FloorTen from "./Components/Floors/FloorTen";
import Penthouse from "./Components/Floors/Penthouse";
import Rooftop from "./Components/Floors/Rooftop";
import Basement from "./Components/Floors/Basement";

class App extends Component {
  render() {
  return (

      <div>

      <div>
        <Navibar />
      </div>

      <div>
        <ElevatorDoor />
      </div>

      <div>
      <Galaxies />
      </div>

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