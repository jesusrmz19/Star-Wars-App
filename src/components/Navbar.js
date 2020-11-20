import React from 'react';
import MenuItem from './MenuItem';

class Navbar extends React.Component {
      render() {
          return (
        <navbar className="navbar__container">
          <div className="logo"></div>
          <div className="navbar">
              <MenuItem tagline="Movies"/>
              <MenuItem tagline="Characters"/>
              <MenuItem tagline="Planets"/>
          </div>
          <p className="thanks">This is example is possible thanks to the <a href="https://swapi.dev/api/" target="_blank" >Star Wars API</a> 💛</p>
        </navbar>
      );
    }
    
  }


export default Navbar;