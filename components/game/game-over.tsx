const GameOver = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Game Over!</h2>
                <button 
                    className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={onClose}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default GameOver;