import NextImg from "next/image";
import hackrpi_logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";

export default function SubwayCircles() {
	return (
		<div className="w-64 h-64 sm:h-80 sm:w-80 border-hackrpi-secondary-yellow aspect-square border-[12px] rounded-full flex items-center justify-center">
			<div className="w-11/12 border-hackrpi-primary-light-green aspect-square border-[12px] rounded-full flex items-center justify-center">
				<div className="w-11/12 border-hackrpi-primary-blue aspect-square square border-[12px] rounded-full flex items-center justify-center">
					<NextImg alt="HackRPI 2024" src={hackrpi_logo} className="w-5/6" />
				</div>
			</div>
		</div>
	);
}
