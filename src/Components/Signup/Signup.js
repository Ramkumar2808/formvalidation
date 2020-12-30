import React from "react";
import "./Signup.css";
function Signup() {
  return (
    <div id="form">
      <h2>Register</h2>

      <form action="#" method="get">
        <div className="form-control">
          <input type="text" name="uname" id="name" placeholder="Name" />
        </div>
        <div className="form-control">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-control">
          <input type="password" name="Pwd" id="pwd" placeholder="Password" />
        </div>
        <div className="form-control">
          <input
            type="password"
            name="confirmPwd"
            id="confirmPwd"
            placeholder="Re-enter Password"
          />
        </div>
        {/* <div className="form-control">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me</label>
          <a href="#">Forgot Password?</a>
        </div> */}
        <input type="submit" value="Register" id="submit" />
        <p>
          Already have an account? <a href="#">SIGN IN</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
