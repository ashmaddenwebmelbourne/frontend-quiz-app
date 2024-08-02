const QuizResults = ({ isGameEnded, score, totalQuestions }) => {
  {
    return isGameEnded ? (
      <>
        <div>QuizResults: {`You scored ${score} out of ${totalQuestions}`}</div>
        <a href="/">Restart quiz</a>
      </>
    ) : null;
  }
};

export default QuizResults;
