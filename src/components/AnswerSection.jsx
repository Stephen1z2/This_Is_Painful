import '../App.css'

function AnswerSection({ questions, currentQuestionIndex, handleAnswerOptionClick }) {
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
