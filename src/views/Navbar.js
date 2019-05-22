import React from 'react';
import '.././App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap, faArrowUp, faMapPin } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="appNav">
        <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
        <Link to="/map"><FontAwesomeIcon icon={faMap} /></Link>
        <Link to="/bridges"><FontAwesomeIcon icon={faMapPin} /></Link>
        <Link to="/"><FontAwesomeIcon icon={faArrowUp} /></Link>
    </nav>
  );
}

export default Navbar;
