import { atom } from "recoil";
import { SettingQuiz, Status } from "../../constants";

export const statusState = atom<Status>({
    key: 'statusState',
    default:
    {
        isFinished: false,
        isStarted: false
    },
});

export const settingQuizState = atom<SettingQuiz>({
    key: 'settingQuizState',
    default:
    {
        category: undefined,
        difficulty: undefined,
    }
});