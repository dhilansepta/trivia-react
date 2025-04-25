import { useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { getQuestions } from "../QuizSelectors";

const QuestionPage = () => {
    const questionsQuery = useRecoilValueLoadable(getQuestions);

    useEffect(() => {
        console.log(questionsQuery);
    })

    switch (questionsQuery.state) {
        case 'hasValue':
            return (
                <div>
                    {questionsQuery.contents.results.map((question, index) => (
                        <div key={index}>
                            <h3>{question.question}</h3>
                        </div>
                    ))}
                </div>
            );
        case 'loading':
            return <div>Loading questions...</div>;
        case 'hasError':
            return <div>Error: {questionsQuery.contents.message}</div>;
    }
};

export default QuestionPage;