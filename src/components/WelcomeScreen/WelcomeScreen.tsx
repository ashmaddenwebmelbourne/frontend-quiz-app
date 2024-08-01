const WelcomeScreen = ({ quizTopicSelected, topicChoices, updateTopic }) => {
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
