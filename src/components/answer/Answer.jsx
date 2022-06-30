import { useState } from "react";
import './answer.css'

const Answer = ({ currentQuestion, setStop }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [myClassName, setMyClassName] = useState("answerDiv");

  const handleClick = (e) => {
    setSelectedAnswer(e);
    setMyClassName("answerDiv active");
    setTimeout(() => {
      setMyClassName(e.correct ? 'answerDiv correct' :  'answerDiv wrong' )
    }, 3000);
  };

  return (
    <div className='answersDiv'>
      {currentQuestion.answers?.map((eachAnswer, index) => (
        // <div key={index} className={styles.answerDiv} onClick={() => handleClick(eachAnswer)}>
        <div
          key={index}
          onClick={() => handleClick(eachAnswer)}
          className={
            selectedAnswer === eachAnswer
              ? myClassName
              : 'answerDiv'
          }
        >
          {eachAnswer.text}
        </div>
      ))}
    </div>
  );
};

export default Answer;
