function Tile({ value }: { value: number }) {
    let bgColor;

    switch (value) {
        case 0:
            bgColor = "bg-gray-200";
            break;
        case 2:
            bgColor = "bg-yellow-200";
            break;
        case 4:
            bgColor = "bg-yellow-300";
            break;
        case 8:
            bgColor = "bg-yellow-400";
            break;
        case 16:
            bgColor = "bg-yellow-500";
            break;
        case 32:
            bgColor = "bg-yellow-600";
            break;
        case 64:
            bgColor = "bg-yellow-700";
            break;
        case 128:
            bgColor = "bg-green-200";
            break;
        case 256:
            bgColor = "bg-green-300";
            break;
        case 512:
            bgColor = "bg-green-400";
            break;
        case 1024:
            bgColor = "bg-green-500";
            break;
        case 2048:
            bgColor = "bg-green-600";
            break;
        default:
            bgColor = "bg-black";
    }

    return (
        <div className={`tile flex justify-center items-center rounded-lg shadow-lg h-36 w-36 ${bgColor} ${value ? '' : 'empty'} text-4xl font-bold`}>
            {value !== 0 ? value : ''}
        </div>
    );
}

export default Tile;