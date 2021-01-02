import React, { Component } from "react";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", password: "", phoneNo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, name, password, phoneNo } = this.state;
    event.preventDefault();
    alert(` 
      ____Your Details____\n 
      Email : ${email} 
      Name : ${name} 
      password : ${password}  
      Phone No : ${phoneNo} 
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
        <h2>Register</h2>
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
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
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
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            name="phoneNo"
            placeholder="Phone No"
            value={this.state.phoneNo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    );
  }
}

export default Signup;
