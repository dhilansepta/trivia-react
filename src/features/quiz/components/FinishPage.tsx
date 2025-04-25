import { useSetRecoilState } from 'recoil';
import { statusState } from '../QuizAtoms';

const FinishPage = () => {
  const setStatus = useSetRecoilState(statusState);

  const handlePlayAgain = () => {
    setStatus({
      isFinished: false,
      isStarted: false
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you For Playing</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        onClick={handlePlayAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default FinishPage;