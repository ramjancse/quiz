import React from 'react';

const style = {
  correct: {
    border:'1px solid green',
  },
  wrong: {
    border: '1px solid red'
  }
}
function AnswerCard({ answer,pickAnswer,correctAnswer,pickedAnswer}) {
  const isRightAnswer = pickedAnswer && answer === correctAnswer;
  const isWrongAnswer = pickAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
  const correctClass = isRightAnswer ? 'correct': '';
  const wrongClass = isWrongAnswer ? 'wrong' : '';
  const disabledClass = pickedAnswer && 'disabled-answer';
  return (
    <div onClick={()=>pickAnswer(answer)} className={`${correctClass} ${wrongClass} ${disabledClass}`}> {answer }</div>
  )
}

export default AnswerCard