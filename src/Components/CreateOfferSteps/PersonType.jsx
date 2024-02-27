import React from "react";
import "./stepstyle.css";
import { Link } from "react-router-dom";
import company from "../../Assets/account_balance.svg";
import user from "../../Assets/user 1.png";
import { useOfferCreationContext } from "../../Context/ContextProvider";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const PersonType = ({ onNextStep }) => {
  const { setPersonTypeData } = useOfferCreationContext();

  const handleButtonClick = (type) => {
    // Update context with the selected type
    setPersonTypeData(type);
    // Proceed to the next step
    onNextStep();
  };

  return (
    <div>
      <div className="createOfferSection">
        <h1>What Kind of Person?</h1>
        <p>Select the type of client</p>
        <div className="btnContainer">
          <button
            className="linkCreateOffer"
            onClick={() => handleButtonClick("Company")}
          >
            <img src={company} alt="" />
            Company
          </button>
          <button
            className="linkCreateOffer"
            onClick={() => handleButtonClick("Private Person")}
          >
            <img src={user} alt="" />
            Private Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonType;
