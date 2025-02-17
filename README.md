# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





Backlog

    1. Move JSON to the backend.
    2 Improve difficulty levels.
    3. Add explaination for why the question was that particular answer.
    4. Still need to add more questions.
    5. [Bug] The last question of each quiz is not being scored and does not show up in results.
    

    



Completed log
    1. Add categories (topics) [Done]
    2. Add Test questions (Mostly for testing) [Done]
    3. Add Timer function to quiz (Start at 60 seconds) [Done]
    4. Add time to correct answers (10 secs add??) [Done]
    5. Show results to questions at the end of tests for review [Done]
    6. refactor quiz.jsx file. Make a json file for quiz questions. [Done]
    7. Add more legit questions. Mine are very low. (Questionable. Added some Deep Seek generated questions) [Done]
    8. [Bug] Resolve bug that was introduced after quiz results feture was add. After a quiz if another is selected it goes back to previous results. requires a refresh to take another quiz [Resolved]

  Week [5]  
    9. improve quiz selection screen. Add drop downs for category, add diffculty selection (less time for harder modes) [Done]
    10. Improve the results at the end of the quiz. [Done]
    11. Added an error when not selecting either a difficulty or quiz topic [Done]
    12. [Bug] Deep seek questions are being scored as incorrect even when selecting correct answer. (Due to wording in JSON). [Resolved]

    Week 6
    13. Add page that does over how the time attack quiz works. Scoring, diffculty levels, etc.. [Done]
    14. Fix the drop down menus. Can barely see them. [Done]
    15. I refactored the app.jsx file and quiz.jsx file. [Done]
    16. Added about 10 questions from PMIQuestions.org free exams site.
    17. I added a stepper component to the quizzes. Shows how many questions you have and completed question will show as green and check marked. [Done]
    18. Fix styling of stepper has it was hard to see and formating would go off screen for questions with a lot of question. [Done]
     19. Shuffle the questions in a quiz and the answers so they are not in the same order. [Done]
     20. [Bug] Resolve issue with questions being rapid fired cycling none stop after putting in randomized question order. [Resolved]



    