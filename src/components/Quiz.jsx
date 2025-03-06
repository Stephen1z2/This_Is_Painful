import { useState, useEffect } from 'react';
import '../App.css';
import Timer from './Timer';
import Question from './Question';
import AnswerSection from './AnswerSection';
import QuizStepper from './QuizStepper';
import React from 'react';
import { Button, Typography, Paper, Slide, Box, Grow } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

function Quiz({ selectedQuiz, setSelectedQuiz, setQuizResults }) {
  const { t } = useTranslation();
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
  const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);

  useEffect(() => {
    fetchQuestions(selectedQuiz.category);
  }, [selectedQuiz.category]);

  const fetchQuestions = async (category) => {
    try {
      const response = await fetch(`https://18.220.77.57:3000/${category}`);
      const data = await response.json();
      setQuestions(shuffleArray(data));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

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
      setShowCorrectAnimation(true);
      setTimeout(() => setShowCorrectAnimation(false), 1000);
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
    <ThemeProvider theme={theme}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
        <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>{t('quiz.title')}</Typography>
          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <Timer timeLeft={timeLeft} nanoSeconds={nanoSeconds} showBonus={showBonus} pulse={pulse} bonusIndicator={bonusIndicator} />
              <Question currentQuestionIndex={currentQuestionIndex} questions={questions} />
              <AnswerSection questions={questions} currentQuestionIndex={currentQuestionIndex} handleAnswerOptionClick={handleAnswerOptionClick} />
              <Grow in={showCorrectAnimation}>
                <Typography variant="h2" sx={{ color: '#4caf50', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
                  Correct!
                </Typography>
              </Grow>
            </>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button variant="contained" color="secondary" onClick={() => setSelectedQuiz(null)}>Back to Categories</Button>
            <Button variant="contained" color="primary" onClick={() => handleQuizCompletion(results)}>Finish Quiz</Button>
          </Box>
          <QuizStepper steps={steps} activeStep={currentQuestionIndex} />
        </Paper>
      </Slide>
    </ThemeProvider>
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

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default Quiz;
