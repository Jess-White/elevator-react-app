import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Jumbotron className="bottom-part" style={{color: "red"}}>
        <Container >
        </Container>
      </Jumbotron>
    </footer>
    )
}

export default Footer;