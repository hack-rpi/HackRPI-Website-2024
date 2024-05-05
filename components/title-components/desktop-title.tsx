import Timer from "./timer";
import TitleText from "./title-text";
import Image from "next/image";
import MapSvg from "@/public/interactive-navigation/WebInteractiveMap.svg";

export default function DesktopTitleComponent() {
	return (
		<div className="pl-4 pt-4 flex w-full h-screen justify-around items-center mb-8">
			<div className="flex flex-col w-1/2 items-start justify-around h-full ">
				<TitleText />
				<Timer />
			</div>
			<div className="flex items center justify-center w-1/2 pl-16">
				<div className="w-11/12 aspect-square">
					<Image src={MapSvg} alt="Map" className="rounded-md" />
				</div>
			</div>
		</div>
	);
}
