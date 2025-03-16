import { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Categories from './components/Categories';
import QuizResults from './components/QuizResults';
import Instructions from './components/Instructions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Slide, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#e0e0e0',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [pageBlank, setPageBlank] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadTranslations = async () => {
      const enTranslation = await import('./locales/en/translation.json');
      const esTranslation = await import('./locales/es/translation.json');

      i18n.init({
        resources: {
          en: { translation: enTranslation.default },
          es: { translation: esTranslation.default }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
      }).then(() => setPageBlank(false));
    };

    loadTranslations();
  }, []);

  const handleSetSelectedQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setQuizResults(null);
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const renderContent = () => {
    if (pageBlank) return null;
    if (showInstructions) return <Instructions setShowInstructions={setShowInstructions} />;
    if (selectedQuiz) {
      return quizResults ? (
        <QuizResults results={quizResults} setSelectedQuiz={handleSetSelectedQuiz} />
      ) : (
        <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={handleSetSelectedQuiz} setQuizResults={setQuizResults} />
      );
    }
    return <Categories setSelectedQuiz={handleSetSelectedQuiz} setShowInstructions={setShowInstructions} />;
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              label="Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </FormControl>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <div>{renderContent()}</div>
          </Slide>
        </Container>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
