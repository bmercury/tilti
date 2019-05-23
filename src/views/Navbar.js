import React from 'react';
import '.././App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap, faList, faMapPin } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="appNav">
        <NavLink exact to="/" activeClassName="nav--active"><FontAwesomeIcon icon={faHome} /></NavLink>
        <NavLink to="/map" activeClassName="nav--active"><FontAwesomeIcon icon={faMap} /></NavLink>
        <NavLink to="/bridges" activeClassName="nav--active"><FontAwesomeIcon icon={faMapPin} /></NavLink>
        <NavLink to="/schedule" activeClassName="nav--active"><FontAwesomeIcon icon={faList} /></NavLink>
    </nav>
  );
}

export default Navbar;
