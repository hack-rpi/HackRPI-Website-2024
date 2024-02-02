import DesktopSubwayMap from "./desktop-subway-map";
import TitleText from "./title-text";

export default function DesktopTitleComponent() {
	return (
		<div className="flex w-full h-80 my-8 lg:my-36 justify-around items-center">
			<TitleText />
			<DesktopSubwayMap />
		</div>
	);
}
