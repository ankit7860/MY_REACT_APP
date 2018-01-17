import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Form'}>Form</Link></li>
          </ul>

          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route 
              render={(routeProps) => (
                <Form onChange={fields => this.onChange(fields)} />
              )}
             />
          </Switch>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </Router>
    );
  }
}

export default App;