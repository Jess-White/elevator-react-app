import React from 'react'
import {Jumbotron} from 'react-bootstrap'

function SlidyBar() {
  return (
      <Jumbotron fluid className="banner-black">
        <div className="slidy-holder">
        <span id="slidy-basement" className="navbar-brand-slidy">B</span>
        <span id="slidy-lobby" className="navbar-brand-slidy">L</span>
        <span id="1" className="navbar-brand-slidy">1</span>
        <span id="2" className="navbar-brand-slidy">2</span>
        <span id="3" className="navbar-brand-slidy">3</span>
        <span id="4" className="navbar-brand-slidy">4</span>
        <span id="5" className="navbar-brand-slidy">5</span>
        <span id="6" className="navbar-brand-slidy">6</span>
        <span id="7" className="navbar-brand-slidy">7</span>
        <span id="8" className="navbar-brand-slidy">8</span>
        <span id="9" className="navbar-brand-slidy">9</span>
        <span id="0" className="navbar-brand-slidy">10</span>
        <span id="slidy-penthouse" className="navbar-brand-slidy darken">P</span>
        <span id="slidy-rooftop" className="navbar-brand-slidy">R</span>
        </div>
      </Jumbotron>
    )
}

export default SlidyBar;