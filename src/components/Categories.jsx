import { useState } from 'react';
import '../App.css';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Categories({ setSelectedQuiz, setShowInstructions }) {
  const { t } = useTranslation();
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
      <Typography variant="h4" className='title'>{t('categories.title')}</Typography>
      <FormControl fullWidth margin="normal" sx={{backgroundColor: 'white'}}>
        <InputLabel id="category-label" sx={{color: 'black'}}>{t('categories.selectCategory')}</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value=""><em>{t('categories.selectCategoryPlaceholder')}</em></MenuItem>
          <MenuItem value="projectManagement">{t('categories.projectManagement')}</MenuItem>
          <MenuItem value="integrationManagement">{t('categories.integrationManagement')}</MenuItem>
          <MenuItem value="costManagement">{t('categories.costManagement')}</MenuItem>
          <MenuItem value="timeManagement">{t('categories.timeManagement')}</MenuItem>
          <MenuItem value="humanResourceManagement">{t('categories.humanResourceManagement')}</MenuItem>
        </Select>
      </FormControl >
      <FormControl fullWidth margin="normal" sx={{backgroundColor: 'white'}}>
        <InputLabel id="difficulty-label" sx={{color: 'black'}}>{t('categories.selectDifficulty')}</InputLabel>
        <Select
          labelId="difficulty-label"
          id="difficulty"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <MenuItem value=""><em>{t('categories.selectDifficultyPlaceholder')}</em></MenuItem>
          <MenuItem value="easy">{t('categories.easy')}</MenuItem>
          <MenuItem value="medium">{t('categories.medium')}</MenuItem>
          <MenuItem value="hard">{t('categories.hard')}</MenuItem>
          <MenuItem value="expert">{t('categories.expert')}</MenuItem>
        </Select>
      </FormControl>
      {errorMessage && <Typography color="error" className='error-message'>{errorMessage}</Typography>}
      <Button variant="contained" color="primary" onClick={handleStartQuiz}>{t('categories.startQuiz')}</Button>
      <Button variant="outlined" color="secondary" onClick={() => setShowInstructions(true)}>{t('categories.howToPlay')}</Button>
    </div>
  );
}

export default Categories;
