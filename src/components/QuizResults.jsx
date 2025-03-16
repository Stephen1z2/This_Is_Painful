import React, { useState } from 'react';
import '../App.css';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography, Paper, Grid, Card, CardContent, CardActions, Snackbar, Slide, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

function QuizResults({ results, setSelectedQuiz }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const filteredResults = results.filter(result => {
    if (filter === 'correct') return result.yourAnswer === result.correctAnswer;
    if (filter === 'incorrect') return result.yourAnswer !== result.correctAnswer;
    return true;
  });

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const correctAnswersCount = results.filter(result => result.yourAnswer === result.correctAnswer).length;
  const totalQuestions = results.length;

  return (
    <ThemeProvider theme={theme}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
        <Paper elevation={3} className='results-section' sx={{ backgroundColor: '#e0e0e0', padding: '20px' }}>
          <Typography variant="h4" className='title'>{t('quizResults.title')}</Typography>
          <Typography variant="h6" className='score-tally'>
            {t('quizResults.scoreTally', { correct: correctAnswersCount, total: totalQuestions })}
          </Typography>
          <FormControl fullWidth margin="normal" sx={{ backgroundColor: '#d0d0d0' }}>
            <InputLabel id="filter-label" sx={{ color: '#333' }}>{t('quizResults.show')}</InputLabel>
            <Select
              labelId="filter-label"
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">{t('quizResults.allAnswers')}</MenuItem>
              <MenuItem value="correct">{t('quizResults.correctAnswers')}</MenuItem>
              <MenuItem value="incorrect">{t('quizResults.incorrectAnswers')}</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            {filteredResults.map((result, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={result.yourAnswer === result.correctAnswer ? 'correct' : 'incorrect'} sx={{ height: '100%' }}>
                  <CardContent>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" sx={{ color: result.yourAnswer === result.correctAnswer ? '#4caf50' : '#f44336' }}>
                          {`${t('quizResults.question')} ${index + 1}`}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {result.question}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    {result.yourAnswer === result.correctAnswer ? (
                      <CheckCircleIcon sx={{ color: '#4caf50', marginLeft: '10px' }} />
                    ) : (
                      <CancelIcon sx={{ color: '#f44336', marginLeft: '10px' }} />
                    )}
                    <Typography component="span" variant="body2" color="textPrimary" sx={{ display: 'block', marginTop: '10px' }}>
                      <strong>{t('quizResults.yourAnswer')}:</strong> {result.yourAnswer}
                    </Typography>
                    <Typography component="span" variant="body2" color="textPrimary" sx={{ display: 'block' }}>
                      <strong>{t('quizResults.correctAnswer')}:</strong> {result.correctAnswer}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => setSnackbarOpen(true)}>{t('quizResults.learnMore')}</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="primary" onClick={() => setSelectedQuiz(null)} sx={{ marginTop: '20px' }}>
            {t('quizResults.backToCategories')}
          </Button>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message={t('quizResults.moreInfo')}
          />
        </Paper>
      </Slide>
    </ThemeProvider>
  );
}

export default QuizResults;
