
import { useState } from 'react';
import QuestionsCard from './QuestionsCard';

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startQuiz, setStartQuize] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh' 
    }
  }
  const fetchQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const { results } = await res.json(res);
    setQuizzes(results);
    const initialQuestionIndex = results[currentQuestionIndex];
   
    const answers = [initialQuestionIndex.correct_answer, ...initialQuestionIndex.incorrect_answers];
   
    setLoaded(true);
    setStartQuize(false)
    setCurrentAnswer(answers)
    
    console.log((answers));
    console.log(currentAnswer);
  }
  return (
    <div style={styles.main}>
      {startQuiz && <button onClick={fetchQuiz}> Start Quiz </button>}
      {loaded && <QuestionsCard quiz={ quizzes[currentQuestionIndex]} currentAnswer={currentAnswer} />}
    </div>
  )
}

export default App
