import React from 'react';
import AnswerCard from './AnswerCard';
const styles = {
  main: {
    width: '500px',
    backgroundColor: '#cfcfcf',
    padding: '30px',
    borderRadius: '5px'
  },
  marginHorizontal: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  correct: {
    border:'1px solid green',
  },
  wrong: {
    border: '1px solid red'
  }
}

function QuestionsCard({
                    quiz,
                    currentAnswer,
                    currentQuestionIndex,
                    quizzes, nevigateNext,
                    pickAnswer,
                    correctAnswer,
                    pickedAnswer
            }) {

  return (
      <div style={styles.main}>
      <h3> Question Number : {currentQuestionIndex + 1}/{ quizzes.length}</h3>
        <h3> { quiz.question}</h3>
      {currentAnswer.map((answer, index) =>
        <AnswerCard key={index}
          answer={answer}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />)}
      <button style={styles.marginHorizontal} onClick={nevigateNext}> Next </button>
    </div>
  )
}

export default QuestionsCard