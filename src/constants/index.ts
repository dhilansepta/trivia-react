export interface CSSProperties {
    [key: string]: React.CSSProperties
}

export interface Status {
    isFinished: boolean,
    isStarted: boolean,
}

export interface ButtonProps {
    text: string;
    onClick: () => void;
}

export interface SettingQuiz {
    category: number | undefined;
    difficulty: string | undefined;
}

export interface Question {
    number: number,
    type: 'multiple' | 'boolean';
    difficulty: 'easy' | 'medium' | 'hard';
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    answered: AnswerState;
}

export interface QuizApiResponse {
    response_code: number;
    results: Question[];
}

export interface Result {
    correct: number;
    incorrect: number;
}

export interface AnswerState {
    isAnswered: boolean;
}