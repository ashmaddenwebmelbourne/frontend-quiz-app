type HeaderProps = {
  quizTopicSelected: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } | null;
};

const Header = ({ quizTopicSelected }: HeaderProps) => {
  return (
    <header>
      {quizTopicSelected === null ? null : <div>{quizTopicSelected.title}</div>}
      <div>Toggle Theme</div>
    </header>
  );
};

export default Header;
