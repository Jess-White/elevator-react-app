import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Jumbotron fluid style={{backgroundColor: "#000000"}}>
              <Container fluid>
                <div className="row">
                  <img src="/Ascension_logo.png" alt=""/>
                  <h2 style={{
                    margin: "auto", 
                    color: "white", 
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    fontStretch: "expanded",
                    fontSize: 30
                  }}>Going up?</h2>
                </div>
              </Container>
            </Jumbotron>
    </header>
    )
}

export default Header;