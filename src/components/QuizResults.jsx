import React, { useState } from 'react';
import '../App.css';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography, List, ListItem, ListItemText } from '@mui/material';

function QuizResults({ results, setSelectedQuiz }) {
  const [filter, setFilter] = useState('correct');

  const filteredResults = results.filter(result => {
    if (filter === 'correct') return result.yourAnswer === result.correctAnswer;
    if (filter === 'incorrect') return result.yourAnswer !== result.correctAnswer;
    return true;
  });

  return (
    <div className='results-section'>
      <Typography variant="h4">Quiz Results</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="filter-label">Show</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="correct">Correct Answers</MenuItem>
          <MenuItem value="incorrect">Incorrect Answers</MenuItem>
        </Select>
      </FormControl>
      <List>
        {filteredResults.map((result, index) => (
          <ListItem key={index} className={result.yourAnswer === result.correctAnswer ? 'correct' : 'incorrect'}>
            <ListItemText
              primary={`Question: ${result.question}`}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Your answer: {result.yourAnswer}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="textPrimary">
                    Correct answer: {result.correctAnswer}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="secondary" onClick={() => setSelectedQuiz(null)}>Back to Categories</Button>
    </div>
  );
}

export default QuizResults;
