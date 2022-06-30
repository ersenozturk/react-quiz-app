import { useState } from "react";
import './answer.css'

const Answer = ({ currentQuestion, setStop, setQuestionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [myClassName, setMyClassName] = useState("answerDiv");

  const delay = (myCallBack, duration) => {
    setTimeout(() => {
      myCallBack()
    }, duration);
  }

  const handleClick = (e) => {
    setSelectedAnswer(e);
    setMyClassName("answerDiv active");
    delay(() => setMyClassName(e.correct ? 'answerDiv correct' :  'answerDiv wrong'), 3000)
    delay(()=>{
      if (e.correct) {
        setQuestionNumber((prevQuestionNum) => prevQuestionNum + 1 )
        setSelectedAnswer(null)
      } else {
        setStop(true)
      }
    }, 6000)

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
