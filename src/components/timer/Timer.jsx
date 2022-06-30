import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'

const Timer = ({questionNumber, setStop}) => {
  const [timeCalc, setTimeCalc] = useState(30)

  useEffect(() => {
    if (timeCalc === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimeCalc((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeCalc, setStop]);

  useEffect(() => {
    setTimeCalc(30)
  }, [questionNumber])
  
  
  return (
    <div className={styles.timerCompDiv}>
      <p className={styles.timerCompP}>{timeCalc}</p> 
    </div> 
  )
}

export default Timer