import React from 'react';
import '.././App.scss';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Map() {
  return (
    <div className="container">
      <div className="body body--no-padding">
        <div className="userLocation">Tu šobrīd atrodies pie tilta Nr. 3</div>
        <iframe className="mapFrame" src="https://www.google.com/maps/d/embed?mid=191Dw262dw5w1vEWbAI0wCueVkIsvbFOJ&hl=en" width="640" height="480"></iframe>
      </div>
      <Navbar />
    </div>
  );
}

export default Map;
