import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Categories from './components/Categories'

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      {selectedQuiz ? (
        <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={setSelectedQuiz} />
      ) : (
        <Categories setSelectedQuiz={setSelectedQuiz} />
      )}
    </>
  )
}

export default App
