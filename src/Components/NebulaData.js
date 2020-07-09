import React, {Component} from 'react';

const urls = [
                "https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10"
              ]

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
      // .then(
      //   response => 
      //   this.state.NebularData.map((result, index)
      //     ({
      //       url: result.url,
      //       title: result.title,
      //       date: result.date,
      //       description: result.description,
      //       apod_site: result.apod_site
      //     })
      //   )
      };

  render() {

    if (!this.state.returnedData) {
      return(
        <h1>Ground Control to Major Tom....</h1>
        )
    }

    return (
      this.state.NebularData
      )
  };

}

export default NebulaData;