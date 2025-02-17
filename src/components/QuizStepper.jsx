import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

function QuizStepper({ steps, activeStep }) {
  return (
    <Box sx={{ width: '100%', overflowX: 'auto', borderRadius: '10px', border: '1px solid #ffcc00', color: 'white', marginTop: '10px', padding: '5px', boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)' }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ color: 'white' }}>
        {steps.map((label, index) => (
          <Step 
            key={index}
            sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                    color: "green"
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                    color: "green"
                },
                "& .MuiStepLabel-root .Mui-active": {
                    color: "white"
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                    color: "white"
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "black"
                }
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default QuizStepper;
