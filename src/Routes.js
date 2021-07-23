import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import BeerList from "./Pages/BeerList";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import 'antd/dist/antd.css';
import infoModal from "./Pages/infoModal";
// import ReactGA from "react-ga";

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />  
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/beerlist/:id" component={infoModal} />  
      </Switch>
    </Router>
  );
};

export default Routes;
