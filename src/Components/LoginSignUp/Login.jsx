import React, { useState } from "react";
import "./loginsignup.css";
import { Link } from "react-router-dom";
import google from "../../Assets/Socialicons/icons8-google-96.svg";
import apple from "../../Assets/Socialicons/icons8-apple-52.svg";
import facebook from "../../Assets/Socialicons/icons8-facebook.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import logo from "../../Assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <div>
      <section className="secContainer">
        <div className="leftContainer">
          <div className="logoContainer">
            <img src={logo} alt="" />
          </div>
          <div className="textContainer">
            <h1>Neumandate.de</h1>
            <p>Calculate & Send Proposals</p>
            <p> in 60 seconds.</p>
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightContainer-Content">
            <h1>Login to your Account</h1>
            <form onSubmit={handleSubmit} className="inputWrapper">
              <div className="inputContainer">
                <label htmlFor="email">E-mail </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="sample@mail.com"
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="containerEye"
                />
                <button className="passwordEye">
                  <RemoveRedEyeOutlinedIcon />
                </button>
                <Link className="linkStyle ">Forget Password</Link>
              </div>

              <button type="submit" className="register">
                Login
              </button>
            </form>
            <p>
              Don't have account?{" "}
              <Link to="/registeration" className="linkStyle">
                Sign up
              </Link>
            </p>
            <div className="horizontalLine">or </div>

            <div className="buttonDiv">
              <button className="registerWithGoogle">
                <img className="icon" src={google} alt="" />
                Login with Google
              </button>
              <button className="registerWithFacebook">
                <img className="icon" src={facebook} alt="" />
                Login with Facebook
              </button>
              <button className="registerWithApple">
                <img className="icon" src={apple} alt="" />
                Login with Apple
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
