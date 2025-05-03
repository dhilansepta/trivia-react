import { useRecoilValue, useSetRecoilState } from 'recoil';
import { answerState, resultState, settingQuizState, statusState } from '../QuizAtoms';
import Button from './Button';

const FinishPage = () => {
  const setStatus = useSetRecoilState(statusState);
  const setQuizSettings = useSetRecoilState(settingQuizState);
  const setIsAnswered = useSetRecoilState(answerState);
  const result = useRecoilValue(resultState);

  const handlePlayAgain = () => {
    setStatus({
      isFinished: false,
      isStarted: false
    });

    setQuizSettings({
      category: undefined,
      difficulty: undefined
    })

    setIsAnswered({
      isAnswered: false,
    });
  };

  return (
    <div className="fixed center left-0 top-70 w-full">
      <h1 className="text-3xl font-bold mb-4">Thank you For Playing</h1>
      <h1 className="mb-6 text-xl">You got {result.correct} questions correct</h1>
      <Button text="Play Again" onClick={handlePlayAgain} />
    </div>
  );
};

export default FinishPage;