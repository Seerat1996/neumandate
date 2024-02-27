import React, { createContext, useContext, useState } from "react";

const OfferCreationContext = createContext();

export const ContextProvider = ({ children }) => {
  const [personTypeData, setPersonTypeData] = useState({});
  const [clientTypeData, setClientTypeData] = useState({});
  const [accountingData, setAccountingData] = useState({});
  const [stepOneData, setStepOneData] = useState({});
  const [stepTwoData, setStepTwoData] = useState({});
  const [stepThreeData, setStepThreeData] = useState({});
  const [stepFourData, setStepFourData] = useState({});
  const [stepFiveData, setStepFiveData] = useState({});
  return (
    <div>
      <OfferCreationContext.Provider
        value={{
          personTypeData,
          setPersonTypeData,
          clientTypeData,
          setClientTypeData,
          accountingData,
          setAccountingData,
          stepOneData,
          setStepOneData,
          stepTwoData,
          setStepTwoData,
          stepThreeData,
          setStepThreeData,
          stepFourData,
          setStepFourData,
          stepFiveData,
          setStepFiveData,
        }}
      >
        {children}
      </OfferCreationContext.Provider>
    </div>
  );
};

export const useOfferCreationContext = () => useContext(OfferCreationContext);
