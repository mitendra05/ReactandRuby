import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userData = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "merchant", password: "merchant123", role: "merchant" },
  { id: 3, username: "employee", password: "employee123", role: "employee" },
];

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userData.find(
      (u) => u.username === username && u.password === password
    );
    console.log(user);

    if (user) {
      alert(`Welcome, ${user.role}!`);
      sessionStorage.setItem("role", user.role);
      setIsLoggedIn("true");
    } else {
      setError("Username and Password are incorrect");
    }
  };

  const handleInputChange = () => {
    setError("");
  };

  if (isLoggedIn) {
    return <div>{navigate("/dashboard")}</div>;
  } else {
    return (
      <>
        <div className="login-background">
          <div className="login-container">
            <div className="login-firstcontainer">
              <h1>Centpays</h1>
              <div className="loginBG-img"></div>
            </div>
            <div className="login-secondcontainer">
              <div className="login-form">
                <h1>Login</h1>
                <div className="login-funtionality">
                  <div>{error && <p className="alert">{error}</p>}</div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={handleInputChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleInputChange}
                  />
                  <button className="btn" onClick={handleLogin}>
                    Sign In
                  </button>
                </div>
                <a href="www.google.com" className="loginbottomlink">
                  Forgotten Password?
                </a>
                <div className="line"></div>
                <div className="Logintoplink">
                  Create a new account. <span>Sign Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
