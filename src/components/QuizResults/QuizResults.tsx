import "./quizresults.css";

type QuizResultsProps = {
  quizTopicSelected: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } | null;
  isGameEnded: boolean;
  score: number;
  totalQuestions: number | undefined;
};

const QuizResults = ({
  quizTopicSelected,
  isGameEnded,
  score,
  totalQuestions,
}: QuizResultsProps) => {
  {
    return isGameEnded ? (
      <section>
        <h1 className="heading--lg">
          Quiz completed{" "}
          <span className="heading--lg--bold"> You scored...</span>
        </h1>
        <div className="results shadow">
          <div className="results__topic">
            <img src={quizTopicSelected?.icon} aria-hidden="true" />
            <p>{quizTopicSelected?.title}</p>
          </div>
          <strong className="display">{`${score}`}</strong>
          <p className="body--m">{`out of ${totalQuestions}`}</p>
        </div>
        <div className="btn--end heading--s">
          <a href="/">Restart quiz</a>
        </div>
      </section>
    ) : null;
  }
};

export default QuizResults;
