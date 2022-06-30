import { useState, useEffect } from "react";
import './answer.css'
import useSound from "use-sound";
import play from '../../assets/sounds_play.wav';
import correct from '../../assets/sounds_correct.wav';
import wrong from '../../assets/sounds_wrong.wav';

const Answer = ({ currentQuestion, setStop, setQuestionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [myClassName, setMyClassName] = useState("answerDiv");

  // sounds
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

// sounds logic
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  // answer logic
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
        correctAnswer()
        delay(()=>{
          setQuestionNumber((prevQuestionNum) => prevQuestionNum + 1 )
          setSelectedAnswer(null)
        },1000)
      } else {
        wrongAnswer()
        delay(()=>{
          setStop(true)
        },1000)
      }
    }, 5000)

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
