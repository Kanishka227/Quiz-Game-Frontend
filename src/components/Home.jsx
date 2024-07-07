import BackgroundImage from "../assets/BackgroundImage.jpg";
import styles from "./Home.module.css";

const Home = ( {setStartQuiz }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.bgImage}
        src={BackgroundImage}
        alt="background-image"
      />
      <div className={styles.heading}>
        <h1>Welcome to the ultimate quiz</h1>
        <p>
          Get ready to challenge your knowledge with our quiz. You'll be
          presented with 10 questions, each worth 1 point. Answer all questions
          to see your total score at the end. Good luck!
        </p>
        <button
          type="button"
          className={`btn btn-warning ${styles.button}`}
          onClick={() => setStartQuiz(true)}
        >
          Click To Play
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
