import React from "react";

function Login() {
  return (
    <div>

      <h1>Login</h1>

      <form>

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

        <a href="/forgot-password">Forgot Password?</a>

        <br /><br />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;