import { useState, useEffect } from 'react';
import '../App.css';
import Timer from './Timer';
import Question from './Question';
import AnswerSection from './AnswerSection';
import quizzes from '../data/quizzes.json';

function Quiz({ selectedQuiz, setSelectedQuiz, setQuizResults }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [results, setResults] = useState([]);

  const questions = quizzes[selectedQuiz];

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        setNanoSeconds((prevNanoSeconds) => {
          if (prevNanoSeconds === 0) {
            setTimeLeft(timeLeft - 1);
            setPulse(true);
            setTimeout(() => setPulse(false), 500);
            return 99;
          }
          return prevNanoSeconds - 1;
        });
      }, 10);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && nanoSeconds === 0) {
      setShowScore(true);
    }
  }, [timeLeft, nanoSeconds, showScore]);

  const handleAnswerOptionClick = (selectedOption) => {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 10);
      setShowBonus(true);
      setTimeout(() => setShowBonus(false), 1000);
    }

    const updatedResults = [...results, {
      question: question.question,
      yourAnswer: selectedOption,
      correctAnswer: question.answer
    }];

    setResults(updatedResults);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
      setQuizResults(updatedResults);
    }
  };

  const handleQuizCompletion = () => {
    setQuizResults(results);
  };

  return (
    <>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <Timer timeLeft={timeLeft} nanoSeconds={nanoSeconds} showBonus={showBonus} pulse={pulse} />
          <Question currentQuestionIndex={currentQuestionIndex} questions={questions} />
          <AnswerSection questions={questions} currentQuestionIndex={currentQuestionIndex} handleAnswerOptionClick={handleAnswerOptionClick} />
        </>
      )}
      <button className='back-button' onClick={() => setSelectedQuiz(null)}>Back to Categories</button>
      <button onClick={handleQuizCompletion}>Finish Quiz</button>
    </>
  );
}

export default Quiz;
