import Timer from "./timer";
import TitleText from "./title-text";
import InteractiveNavigationMap from "../interactive-map/interactive-map";

export default function DesktopTitleComponent() {
	return (
		<div className="pl-4 pt-4 flex w-full h-screen justify-around items-center mb-8">
			<div className="flex flex-col w-1/2 items-start justify-around h-full ">
				<TitleText />
				<Timer />
			</div>
			<div className="flex items-center justify-center w-1/2 h-full ">
				<InteractiveNavigationMap />
			</div>
		</div>
	);
}
