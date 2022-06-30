import React, { useEffect, useState } from "react";
import Timer from "../timer/Timer";
import Question from "../question/Question";
import styles from "./Main.module.css";
import { moneyList } from "../data";

const Main = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earn, setEarn] = useState("0 $");
  const hadnleTry = () => {
    window.location.reload();
  };

  useEffect(() => {
    questionNumber > 1 && setEarn(moneyList.find((moneyObj) => moneyObj.id === questionNumber -1).amount )
  }, [questionNumber])
  

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        {stop ? (
          <div className={styles.earn}>
            <h1>YOU EARNED: {earn}</h1>
            <div className={styles.mainBtnParentDiv}>
              <button className={styles.mainBtn} onClick={hadnleTry}>
              Let's! Give Yourself Another Chance..
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.timer}>
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>

            <div className={styles.questionAnswer}>
              <Question
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
                setStop={setStop}
              />
            </div>
          </>
        )}
      </main>

      <div className={styles.pyramide}>
        <ul className={styles.moneyItemUl}>
          {moneyList.map((x) => (
            <li
              className={
                questionNumber === x.id
                  ? `${styles.moneyItemLi} ${styles.active}`
                  : `${styles.moneyItemLi}`
              }
              key={x.id}
            >
              <p className={styles.moneyItemLiNumber}>{x.id}</p>
              <p className={styles.moneyItemLiAmount}>{x.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
