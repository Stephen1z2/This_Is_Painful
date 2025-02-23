import { useState, useEffect } from 'react';
import '../App.css';
import Timer from './Timer';
import Question from './Question';
import AnswerSection from './AnswerSection';
import QuizStepper from './QuizStepper';
import quizzes from '../data/quizzes.json';
import deepseek from '../data/deepseek.json';

function Quiz({ selectedQuiz, setSelectedQuiz, setQuizResults }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getInitialTime(selectedQuiz.difficulty));
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [results, setResults] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [bonusIndicator, setBonusIndicator] = useState('');

  useEffect(() => {
    setQuestions(shuffleArray(getQuestions(selectedQuiz.category)));
  }, [selectedQuiz.category]);

  const steps = questions.map((_, index) => `Q${index + 1}`);

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        updateNanoSeconds();
      }, 10);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && nanoSeconds === 0) {
      setShowScore(true);
    }
  }, [timeLeft, nanoSeconds, showScore]);

  const updateNanoSeconds = () => {
    setNanoSeconds((prevNanoSeconds) => {
      if (prevNanoSeconds === 0) {
        setTimeLeft(timeLeft - 1);
        setPulse(true);
        setTimeout(() => setPulse(false), 500);
        return 99;
      }
      return prevNanoSeconds - 1;
    });
  };

  const handleAnswerOptionClick = (selectedOption) => {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 10);
      setBonusIndicator('+10');
    } else if (selectedQuiz.difficulty === 'hard' || selectedQuiz.difficulty === 'expert') {
      setTimeLeft(timeLeft - 5); // Decrease time on incorrect answers for hard and expert levels
      setBonusIndicator('-5');
    } else {
      setBonusIndicator('');
    }

    setShowBonus(true);
    setTimeout(() => setShowBonus(false), 1000);

    const updatedResults = [...results, {
      question: question.question,
      yourAnswer: selectedOption,
      correctAnswer: question.answer
    }];

    setResults(updatedResults);

    if (currentQuestionIndex === questions.length - 1) {
      handleQuizCompletion(updatedResults); // Pass updated results to handleQuizCompletion
    } else {
      goToNextQuestion();
    }
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
      setQuizResults(results);
    }
  };

  const handleQuizCompletion = (finalResults) => {
    setQuizResults(finalResults || results); // Use finalResults if provided
    setShowScore(true); // Ensure the score is shown when the quiz is completed
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <Timer timeLeft={timeLeft} nanoSeconds={nanoSeconds} showBonus={showBonus} pulse={pulse} bonusIndicator={bonusIndicator} />
          <Question currentQuestionIndex={currentQuestionIndex} questions={questions} />
          <AnswerSection questions={questions} currentQuestionIndex={currentQuestionIndex} handleAnswerOptionClick={handleAnswerOptionClick} />
        </>
      )}
      <button className='back-button' onClick={() => setSelectedQuiz(null)}>Back to Categories</button>
      <button onClick={handleQuizCompletion}>Finish Quiz</button>
      <QuizStepper steps={steps} activeStep={currentQuestionIndex} />
    </>
  );
}

const getInitialTime = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 90;
    case 'medium':
      return 60;
    case 'hard':
      return 30;
    case 'expert':
      return 15;
    default:
      return 60;
  }
};

const getQuestions = (category) => {
  const questions = [...(quizzes[category] || []), ...(deepseek[category] || [])];
  return questions.map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default Quiz;
