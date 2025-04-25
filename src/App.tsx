import FinishPage from './features/quiz/components/FinishPage';
import StartPage from './features/quiz/components/StartPage';
import { useRecoilValue } from 'recoil';
import { statusState } from './features/quiz/QuizAtoms';
import SettingsPage from './features/quiz/components/SettingsPage';

function App() {
  const Status = useRecoilValue(statusState);

  const renderPage = () => {
    if (!Status.isFinished && !Status.isStarted) {
      return <StartPage />;
    }
    if (!Status.isFinished && Status.isStarted) {
      return <SettingsPage />;
    }
    if (Status.isFinished) {
      return <FinishPage />;
    }
    return null;
  };

  return (
    <div className="flex flex-col text-center h-dvh justify-center items-center">
      {renderPage()}
    </div>
  )
}

export default App
