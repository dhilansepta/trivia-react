import { useRecoilValue, useSetRecoilState } from "recoil";
import { settingQuizState } from "../QuizAtoms";

const SelectDifficulty = () => {
    const setDifficulty = useSetRecoilState(settingQuizState);
    const category = useRecoilValue(settingQuizState).category;

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Select Category</h1>
            <div className="grid grid-cols-3 gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => {
                        setDifficulty({ category: category, difficulty: 'easy' })
                    }}
                >
                    Easy
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => {
                        setDifficulty({ category: category, difficulty: 'medium' })
                    }}
                >
                    Medium
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => {
                        setDifficulty({ category: category, difficulty: 'hard' })
                    }}
                >
                    Hard
                </button>
            </div>
        </>
    );
}

export default SelectDifficulty;