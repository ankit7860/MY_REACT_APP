import React from "react";

export default class Form extends React.Component {
  state = {
  };

	signup = e => {
		e.preventDefault();
		// this.props.onSubmit(this.state);
		alert('Please Signup');
	};


	login = e => {
		e.preventDefault();
		// this.props.onSubmit(this.state);
		alert('Please login');
	};

  render() {
    return (
      <div>
				<header>Welcome to my App</header>
				<div>
					<button onClick={e => this.signup(e)}>Signup</button>
					<button onClick={e => this.login(e)}>Login</button>
				</div>
			</div>        
    );
  };
};
