import "./welcomescreen.css";

type WelcomeScreenProps = {
  quizTopicSelected: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } | null;
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
      <div
        className="topic__card shadow"
        key={topicID}
        onClick={() => updateTopic(topicID)}
      >
        <div className={`topic__img ${topic.title}`}>
          <img src={topic.icon} aria-hidden="true" />
        </div>
        <p className="topic__title heading--s">{topic.title}</p>
      </div>
    );
  });

  {
    return quizTopicSelected === null ? (
      <section className="welcome">
        <div className="welcome__message">
          <h1 className="welcome__title heading--lg">
            Welcome to the{" "}
            <span className="heading--lg--bold">Frontend Quiz!</span>
          </h1>
          <em className="welcome__helper body--s">
            Pick a subject to get started
          </em>
        </div>
        <div className="topics">{topicChoice}</div>
      </section>
    ) : null;
  }
};

export default WelcomeScreen;
