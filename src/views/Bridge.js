import React from 'react';
import Navbar from "./Navbar";

import BridgeData from "../bridgeData";

import '.././App.scss';


class Bridge extends React.Component {

  render(){

    const { match: { params } } = this.props;
    const selectedBridge = BridgeData[params.bridgeId-1];
    const logo = selectedBridge.sponsors.map(i=>{
      return ( <div className="sponsorLogoImg"><img src={require("../img/bridges/"+selectedBridge.orderId+"/sponsor"+i.id+".png")}/></div> );
    })

    return (
      <div className="container">
        <div className="bridgeItem bridgeItem--no-padding">
          <img src={require("../img/bridges/"+params.bridgeId+"/i.jpg")} className="bridgeViewImage" alt="Tilta attēls" />
          <div className="paddingContainer">
            <span className="bridgeIdLabel">{selectedBridge.orderId}</span>
            <h1>{selectedBridge.title}</h1><br/>
            <span className="bridgeDescription" dangerouslySetInnerHTML={{__html: selectedBridge.description}}></span><br/>
            <h3>Pasākumi šajā vietā</h3>
            <span className="bridgeActivities">{selectedBridge.activities}</span>
            <h3>Atbalstītāji</h3>
            <div className="sponsorLogos">
              {logo}
            </div>
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
