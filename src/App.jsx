import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { useState } from "react";
import QuizQuestions from "./components/QuizQuestions";

function App() {
  const [startQuiz, setStartQuiz] = useState(false)
  return (
    <div className="app">
      {startQuiz ? <QuizQuestions setStartQuiz={setStartQuiz}/> : <Home setStartQuiz={setStartQuiz} />}
    </div>
  );
}

export default App;
