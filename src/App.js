import React from 'react';
import Home from "./views/Home"
import Bridges from "./views/Bridges";
import Map from "./views/Map";
import { Route, BrowserRouter as Router} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/bridges" component={Bridges} />
        <Route path="/map" component={Map} />
    </Router>
  );
}

export default App;
