import React from "react";

interface QuestionScreenProps {
    onYesClick: () => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ onYesClick }) => {
    const [showNoButton, setShowNoButton] = React.useState(true);
    
    const handleNoClick = () => {
        setShowNoButton(false);
    }

    return (
        <div className = "h-full flex flex-col items-center justify-center">
            <h2 className = "text-3xl text-center font-bold mb-4">
                Bubba B. Girl Will You Be My Valentine? 💞🌻
            </h2>

            <div className = "flex gap-6 space-x-6 justify-center">
                <button 
                onClick={onYesClick} 
                className="bg-green-200 text-black font-bold py-2 px-4 rounded-full hover:bg-green-400 transition duration-300"
                >
                    Yes! 💞
                </button>
                {showNoButton && (
                    <button
                    onClick={handleNoClick}
                    className="bg-rose-200 text-black font-bold py-2 px-4 rounded-full hover:bg-rose-400 transition duration-300"
                    >
                        No. 😀
                    </button>
                )}
            </div>
        </div>
    )
}

export default QuestionScreen;