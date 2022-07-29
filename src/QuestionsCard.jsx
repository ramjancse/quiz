import React from 'react';
import AnswerCard from './AnswerCard';

function QuestionsCard({ quiz,currentAnswer }) {
    console.log(quiz);
  return (
      <div>
          <h3> { quiz.question}</h3>
          {currentAnswer.map((answer, index) => { <AnswerCard key={ index}  answer={answer} />} ) }
    </div>
  )
}

export default QuestionsCard