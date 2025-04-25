import { useRecoilValue } from "recoil";
import { settingQuizState } from "../QuizAtoms";
import SelectCategory from "./SelectCategory";
import SelectDifficulty from "./SelectDifficulty";
import QuestionPage from "./QuestionPage";

const SettingsPage = () => {
    const checkSettings = useRecoilValue(settingQuizState);

    const renderQuestionPage = () => {
        if (!checkSettings.category) {
            return <SelectCategory/>
        }
        if (!checkSettings.difficulty) {
            return <SelectDifficulty/>
        }
        return <QuestionPage/>;
    };

    return (
        <>
            {renderQuestionPage()}
        </>
    );
};

export default SettingsPage;