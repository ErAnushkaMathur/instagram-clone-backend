import React from "react";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" name="username" placeholder="Enter your username" />
          <input type="password" name="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );  
};

export default Login;
