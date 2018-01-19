import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
          </ul>

          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;