import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Auth = () => {
  const url = "http://localhost:8000";
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const userSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const getSignUpData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${url}/signup`, signup);
      alert("signup successful");
      setSignup({ email: "", password: "", confirmPassword: "" });
      setShowLogin(true);
    } catch (error) {
      console.log(error);
      alert("signup failed");
    }
  };

  const userLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const getLoginData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${url}/login`, login);
      setLogin({ email: "", password: "" });
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("login successful");
      navigate('/onboard')
    } catch (error) {
      console.log(error);
      alert("login failed");
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{showLogin ? "Login" : "Signup"}</h2>
      {showLogin ? (
        <form
          style={{
            width: "40%",
            margin: "auto",
            border: "1px solid lightgray",
            padding: "2rem",
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={userLogin}
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={login.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={userLogin}
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={login.password}
            />
          </div>
          <button
            onClick={getLoginData}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
          <h6 className="mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setShowLogin(!showLogin);
              }}
              style={{ cursor: "pointer" }}
              className="text-info fs-5"
            >
              Signup
            </span>
          </h6>
        </form>
      ) : (
        <form
          style={{
            width: "40%",
            margin: "auto",
            border: "1px solid lightgray",
            padding: "2rem",
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={userSignup}
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={signup.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={userSignup}
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={signup.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={userSignup}
              name="confirmPassword"
              type="password"
              className="form-control"
              id="confirmPassword"
              value={signup.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={getSignUpData}
          >
            Signup
          </button>
          <h6 className="mt-4">
            Already have an account?{" "}
            <span
              onClick={() => {
                setShowLogin(!showLogin);
              }}
              style={{ cursor: "pointer" }}
              className="text-info fs-5"
            >
              Login
            </span>
          </h6>
        </form>
      )}
    </div>
  );
};

export default Auth;
