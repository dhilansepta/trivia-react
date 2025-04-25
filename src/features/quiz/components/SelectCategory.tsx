import { useSetRecoilState } from "recoil";
import { settingQuizState } from "../QuizAtoms";

const SelectCategory = () => {
    const setCategory = useSetRecoilState(settingQuizState);
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Select Category</h1>
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => { setCategory({ category: 18, difficulty: null }) }}
                >
                    Science : Computers
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => { setCategory({ category: 19, difficulty: null }) }}
                >
                    Science : Mathematics
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => { setCategory({ category: 20, difficulty: null }) }}
                >
                    Mythology
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={() => { setCategory({ category: 21, difficulty: null }) }}
                >
                    Sport
                </button>
            </div>
        </>
    );
}

export default SelectCategory;