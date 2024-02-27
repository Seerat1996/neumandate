import React, { useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const StepTwo = ({ onNextStep }) => {
  const { setStepTwoData } = useOfferCreationContext();
  const [balance, setBalance] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setBalance(inputValue);
    }
  };

  const handleSaveData = () => {
    setStepTwoData(balance);
    onNextStep();
  };

  return (
    <div>
      <div className="stepsSection">
        <h1>How much the balance sheet?</h1>
        <p>Input the balance sheet</p>
        <div className="stepsContainer ">
          <div className="rangeValue">
            <p>
              <EuroIcon />
              17,500
            </p>
            <p>
              <EuroIcon />
              10,000,000
            </p>
          </div>
          <input
            placeholder="Input balance here"
            type="text"
            value={balance}
            onChange={handleInputChange}
          />
          <button
            className=" btnSaveData"
            disabled={!balance}
            onClick={handleSaveData}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
