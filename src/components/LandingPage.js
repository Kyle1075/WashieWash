import React, { useState } from 'react';
import '../styles/_landingPage.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Dirtyhands from '../assets/Dirtyhands.jpg';

const LandingPage = () => {
    const [step, setStep] = useState(0); // 0: Intro, 1: Why Important, 2: When to Wash
    const navigate = useNavigate();

    const handleNextStep = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            navigate('/tutorial'); // Redirect to tutorial after the last card
        }
    };

    return (
        <div className="landing-page">
            {step === 0 && (
                <div className="intro-overlay">
                  <div className="overlay-logo"></div>
                  <div className="overlay-text">
                        <h1 className="title">Washie Wash💦</h1>
                        <p className="subtitle">This program helps you learn the importance of handwashing.</p>
                  </div>
                    <button className="pushable" onClick={handleNextStep}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">Start</span>
                    </button>
                </div>
            )}

            {step === 1 && (
                <div className="card card-why-important">
                    <div className="content-overlay">
                        <img src={Dirtyhands} alt="Dirty hands" className='dirtyhandimage'/>
                        <h2>Why is Handwashing Important?</h2>
                        <p>Handwashing prevents the spread of germs and keeps you healthy.</p>
                        <button className="pushable" onClick={handleNextStep}>
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front">Next</span>
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="card card-when-to-wash">
                    <div className="content-overlay">
                        <h2>When to Wash Your Hands</h2>
                        <ul>
                            <li>Before & after eating</li>
                            <li>After using the restroom</li>
                            <li>Before cooking</li>
                            <li>When hands are visibly dirty</li>
                        </ul>
                        <button className="pushable" onClick={handleNextStep}>
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front">Go to Tutorial</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
