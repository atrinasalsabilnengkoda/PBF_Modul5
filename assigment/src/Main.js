import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Collection from "./Collection";
import Contact from "./Contact";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Poernama Garden</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/collection">Collection</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/collection" component={Collection}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;