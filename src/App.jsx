
import { useState } from 'react';
import shuffle from './assets/Suhuffle';
import QuestionsCard from './QuestionsCard';


function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startQuiz, setStartQuize] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [endGame, setEndgGame] = useState(false);
  const [totlaScore, settotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh' 
    },
    correct: {
      border:'1px solid green',
    },
    wrong: {
      border: '1px solid red'
    }
  }
  const fetchQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const { results } = await res.json(res);
    setQuizzes(results);
    const initialQuestionIndex = results[currentQuestionIndex];
    
    const answers = [
      initialQuestionIndex.correct_answer,
      ...initialQuestionIndex.incorrect_answers
    ];
    setCorrectAnswer(initialQuestionIndex.correct_answer)
    setLoaded(true);
    setStartQuize(false)
    setCurrentAnswer(shuffle(initialQuestionIndex))
    
  }
  const pickAnswer = (answer) => {
    setPickedAnswer(answer);
    if (answer === correctAnswer) {
      settotalScore(totlaScore+1)
    }
  }
  const nevigateNext = () => {
    let currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswer(shuffle(question));
      setCorrectAnswer(question.correct_answer);
    } else {
      setEndgGame(true)
    }
    

  }
  
  return (
    <div style={styles.main}>
      { endGame && <p> Its time to result</p>}
      {startQuiz && <button onClick={fetchQuiz}> Start Quiz </button>}
      {loaded && !endGame && <QuestionsCard
       
        pickAnswer={pickAnswer}
        quiz={quizzes[currentQuestionIndex]}
        currentAnswer={currentAnswer}
        currentQuestionIndex={currentQuestionIndex}
        quizzes={quizzes}
        correctAnswer={correctAnswer}
        pickedAnswer={pickedAnswer}
        nevigateNext={nevigateNext}
        
        
      />}
    </div>
  )
}

export default App
