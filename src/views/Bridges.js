import React from 'react';
import { NavLink } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";

import BridgeData from "../bridgeData";

import '.././App.scss';

function dataToBridges(){
  return ( <h1>asd</h1>)
}

class Bridges extends React.Component {

  render(){

    const bridgeList = BridgeData.map(bridgeItem => {
      return (
        <div className="bridgeItem">
          <NavLink to={"/bridge/"+bridgeItem.orderId}>
            <img src={require(".././img/bridges/"+bridgeItem.orderId+"/i.jpg")} />
            <span className="bridgeIdLabel">{bridgeItem.orderId}</span>
          </NavLink>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="body bridgeList">
          {bridgeList}
        </div>
        <Navbar />
      </div>
    );
  }

}

// function Bridges() {
//   return (
//   );
// }

export default Bridges;
