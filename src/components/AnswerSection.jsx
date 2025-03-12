import '../App.css'

function AnswerSection({ questions, currentQuestionIndex, handleAnswerOptionClick }) {
  if (!questions.length) return null; // Add this line to handle empty questions array

  return (
    <div className='answer-section'>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} className='answer-button' onClick={() => handleAnswerOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default AnswerSection
