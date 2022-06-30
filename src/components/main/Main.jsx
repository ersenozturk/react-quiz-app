import React from "react";
import Timer from "../timer/Timer";
import Question from "../question/Question";
import Answer from "../answer/Answer";
import styles from "./Main.module.css";
import { moneyList, data } from "../data";

const Main = () => {
  const {id, question} = data
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
        <ul className={styles.moneyItemUl}>
          {moneyList.map((eachMoneyItem) => (
            <li className={styles.moneyItemLi} key={eachMoneyItem.id}>
            {/* // <li className={`${styles.moneyItemLi} ${styles.active}`} key={eachMoneyItem.id}> */}
              <p className={styles.moneyItemLiNumber}>
                {eachMoneyItem.id}
              </p>{" "}
              <p className={styles.moneyItemLiAmount}>
              {eachMoneyItem.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
