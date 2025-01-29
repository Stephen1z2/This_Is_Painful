import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Categories from './components/Categories'
import QuizResults from './components/QuizResults'

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  return (
    <>
      {selectedQuiz ? (
        quizResults ? (
          <QuizResults results={quizResults} setSelectedQuiz={setSelectedQuiz} />
        ) : (
          <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={setSelectedQuiz} setQuizResults={setQuizResults} />
        )
      ) : (
        <Categories setSelectedQuiz={setSelectedQuiz} />
      )}
    </>
  )
}

export default App
