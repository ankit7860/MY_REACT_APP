import React from "react";

export default class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    console.log('login...');
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      username: "",
      password: ""
    });
    this.props.onChange({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
