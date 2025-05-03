import { useSetRecoilState } from 'recoil';
import { statusState } from '../QuizAtoms';
import Button from './Button';

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
      <h1 className="text-3xl font-bold">Welcome to Fun Quiz</h1>
      <h1 className="text-xl font-700 mb-4">This Trivia was created by Dhilan using OpenTDB API</h1>
      <Button text='Start Quiz' onClick={handleStartQuiz}/>
    </div>
  );
};

export default StartPage;