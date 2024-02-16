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
			<div className="relative top-[500%] -left-[386%] w-[1000%] h-3 bg-hackrpi-primary-light-green rotate-90"></div>
			{/* bottom Blue */}
			<div className="relative bottom-[7%] right-[60%] w-[100%] h-3 bg-hackrpi-primary-blue -rotate-45"></div>
			<div className="absolute -bottom-[40%] -left-[1050%] w-[1000%] h-3 bg-hackrpi-primary-blue "></div>
			{/* Subway Stops */}
			<div className="relative bottom-[118%] right-[7%] w-fit">
				<SubwayStop color="hackrpi-secondary-yellow"></SubwayStop>
			</div>
			<div className="relative bottom-[0%] right-[52%] w-fit">
				<SubwayStop color="hackrpi-primary-blue"></SubwayStop>
			</div>
			<div className="relative bottom-[46%] -right-[106.5%] w-fit">
				<SubwayStop color="hackrpi-primary-light-green"></SubwayStop>
			</div>
		</div>
	);
}
