import React from 'react';
import '.././App.scss';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Schedule() {
  return (
    <div className="container">
        <div className="body">    
            Šī ir visa svēku programma.
        </div>
        <Navbar />
    </div>
  );
}

export default Schedule;
