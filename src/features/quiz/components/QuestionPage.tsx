import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { getQuiz } from "../QuizSelectors";
import { answerState, resultState } from "../QuizAtoms";
import { Question } from "../../../constants";
import Button from "./Button";
import FinishPage from "./FinishPage";
import { useState } from "react";

const QuestionPage = () => {
    const questionsQuery = useRecoilValueLoadable(getQuiz);
    const isAnswered = useRecoilValue(answerState).isAnswered;
    const setAnswered = useSetRecoilState(answerState);
    const [questionIndex, setQuestionIndex] = useState(0);
    const result = useRecoilValue(resultState);
    const setResult = useSetRecoilState(resultState);

    function checkAnswer(answer: string, correct_answer: string) {
        if (answer === correct_answer) return setResult({ correct: result.correct + 1, incorrect: result.incorrect });

        return setResult({ correct: result.correct, incorrect: result.incorrect + 1 });
    }

    function shuffleArray(array: string[]): string[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function showQuestion() {
        const question: Question = questionsQuery.contents.results[questionIndex];
        const questionNumber: number = questionIndex + 1;
        const questionText: string = question.question;
        const correctAnswer: string = question.correct_answer;
        const incorrectAnswers: string[] = question.incorrect_answers;
        const answers: string[] = shuffleArray([correctAnswer, ...incorrectAnswers]);

        return (
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Question {questionNumber}</h1>
                <h1 className="mb-6 text-xl">{questionText}</h1>
                <div className="grid grid-cols-2 gap-4">

                    {answers.map((answer, index) => (
                        <Button
                            key={index}
                            text={answer}
                            onClick={() => {
                                setAnswered({ isAnswered: true });
                                checkAnswer(answer, correctAnswer);
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    function showResult() {
        return (
            <div className="p-4">
                {questionIndex < (questionsQuery.contents?.results?.length ?? 0) - 1 ? (
                    <div className="fixed center left-0 top-70 w-full">
                        <h1 className="text-3xl font-bold mb-4">Result</h1>
                        <h1 className="mb-6 text-xl">You got {result.correct} out of {questionIndex + 1} questions correct</h1>
                        <Button
                            text="Next Question"
                            onClick={() => {
                                setQuestionIndex(prev => prev + 1);
                                setAnswered({ isAnswered: false });
                            }}
                        />
                    </div>
                ) : (
                    <FinishPage />
                )
                }
            </div >
        );
    }

    switch (questionsQuery.state) {
        case 'hasValue':
            if (!questionsQuery.contents?.results) {
                return <div>No questions available, please refresh the page</div>;
            }
            return (
                <>
                    {!isAnswered
                        ? showQuestion()
                        : showResult()
                    }

                </>
            );
        case 'loading':
            return <div>Loading questions...</div>;
        case 'hasError':
            return <div>Error: {questionsQuery.contents?.message || 'Unknown error'}</div>;
        default:
            return null;
    }
};

export default QuestionPage;