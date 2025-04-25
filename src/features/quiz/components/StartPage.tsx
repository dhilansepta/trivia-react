import { useSetRecoilState } from 'recoil';
import { statusState } from '../QuizAtoms';

const StartPage = () => {
  const setStatus = useSetRecoilState(statusState);

  const handleStartQuiz = () => {
    setStatus({
      isStarted: true,
      isFinished: false
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        onClick={handleStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;