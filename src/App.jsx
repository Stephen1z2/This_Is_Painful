import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Categories from './components/Categories';
import QuizResults from './components/QuizResults';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  const handleSetSelectedQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setQuizResults(null); // Reset quiz results when selecting a new quiz
  };

  return (
    <>
      {selectedQuiz ? (
        quizResults ? (
          <QuizResults results={quizResults} setSelectedQuiz={handleSetSelectedQuiz} />
        ) : (
          <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={handleSetSelectedQuiz} setQuizResults={setQuizResults} />
        )
      ) : (
        <Categories setSelectedQuiz={handleSetSelectedQuiz} />
      )}
    </>
  );
}

export default App;
