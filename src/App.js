import React from 'react';
import Home from "./views/Home"
import Bridges from "./views/Bridges";
import Bridge from "./views/Bridge";
import Map from "./views/Map";
import Schedule from "./views/Schedule";
import { Route, HashRouter as Router} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/bridges" component={Bridges} />
        <Route path="/map" component={Map} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/bridge/:bridgeId" component={Bridge} />
    </Router>
  );
}

export default App;
