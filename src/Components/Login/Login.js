import React from "react";
import "./Login.css";

function Login() {
  return (
    <div id="form">
      <h2>Login</h2>

      <form action="#" method="get">
        <div className="form-control">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-control">
          <input type="password" name="Pwd" id="pwd" placeholder="Password" />
        </div>
        <div className="form-control">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="submit" value="Login" id="submit" />
        <p>
          Don't have an account? <a href="#">Create New Account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
