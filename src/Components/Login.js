import React, { Component } from "react";
import Joi from "joi-browser";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainAtoms: 2 })
      .label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    alert(` 
      ____Your Details____
      Email : ${email} 
      Password : ${password} 
    `);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const formStyle = {
      padding: "1rem",
      margin: "100px auto",
      width: "460px",
      color: "white",
    };
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
