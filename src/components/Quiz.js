import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/_quiz.scss";

const quizQuestions = [
  {
    question: "What is the correct way to wash your hands?",
    options: ["Scrub with soap for 20 seconds", "Rinse with water", "Dry on a towel", "Wave hands in the air"],
    correctAnswer: 0,
  },
  {
    question: "How often should you wash your hands?",
    options: ["Only when dirty", "Once a day", "Whenever you remember", "Before and after eating"],
    correctAnswer: 3,
  },
  {
    question: "What is the main purpose of handwashing?",
    options: ["To feel fresh", "To remove germs and bacteria", "To smell nice", "To waste time"],
    correctAnswer: 1,
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState(''); // 'correct' or 'wrong'
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (selectedOptionIndex) => {
    const isCorrect = selectedOptionIndex === quizQuestions[currentQuestionIndex].correctAnswer;
    setFeedbackMessage(isCorrect ? 'Correct!' : 'Wrong!');
    setFeedbackType(isCorrect ? 'correct' : 'wrong');
    setShowFeedback(true);

    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const handleCompleteClick = () => {
    navigate('/thank-you');
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h2>Handwashing Quiz</h2>
      {!quizComplete ? (
        currentQuestion ? (
          <>
            <div className="quiz-question">{currentQuestion.question}</div>
            <div className="quiz-options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="quiz-option"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="quiz-completion">
            <h3>Quiz Complete!</h3>
            <p>Your Score: {score} / {quizQuestions.length}</p>
          </div>
        )
      ) : (
        <div className="quiz-completion">
          <h3>Quiz Complete!</h3>
          <p>Your Score: {score} / {quizQuestions.length}</p>
          <button onClick={handleCompleteClick} className="complete-btn">Complete</button>
        </div>
      )}
      {showFeedback && (
        <div className={`feedback-popup ${feedbackType} show`}>
          <h3>{feedbackMessage}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
