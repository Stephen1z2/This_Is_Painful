# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# This_Is_Painful

## Overview

This project is a quiz application that allows users to select a category and difficulty level, answer questions, and view their results. The application is built using React and Material-UI for the frontend, and Node.js for the backend. The quiz data is fetched from the backend server.

## Features

- Select quiz category and difficulty level
- Timer for each question
- Bonus time for correct answers
- Visual animations for correct answers
- View quiz results with filtering options
- Responsive design
- Accordion for better handling of longer questions
- Multi-language support (English and Spanish)

## Changes Made This Week

### Frontend

1. **Quiz Component**
   - Added animation effect when getting a question right using `Grow` from Material-UI.
   - Enhanced the visual effect of the `+10` bonus indicator to make it more noticeable.

2. **Timer Component**
   - Added keyframes for the `pop` animation to enhance the visual effect of the bonus indicator.

3. **QuizResults Component**
   - Removed unused imports to clean up the code.
   - Added an accordion to handle longer questions and improve card formatting.

4. **QuizStepper Component**
   - Updated the stepper to show progress with color changes for completed and active steps.

5. **Categories Component**
   - No changes made this week.

6. **App Component**
   - Extended the duration of the transitions for a smoother effect.
   - Added multi-language support (English and Spanish).

### Backend

1. **Server**
   - Set up the backend server using AWS.
   - Moved JSON files to the server for fetching quiz questions.
   - Updated the app to fetch quiz data from the server.

### Data

1. **deepseek.json**
   - No changes made this week.

2. **quizzes.json**
   - No changes made this week.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Select a quiz category and difficulty level.
3. Answer the questions within the given time.
4. View your results and filter them by correct or incorrect answers.

## Backlog

1. Still need to add more questions
3. Add explanation for why the question was that particular answer.
4. Implement user authentication and profiles.
5. Add a leaderboard to display top scores.
6. Include a feature to review past quizzes and answers.
7. Implement dark mode for the application.
8. Add sound effects for correct and incorrect answers.
9. Create a feature to allow users to submit their own questions.
10. Add hints for difficult questions.
11. Implement social sharing options for quiz results.
12. Add a feature to bookmark favorite questions.
13. Include a progress bar for the quiz timer.
14. Add more detailed analytics for quiz results.

## Completed Log

### Week 1-4

1. Add categories (topics) [Done]
2. Add test questions (Mostly for testing) [Done]
3. Add timer function to quiz (Start at 60 seconds) [Done]
4. Add time to correct answers (10 secs add) [Done]
5. Show results to questions at the end of tests for review [Done]
6. Refactor quiz.jsx file. Make a JSON file for quiz questions. [Done]
7. Add more legit questions. Mine are very low. (Questionable. Added some Deep Seek generated questions) [Done]
8. [Bug] Resolve bug that was introduced after quiz results feature was added. After a quiz if another is selected it goes back to previous results. Requires a refresh to take another quiz. [Resolved]

### Week 5

9. Improve quiz selection screen. Add drop downs for category, add difficulty selection (less time for harder modes) [Done]
10. Improve the results at the end of the quiz. [Done]
11. Added an error when not selecting either a difficulty or quiz topic [Done]
12. [Bug] Deep seek questions are being scored as incorrect even when selecting correct answer. (Due to wording in JSON). [Resolved]

### Week 6

13. Add page that goes over how the time attack quiz works. Scoring, difficulty levels, etc. [Done]
14. Fix the drop down menus. Can barely see them. [Done]
15. Refactored the app.jsx file and quiz.jsx file. [Done]
16. Added about 10 questions from PMIQuestions.org free exams site. [Done]
17. Added a stepper component to the quizzes. Shows how many questions you have and completed questions will show as green and check marked. [Done]
18. Fix styling of stepper as it was hard to see and formatting would go off screen for questions with a lot of text. [Done]
19. Shuffle the questions in a quiz and the answers so they are not in the same order. [Done]
20. [Bug] Resolve issue with questions being rapid fired cycling non-stop after putting in randomized question order. [Resolved]

### Week 7

21. Improve difficulty levels. For Hard and above when getting an incorrect answer you get -5 seconds. [Done]
22. [Bug] When selecting a hard difficulty quiz you don't see the quiz. [Resolved]
23. Add -5 animation or indicator when selecting a wrong answer. [Done]
24. [Bug] Every question was showing a +10 even when selecting the wrong answer. Five seconds was being taken off but showing wrong indicator. [Resolved]
25. [Bug] When starting quiz you would get the first question but when selecting the answer the quiz would disappear. [Resolved]
26. [Bug] The last question of each quiz is not being scored and does not show up in results. [Resolved]
27. Added 8 more questions to my quiz app. [Done]

### Week 8

28. Created AWS backend server and moved JSON files and app now fetches the questions from two files. [Done]
29. Added animation effect when getting a question right using `Grow` from Material-UI. [Done]
30. Enhanced the visual effect of the `+10` bonus indicator to make it more noticeable. [Done]
31. Extended the duration of the transitions for a smoother effect. [Done]
32. Removed unused imports to clean up the code. [Done]
33. Updated the stepper to show progress with color changes for completed and active steps. [Done]
34. Updated the app to fetch quiz data from the server. [Done]
35. Added an accordion to handle longer questions and improve card formatting. [Done]
36. Added multi-language support (English and Spanish). [Done]
37. [Bug] When finishing a quiz early it shows a blank results page. [Resolved]
38. Deployed backend with self signed cert and app now works with HTTPS! [YAY]