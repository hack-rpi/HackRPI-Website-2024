import NextImg from "next/image";
import SubwayStop from "./subway-stop";

export default function DesktopSubwayMap() {
	return (
		<div className="w-64 h-64 sm:w-80 mx-8 overflow-visible relative my-4">
			<div className="w-64 sm:w-80 border-hackrpi-secondary-yellow aspect-square border-[12px] rounded-full flex items-center justify-center">
				<div className="w-11/12 border-hackrpi-primary-light-green aspect-square border-[12px] rounded-full flex items-center justify-center">
					<div className="w-11/12 border-hackrpi-primary-blue aspect-square square border-[12px] rounded-full flex items-center justify-center">
						<NextImg
							src={"/images/hackrpi-logo.png"}
							className="w-3/4 aspect-square"
							width={100}
							height={100}
							alt="HackRPI Logo"
						/>
					</div>
				</div>
			</div>
			{/* Lines */}
			{/* top Yellow */}
			<div className="relative -top-[150%] right-[75%] w-[21rem] h-3 bg-hackrpi-secondary-yellow rotate-45 -z-[5]"></div>
			{/* right Green */}
			<div className="relative -top-[20%] -right-[75%] w-[45%] h-3 bg-hackrpi-primary-light-green rotate-45"></div>
			<div className="relative -top-[5%] left-[110%] w-3 h-[1000px] bg-hackrpi-primary-light-green "></div>
			{/* bottom Blue */}
			<div className="relative bottom-[390%] right-[60%] w-[100%] h-3 bg-hackrpi-primary-blue -rotate-45"></div>
			<div className="relative -top-[350%] right-[315%] w-[270%] h-3 bg-hackrpi-primary-blue "></div>
			{/* Subway Stops */}
			<div className="relative bottom-[542%] right-[10%] w-fit">
				<SubwayStop color="hackrpi-secondary-yellow"></SubwayStop>
			</div>
			<div className="relative bottom-[382%] right-[52%] w-fit">
				<SubwayStop color="hackrpi-primary-blue"></SubwayStop>
			</div>
			<div className="relative bottom-[450%] -right-[104.5%] w-fit">
				<SubwayStop color="hackrpi-primary-light-green"></SubwayStop>
			</div>
		</div>
	);
}
