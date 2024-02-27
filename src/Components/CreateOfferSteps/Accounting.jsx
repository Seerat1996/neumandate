import React from "react";
import "./stepstyle.css";
import company from "../../Assets/account_balance.svg";
import user from "../../Assets/user 1.png";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const Accoutning = ({ onNextStep }) => {
  const { setAccountingData } = useOfferCreationContext();

  const handleButtonClick = (type) => {
    setAccountingData(type);

    onNextStep();
  };
  return (
    <div>
      <div className="createOfferSection">
        <h1>Accounting?</h1>
        <p>Accounting client</p>
        <div className="stepThreeContainer">
          <button
            className="linkStepThree"
            onClick={() => handleButtonClick("No, I'm Not")}
          >
            <CancelIcon />
            No, I'm Not
          </button>
          <button
            className="linkStepThree"
            onClick={() => handleButtonClick("Yes, I'm")}
          >
            <CheckCircleIcon />
            Yes, I'm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accoutning;
