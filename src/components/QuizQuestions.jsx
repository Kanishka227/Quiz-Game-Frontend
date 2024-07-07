import styles from "./QuizQuestions.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import BackgroundImage from "../assets/BackgroundImage.jpg";
import Score from "./Score";

const QuizQuestions = ({ setStartQuiz }) => {
  const [dataArray, setDataArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://quiz-game-backend.onrender.com/data`
        );
        setDataArray(response.data);
        setLoading(false)
      } catch (error) {
        console.log("error fetching data from backend!", error);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.bgImage} src={BackgroundImage} alt="background" />

      {
      (loading) ? null:
      dataArray.length > 0 && index < dataArray.length ? (
        <Quiz
          data={dataArray[index]}
          setIndex={setIndex}
          setStartQuiz={setStartQuiz}
          setScore={setScore}
        />
      ) : (
        <Score score={score} setStartQuiz={setStartQuiz}/>
      )}
      <div></div>
    </div>
  );
};
export default QuizQuestions;
