import React, { useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const StepFour = ({ onNextStep }) => {
  const { setStepFourData } = useOfferCreationContext();
  const [profit, setProfit] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setProfit(inputValue);
    }
  };

  const handleSaveData = () => {
    setStepFourData(profit);
    onNextStep();
  };

  return (
    <div>
      <div className="stepsSection">
        <h1>How much the profit?</h1>
        <p>Input the profit</p>
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
            placeholder="Input profit here"
            type="text"
            value={profit}
            onChange={handleInputChange}
          />
          <button
            className=" btnSaveData"
            disabled={!profit}
            onClick={handleSaveData}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
