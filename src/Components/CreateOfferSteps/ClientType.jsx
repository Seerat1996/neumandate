import React from "react";
import "./stepstyle.css";
import icon1 from "../../Assets/icon 1.png";
import icon2 from "../../Assets/Icon 2.png";
import icon3 from "../../Assets/Icon 3.png";
import icon4 from "../../Assets/partnership-outline.png";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const ClientType = ({ onNextStep }) => {
  const { setClientTypeData } = useOfferCreationContext();
  // const handleNextStep = () => {
  //   onNextStep();
  // };

  const handleButtonClick = (type) => {
    // Update context with the selected type
    setClientTypeData(type);
    // Proceed to the next step
    onNextStep();
  };
  return (
    <div>
      <div className="createOfferSection">
        <h1>What is the client type?</h1>
        <p>Select the type of client</p>
        <div className="stepTwoContainer ">
          <button
            className=" linkStepTwo"
            onClick={() => handleButtonClick("Kapitalgesellchaft")}
          >
            <img src={icon1} alt="" />
            Kapitalgesellchaft
          </button>
          <button
            className="linkStepTwo"
            onClick={() => handleButtonClick("Verien")}
          >
            <img src={icon2} alt="" />
            Verien
          </button>
          <button
            className="linkStepTwo"
            onClick={() => handleButtonClick("Kapitalgesellchaft")}
          >
            <img src={icon3} alt="" />
            Kapitalgesellchaft
          </button>
          <button
            className="linkStepTwo"
            onClick={() => handleButtonClick("Personengesellchaft")}
          >
            <img src={icon4} alt="" />
            Personengesellchaft
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientType;
