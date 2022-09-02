import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { users } = useSelector((state) => state.usersReducer);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.name === userName && user.password === password
    );

    if (user) {
      if (user.type === "admin") {
        navigate("/dashboard");
        localStorage.setItem("userId", user.id);
      } else if (user.type === "client") {
        navigate("/manage");
        localStorage.setItem("userId", user.id);
      }
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="login">
      <form className="login__container" onSubmit={handleSubmit}>
        <label>Task Tracker</label>
        <div className="login__input-box">
          <label>User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="Enter User name"
            required
          />
        </div>
        <div className="login__input-box">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="******"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
