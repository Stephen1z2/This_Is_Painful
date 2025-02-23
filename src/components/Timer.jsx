import React from 'react';
import '../App.css';

function Timer({ timeLeft, nanoSeconds, showBonus, pulse, bonusIndicator }) {
  return (
    <div className={`timer-section ${pulse ? 'pulse' : ''}`}>
      Time Left: {timeLeft}:{nanoSeconds < 10 ? `0${nanoSeconds}` : nanoSeconds}
      {showBonus && (
        <div className={`bonus-time ${bonusIndicator === '-5' ? 'negative-bonus' : 'positive-bonus'}`}>
          {bonusIndicator}
        </div>
      )}
    </div>
  );
}

export default Timer;
