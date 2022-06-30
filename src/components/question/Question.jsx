import { useEffect, useState } from "react";
import Answer from "../answer/Answer";
import { data } from "../data";
import styles from "./Question.module.css";

const Question = ({ setQuestionNumber, setStop, questionNumber }) => {
  const [currentQuestion, setCurrentQuestion] = useState([])

  useEffect(() => {
    setCurrentQuestion(data[questionNumber-1])
  }, [questionNumber])
  

  return (
    <>
      <div className={styles.questionDiv}>
            {currentQuestion?.question}
      </div>
      <Answer currentQuestion={currentQuestion} setStop={setStop} setQuestionNumber={setQuestionNumber} />
    </>
  );
};

export default Question;
