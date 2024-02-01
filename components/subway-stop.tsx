export default function SubwayStop({color, top, left}:{color: string, top:string, left:string}) {
    return (
        <div>
            <div className={`absolute bg-white w-12 aspect-square rounded-full border-8 border-${color} top-[${top}] left-[${left}]`}>
            </div>
        </div>
    );
}