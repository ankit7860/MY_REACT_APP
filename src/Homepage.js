import React from "react";
// import { Router } from "../../../../../../home/ankit/.cache/typescript/2.6/node_modules/@types/react-router";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";

export default class Form extends React.Component {
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
				<div>
					<header>Welcome to my App</header>
					<h3><Link to={'/'}>Home</Link></h3>
					<div>
						<li><Link to={'/register'}>Signup</Link></li>
						<li><Link to={'/login'}>Login</Link></li>
					</div>
					
					{/* <Switch>
						<Route 
							render={(routeProps) => (
								<Register onChange={fields => this.onChange(fields)} />
							)}
						/>
					</Switch>
					 */}
					{/* <Switch>
						<Route 
							render={(routeProps) => (
								<Login onChange={fields => this.onChange(fields)} />
							)}
						/>
					</Switch> */}

					<Switch>
						<Route path='/register' render={(routeProps) => (
								<Register onChange={fields => this.onChange(fields)} />
							)} />
					</Switch>
					
					<Switch>
						<Route exact path='/login' render={(routeProps) => (
								<Login onChange={fields => this.onChange(fields)} />
							)} />
          </Switch>
					
					<p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
				</div> 
			</Router>       
    );
  };
};
