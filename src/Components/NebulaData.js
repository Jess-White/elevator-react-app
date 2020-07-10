import React, {Component} from 'react';
import Nebula from "./Nebula";

// const urls = [
//                 "https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10"
//               ]

class NebulaData extends Component {
  constructor(props) {
        super(props);
        this.state = 
          { 
            NebularData: [], 
            returnedData: []
          }
    }

  componentDidMount() {
    fetch("https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10")
    .then(response => response.json())
    .then(response => this.setState({
      NebularData: response
    }))
  }

  // componentDidMount() {
  //   Promise.all(urls.map(url => 
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(response => this.state.returnedData.push(response))
  //         ))
  //     .then(response => 
  //       this.setState({
  //         NebularData: this.state.returnedData[0]
  //       }))
  //     };

  render() {

    console.log(this.state.NebularData);

    if (!this.state.returnedData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      this.state.NebularData.map((result, index) => (
        <Nebula 
          result={result}
          key={index}
        />
        )
      )
    )
  };

}

export default NebulaData;