import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/Link";

function SignIn() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [errorInput, setErrorInput] = useState({
    username: false,
    email: false,
    password: false,
  });

  const signIn = () => {
    const raw = JSON.stringify({
      username: username,
      email: email,
      password: password,
      isadmin: isAdmin,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/users/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // agar muvofaqqiyatli bo‘lsa
        if (result) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      username: username.trim() === "",
      email: email.trim() === "",
      password: password.trim() === "",
    };

    setErrorInput(errors);

    const hasError = Object.values(errors).some((err) => err);
    if (!hasError) {
      signIn();
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
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder={
                    errorInput.username ? "To‘ldiring!" : "Enter Your Name"
                  }
                  id="name"
                  className={errorInput.username ? "input-error" : ""}
                />
              </span>

              <span>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder={
                    errorInput.email ? "To‘ldiring!" : "Enter Your Email"
                  }
                  id="email"
                  className={errorInput.email ? "input-error" : ""}
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

              <div className="SignInBtn">
                <button type="submit" className="signBtn">
                  Sign Up
                </button>
                <Link to={"/login"}>Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
