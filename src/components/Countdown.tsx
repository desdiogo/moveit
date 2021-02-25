import styles from "../styles/components/Countdown.module.css";
import { useState, useEffect, useContext } from "react";
import { CountDownContext } from "../contexts/ContdownContext";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetContDown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.coundownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.coundownButton} ${styles.coundownButtonButtonActive}`}
              onClick={resetContDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.coundownButton}
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
