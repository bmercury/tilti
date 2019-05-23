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
    const selectedBridge = bridgeData[params.bridgeId];
    // const bridgeList = BridgeData.map(bridgeItem => {
    //   return (
    //     <div className="bridgeItem">
    //       <NavLink to="/bridge/:2">
    //         <img src={require(".././img/bridges/"+bridgeItem.orderId+"/i.jpg")} />
    //         <span className="bridgeIdLabel">{bridgeItem.orderId}</span>
    //       </NavLink>
    //     </div>
    //   )
    // });

    return (
      <div className="container">
        <div className="body bridgeList">
          {selectedBridge.orderId}
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

export default Bridge;
