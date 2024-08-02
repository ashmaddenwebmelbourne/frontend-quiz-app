type WelcomeScreenProps = {
  // The quiz object or no selection
  quizTopicSelected: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } | null;
  // The array of topic objects
  topicChoices: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  }[];
  updateTopic: (chosenTopic: number) => void;
};

const WelcomeScreen = ({
  quizTopicSelected,
  topicChoices,
  updateTopic,
}: WelcomeScreenProps) => {
  const topicChoice = topicChoices.map((topic, topicID) => {
    return (
      <div key={topicID} onClick={() => updateTopic(topicID)}>
        <img src={topic.icon} alt={`${topic.title} logo`} />
        <p>{topic.title}</p>
      </div>
    );
  });

  {
    return quizTopicSelected === null ? <>{topicChoice}</> : null;
  }
};

export default WelcomeScreen;
