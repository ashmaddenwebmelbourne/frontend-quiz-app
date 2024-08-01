import "./App.css";
import data from "../data.json";

// Header to update the theme

// WelcomeScreen to update the topic
// User selects the topic and it will update on header and what quiz is passed to quiz
// Quiz to update the question and score
// Will show all
// QUizResults to restart game

// Data structures
data.quizzes; // This is the topic options to pass to Welcome Screen
data.quizzes[0]; // 0-4 This is the specific topic, with it's title, icon and questions
data.quizzes[0].questions.length; // How many questions there are
data.quizzes[0].questions[0]; // This is the specific question
data.quizzes[0].questions[0].answer; // This is the answer to that specific question
data.quizzes[0].questions[0].options; // This an array of the options to answer with for that question

// What needs to change? The quizzes index and the questions index
// How will they change?

console.log(data.quizzes);

function App() {
  return <></>;
}

export default App;
