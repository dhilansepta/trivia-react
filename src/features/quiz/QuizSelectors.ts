import { selector } from 'recoil';
import { QuizApiResponse } from '../../constants';
import { settingQuizState } from './QuizAtoms';

export const getQuizUrl = selector<string>({
    key: 'getQuizUrl',
    get: ({ get }) => {
        const getCategory = get(settingQuizState).category;
        const getDifficulty = get(settingQuizState).difficulty;
        return `https://opentdb.com/api.php?amount=10&category=${getCategory}&difficulty=${getDifficulty}`;
    },
});

export const getQuiz = selector<QuizApiResponse>({
    key: 'getQuiz',
    get: async ({ get }) => {
        const url = get(getQuizUrl);
        const response = await fetch(url);
        const data = await response.json();

        return data;
    },
});