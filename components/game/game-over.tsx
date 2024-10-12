import HackRPIButton from "../themed-components/hackrpi-button";

const GameOver = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#213445] p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Game Over!</h2>
                <HackRPIButton onClick={onClose}>Try Agian</HackRPIButton>
            </div>
        </div>
    );
};

export default GameOver;