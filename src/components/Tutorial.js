import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Tutorial.scss";

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // New state for popup

  const steps = [
    { text: "Step 1: Wet your hands with clean water.", gif: "step1.gif" },
    { text: "Step 2: Apply soap.", gif: "step2.gif" },
    { text: "Step 3: Rub your hands together to make bubbles...", gif: "step3.gif" },
    { text: "Step 4: Scrub for 20 seconds.", gif: "step4.gif" },
    { text: "Step 5: Rinse and dry your hands.", gif: "step5.gif" }
  ];

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPopup(true); // Show popup after last step
    }
  };

  const handleMinigameStart = () => {
    setShowPopup(false); // Hide popup
    navigate("/minigame"); // Navigate to Minigame
  };

  return (
    <div className="tutorial-card">
      <div className="card-content" key={currentStep}> {/* Add key here */}
      <img
          src={require(`../assets/${steps[currentStep].gif}`)}
          alt={`Step ${currentStep + 1} visual`}
        />
        <h2>{steps[currentStep].text}</h2>
       
        <button className="next-btn" onClick={handleNext}>
          {currentStep < steps.length - 1 ? "Done" : "Finish"}
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Well Done!</h2>
            <p>You've completed the tutorial. Now, let's play a minigame!</p>
            <button className="popup-btn" onClick={handleMinigameStart}>Start Minigame</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
