import { useState, useEffect } from 'react'
import '../App.css'
import Timer from './Timer'
import Question from './Question'
import AnswerSection from './AnswerSection'

const quizzes = {
  projectManagement: [
    {
      question: "What is the first process in project management?",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      answer: "Initiating"
    },
    {
      question: "What is the second process in project management?",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      answer: "Planning"
    },
    {
      question: "What is the third process in project management?",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      answer: "Executing"
    },
    {
      question: "What is the fourth process in project management?",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      answer: "Closing"
    },
    {
      question: "What is the final process in project management?",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      answer: "Closing"
    }
  ],
  integrationManagement: [
    {
      question: "What is the main purpose of integration management?",
      options: ["Coordinate all project elements", "Manage project costs", "Ensure timely completion", "Manage human resources"],
      answer: "Coordinate all project elements"
    },
    {
      question: "What is the second purpose of integration management?",
      options: ["Coordinate all project elements", "Manage project costs", "Ensure timely completion", "Manage human resources"],
      answer: "Manage project costs"
    },
    {
      question: "What is the third purpose of integration management?",
      options: ["Coordinate all project elements", "Manage project costs", "Ensure timely completion", "Manage human resources"],
      answer: "Ensure timely completion"
    },
    {
      question: "What is the fourth purpose of integration management?",
      options: ["Coordinate all project elements", "Manage project costs", "Ensure timely completion", "Manage human resources"],
      answer: "Manage human resources"
    },
    {
      question: "What is the final purpose of integration management?",
      options: ["Coordinate all project elements", "Manage project costs", "Ensure timely completion", "Manage human resources"],
      answer: "Coordinate all project elements"
    }
  ],
  costManagement: [
    {
      question: "What is the primary goal of cost management?",
      options: ["Estimate costs", "Control costs", "Plan budget", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the second goal of cost management?",
      options: ["Estimate costs", "Control costs", "Plan budget", "All of the above"],
      answer: "Estimate costs"
    },
    {
      question: "What is the third goal of cost management?",
      options: ["Estimate costs", "Control costs", "Plan budget", "All of the above"],
      answer: "Control costs"
    },
    {
      question: "What is the fourth goal of cost management?",
      options: ["Estimate costs", "Control costs", "Plan budget", "All of the above"],
      answer: "Plan budget"
    },
    {
      question: "What is the final goal of cost management?",
      options: ["Estimate costs", "Control costs", "Plan budget", "All of the above"],
      answer: "All of the above"
    }
  ],
  timeManagement: [
    {
      question: "What is the main objective of time management?",
      options: ["Ensure timely completion of project", "Manage project costs", "Coordinate all project elements", "Manage human resources"],
      answer: "Ensure timely completion of project"
    },
    {
      question: "What is the second objective of time management?",
      options: ["Ensure timely completion of project", "Manage project costs", "Coordinate all project elements", "Manage human resources"],
      answer: "Manage project costs"
    },
    {
      question: "What is the third objective of time management?",
      options: ["Ensure timely completion of project", "Manage project costs", "Coordinate all project elements", "Manage human resources"],
      answer: "Coordinate all project elements"
    },
    {
      question: "What is the fourth objective of time management?",
      options: ["Ensure timely completion of project", "Manage project costs", "Coordinate all project elements", "Manage human resources"],
      answer: "Manage human resources"
    },
    {
      question: "What is the final objective of time management?",
      options: ["Ensure timely completion of project", "Manage project costs", "Coordinate all project elements", "Manage human resources"],
      answer: "Ensure timely completion of project"
    }
  ],
  humanResourceManagement: [
    {
      question: "What is the focus of human resource management?",
      options: ["Manage project team", "Plan budget", "Control costs", "Ensure timely completion"],
      answer: "Manage project team"
    },
    {
      question: "What is the second focus of human resource management?",
      options: ["Manage project team", "Plan budget", "Control costs", "Ensure timely completion"],
      answer: "Plan budget"
    },
    {
      question: "What is the third focus of human resource management?",
      options: ["Manage project team", "Plan budget", "Control costs", "Ensure timely completion"],
      answer: "Control costs"
    },
    {
      question: "What is the fourth focus of human resource management?",
      options: ["Manage project team", "Plan budget", "Control costs", "Ensure timely completion"],
      answer: "Ensure timely completion"
    },
    {
      question: "What is the final focus of human resource management?",
      options: ["Manage project team", "Plan budget", "Control costs", "Ensure timely completion"],
      answer: "Manage project team"
    }
  ]
};

function Quiz({ selectedQuiz, setSelectedQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [pulse, setPulse] = useState(false);

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
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 10);
      setShowBonus(true);
      setTimeout(() => setShowBonus(false), 1000);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
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
    </>
  )
}

export default Quiz
