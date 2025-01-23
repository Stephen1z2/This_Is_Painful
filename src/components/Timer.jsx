import '../App.css'

function Timer({ timeLeft, nanoSeconds, showBonus, pulse }) {
  return (
    <div className={`timer-section ${pulse ? 'pulse' : ''}`}>
      Time Left: {timeLeft}.{nanoSeconds.toString().padStart(2, '0')} seconds
      {showBonus && <span className='bonus-time'>+10 sec</span>}
    </div>
  );
}

export default Timer
