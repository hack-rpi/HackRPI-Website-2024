import DesktopSubwayMap from "./subway-map/desktop-subway-map";
import TitleText from "./title-text";

export default function DesktopTitleComponent() {
	return (
		<div className="flex w-full h-5/6 my-8 lg:my-36 justify-around items-start">
			<TitleText />
			<DesktopSubwayMap />
		</div>
	);
}
