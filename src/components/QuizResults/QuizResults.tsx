const QuizResults = ({ isGameEnded, score, totalQuestions }) => {
  {
    return isGameEnded ? (
      <div>QuizResults: {`You scored ${score} out of ${totalQuestions}`}</div>
    ) : null;
  }
};

export default QuizResults;
