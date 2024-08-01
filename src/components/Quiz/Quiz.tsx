const Quiz = ({
  isGameEnded,
  quizTopicSelected,
  totalQuestions,
  questionPosition,
  currentQuestion,
  chosenAnswer,
  errorMessage,
  options,
  updateQuestion,
  updateChosenAnswer,
  handleSubmit,
  hideSubmit,
  handleEnd,
}) => {
  // Display all the available options to answer with
  const answerOptions = options?.map((option: string, optionID: number) => {
    return (
      <div onClick={() => updateChosenAnswer(option)} key={optionID}>
        <div>{["A", "B", "C", "D"][optionID]}</div>
        <p>{option}</p>
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
