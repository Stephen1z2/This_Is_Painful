import { useState } from 'react';
import '../App.css';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

function Categories({ setSelectedQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      setSelectedQuiz({ category: selectedCategory, difficulty: selectedDifficulty });
      setErrorMessage('');
    } else {
      setErrorMessage('Please select both a category and a difficulty level.');
    }
  };

  return (
    <div className='quiz-selection'>
      <Typography variant="h4" className='title'>PMI Time Attack Quiz</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-label">Select Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value=""><em>--Select Category--</em></MenuItem>
          <MenuItem value="projectManagement">Project Management</MenuItem>
          <MenuItem value="integrationManagement">Integration Management</MenuItem>
          <MenuItem value="costManagement">Cost Management</MenuItem>
          <MenuItem value="timeManagement">Time Management</MenuItem>
          <MenuItem value="humanResourceManagement">Human Resource Management</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="difficulty-label">Select Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          id="difficulty"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <MenuItem value=""><em>--Select Difficulty--</em></MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
          <MenuItem value="expert">Expert</MenuItem>
        </Select>
      </FormControl>
      {errorMessage && <Typography color="error" className='error-message'>{errorMessage}</Typography>}
      <Button variant="contained" color="primary" onClick={handleStartQuiz}>Start Quiz</Button>
    </div>
  );
}

export default Categories;
