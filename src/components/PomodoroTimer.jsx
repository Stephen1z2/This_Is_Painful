import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
    setIsBreak(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4">{isBreak ? 'Break Time' : 'Work Time'}</Typography>
      <Typography variant="h2">{formatTime(timeLeft)}</Typography>
      <Button variant="contained" color="primary" onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </Button>
      <Button variant="outlined" color="secondary" onClick={resetTimer} sx={{ marginLeft: '10px' }}>
        Reset
      </Button>
    </Box>
  );
};

export default PomodoroTimer;
