import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/_thankyou.scss"; // Ensure this SASS file contains the relevant styles

const ThankYou = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/'); // Navigate back to the landing page
  };

  return (
    <div className="thank-you-overlay">
      <div className="overlay-logo"></div>
      <div className="overlay-text">
        <h1 className="title">Washie Wash 💦 </h1>
        <p className="subtitle">Thank You for Playing!</p>
        <p className="message">You've completed the handwashing minigame, remember the important of washing hands!</p>
        <button className="restart-btn" onClick={handleRestart}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Restart</span>
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
