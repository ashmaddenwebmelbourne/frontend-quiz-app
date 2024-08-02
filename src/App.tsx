import { useState } from "react";
import Header from "./components/Header/Header";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Quiz from "./components/Quiz/Quiz";
import QuizResults from "./components/QuizResults/QuizResults";
import "./App.css";
import data from "../data.json";

function App() {
  type Topic = {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };

  const [quizTopic, setQuizTopic] = useState<Topic | null>(null); // No quiz selected at start
  const [question, setQuestion] = useState<number>(0); // Start at the first question
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null); // No chosen answer at start
  const [score, setScore] = useState<number>(0); // Start users score at zero
  const [gameEnded, setGameEnded] = useState<boolean>(false); // Show quiz results when game ends
  const [errorMessage, setErrorMessage] = useState<boolean>(false); // Must pick answer for each question
  const [hideSubmit, setHideSubmit] = useState<boolean>(false); // Show or hide submit/next question buttons

  const topicChoices = data.quizzes; // All topics
  const totalQuestions = quizTopic?.questions.length; // Total questions for selected topic
  const currentQuestion = quizTopic?.questions[question].question; // Currently displayed question
  const answer = quizTopic?.questions[question].answer; // The correct answer
  const options = quizTopic?.questions[question].options; // The available options to answer with

  // Sets to chosen topic
  const updateTopic = (chosenTopic: number) => {
    return setQuizTopic(data.quizzes[chosenTopic]);
  };

  // Loops through questions from start to finish
  const updateQuestion = () => {
    if (question + 1 !== totalQuestions && hideSubmit) {
      setQuestion(question + 1);
      setChosenAnswer(null);
      setHideSubmit(false);
    }
    return null;
  };

  // Stores the users selection for answer
  const updateChosenAnswer = (choice: string) => {
    if (!hideSubmit) {
      setErrorMessage(false);
      return setChosenAnswer(choice);
    }
  };

  // Updates score, hides submit button and shows next button
  const handleSubmit = () => {
    updateScore();
    if (chosenAnswer === null) {
      setErrorMessage(true);
    } else {
      setHideSubmit(true);
    }
  };

  // Updates score if user selects correct answer
  const updateScore = () => {
    if (chosenAnswer !== null && chosenAnswer === answer) {
      setScore(score + 1);
    }
  };

  // Shows the quiz results page when the quiz is over
  const handleEnd = () => {
    setGameEnded(true);
  };

  return (
    <>
      <Header quizTopicSelected={quizTopic} />
      <WelcomeScreen
        quizTopicSelected={quizTopic}
        topicChoices={topicChoices}
        updateTopic={updateTopic}
      />
      <Quiz
        isGameEnded={gameEnded}
        quizTopicSelected={quizTopic}
        totalQuestions={totalQuestions}
        questionPosition={question}
        currentQuestion={currentQuestion}
        chosenAnswer={chosenAnswer}
        correctAnswer={answer}
        errorMessage={errorMessage}
        options={options}
        updateQuestion={updateQuestion}
        updateChosenAnswer={updateChosenAnswer}
        handleSubmit={handleSubmit}
        hideSubmit={hideSubmit}
        handleEnd={handleEnd}
      />
      <QuizResults
        isGameEnded={gameEnded}
        score={score}
        totalQuestions={totalQuestions}
      />
    </>
  );
}

export default App;
