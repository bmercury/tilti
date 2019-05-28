import React from 'react';
import '.././App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap, faList, faMapPin, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render(){

    if(this.props.simple==="true"){
      return (
        <nav className="appNav">
            <NavLink to="/bridges" activeClassName="nav--active"><FontAwesomeIcon icon={faChevronLeft} /></NavLink>
        </nav>
      );
    }else{
      return (
        <nav className="appNav">
            <NavLink exact to="/" activeClassName="nav--active"><FontAwesomeIcon icon={faHome} /></NavLink>
            <NavLink to="/map" activeClassName="nav--active"><FontAwesomeIcon icon={faMap} /></NavLink>
            <NavLink to="/bridges" activeClassName="nav--active"><FontAwesomeIcon icon={faMapPin} /></NavLink>
            <NavLink to="/schedule" activeClassName="nav--active"><FontAwesomeIcon icon={faList} /></NavLink>
        </nav>
      );
    }
  }
}

export default Navbar;
