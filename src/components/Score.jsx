import styles from "./Score.module.css"

export default function Score({score,setStartQuiz}){
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>your score is {score} out of 10</h1>
      <button
        type="button"
        className={`${styles.btn} btn btn-danger`}
        onClick={() => setStartQuiz(false)}
      >
        Retry
      </button>
    </div>
  );
}