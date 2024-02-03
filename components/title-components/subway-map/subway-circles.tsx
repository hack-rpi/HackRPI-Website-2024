import NextImg from "next/image";

export default function SubwayCircles() {
	return (
		<div className="w-64 h-64 sm:h-80 sm:w-80 border-hackrpi-secondary-yellow aspect-square border-[12px] rounded-full flex items-center justify-center">
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
	);
}
