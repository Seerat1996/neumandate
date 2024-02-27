import React, { useState, useEffect } from "react";
import circleplus from "../../Assets/plus-circle.png";
import bellicon from "../../Assets/bell-01.png";
import profileimg from "../../Assets/Ellipse 14.png";
import "./pagestyle.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Link } from "react-router-dom";
import company from "../../Assets/account_balance.svg";
import user from "../../Assets/user 1.png";
import PersonType from "../CreateOfferSteps/PersonType";
import ClientType from "../CreateOfferSteps/ClientType";
import Accounting from "../CreateOfferSteps/Accounting";
import StepOne from "../CreateOfferSteps/StepOne";
import StepTwo from "../CreateOfferSteps/StepTwo";
import StepThree from "../CreateOfferSteps/StepThree";
import StepFour from "../CreateOfferSteps/StepFour";
import StepFive from "../CreateOfferSteps/StepFive";
import { useOfferCreationContext } from "../../Context/ContextProvider";

const createOffer = (
  personTypeData,
  clientTypeData,
  accountingData,
  stepOneData,
  stepTwoData,
  stepThreeData,
  stepFourData,
  stepFiveData
) => {
  return {
    personType: personTypeData,
    clientType: clientTypeData,
    accounting: accountingData,
    revenue: stepOneData,
    balanceSheet: stepTwoData,
    depreciation: stepThreeData,
    profit: stepFourData,
    employers: stepFiveData,
  };
};

const CreateOffer = () => {
  const {
    personTypeData,
    clientTypeData,
    accountingData,
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData,
    stepFiveData,
  } = useOfferCreationContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [createdOffer, setCreatedOffer] = useState(null);

  const [questionList, setQuestionList] = useState([
    { q: "What Kind of person?", data: personTypeData },
    { q: "What is the client type?", data: clientTypeData },
    { q: "Accounting?", data: accountingData },
    { q: "How much the revenue?", data: stepOneData },
    { q: "How much the balance sheet?", data: stepTwoData },
    { q: "How much the depreciation?", data: stepThreeData },
    { q: "How much the profit?", data: stepFourData },
    { q: "How much the employers?", data: stepFiveData },
  ]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonType onNextStep={() => setCurrentStep(currentStep + 1)} />
        );
      case 2:
        return (
          <ClientType onNextStep={() => setCurrentStep(currentStep + 1)} />
        );
      case 3:
        return (
          <Accounting onNextStep={() => setCurrentStep(currentStep + 1)} />
        );
      case 4:
        return <StepOne onNextStep={() => setCurrentStep(currentStep + 1)} />;
      case 5:
        return <StepTwo onNextStep={() => setCurrentStep(currentStep + 1)} />;
      case 6:
        return <StepThree onNextStep={() => setCurrentStep(currentStep + 1)} />;
      case 7:
        return <StepFour onNextStep={() => setCurrentStep(currentStep + 1)} />;
      case 8:
        return <StepFive onNextStep={() => setCurrentStep(currentStep)} />;
      // Add cases for additional steps as needed
      default:
        return null;
    }
  };

  useEffect(() => {
    setQuestionList([
      { q: "What Kind of person?", data: personTypeData },
      { q: "What is the client type?", data: clientTypeData },
      { q: "Accounting?", data: accountingData },
      { q: "How much the revenue?", data: stepOneData },
      { q: "How much the balance sheet?", data: stepTwoData },
      { q: "How much the depreciation?", data: stepThreeData },
      { q: "How much the profit?", data: stepFourData },
      { q: "How much the employers?", data: stepFiveData },
    ]);
  }, [
    personTypeData,
    clientTypeData,
    accountingData,
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData,
    stepFiveData,
  ]);

  const handleCreateOffer = () => {
    const offer = createOffer(
      personTypeData,
      clientTypeData,
      accountingData,
      stepOneData,
      stepTwoData,
      stepThreeData,
      stepFourData,
      stepFiveData
    );

    setCreatedOffer(offer);
  };

  return (
    <div>
      <div className="createOfferContainer">
        <div className="header">
          <h1>Create Offers</h1>
          <div className="rightHeader">
            <button className="createOfferBtn" onClick={handleCreateOffer}>
              <ControlPointIcon /> Create Offers
            </button>
            <div className="notificationIcon">
              <img src={bellicon} alt="" />
            </div>
            <div>
              <img src={profileimg} alt="" />
            </div>
          </div>
        </div>

        <div className="mainSection">
          <div className="centerSection">
            {createdOffer ? ( // Check if createdOffer exists
              <div className="createdOffer">
                <h2>Created Offer</h2>
                {/* Render the offer details here */}
                <p>Person Type: {createdOffer.personType}</p>
                <p>Client Type: {createdOffer.clientType}</p>
                <p>Client Type: {createdOffer.accounting}</p>
                <p>Client Type: {createdOffer.revenue}</p>
                <p>Client Type: {createdOffer.balanceSheet}</p>
                <p>Client Type: {createdOffer.depreciation}</p>
                <p>Client Type: {createdOffer.profit}</p>
                <p>Employer: {createdOffer.employers.employer}</p>
                <p>
                  Construction Employers:{" "}
                  {createdOffer.employers.constructionEmployers}
                </p>
                {/* Render other offer details similarly */}
              </div>
            ) : (
              <div className="centerSection">
                {/* Render the current step */}
                {renderCurrentStep()}
              </div>
            )}
          </div>
          <div className="rightSection">
            <ul>
              {questionList.map((item, index) => (
                <li key={index}>
                  <strong>{item.q}</strong>: {JSON.stringify(item.data)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOffer;
