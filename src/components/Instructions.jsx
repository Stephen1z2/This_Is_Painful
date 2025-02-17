import React from 'react';
import '../App.css';
import { Typography, Button } from '@mui/material';

function Instructions({ setShowInstructions }) {
  return (
    <div className='instructions-section'>
      <Typography variant="h4" className='title'>How to Play</Typography>
      <Typography variant="body1" className='instructions-text'>
        Welcome to the PMI Time Attack Quiz! Here's how it works:
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        1. Select a category and difficulty level to start the quiz.
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        2. Answer each question before the timer runs out. Correct answers will add 10 seconds to your time.
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        3. The quiz ends when you have answered all questions or the timer reaches zero.
      </Typography>
      <Typography variant="h5" className='title'>Difficulty Levels</Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>Easy:</strong> 90 seconds to start.
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>Medium:</strong> 60 seconds to start.
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>Hard:</strong> 30 seconds to start.
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>Expert:</strong> 15 seconds to start.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setShowInstructions(false)}>Back to Menu</Button>
    </div>
  );
}

export default Instructions;
