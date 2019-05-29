import React from 'react';
import Navbar from "./Navbar";
import '.././App.scss';
import bridgeCoords from "../bridgeCoords";

class Map extends React.Component {

  lon = -1;
  lat = -1;
  nearestBridge = 1;
  nearestBridgeDist = 1000000;

  updatePos = (lat, lon) => {
    this.lon = lon;
    this.lat = lat;

    this.setNearestBridge();
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  calculateDist = (lat1, lon1, lat2, lon2) => {
      var earthRadiusKm = 6371;

      var dLat = this.degreesToRadians(lat2-lat1);
      var dLon = this.degreesToRadians(lon2-lon1);

      lat1 = this.degreesToRadians(lat1);
      lat2 = this.degreesToRadians(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      return earthRadiusKm * c;
  }

  setNearestBridge = () => {
    let tmp_nb = 1;
    let min_dist = 9999999999;

    for(let i=0; i<bridgeCoords.length; i++){
      let this_lat = bridgeCoords[i]["lat"];
      let this_lon = bridgeCoords[i]["lon"];
      let this_dist = this.calculateDist(this_lat,this_lon,this.lat,this.lon);

      console.log(this_dist);

      if(this_dist < min_dist){
        min_dist = this_dist;
        tmp_nb = i+1;
      }
    }

    this.nearestBridge = tmp_nb;
    this.nearestBridgeDist = min_dist;

    this.forceUpdate();
  }


  componentDidMount(){
    navigator.geolocation.watchPosition(position => {
      // console.log(position.coords.latitude);
      this.updatePos(position.coords.latitude, position.coords.longitude);
    });
    this.setNearestBridge();
  }


  render(){

    const supportGeo = navigator.geolocation ? true : false;
    let geoStripe = <div className="userLocation"></div>;

    if(!supportGeo){
      geoStripe = <div className="userLocation geo--unsupported">Nevaru noteikt Tavu atrašanās vietu :(</div>;
    }else{
      geoStripe = <div className="userLocation">Tev vistuvāk atrodas {this.nearestBridge}. tilts</div>
  
    }


    return (
      <div className="container">
        <div className="body body--no-padding">
          {geoStripe}
          <iframe title="Karte ar tiltu koordinātēm" className="mapFrame" src="https://www.google.com/maps/d/embed?mid=191Dw262dw5w1vEWbAI0wCueVkIsvbFOJ&hl=en" width="640" height="480"></iframe>
        </div>
        {this.nearestBridgeDist}
        <Navbar />
      </div>
    );
  }

}


export default Map;
