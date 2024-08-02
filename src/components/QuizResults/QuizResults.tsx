type QuizResultsProps = {
  isGameEnded: boolean;
  score: number;
  totalQuestions: number | undefined;
};

const QuizResults = ({
  isGameEnded,
  score,
  totalQuestions,
}: QuizResultsProps) => {
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
