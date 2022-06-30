import React from "react";
import Timer from "../timer/Timer";
import Question from "../question/Question";
import Answer from "../answer/Answer";
import styles from './Main.module.css'
import { moneyList } from "../data";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.timer}>
          <Timer />
        </div>
        <div className={styles.questionAnswer}>
          <Question />
          <Answer />
        </div>
      </main>
      <div className={styles.pyramide}>
        <ul>
        {
          moneyList.map((eachMoneyItem)=>(
            // <li key={eachMoneyItem.id}><span>{eachMoneyItem.id}</span> <p>{eachMoneyItem.amount}</p> </li>
            <li key={eachMoneyItem.id}><span>{eachMoneyItem.id}</span></li>
            ))
        }
        </ul>
      </div>
    </div>
  );
};

export default Main;
