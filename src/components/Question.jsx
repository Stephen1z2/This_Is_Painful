import '../App.css'

function Question({ currentQuestionIndex, questions }) {
  return (
    <div className='question-section'>
      <div className='question-count'>
        <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
      </div>
      <div className='question-text'>{questions[currentQuestionIndex].question}</div>
    </div>
  );
}

export default Question
