import React from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

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
        <img src={require(".././img/bridges/"+bridgeItem.orderId+"/i.jpg")} />
          {bridgeItem.title}<br/>
          {bridgeItem.activities}
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
