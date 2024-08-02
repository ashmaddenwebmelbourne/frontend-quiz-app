import "./quiz.css";

type QuizProps = {
  isGameEnded: boolean;
  quizTopicSelected: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } | null;
  totalQuestions: number | undefined;
  questionPosition: number;
  currentQuestion: string | undefined;
  chosenAnswer: string | null;
  correctAnswer: string | undefined;
  errorMessage: boolean;
  options: string[] | undefined;
  updateQuestion: () => null;
  updateChosenAnswer: (choice: string) => void;
  handleSubmit: () => void;
  hideSubmit: boolean;
  handleEnd: () => void;
};

const Quiz = ({
  isGameEnded,
  quizTopicSelected,
  totalQuestions,
  questionPosition,
  currentQuestion,
  chosenAnswer,
  correctAnswer,
  errorMessage,
  options,
  updateQuestion,
  updateChosenAnswer,
  handleSubmit,
  hideSubmit,
  handleEnd,
}: QuizProps) => {
  // Display all the available options to answer with
  const answerOptions = options?.map((option: string, optionID: number) => {
    return (
      <div
        className={`answer ${
          chosenAnswer === option ? "answer--selected" : ""
        } ${option === correctAnswer && hideSubmit ? "answer--correct" : ""} ${
          chosenAnswer !== correctAnswer &&
          hideSubmit &&
          chosenAnswer === option
            ? "answer--incorrect"
            : ""
        } answer--mode`}
        onClick={() => updateChosenAnswer(option)}
        key={optionID}
      >
        <div className="answer__order">{["A", "B", "C", "D"][optionID]}</div>
        <p className="answer__text">{option}</p>
      </div>
    );
  });

  // Only begin quiz if topic is selected
  {
    return quizTopicSelected === null || isGameEnded ? null : (
      <>
        <div>
          <p>{`Question ${questionPosition + 1} of ${totalQuestions}`}</p>
          <h1>{currentQuestion}</h1>
        </div>
        <div>
          {answerOptions}
          {hideSubmit ? null : (
            <button onClick={handleSubmit}>Submit Question</button>
          )}
          {chosenAnswer &&
          hideSubmit &&
          questionPosition + 1 !== totalQuestions ? (
            <button onClick={updateQuestion}>Next Question</button>
          ) : null}

          {questionPosition + 1 === totalQuestions && hideSubmit ? (
            <button onClick={handleEnd}>End Quiz</button>
          ) : null}
          {errorMessage ? <em>Please choosen an answer</em> : null}
        </div>
      </>
    );
  }
};

export default Quiz;
