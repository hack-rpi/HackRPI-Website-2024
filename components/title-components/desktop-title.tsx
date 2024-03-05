import Timer from "./timer";
import TitleText from "./title-text";

export default function DesktopTitleComponent() {
	return (
		<div className="flex w-full justify-around items-center mb-16">
			<div className="flex flex-col w-1/2 items-center justify-around h-full ">
				<TitleText />
				<Timer />
			</div>
			<div className="flex items center justify-center w-1/2"></div>
		</div>
	);
}
