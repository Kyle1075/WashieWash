import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Tutorial from "./components/Tutorial";
import BubbleMinigame from "./components/Minigame";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/minigame" element={<BubbleMinigame />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
