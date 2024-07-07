import { useState } from "react"
import styles from "./Quiz.module.css"

const Quiz = ({data,setIndex,setStartQuiz,setScore}) => {
  const [clickedButton, setClickedButton] = useState(null)

  const handleOnClick = (value) => {
    if(clickedButton !== null){
      return;
    }
    setClickedButton(data.answer);
    if(data.answer === value){
       setScore(prevValue => prevValue+1)   
    }
  }
  const handleNextButoon = () => {
     setClickedButton(null)
     setIndex((prevIndex) => prevIndex + 1);
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.question} alert alert-danger`} role="alert">
        {data.question}
      </div>
      <button
        type="button"
        className={`${styles.btn} btn ${
          clickedButton === "A" ? "btn-success" : "btn-light"
        }`}
        onClick={() => handleOnClick("A")}
      >
        {data.A}
      </button>
      <button
        type="button"
        className={`${styles.btn} btn ${
          clickedButton === "B" ? "btn-success" : "btn-light"
        }`}
        onClick={() => handleOnClick("B")}
      >
        {data.B}
      </button>
      <button
        type="button"
        className={`${styles.btn} btn ${
          clickedButton === "C" ? "btn-success" : "btn-light"
        }`}
        onClick={() => handleOnClick("C")}
      >
        {data.C}
      </button>
      <button
        type="button"
        className={`${styles.btn} btn ${
          clickedButton === "D" ? "btn-success" : "btn-light"
        }`}
        onClick={() => handleOnClick("D")}
      >
        {data.D}
      </button>
      <div>
        <button
          type="button"
          className={`${styles.btn} btn btn-danger`}
          onClick={() => setStartQuiz(false)}
        >
          Retry
        </button>
        <button
          type="button"
          className={`${styles.btn} btn btn-primary`}
          onClick={handleNextButoon}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Quiz