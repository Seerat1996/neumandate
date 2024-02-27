import React, { useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const StepOne = ({ onNextStep }) => {
  const { setStepOneData } = useOfferCreationContext();
  const [revenue, setRevenue] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setRevenue(inputValue);
    }
  };

  const handleSaveData = () => {
    setStepOneData(revenue);
    onNextStep();
  };

  return (
    <div>
      <div className="stepsSection">
        <h1>How much the revenue?</h1>
        <p>Input the yearly revenue</p>
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
            type="text"
            value={revenue}
            onChange={handleInputChange}
            placeholder="Input revenue here"
          />
          <button
            className=" btnSaveData"
            disabled={!revenue}
            onClick={handleSaveData}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
