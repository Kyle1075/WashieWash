import React, { useState, useEffect, useRef } from 'react';
import "../styles/Minigame.scss";
import washingHandsVideo from "../assets/handwash.mov";  // Ensure this path is correct
import Quiz from './Quiz';
import { Navigate, useNavigate } from 'react-router-dom';

const BubbleMinigame = () => {
  const [bubbles, setBubbles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate(); 

  // Handle video play/pause on touch with event for bubble location
  const handleTouch = (e) => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }

    const { clientX, clientY } = e;
    if (progress < 100) {
      setBubbles(prevBubbles => [
        ...prevBubbles,
        createBubble(clientX, clientY)
      ]);
      setProgress(prev => Math.min(prev + 5, 100));
    }

    if (progress >= 100 && videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Create bubble with random left/right offset from click position
  const createBubble = (x, y) => {
    const offset = Math.random() * 100 + 20; // Offset up to 50px from cursor
    const direction = Math.random() > 0.5 ? 1 : -1; // Randomly choose left or right

    return {
      id: Date.now(),
      left: x + offset * direction,
      top: y,
      animationDuration: `${Math.random() * 2 + 2}s`
    };
  };

  // Remove bubbles after they float up
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prevBubbles => prevBubbles.slice(1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="minigame" onClick={handleTouch}>
      {showTutorial ? (
        <div className="tutorial-overlay">
          <h2>Welcome to the Bubble Minigame!</h2>
          <p>In this minigame, tap the screen to make bubbles and wash the hands. Try to fill the progress bar to 100% to complete the game.</p>
          <button onClick={() => setShowTutorial(false)}>Start Minigame</button>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src={washingHandsVideo}
            loop
            muted
            className="hand-washing-video"
            playsInline
            autoPlay={isPlaying}
          />
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {progress >= 100 && (
            <div className="completion-popup">
              <h1>Congratulations!</h1>
              <p>Now let's recheck your knowledge with the quiz!</p>
              <button onClick={() => navigate('/quiz')}>Start Quiz</button> {/* Navigate to quiz */}
            </div>
          )}
          <div className="bubbles">
            {bubbles.map(bubble => (
              <div
                key={bubble.id}
                className="bubble"
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  animationDuration: bubble.animationDuration,
                  position: "absolute",
                }}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BubbleMinigame;
