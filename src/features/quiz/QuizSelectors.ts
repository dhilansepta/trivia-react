import { selector } from 'recoil';
import { QuizApiResponse } from '../../constants';
import { settingQuizState } from './QuizAtoms';

export const getQuestions = selector<QuizApiResponse>({
    key: 'getQuestions',
    get: async ({ get }) => {
        const getCategory = get(settingQuizState).category;
        const getDifficulty = get(settingQuizState).difficulty;

        const url = `https://opentdb.com/api.php?amount=10&category=${getCategory}&difficulty=${getDifficulty}`;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
});