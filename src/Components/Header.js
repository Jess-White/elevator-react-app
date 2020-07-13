import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import NavLink from "react-bootstrap/NavLink";
// import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import Modal from "./Modal";

const customStyles = {
  overlay: {zIndex: 100000000},
  color: "#34ffff",
  background: "black",
  position: "fixed"
};

function Header() {
  return (
    <header>
      <Jumbotron fluid className="header banner-green">
      <div className="row">
      <div className="panel">
              <Container fluid>
                <div className="column align-left logo">
                  <img src="/LogoMakr_3dALOz.png" alt=""/>
                </div>

                
              </Container>
      </div>
      <div className="column header-buttons">
      <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand-top" href="https://github.com/Jess-White/elevator-react-app"><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></NavLink>
      </div>
      <div className="column header-buttons">
      <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand-top" href="https://www.linkedin.com/in/jess-white-chicago/"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></NavLink>
      </div>
      <div className="column header-buttons">
      <Popup modal style={customStyles} trigger={<button className="navbar-brand-top"><h1>abt</h1></button>}>
        <div>
        <Modal />
        </div>
      </Popup>
      </div>
      <div className="column header-buttons">
      <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand-top" href="https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&number=10"><h1>raw</h1></NavLink>
      </div>
      <div className="column header-buttons">
      <NavLink onClick={() => this.props.handleFloorChange(2)} className="navbar-brand-top" href="https://apodapi.herokuapp.com"><h1>src</h1></NavLink>
      </div>
      </div>
            </Jumbotron>
    </header>
    )
}

export default Header;