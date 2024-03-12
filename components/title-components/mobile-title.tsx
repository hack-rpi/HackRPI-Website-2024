import Timer from "./timer";
import TitleText from "./title-text";

export default function MobileTitleComponent() {
	return (
		<div className="w-5/6 h-fit flex flex-col items-center justify-start pl-8 mb-8">
			<div className="h-28 w-full"></div>
			<TitleText />
			<Timer />
		</div>
	);
}
