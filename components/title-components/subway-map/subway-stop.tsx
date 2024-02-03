export default function SubwayStop({ color }: { color: string }) {
	return <div className={`relative bg-white w-12 aspect-square rounded-full border-8 border-${color}`}></div>;
}
