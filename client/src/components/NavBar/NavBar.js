import React, { Component } from 'react';
import japannisimo from '../../images/Japannisimo.png';


class NavBar extends Component {

  render() {
    return (
      <div>
       <nav>
          <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a onClick={() => {this.props.goHome()}} href="#lessons">Vocabulary</a>
            <a href="#practice">Practice</a>
            <a href="#kanji">Kanji</a>
            <a href="#contact">Contact Us</a>
            <img width='180px' src={japannisimo} alt="Japannisimo Logo"/>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;
