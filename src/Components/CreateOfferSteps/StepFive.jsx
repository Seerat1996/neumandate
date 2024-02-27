import React, { useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const StepFive = ({ onNextStep }) => {
  const { setStepFiveData } = useOfferCreationContext();
  const [employer, setEmployer] = useState("");
  const [constructionEmployers, setConstructionEmployers] = useState("");
  const [dataSaved, setDataSaved] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setEmployer(inputValue);
    }
  };
  const handleConstructionEmployersChange = (e) => {
    setConstructionEmployers(e.target.value);
  };

  const handleSaveData = () => {
    setStepFiveData({ employer, constructionEmployers });
    onNextStep();
    setDataSaved(true);
  };

  return (
    <div>
      <div className="stepsSection">
        <h1>How much the employers?</h1>
        <p>Input the employers number</p>
        <div className="stepsContainer ">
          <div className="rangeValue">
            <p>1 Peron</p>
            <p>100 Person</p>
          </div>
          <input
            placeholder="Input profit here"
            type="text"
            value={employer}
            onChange={handleInputChange}
          />

          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "500" }}
            >
              Are these construction employers?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              sx={{ display: "flex", flexDirection: "row", fontSize: "4rem" }}
              value={constructionEmployers}
              onChange={handleConstructionEmployersChange}
            >
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>

          <button
            className=" btnSaveData"
            disabled={!employer || !constructionEmployers || dataSaved}
            onClick={handleSaveData}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
