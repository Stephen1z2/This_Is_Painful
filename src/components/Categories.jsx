import '../App.css'

function Categories({ setSelectedQuiz }) {
  return (
    <div className='quiz-selection'>
      <h1 className='title'>PMI Time Attack Quiz</h1>
      <button onClick={() => setSelectedQuiz('projectManagement')}>Project Management</button>
      <button onClick={() => setSelectedQuiz('integrationManagement')}>Integration Management</button>
      <button onClick={() => setSelectedQuiz('costManagement')}>Cost Management</button>
      <button onClick={() => setSelectedQuiz('timeManagement')}>Time Management</button>
      <button onClick={() => setSelectedQuiz('humanResourceManagement')}>Human Resource Management</button>
    </div>
  );
}

export default Categories
