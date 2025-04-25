export interface CSSProperties {
    [key: string]: React.CSSProperties
}

export interface Status {
    isFinished: boolean,
    isStarted: boolean,
}

export interface SettingQuiz {
    category: number | undefined;
    difficulty: string | undefined;
}

export interface Question {
    type: 'multiple' | 'boolean';
    difficulty: 'easy' | 'medium' | 'hard';
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export interface QuizApiResponse {
    response_code: number;
    results: Question[];
}
