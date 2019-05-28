import React from 'react';
import Navbar from "./Navbar";
import '.././App.scss';
function Map() {
  return (
    <div className="container">
      <div className="body body--no-padding">
        <div className="userLocation">Tu šobrīd atrodies pie tilta Nr. 3</div>
        <iframe title="Karte ar tiltu koordinātēm" className="mapFrame" src="https://www.google.com/maps/d/embed?mid=191Dw262dw5w1vEWbAI0wCueVkIsvbFOJ&hl=en" width="640" height="480"></iframe>
      </div>
      <Navbar />
    </div>
  );
}

export default Map;
