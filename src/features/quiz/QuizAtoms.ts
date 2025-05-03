import { atom } from "recoil";
import { AnswerState, Result, SettingQuiz, Status } from "../../constants";

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

export const resultState = atom<Result>({
    key: 'resultState',
    default:
    {
        correct: 0,
        incorrect: 0
    }
});

export const answerState = atom<AnswerState>({
    key: 'answerState',
    default:
    {
        isAnswered: false
    }
});