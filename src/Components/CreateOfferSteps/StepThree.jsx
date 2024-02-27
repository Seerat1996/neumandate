import React, { useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const StepThree = ({ onNextStep }) => {
  const { setStepThreeData } = useOfferCreationContext();
  const [depreciation, setDepreciation] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setDepreciation(inputValue);
    }
  };

  const handleSaveData = () => {
    setStepThreeData(depreciation);
    onNextStep();
  };

  return (
    <div>
      <div className="stepsSection">
        <h1>How much the depreciation?</h1>
        <p>Input the depreciation</p>
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
            placeholder="Input depreciation here"
            type="text"
            value={depreciation}
            onChange={handleInputChange}
          />
          <button
            className=" btnSaveData"
            disabled={!depreciation}
            onClick={handleSaveData}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
