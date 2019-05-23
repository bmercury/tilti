import React from 'react';
import { NavLink } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";

import BridgeData from "../bridgeData";

import '.././App.scss';

function dataToBridges(){
  return ( <h1>asd</h1>)
}

class Bridge extends React.Component {

  render(){

    const { match: { params } } = this.props;
    const selectedBridge = BridgeData[params.bridgeId-1];

    return (
      <div className="container">
        <div className="bridgeItem">
          <img src={require("../img/bridges/"+params.bridgeId+"/i.jpg")} className="bridgeViewImage" />
          <div class="paddingContainer">
            <span className="bridgeIdLabel">{selectedBridge.orderId}</span>
            <h1>{selectedBridge.title}</h1><br/>
            <span>{selectedBridge.activities}</span>
          </div>
        </div>
        <Navbar simple="true" />
      </div>
    );
  }

}

// function Bridges() {
//   return (
//   );
// }

export default Bridge;
