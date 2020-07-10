import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Jumbotron fluid className="header">
      <div className="panel">
              <Container fluid>
                <div className="row logo">
                  <img src="/Ascension_logo.png" alt=""/>
                </div>
              </Container>
      </div>
            </Jumbotron>
    </header>
    )
}

export default Header;