const Header = ({ quizTopicSelected }) => {
  return (
    <header>
      {quizTopicSelected === null ? null : <div>{quizTopicSelected.title}</div>}
      <div>Toggle Theme</div>
    </header>
  );
};

export default Header;
