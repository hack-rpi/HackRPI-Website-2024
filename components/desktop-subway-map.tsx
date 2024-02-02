import NextImg from "next/image";
import SubwayStop from "./subway-stop";
import SubwayCircles from "./subway-circles";

export default function DesktopSubwayMap() {
	return (
		<div className="w-64 h-64 sm:w-80 sm:h-80 mx-8 overflow-visible relative my-4">
			<SubwayCircles />
			{/* Lines */}
			{/* top Yellow */}
			<div className="relative -top-[120%] right-[75%] w-[21rem] h-3 bg-hackrpi-secondary-yellow rotate-45 -z-[5]"></div>
			{/* right Green */}
			<div className="relative -top-[15%] -right-[75%] w-[45%] h-3 bg-hackrpi-primary-light-green rotate-45"></div>
			<div className="relative -top-[5%] left-[110%] w-3 h-[1000px] bg-hackrpi-primary-light-green "></div>
			{/* bottom Blue */}
			<div className="relative bottom-[315%] right-[60%] w-[100%] h-3 bg-hackrpi-primary-blue -rotate-45"></div>
			<div className="relative bottom-[285%] right-[315%] w-[270%] h-3 bg-hackrpi-primary-blue "></div>
			{/* Subway Stops */}
			<div className="relative bottom-[430%] right-[7%] w-fit">
				<SubwayStop color="hackrpi-secondary-yellow"></SubwayStop>
			</div>
			<div className="relative bottom-[309%] right-[52%] w-fit">
				<SubwayStop color="hackrpi-primary-blue"></SubwayStop>
			</div>
			<div className="relative bottom-[362%] -right-[104.5%] w-fit">
				<SubwayStop color="hackrpi-primary-light-green"></SubwayStop>
			</div>
		</div>
	);
}
