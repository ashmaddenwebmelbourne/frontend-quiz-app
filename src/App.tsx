import { useState } from "react";
import Header from "./components/Header/Header";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Quiz from "./components/Quiz/Quiz";
import QuizResults from "./components/QuizResults/QuizResults";
import "./App.css";
import data from "../data.json";

// hide next question button until user selects an option, then submits it DONE
// Prevent user from selecting new answer after clicking submit

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

  // No quiz topic selected by default
  const [quizTopic, setQuizTopic] = useState<Topic | null>(null);

  // Start at the first question
  const [question, setQuestion] = useState<number>(0);

  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);

  // Start user score at zero
  const [score, setScore] = useState<number>(0);

  // Check when game is over
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  // Error message when no selection is made
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const [hideSubmit, setHideSubmit] = useState<boolean>(false);

  const topicChoices = data.quizzes;
  const totalQuestions = quizTopic?.questions.length;
  const currentQuestion = quizTopic?.questions[question].question;
  const answer = quizTopic?.questions[question].answer;
  const options = quizTopic?.questions[question].options;

  // Update the topic
  const updateTopic = (chosenTopic: number) => {
    return setQuizTopic(data.quizzes[chosenTopic]);
  };

  // Go to next question
  const updateQuestion = () => {
    if (question + 1 !== totalQuestions && hideSubmit) {
      setQuestion(question + 1);
      setChosenAnswer(null);
      setHideSubmit(false);
    }
    return null;
  };

  // Update chosen answer
  const updateChosenAnswer = (choice: string) => {
    if (!hideSubmit) {
      setErrorMessage(false);
      return setChosenAnswer(choice);
    }
  };

  // Handle Submit Button
  const handleSubmit = () => {
    updateScore();
    if (chosenAnswer === null) {
      setErrorMessage(true);
    } else {
      setHideSubmit(true);
    }
  };

  // Update score
  const updateScore = () => {
    if (chosenAnswer !== null && chosenAnswer === answer) {
      setScore(score + 1);
    }
  };

  // End quiz
  const handleEnd = () => {
    setGameEnded(true);
  };

  console.log(answer);

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
