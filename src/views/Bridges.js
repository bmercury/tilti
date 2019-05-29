import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import BridgeData from "../bridgeData";

import '.././App.scss';

class Bridges extends React.Component {

  render(){

    const bridgeList = BridgeData.map(bridgeItem => {
      return (
        <div key={bridgeItem.orderId} className="bridgeItem">
          <NavLink to={"/bridge/"+bridgeItem.orderId}>
            <img className="bridgeViewImage" src={require(".././img/bridges/"+bridgeItem.orderId+"/i.jpg")} alt="Tilta attēls" />
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
