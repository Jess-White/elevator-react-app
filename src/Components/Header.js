import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import NavLink from "react-bootstrap/NavLink";

function Header() {
  return (
    <header>
      <Jumbotron fluid className="header">
      <div className="panel">
              <Container fluid>
                <div className="row logo">
                  <img src="/Ascension_logo.png" alt=""/>
                </div>

                <div className="header-buttons">
                <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
                <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand" to="/floor-two">2</NavLink>
                </div>
              </Container>
      </div>
            </Jumbotron>
    </header>
    )
}

export default Header;