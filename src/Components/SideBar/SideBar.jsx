import React, { useState } from "react";
import logo from "../../Assets/Logo Small.png";
import { Link } from "react-router-dom";
import dashboardicon from "../../Assets/Menu Buttons/dashboardicon.png";
import createoffer from "../../Assets/Menu Buttons/createoffericon.png";
import manageoffer from "../../Assets/Menu Buttons/manageoffericon.png";
import setting from "../../Assets/Menu Buttons/settingicon.png";
import "./style.css";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: dashboardicon,
    },
    {
      path: "/createoffer",
      name: "Create Offer",
      icon: createoffer,
    },
    {
      path: "/manageoffer",
      name: "Manage Offer",
      icon: manageoffer,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "8rem" }}>
        <div className="topSection">
          <img className="logo" src={logo} alt="" onClick={toggle} />
          <h1 style={{ display: isOpen ? "block" : "none" }}>Neumandate.de</h1>
        </div>
        <div className="middleSection">
          {menuItems.map((items, index) => (
            <Link
              to={items.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="iconText">
                <img src={items.icon} alt="" />
              </div>
              <div
                className="linkText"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {items.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="bottomSection">
          <Link to="/setting" className="link" activeclassname="active">
            <div className="iconText">
              <img src={setting} alt="" />
            </div>
            <div
              className="linkText"
              style={{ display: isOpen ? "block" : "none" }}
            >
              Setting
            </div>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
