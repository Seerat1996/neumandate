import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../Assets/Socialicons/icons8-google-96.svg";
import apple from "../../Assets/Socialicons/icons8-apple-52.svg";
import facebook from "../../Assets/Socialicons/icons8-facebook.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import logo from "../../Assets/Logo.png";

const Registeration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted", formData);
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
            <h1>Sign up</h1>
            <form className="inputWrapper" onSubmit={handleSubmit}>
              <div className="nameContainer">
                <div className="inputContainer">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={FormData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="inputContainer">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={FormData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last Name"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={FormData.company}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="email">E-mail </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={FormData.email}
                  onChange={handleInputChange}
                  placeholder="sample@mail.com"
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={FormData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="containerEye"
                />
                <button className="passwordEye">
                  <RemoveRedEyeOutlinedIcon />
                </button>
              </div>

              <button className="register" type="submit">
                Sign up
              </button>
            </form>
            <p>
              Do you have an account?{" "}
              <Link to="/" className="linkStyle">
                Log in
              </Link>
            </p>
            <div className="horizontalLine">or </div>

            <div className="buttonDiv">
              <button className="registerWithGoogle">
                <img className="icon" src={google} alt="" />
                Sign up with Google
              </button>
              <button className="registerWithFacebook">
                <img className="icon" src={facebook} alt="" />
                Sign up with Facebook
              </button>
              <button className="registerWithApple">
                <img className="icon" src={apple} alt="" />
                Sign up with Apple
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registeration;
