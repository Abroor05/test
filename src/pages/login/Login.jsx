import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/Link";
import { setToken } from "../../services/Token";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setErrorInput] = useState({
    name: false,
    password: false,
  });

  const login = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: name,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.access) {
          setToken(result.access);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: name.trim() === "",
      password: password.trim() === "",
    };

    setErrorInput(errors);

    const hasError = Object.values(errors).some((err) => err);
    if (!hasError) {
      login();
    }
  };

  return (
    <section className="signInSection">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="signInAll">
            <div className="signInLeft">
              <img
                src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?semt=ais_hybrid&w=740"
                alt=""
              />
            </div>

            <div className="signInRight">
              <span>
                <label htmlFor="name">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={
                    errorInput.name ? "To‘ldiring!" : "Enter Your Name"
                  }
                  id="name"
                  className={errorInput.name ? "input-error" : ""}
                  style={errorInput.name ? { color: "red" } : {}}
                />
              </span>

              <span>
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder={
                    errorInput.password ? "To‘ldiring!" : "Enter Your Password"
                  }
                  id="password"
                  className={errorInput.password ? "input-error" : ""}
                />
              </span>

              <span>
                <button type="submit" className="loginBtn">
                  Login
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
