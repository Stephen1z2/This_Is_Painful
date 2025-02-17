import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Categories from './components/Categories';
import QuizResults from './components/QuizResults';
import Instructions from './components/Instructions';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSetSelectedQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setQuizResults(null); // Reset quiz results when selecting a new quiz
  };

  const renderContent = () => {
    if (showInstructions) {
      return <Instructions setShowInstructions={setShowInstructions} />;
    } else if (selectedQuiz) {
      return quizResults ? (
        <QuizResults results={quizResults} setSelectedQuiz={handleSetSelectedQuiz} />
      ) : (
        <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={handleSetSelectedQuiz} setQuizResults={setQuizResults} />
      );
    } else {
      return <Categories setSelectedQuiz={handleSetSelectedQuiz} setShowInstructions={setShowInstructions} />;
    }
  };

  return (
    <>
      {renderContent()}
    </>
  );
}

export default App;
