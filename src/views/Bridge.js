import React from 'react';
import Navbar from "./Navbar";

import BridgeData from "../bridgeData";

import '.././App.scss';


class Bridge extends React.Component {

  render(){

    const { match: { params } } = this.props;
    const selectedBridge = BridgeData[params.bridgeId-1];
    const logo = selectedBridge.sponsors.map(i=>{
      return ( <img src={require("../img/bridges/"+selectedBridge.orderId+"/sponsor"+i.id+".png")}/> );
    })

    return (
      <div className="container">
        <div className="bridgeItem">
          <img src={require("../img/bridges/"+params.bridgeId+"/i.jpg")} className="bridgeViewImage" alt="Tilta attēls" />
          <div className="paddingContainer">
            <span className="bridgeIdLabel">{selectedBridge.orderId}</span>
            <h1>{selectedBridge.title}</h1><br/>
            <span dangerouslySetInnerHTML={{__html: selectedBridge.description}}></span><br/>
            <span>{selectedBridge.activities}</span>
            <span>Atbalsta:</span><br/>
            {logo}
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
