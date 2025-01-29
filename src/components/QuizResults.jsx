import React from 'react';
import '../App.css';

function QuizResults({ results, setSelectedQuiz }) {
  return (
    <div className='results-section'>
      <h2>Quiz Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index} className={result.yourAnswer === result.correctAnswer ? 'correct' : 'incorrect'}>
            <strong>Question:</strong> {result.question}
            <br />
            <strong>Your answer:</strong> {result.yourAnswer}
            <br />
            <strong>Correct answer:</strong> {result.correctAnswer}
          </li>
        ))}
      </ul>
      <button className='back-button' onClick={() => setSelectedQuiz(null)}>Back to Categories</button>
    </div>
  );
}

export default QuizResults;
