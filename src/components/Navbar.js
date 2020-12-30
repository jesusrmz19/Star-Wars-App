import React from 'react';
import MenuItem from './MenuItem';

class Navbar extends React.Component {
      render() {
          return (
        <div className="navbar__container">
          <div className="logo"></div>
          <div className="navbar">
              <MenuItem tagline="Movies"/>
              <MenuItem tagline="Characters"/>
              <MenuItem tagline="Starships"/>
              <MenuItem tagline="Vehicles" />
          </div>
          <div>
            <p className="thanks">This project was possible thanks to the <a href="https://swapi.dev/api/" target="_blank" rel="noreferrer">Star Wars API</a> 💛</p>
            <p className="thanks">Github repo <a href="https://github.com/jesusrmz19/Star-Wars-App" target="_blank" rel="noreferrer">here</a></p>
          </div>
        </div>
      );
    }

  }


export default Navbar;