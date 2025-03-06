import React from 'react';
import '../App.css';
import { Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Instructions({ setShowInstructions }) {
  const { t } = useTranslation();

  return (
    <div className='instructions-section'>
      <Typography variant="h4" className='title'>{t('instructions.title')}</Typography>
      <Typography variant="body1" className='instructions-text'>
        {t('instructions.welcome')}
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        {t('instructions.step1')}
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        {t('instructions.step2')}
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        {t('instructions.step3')}
      </Typography>
      <Typography variant="h5" className='title'>{t('instructions.difficultyLevels')}</Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>{t('instructions.easy')}</strong>
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>{t('instructions.medium')}</strong>
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>{t('instructions.hard')}</strong>
      </Typography>
      <Typography variant="body1" className='instructions-text'>
        <strong>{t('instructions.expert')}</strong>
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setShowInstructions(false)}>{t('instructions.backToMenu')}</Button>
    </div>
  );
}

export default Instructions;
