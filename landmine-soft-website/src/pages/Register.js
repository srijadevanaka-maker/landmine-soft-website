import React from "react";

function Register() {
  return (
    <div>

      <h1>Register</h1>

      <form>

        <div>
          <label>Full Name</label><br />
          <input type="text" placeholder="Enter your full name" />
        </div>

        <br />

        <div>
          <label>Email</label><br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input type="password" placeholder="Enter your password" />
        </div>

        <br />

        <div>
          <label>Confirm Password</label><br />
          <input type="password" placeholder="Confirm your password" />
        </div>

        <br />

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;