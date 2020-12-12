import React from 'react';
import { NavLink } from 'react-router-dom';

class MenuItem extends React.Component {
      render() {
          return (
          <NavLink to={`/`+this.props.tagline} className="menuitem">{this.props.tagline}</NavLink>
      );
    }
    
  }


export default MenuItem;