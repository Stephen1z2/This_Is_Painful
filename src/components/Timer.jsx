import React from 'react';
import '../App.css';
import { Typography, Box } from '@mui/material';

function Timer({ timeLeft, nanoSeconds, showBonus, pulse, bonusIndicator }) {
  return (
    <Box className={`timer-section ${pulse ? 'pulse' : ''}`}>
      <Typography variant="h6">
        Time Left: {timeLeft}:{nanoSeconds < 10 ? `0${nanoSeconds}` : nanoSeconds}
      </Typography>
      {showBonus && (
        <Typography
          variant="h4"
          className={`bonus-time ${bonusIndicator === '-5' ? 'negative-bonus' : 'positive-bonus'}`}
          sx={{
            animation: 'pop 0.5s ease-in-out',
            color: bonusIndicator === '+10' ? '#4caf50' : '#f44336',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {bonusIndicator}
        </Typography>
      )}
    </Box>
  );
}

export default Timer;
